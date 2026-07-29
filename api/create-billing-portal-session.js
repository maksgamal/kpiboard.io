const { applyCors, hasDisallowedOrigin } = require("./_request-security");

/**
 * Deprecated for security.
 *
 * The old endpoint accepted an unauthenticated Stripe customer or Checkout Session ID and
 * exchanged it for a Billing Portal session. KPIBoard now uses Stripe's hosted customer portal
 * login URL, which verifies the customer's email before granting account access.
 */
module.exports = async function deprecatedBillingPortalHandler(req, res) {
  const origin = applyCors(req, res, ["POST", "OPTIONS"]);

  if (req.method === "OPTIONS") {
    if (!origin || hasDisallowedOrigin(req)) return res.status(403).end();
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  if (hasDisallowedOrigin(req)) {
    return res.status(403).json({ message: "This request origin is not allowed." });
  }

  return res.status(410).json({
    message: "Use the secure Stripe customer portal login link on the payment confirmation page.",
  });
};
