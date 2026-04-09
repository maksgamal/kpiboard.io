function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return require('stripe')(key);
}

function resolveOrigin(req) {
  const protocol =
    req.headers['x-forwarded-proto'] ||
    (req.headers.host && String(req.headers.host).includes('localhost') ? 'http' : 'https');
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return req.headers.origin || (host ? `${protocol}://${host}` : 'https://kpiboard.io');
}

/**
 * Opens Stripe Customer Billing Portal so the customer can manage the subscription
 * and (when enabled in the portal configuration) apply promotion codes.
 *
 * Body: { sessionId?: string, customerId?: string }
 * - Prefer sessionId from thank-you URL (?session_id=cs_...) after Checkout.
 * - Or pass customerId (cus_...) if you already store it.
 *
 * Optional env: STRIPE_BILLING_PORTAL_CONFIGURATION_ID — use a portal config that includes
 * subscription_update with default_allowed_updates containing "promotion_code", or enable
 * "Promotion codes" in Stripe Dashboard → Settings → Billing → Customer portal.
 */
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed', message: 'Method not allowed' });
  }

  const stripe = getStripe();
  if (!stripe) {
    const msg = 'Stripe is not configured (missing STRIPE_SECRET_KEY).';
    return res.status(500).json({ error: msg, message: msg });
  }

  const parsedBody =
    typeof req.body === 'string'
      ? (() => {
          try {
            return JSON.parse(req.body);
          } catch (_) {
            return {};
          }
        })()
      : (req.body || {});

  const { sessionId, customerId } = parsedBody;
  const origin = resolveOrigin(req);

  try {
    let customer = typeof customerId === 'string' ? customerId.trim() : '';

    if (!customer && sessionId && typeof sessionId === 'string') {
      const cs = await stripe.checkout.sessions.retrieve(sessionId.trim());
      const c = cs.customer;
      customer = typeof c === 'string' ? c : c && c.id ? c.id : '';
    }

    if (!customer || !customer.startsWith('cus_')) {
      return res.status(400).json({
        error: 'Missing or invalid customer. Provide customerId (cus_...) or sessionId (cs_...).',
        message: 'Missing or invalid customer. Provide customerId (cus_...) or sessionId (cs_...).',
      });
    }

    const params = {
      customer,
      return_url: `${origin}/payment-success`,
    };

    if (process.env.STRIPE_BILLING_PORTAL_CONFIGURATION_ID) {
      params.configuration = process.env.STRIPE_BILLING_PORTAL_CONFIGURATION_ID;
    }

    const portalSession = await stripe.billingPortal.sessions.create(params);

    return res.status(200).json({ url: portalSession.url });
  } catch (error) {
    console.error('Billing portal error:', error);
    return res.status(500).json({ error: error.message, message: error.message });
  }
};
