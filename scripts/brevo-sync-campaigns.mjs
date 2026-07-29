import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const configPath = path.join(projectRoot, "outreach", "brevo-automation.json");
const applyChanges = process.argv.includes("--apply");

function requiredEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderBody(text) {
  return text
    .split(/\n{2,}/)
    .map((block) => {
      const lines = block.split("\n");
      if (lines.every((line) => line.startsWith("• "))) {
        return `<ul>${lines
          .map((line) => `<li>${escapeHtml(line.slice(2))}</li>`)
          .join("")}</ul>`;
      }
      return `<p>${lines.map(escapeHtml).join("<br>")}</p>`;
    })
    .join("\n");
}

function withUtm(url, campaignId) {
  const target = new URL(url);
  target.searchParams.set("utm_source", "brevo");
  target.searchParams.set("utm_medium", "email");
  target.searchParams.set("utm_campaign", `bi_team_nurture_${campaignId}`);
  return target.toString();
}

function buildCampaignHtml(email) {
  const ctaUrl = withUtm(email.cta.url, email.id);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body style="margin:0;background:#f3f6f2;color:#07131f;font-family:Arial,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(email.previewText)}</div>
    <div style="max-width:620px;margin:0 auto;padding:40px 24px;">
      <div style="padding:18px 22px;background:#07131f;color:#ffffff;font-size:18px;font-weight:700;">
        KPI<span style="color:#4de2c5;">BOARD</span>
      </div>
      <div style="padding:30px 22px;background:#ffffff;font-size:15px;line-height:1.65;">
        ${renderBody(email.body)}
        <p style="margin:28px 0;">
          <a href="${escapeHtml(ctaUrl)}" style="display:inline-block;padding:13px 18px;background:#4de2c5;color:#07131f;text-decoration:none;font-weight:700;border-radius:4px;">
            ${escapeHtml(email.cta.label)}
          </a>
        </p>
        <p style="margin-top:28px;color:#66737d;font-size:12px;">
          You received this because you explicitly requested KPIBoard email updates.
          You can unsubscribe using the link in the campaign footer.
        </p>
      </div>
    </div>
  </body>
</html>`;
}

async function brevoRequest(apiKey, endpoint, options = {}) {
  const response = await fetch(`https://api.brevo.com/v3${endpoint}`, {
    ...options,
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });

  const raw = await response.text();
  const data = raw ? JSON.parse(raw) : {};

  if (!response.ok) {
    throw new Error(`Brevo ${response.status}: ${data.message || raw || "Request failed"}`);
  }

  return data;
}

const config = JSON.parse(await fs.readFile(configPath, "utf8"));

if (config.language !== "en") {
  throw new Error("Only the English automation configuration can be synchronized.");
}
if (config.optInNurture?.syncToBrevo !== true) {
  throw new Error("The opt-in nurture sequence is not marked for Brevo synchronization.");
}
if (config.icpColdOutreachLibrary?.syncToBrevo !== false) {
  throw new Error("Safety check failed: the cold outreach library must never sync to Brevo.");
}

const listId = Number(
  process.env.BREVO_NURTURE_LIST_ID?.trim() || (applyChanges ? requiredEnv("BREVO_NURTURE_LIST_ID") : "1")
);
const senderEmail =
  process.env.BREVO_SENDER_EMAIL?.trim() ||
  (applyChanges ? requiredEnv("BREVO_SENDER_EMAIL") : "verified-sender@example.com");
const replyTo = process.env.BREVO_REPLY_TO_EMAIL?.trim() || senderEmail;
const senderName = process.env.BREVO_SENDER_NAME?.trim() || config.defaults.senderName;

if (!Number.isInteger(listId) || listId <= 0) {
  throw new Error("BREVO_NURTURE_LIST_ID must be a positive integer.");
}

const drafts = config.optInNurture.emails.map((email) => ({
  name: `KPIBoard | BI Team Nurture | Day ${String(email.day).padStart(2, "0")} | ${email.id}`,
  sender: { name: senderName, email: senderEmail },
  replyTo,
  recipients: { listIds: [listId] },
  subject: email.subjectOptions[0],
  previewText: email.previewText,
  htmlContent: buildCampaignHtml(email),
  footer: "[DEFAULT_FOOTER]",
  tag: "kpiboard-bi-team-nurture",
  utmCampaign: `BI Team Nurture ${email.id}`,
  utmContent: email.id,
}));

console.log(`Prepared ${drafts.length} English Brevo campaign drafts.`);
console.log("Cold outreach library: excluded from synchronization.");

if (!applyChanges) {
  for (const draft of drafts) {
    console.log(`[dry-run] ${draft.name} -> list ${listId}`);
  }
  console.log("No Brevo data changed. Re-run with --apply to create drafts only.");
  process.exit(0);
}

const apiKey = requiredEnv("BREVO_API_KEY");
const created = [];

for (const draft of drafts) {
  const result = await brevoRequest(apiKey, "/emailCampaigns", {
    method: "POST",
    body: JSON.stringify(draft),
  });
  created.push({ id: result.id, name: draft.name });
  console.log(`Created draft ${result.id}: ${draft.name}`);
}

const outputPath = path.join(projectRoot, "outreach", "brevo-created-drafts.local.json");
await fs.writeFile(
  outputPath,
  `${JSON.stringify({ createdAt: new Date().toISOString(), campaigns: created }, null, 2)}\n`,
  "utf8"
);

console.log(`Created ${created.length} draft campaigns. Nothing was scheduled or sent.`);
console.log(`Local result written to ${outputPath}`);
