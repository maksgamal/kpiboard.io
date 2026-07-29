import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const errors = [];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) errors.push(message);
}

const automation = JSON.parse(read("outreach/brevo-automation.json"));
assert(automation.language === "en", "Automation language must be English.");
assert(automation.optInNurture.syncToBrevo === true, "Opt-in nurture must be syncable.");
assert(
  automation.icpColdOutreachLibrary.syncToBrevo === false,
  "Cold outreach library must never sync to Brevo."
);
assert(
  automation.icpColdOutreachLibrary.sendingDisabled === true,
  "Cold outreach sending must remain disabled."
);
assert(
  automation.optInNurture.emails.length >= 6,
  "Expected at least six opt-in nurture emails."
);
assert(
  automation.icpColdOutreachLibrary.sequences.length >= 6,
  "Expected at least six ICP outreach sequences."
);

const landing = read("bi-team/index.html");
assert(
  landing.includes('<meta name="robots" content="noindex,nofollow"'),
  "Preview landing must remain noindex until production approval."
);
assert(
  landing.includes("Stop hiring BI specialists."),
  "Landing must include the BI team subscription positioning."
);
assert(landing.includes('id="process"'), "Landing must expose the process anchor.");
for (const rootAssetPath of ['href="/css/', 'src="/js/', 'src="/assets/']) {
  assert(
    landing.includes(rootAssetPath),
    `Cloned landing must use root-relative assets: ${rootAssetPath}`
  );
}

const portalEndpoint = read("api/create-billing-portal-session.js");
assert(
  !portalEndpoint.includes("billingPortal.sessions.create"),
  "Unauthenticated Billing Portal session creation must remain disabled."
);
assert(
  !portalEndpoint.includes("customerId"),
  "The public Billing Portal endpoint must not accept a customer ID."
);

const checkoutEndpoint = read("api/create-checkout-session.js");
assert(
  !checkoutEndpoint.includes("Access-Control-Allow-Origin', '*'"),
  "Stripe Checkout must not use wildcard CORS."
);
assert(
  checkoutEndpoint.includes("getSafeSiteOrigin"),
  "Stripe Checkout redirects must use the trusted origin helper."
);

const paymentSuccess = read("payment-success.html");
assert(
  paymentSuccess.indexOf('url.searchParams.delete("session_id")') <
    paymentSuccess.indexOf("www.googletagmanager.com"),
  "Checkout Session IDs must be removed before analytics loads."
);
assert(
  !paymentSuccess.includes("transaction_id: sid"),
  "Raw Checkout Session IDs must not be sent to analytics."
);

for (const asset of ["bi-team/styles.css", "bi-team/script.js", "api/lead.js"]) {
  assert(fs.existsSync(path.join(root, asset)), `Missing required file: ${asset}`);
}

const secretPatterns = [
  /xkeysib-[a-z0-9_-]{20,}/i,
  /sk_live_[a-z0-9]{20,}/i,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
];

for (const relativePath of [
  "bi-team/index.html",
  "bi-team/script.js",
  "api/lead.js",
  "scripts/brevo-sync-campaigns.mjs",
  "outreach/brevo-automation.json",
]) {
  const content = read(relativePath);
  for (const pattern of secretPatterns) {
    assert(!pattern.test(content), `Potential secret found in ${relativePath}.`);
  }
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const coldEmailCount = automation.icpColdOutreachLibrary.sequences.reduce(
  (sum, sequence) => sum + sequence.emails.length,
  0
);

console.log("Project validation passed.");
console.log(`Opt-in nurture emails: ${automation.optInNurture.emails.length}`);
console.log(`Cold outreach copy drafts: ${coldEmailCount} (sending disabled)`);
console.log("Stripe portal and payment-success safety checks: passed");
