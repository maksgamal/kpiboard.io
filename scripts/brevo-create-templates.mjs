import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const applyChanges = process.argv.includes("--apply");
const automation = JSON.parse(
  await fs.readFile(path.join(root, "outreach", "brevo-automation.json"), "utf8")
);

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

function renderBody(body) {
  return body
    .split(/\n{2,}/)
    .map((block) => `<p style="margin:0 0 18px;">${escapeHtml(block).replaceAll("\n", "<br>")}</p>`)
    .join("");
}

function renderTemplate(email) {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#f2f5ff;color:#252329;font-family:Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;">${escapeHtml(email.previewText)}</div>
  <div style="max-width:620px;margin:0 auto;padding:36px 20px;">
    <div style="background:#fff;border-radius:28px;padding:30px;border:1px solid #e3e4ef;">
      <div style="font-weight:800;font-size:20px;margin-bottom:28px;">KPI<span style="color:#ffbd24;">BOARD</span></div>
      <div style="font-size:16px;line-height:1.65;">${renderBody(email.body)}</div>
      <p style="margin:28px 0;">
        <a href="${escapeHtml(email.cta.url)}" style="display:inline-block;background:#ffbd24;color:#17151a;padding:14px 20px;border-radius:999px;text-decoration:none;font-weight:700;">
          ${escapeHtml(email.cta.label)}
        </a>
      </p>
      <p style="color:#777;font-size:12px;line-height:1.5;">KPIBoard · You received this after explicitly opting in. {{ unsubscribe }}</p>
    </div>
  </div>
</body>
</html>`;
}

async function request(apiKey, body) {
  const response = await fetch("https://api.brevo.com/v3/smtp/templates", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(body),
  });
  const raw = await response.text();
  const data = raw ? JSON.parse(raw) : {};
  if (!response.ok) throw new Error(`Brevo ${response.status}: ${data.message || raw}`);
  return data;
}

if (automation.language !== "en") throw new Error("Templates must remain English.");
if (automation.optInNurture.syncToBrevo !== true) throw new Error("Nurture sync is disabled.");
if (automation.icpColdOutreachLibrary.syncToBrevo !== false) {
  throw new Error("Cold outreach must remain excluded from Brevo.");
}

const senderEmail =
  process.env.BREVO_SENDER_EMAIL?.trim() ||
  (applyChanges ? requiredEnv("BREVO_SENDER_EMAIL") : "verified-sender@example.com");
const senderName = process.env.BREVO_SENDER_NAME?.trim() || automation.defaults.senderName;
const replyTo = process.env.BREVO_REPLY_TO_EMAIL?.trim() || senderEmail;

const templates = automation.optInNurture.emails.map((email) => ({
  sender: { name: senderName, email: senderEmail },
  subject: email.subjectOptions[0],
  templateName: `KPIBoard | BI Team Nurture | Day ${String(email.day).padStart(2, "0")} | ${email.id}`,
  htmlContent: renderTemplate(email),
  replyTo,
  tag: "kpiboard-bi-team-nurture",
  isActive: false,
}));

console.log(`Prepared ${templates.length} inactive English Brevo templates.`);
console.log("Cold outreach templates: excluded.");

if (!applyChanges) {
  for (const template of templates) console.log(`[dry-run] ${template.templateName}`);
  console.log("No Brevo data changed.");
  process.exit(0);
}

const apiKey = requiredEnv("BREVO_API_KEY");
const created = [];
for (const template of templates) {
  const result = await request(apiKey, template);
  created.push({ id: result.id, name: template.templateName });
  console.log(`Created inactive template ${result.id}: ${template.templateName}`);
}

await fs.writeFile(
  path.join(root, "outreach", "brevo-created-templates.local.json"),
  `${JSON.stringify({ createdAt: new Date().toISOString(), templates: created }, null, 2)}\n`,
  "utf8"
);
console.log(`Created ${created.length} inactive templates. Nothing was sent or activated.`);
