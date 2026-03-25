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

function loadGeminiKeyFromEnvLocal() {
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const envLocalPath = path.resolve(scriptDir, "../../env.local");
  return fs
    .readFile(envLocalPath, "utf8")
    .then((envRaw) => envRaw.trim().split("=").slice(1).join("=").trim())
    .catch(() => null);
}

async function ensureApiKey() {
  if (process.env.GEMINI_API_KEY && String(process.env.GEMINI_API_KEY).trim()) {
    return process.env.GEMINI_API_KEY;
  }
  const key = await loadGeminiKeyFromEnvLocal();
  if (key) process.env.GEMINI_API_KEY = key;
  return key;
}

const apiKey = await ensureApiKey();
if (!apiKey) {
  console.error("Missing GEMINI_API_KEY env var (or env.local).");
  process.exit(1);
}

const src = await fs.readFile(inputPath, "utf8");

// Protect code-like blobs so Gemini doesn't try to translate/reshape them.
// This keeps HTML "identical" structure by restoring originals after translation.
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

let protectedHtml = src;
const scriptProt = protectByRegex(protectedHtml, /<script\b[^>]*>[\s\S]*?<\/script>/gi, "SCRIPT");
protectedHtml = scriptProt.out;

const styleProt = protectByRegex(protectedHtml, /<style\b[^>]*>[\s\S]*?<\/style>/gi, "STYLE");
protectedHtml = styleProt.out;

const svgProt = protectByRegex(protectedHtml, /<svg\b[^>]*>[\s\S]*?<\/svg>/gi, "SVG");
protectedHtml = svgProt.out;

const prompt = [
  "Translate the following HTML to Ukrainian.",
  "Rules:",
  "1) Keep HTML structure exactly (tags, attributes, ids, classes).",
  "2) Translate only user-visible text content.",
  "3) Do NOT translate URLs/href/src values, do NOT change attribute names/values other than the visible text.",
  "4) Keep placeholders exactly as-is: __SCRIPT_n__, __STYLE_n__, __SVG_n__.",
  "5) Return only the translated HTML (no markdown).",
  "",
  "HTML:",
  protectedHtml,
].join("\n");

const MODEL_CANDIDATES = ["gemini-flash-latest"];
const API_VERSIONS = ["v1beta"];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

let translated = null;
let lastError = null;

for (const apiVersion of API_VERSIONS) {
  for (const model of MODEL_CANDIDATES) {
    for (let attempt = 0; attempt < 4; attempt++) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/${apiVersion}/models/${model}:generateContent?key=${encodeURIComponent(
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
          lastError = { status: res.status, statusText: res.statusText, attempt };
          await sleep(8000 * (attempt + 1));
          continue;
        }

        if (!res.ok) {
          lastError = { status: res.status, statusText: res.statusText };
          break;
        }

        const data = await res.json();
        translated = data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
        if (translated) break;
      } catch (e) {
        lastError = e;
        await sleep(3000 * (attempt + 1));
      }
    }
    if (translated) break;
  }
  if (translated) break;
}

if (!translated) {
  console.error("Gemini translation failed (no translated HTML).");
  if (lastError) console.error(lastError);
  process.exit(1);
}

// Restore protected blobs.
let out = translated;
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

