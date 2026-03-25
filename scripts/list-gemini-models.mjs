import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const envLocalPath = path.resolve(scriptDir, "../../env.local");

const envRaw = fs.readFileSync(envLocalPath, "utf8").trim();
const apiKey = envRaw.split("=").slice(1).join("=").trim();
if (!apiKey) {
  console.error("Missing GEMINI_API_KEY in env.local");
  process.exit(1);
}

const API_VERSIONS = ["v1beta", "v1"];
for (const apiVersion of API_VERSIONS) {
  const url = `https://generativelanguage.googleapis.com/${apiVersion}/models?key=${encodeURIComponent(apiKey)}`;
  console.log(`--- ${apiVersion} models ---`);
  const res = await fetch(url);
  console.log("status:", res.status, res.statusText);
  const data = await res.json().catch(() => ({}));
  const models = data.models || [];
  console.log("models count:", models.length);

  const names = models
    .map((m) => m.name || m.id || "")
    .filter(Boolean)
    .slice(0, 40);

  for (const n of names) console.log(n);
}

