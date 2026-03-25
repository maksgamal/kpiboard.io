import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const envLocalPath = path.resolve(scriptDir, "../../env.local");
const envRaw = fs.readFileSync(envLocalPath, "utf8").trim();
const key = envRaw.split("=").slice(1).join("=").trim();

if (!key) {
  console.error("Missing GEMINI_API_KEY in env.local");
  process.exit(1);
}

const args = process.argv.slice(2);
const model = args[0] || "gemini-2.0-flash-lite";
const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(
  key
)}`;

const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    contents: [{ role: "user", parts: [{ text: "Translate to Ukrainian: Hello" }] }],
  }),
});

console.log("status:", res.status);
const txt = await res.text();
console.log("body (first 500 chars):");
console.log(txt.slice(0, 500));

