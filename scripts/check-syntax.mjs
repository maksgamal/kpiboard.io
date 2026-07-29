import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const files = [
  "api/_request-security.js",
  "api/create-billing-portal-session.js",
  "api/create-checkout-session.js",
  "api/lead.js",
  "api/redirect-to-checkout.js",
  "bi-team/script.js",
  "scripts/brevo-sync-campaigns.mjs",
  "scripts/validate-project.mjs",
];

for (const file of files) {
  const absolute = path.join(root, file);
  if (!fs.existsSync(absolute)) {
    console.error(`Missing JavaScript file: ${file}`);
    process.exit(1);
  }
  execFileSync(process.execPath, ["--check", absolute], { stdio: "inherit" });
  console.log(`Syntax OK: ${file}`);
}
