import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const getArg = (name) => {
  const idx = args.indexOf(`--${name}`);
  if (idx === -1) return undefined;
  return args[idx + 1];
};

const inputPath = getArg("in") || "index.html";
const outputPath = getArg("out") || "ua/index.html";

async function ensureApiKey() {
  if (process.env.GEMINI_API_KEY && String(process.env.GEMINI_API_KEY).trim()) {
    return process.env.GEMINI_API_KEY;
  }
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const envLocalPath = path.resolve(scriptDir, "../../env.local");
  const envRaw = await fs.readFile(envLocalPath, "utf8").catch(() => "");
  const apiKey = envRaw.trim().split("=").slice(1).join("=").trim();
  if (!apiKey) return null;
  process.env.GEMINI_API_KEY = apiKey;
  return apiKey;
}

function protectByRegex(html, regex, prefix) {
  const items = [];
  const out = html.replace(regex, (match) => {
    const id = items.length;
    const token = `__${prefix}_${id}__`;
    items.push(match);
    return token;
  });
  return { out, items };
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const apiKey = await ensureApiKey();
if (!apiKey) {
  console.error("Missing GEMINI_API_KEY env var (or env.local).");
  process.exit(1);
}

const src = await fs.readFile(inputPath, "utf8");

let protectedHtml = src;
const scriptProt = protectByRegex(protectedHtml, /<script\b[^>]*>[\s\S]*?<\/script>/gi, "SCRIPT");
protectedHtml = scriptProt.out;

const styleProt = protectByRegex(protectedHtml, /<style\b[^>]*>[\s\S]*?<\/style>/gi, "STYLE");
protectedHtml = styleProt.out;

const svgProt = protectByRegex(protectedHtml, /<svg\b[^>]*>[\s\S]*?<\/svg>/gi, "SVG");
protectedHtml = svgProt.out;

// Split by boundaries between tags: '><'
// Keep chunks small so each Gemini call returns quickly.
const MAX_CHARS = 8000; // input chunk size cap
const boundaries = [];
for (let i = 0; i < protectedHtml.length - 1; i++) {
  if (protectedHtml[i] === ">" && protectedHtml[i + 1] === "<") boundaries.push(i + 1);
}
// Fallback: allow hard splits too

function findEnd(start, limit) {
  if (limit >= protectedHtml.length) return protectedHtml.length;
  // find last boundary <= limit
  for (let j = boundaries.length - 1; j >= 0; j--) {
    const b = boundaries[j];
    if (b <= limit && b > start) return b;
  }
  return limit;
}

const chunks = [];
let pos = 0;
while (pos < protectedHtml.length) {
  const endLimit = pos + MAX_CHARS;
  const end = findEnd(pos, endLimit);
  chunks.push(protectedHtml.slice(pos, end));
  pos = end;
}

const MODEL = "gemini-flash-lite-latest";
const API_VERSION = "v1beta";

async function translateChunk(chunk, idx, total) {
  const prompt = [
    "Translate the following HTML chunk to Ukrainian.",
    "Rules:",
    "1) Keep HTML structure exactly (tags, attributes, ids, classes).",
    "2) Translate only user-visible text content.",
    "3) Do NOT translate URLs/href/src values, do NOT change attribute names/values other than visible text.",
    "4) Keep placeholders exactly as-is: __SCRIPT_n__, __STYLE_n__, __SVG_n__.",
    "5) Return only the translated HTML chunk (no markdown).",
    "",
    `CHUNK ${idx + 1}/${total}:`,
    chunk,
  ].join("\n");

  for (let attempt = 0; attempt < 10; attempt++) {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/${API_VERSION}/models/${MODEL}:generateContent?key=${encodeURIComponent(
        apiKey
      )}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        }),
      }
    );

    if (res.status === 429) {
      const waitMs = 4000 * (attempt + 1);
      console.log(
        `Chunk ${idx + 1}/${total} attempt ${attempt + 1}: got 429, waiting ${Math.round(waitMs / 1000)}s`
      );
      await sleep(waitMs);
      continue;
    }

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new Error(`Gemini failed status=${res.status} ${res.statusText}. ${txt.slice(0, 600)}`);
    }

    const data = await res.json();
    const t = data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
    if (!t) throw new Error(`Empty translation for chunk ${idx + 1}`);
    return t;
  }

  throw new Error(`Exceeded retries for chunk ${idx + 1}`);
}

console.log(`Chunks: ${chunks.length}`);

const translatedChunks = [];
for (let i = 0; i < chunks.length; i++) {
  console.log(`Translating chunk ${i + 1}/${chunks.length}...`);
  const t = await translateChunk(chunks[i], i, chunks.length);
  console.log(`Done chunk ${i + 1}/${chunks.length}`);
  translatedChunks.push(t);
  // small delay to reduce rate limiting
  await sleep(2000);
}

let out = translatedChunks.join("");

// Restore protected blobs.
for (let i = 0; i < scriptProt.items.length; i++) {
  out = out.split(`__SCRIPT_${i}__`).join(scriptProt.items[i]);
}
for (let i = 0; i < styleProt.items.length; i++) {
  out = out.split(`__STYLE_${i}__`).join(styleProt.items[i]);
}
for (let i = 0; i < svgProt.items.length; i++) {
  out = out.split(`__SVG_${i}__`).join(svgProt.items[i]);
}

// Ensure UA language attribute.
out = out.replace(/<html\b([^>]*)\blang="en"([^>]*)>/i, (m, a, b) => `<html${a}lang="uk"${b}>`);
out = out.replace(/<html\b([^>]*)\blang='en'([^>]*)>/i, (m, a, b) => `<html${a}lang="uk"${b}>`);

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, out, "utf8");

console.log(`Wrote: ${outputPath}`);

