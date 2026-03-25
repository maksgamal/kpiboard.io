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

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

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

const prompt = [
  "Translate the following HTML to Ukrainian.",
  "Rules:",
  "1) Keep HTML structure exactly (tags, attributes, ids, classes).",
  "2) Translate only user-visible text content.",
  "3) Do NOT translate URLs/href/src values, do NOT change attribute names/values other than visible text.",
  "4) Keep placeholders exactly as-is: __SCRIPT_n__, __STYLE_n__, __SVG_n__.",
  "5) Return only the translated HTML (no markdown).",
  "",
  protectedHtml,
].join("\n");

const model = "gemini-2.5-flash-lite";
const apiVersion = "v1beta";

// One-shot call: should fit in one request quota.
let res = await fetch(
  `https://generativelanguage.googleapis.com/${apiVersion}/models/${model}:generateContent?key=${encodeURIComponent(
    apiKey
  )}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 200000,
      },
    }),
  }
);

if (res.status === 429) {
  const retry = await res.text().catch(() => "");
  console.error("429 received. Body:", retry.slice(0, 4000));
  process.exit(1);
}

if (!res.ok) {
  const txt = await res.text().catch(() => "");
  console.error(`Gemini failed status=${res.status} ${res.statusText}`);
  console.error(txt.slice(0, 4000));
  process.exit(1);
}

const data = await res.json();
const translated = data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
if (!translated) {
  console.error("Gemini response did not include translated HTML.");
  process.exit(1);
}

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

out = out.replace(/<html\b([^>]*)\blang="en"([^>]*)>/i, (m, a, b) => `<html${a}lang="uk"${b}>`);
out = out.replace(/<html\b([^>]*)\blang='en'([^>]*)>/i, (m, a, b) => `<html${a}lang="uk"${b}>`);

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, out, "utf8");

console.log(`Wrote: ${outputPath}`);

