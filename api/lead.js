const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 8;
const rateBuckets = globalThis.__kpiboardLeadRateBuckets || new Map();
globalThis.__kpiboardLeadRateBuckets = rateBuckets;

const PRODUCTION_ORIGINS = new Set([
  "https://kpiboard.io",
  "https://www.kpiboard.io",
]);

function getRequestOrigin(req) {
  const origin = typeof req.headers.origin === "string" ? req.headers.origin.trim() : "";
  if (!origin) return "";
  try {
    return new URL(origin).origin;
  } catch (_) {
    return "";
  }
}

function isAllowedOrigin(origin) {
  if (PRODUCTION_ORIGINS.has(origin)) return true;
  if (process.env.NODE_ENV !== "production" && /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin)) {
    return true;
  }
  return /^https:\/\/kpiboard-[a-z0-9-]+-maksgamal-3345s-projects\.vercel\.app$/.test(origin);
}

function applyCors(req, res) {
  const origin = getRequestOrigin(req);
  if (origin && isAllowedOrigin(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  return origin;
}

function parseBody(req) {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch (_) {
      return {};
    }
  }
  return req.body && typeof req.body === "object" ? req.body : {};
}

function cleanText(value, maxLength) {
  return typeof value === "string"
    ? value.replace(/\s+/g, " ").trim().slice(0, maxLength)
    : "";
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= 254;
}

function getClientKey(req) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = Array.isArray(forwarded) ? forwarded[0] : String(forwarded || "").split(",")[0];
  return ip.trim() || req.socket?.remoteAddress || "unknown";
}

function isRateLimited(req) {
  const now = Date.now();
  const key = getClientKey(req);
  const current = rateBuckets.get(key);

  if (!current || current.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  rateBuckets.set(key, current);
  return current.count > RATE_LIMIT_MAX;
}

function buildRedirectUrl(origin) {
  if (origin && isAllowedOrigin(origin)) return `${origin}/bi-team/?confirmed=1`;
  return "https://www.kpiboard.io/bi-team/?confirmed=1";
}

module.exports = async function leadHandler(req, res) {
  const origin = applyCors(req, res);

  if (req.method === "OPTIONS") {
    if (!origin || !isAllowedOrigin(origin)) return res.status(403).end();
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  if (origin && !isAllowedOrigin(origin)) {
    return res.status(403).json({ message: "This request origin is not allowed." });
  }

  if (isRateLimited(req)) {
    return res.status(429).json({ message: "Too many attempts. Try again in 15 minutes." });
  }

  const body = parseBody(req);
  const firstName = cleanText(body.firstName, 80);
  const email = cleanText(body.email, 254).toLowerCase();
  const company = cleanText(body.company, 120);
  const challenge = cleanText(body.challenge, 1200);
  const source = cleanText(body.source, 80) || "bi-team-landing";
  const honeypot = cleanText(body.website, 200);

  if (honeypot) {
    return res.status(202).json({ ok: true });
  }

  if (!firstName || !isEmail(email) || body.consent !== true) {
    return res.status(400).json({
      message: "Enter your first name and a valid work email, then confirm email consent.",
    });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LEAD_LIST_ID);
  const templateId = Number(process.env.BREVO_DOI_TEMPLATE_ID);

  if (!apiKey || !Number.isInteger(listId) || !Number.isInteger(templateId)) {
    console.error("Brevo lead capture is missing required server environment variables.");
    return res.status(503).json({
      message: "Email confirmation is temporarily unavailable. Contact hello@kpiboard.io.",
    });
  }

  const attributes = {
    FNAME: firstName,
  };

  if (process.env.BREVO_COMPANY_ATTRIBUTE && company) {
    attributes[process.env.BREVO_COMPANY_ATTRIBUTE] = company;
  }
  if (process.env.BREVO_CHALLENGE_ATTRIBUTE && challenge) {
    attributes[process.env.BREVO_CHALLENGE_ATTRIBUTE] = challenge;
  }
  if (process.env.BREVO_SOURCE_ATTRIBUTE) {
    attributes[process.env.BREVO_SOURCE_ATTRIBUTE] = source;
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes,
        includeListIds: [listId],
        templateId,
        redirectionUrl: buildRedirectUrl(origin),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Brevo DOI request failed.", {
        status: response.status,
        detail: detail.slice(0, 500),
      });
      return res.status(502).json({
        message: "We could not start email confirmation. Try again or contact hello@kpiboard.io.",
      });
    }

    return res.status(202).json({ ok: true, confirmationRequired: true });
  } catch (error) {
    console.error("Brevo DOI request error.", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return res.status(502).json({
      message: "We could not start email confirmation. Try again or contact hello@kpiboard.io.",
    });
  }
};
