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

// Load GEMINI_API_KEY from local env file (if present).
// This project keeps secrets in `../env.local` at the repo root.
if (!process.env.GEMINI_API_KEY) {
  try {
    // scripts/translate-ua-with-gemini.mjs -> kpiboard.io/scripts/
    // Need to reach repo root: kpiboard_io/env.local
    const scriptDir = path.dirname(fileURLToPath(import.meta.url));
    const envLocalPath = path.resolve(scriptDir, "../../env.local");
    const envTxt = await fs.readFile(envLocalPath, "utf8");
    for (const line of envTxt.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const value = trimmed.slice(eqIdx + 1).trim();
      if (key && value && key === "GEMINI_API_KEY") process.env.GEMINI_API_KEY = value;
    }
  } catch {
    // ignore if env.local does not exist
  }
}

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Missing GEMINI_API_KEY env var.");
  console.error("Example:");
  console.error("  set GEMINI_API_KEY=YOUR_KEY");
  console.error("  node scripts/translate-ua-with-gemini.mjs --in index.html --out ua/index.html");
  process.exit(1);
}

const src = await fs.readFile(inputPath, "utf8");

// Using "translate everything" keeps the task simple.
// The model must preserve HTML tags/attributes and not touch code snippets/URLs.
const prompt = [
  "Translate the following HTML to Ukrainian.",
  "Rules:",
  "1) Keep the HTML structure exactly (tags, attributes, class names, ids).",
  "2) Translate only user-facing text (including headings, paragraphs, button labels, form labels, aria-label values).",
  "3) Do NOT translate URLs, href/src values, script/style contents, and do NOT modify inline JS logic.",
  "4) Do NOT translate code samples/JSON fragments inside the HTML.",
  "5) Preserve currency numbers (e.g., $2,995) and formatting; translate only surrounding words if any.",
  "6) Return only the translated HTML (no markdown, no explanations).",
  "",
  "HTML:",
  src,
].join("\n");

const MODEL_CANDIDATES = [
  // Based on `list-gemini-models.mjs` output for this API key.
  "gemini-flash-latest",
  "gemini-pro-latest",
  "gemini-2.5-flash",
  "gemini-2.5-pro",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
];

const API_VERSIONS = ["v1beta", "v1"];

let translated = null;
let lastError = null;

for (const apiVersion of API_VERSIONS) {
  for (const model of MODEL_CANDIDATES) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/${apiVersion}/models/${model}:generateContent?key=${encodeURIComponent(
          apiKey
        )}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        lastError = { status: res.status, statusText: res.statusText, txt };

        // If model isn't supported in this API version, try next candidate.
        if (res.status === 404 && /models\/.*:generateContent|models\/.*:generateContent|not found/i.test(txt)) {
          continue;
        }
        // Some 404 responses are generic; still try other models first.
        if (res.status === 404) continue;

        throw new Error(`Gemini request failed: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      translated = data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
      if (translated) break;
    } catch (err) {
      lastError = err;
      // try next model/candidate
    }
  }
  if (translated) break;
}

if (!translated) {
  console.error("Gemini response did not include translated HTML.");
  if (lastError) {
    const msg =
      typeof lastError === "object"
        ? JSON.stringify(lastError).slice(0, 2000)
        : String(lastError).slice(0, 2000);
    console.error(msg);
  }
  process.exit(1);
}

await fs.mkdir(outputPath.split("/").slice(0, -1).join("/"), { recursive: true });
await fs.writeFile(outputPath, translated, "utf8");

console.log(`Wrote: ${outputPath}`);

