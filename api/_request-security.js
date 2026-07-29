const PRODUCTION_ORIGINS = new Set([
  "https://kpiboard.io",
  "https://www.kpiboard.io",
]);

const requestBuckets = globalThis.__kpiboardApiRateBuckets || new Map();
globalThis.__kpiboardApiRateBuckets = requestBuckets;

function normalizeOrigin(value) {
  if (typeof value !== "string" || !value.trim()) return "";
  try {
    return new URL(value.trim()).origin;
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

function getRequestOrigin(req) {
  return normalizeOrigin(req.headers.origin);
}

function getSafeSiteOrigin(req) {
  const origin = getRequestOrigin(req);
  return isAllowedOrigin(origin) ? origin : "https://www.kpiboard.io";
}

function applyCors(req, res, methods) {
  const origin = getRequestOrigin(req);
  if (isAllowedOrigin(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", methods.join(", "));
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  return origin;
}

function hasDisallowedOrigin(req) {
  const rawOrigin = typeof req.headers.origin === "string" ? req.headers.origin.trim() : "";
  return Boolean(rawOrigin) && !isAllowedOrigin(getRequestOrigin(req));
}

function getClientKey(req) {
  const forwarded = req.headers["x-forwarded-for"];
  const value = Array.isArray(forwarded) ? forwarded[0] : String(forwarded || "").split(",")[0];
  return value.trim() || req.socket?.remoteAddress || "unknown";
}

function isRateLimited(req, namespace, limit = 12, windowMs = 15 * 60 * 1000) {
  const now = Date.now();
  const key = `${namespace}:${getClientKey(req)}`;
  const current = requestBuckets.get(key);

  if (!current || current.resetAt <= now) {
    requestBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  requestBuckets.set(key, current);
  return current.count > limit;
}

module.exports = {
  applyCors,
  getSafeSiteOrigin,
  hasDisallowedOrigin,
  isAllowedOrigin,
  isRateLimited,
};
