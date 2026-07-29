const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { STRIPE_PRICE_IDS, PRICE_MAP } = require('./stripe-prices');
const {
  applyCors,
  getSafeSiteOrigin,
  hasDisallowedOrigin,
  isRateLimited,
} = require('./_request-security');

// Plan names mapping
const PLAN_NAMES = {
  'basic': 'Basic',
  'pro': 'Pro',
  'advanced': 'Advanced',
  'enterprise': 'Enterprise',
};

// Billing cycle names
const BILLING_CYCLES = {
  'monthly': 'Monthly',
  'quarterly': 'Quarterly (10% Off)',
  'annual': 'Annual (30% Off)',
};

module.exports = async (req, res) => {
  const origin = applyCors(req, res, ['GET', 'OPTIONS']);

  if (req.method === 'OPTIONS') {
    if (!origin || hasDisallowedOrigin(req)) return res.status(403).end();
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (hasDisallowedOrigin(req)) {
    return res.status(403).json({ error: 'This request origin is not allowed' });
  }

  if (isRateLimited(req, 'redirect-checkout', 10)) {
    return res.status(429).json({ error: 'Too many checkout attempts. Try again later.' });
  }

  const { plan, billingCycle } = req.query;

  if (!plan || !billingCycle) {
    return res.status(400).json({ error: 'Missing plan or billingCycle' });
  }

  // Validate plan
  const validPlans = ['basic', 'pro', 'advanced', 'enterprise'];
  if (!validPlans.includes(plan)) {
    return res.status(400).json({ error: `Invalid plan: ${plan}. Must be one of: ${validPlans.join(', ')}` });
  }

  // Validate billing cycle
  const validBillingCycles = ['monthly', 'quarterly', 'annual'];
  if (!validBillingCycles.includes(billingCycle)) {
    return res.status(400).json({ error: `Invalid billingCycle: ${billingCycle}. Must be one of: ${validBillingCycles.join(', ')}` });
  }

  const priceKey = `${plan}-${billingCycle}`;
  const priceId = STRIPE_PRICE_IDS[priceKey];
  const amount = PRICE_MAP[priceKey];

  console.log(`Creating checkout session: plan=${plan}, billingCycle=${billingCycle}, priceKey=${priceKey}`);
  console.log(`Price ID: ${priceId || 'not set'}, Amount: ${amount ? `$${(amount / 100).toLocaleString()}` : 'not set'}`);

  if (!amount && !priceId) {
    return res.status(400).json({ error: `Invalid plan or billing cycle combination: ${priceKey}` });
  }

  try {
    // Prepare line items - use Price ID if available, otherwise use price_data
    let lineItems;
    
    if (priceId) {
      // Use existing Price ID from Stripe
      lineItems = [
        {
          price: priceId,
          quantity: 1,
        },
      ];
    } else {
      // Create price dynamically using price_data
      lineItems = [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${PLAN_NAMES[plan]} Plan - ${BILLING_CYCLES[billingCycle]}`,
              description: `KPI Board Business Intelligence Service - ${PLAN_NAMES[plan]} Plan`,
            },
            unit_amount: amount,
            recurring: billingCycle === 'monthly'
              ? { interval: 'month' }
              : billingCycle === 'quarterly'
              ? { interval: 'month', interval_count: 3 }
              : { interval: 'year' },
          },
          quantity: 1,
        },
      ];
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'subscription',
      success_url: `${getSafeSiteOrigin(req)}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${getSafeSiteOrigin(req)}/#Pricing`,
      metadata: {
        plan: plan,
        billingCycle: billingCycle,
      },
    });

    // Redirect to Stripe Checkout
    return res.redirect(302, session.url);
  } catch (error) {
    console.error('Stripe redirect checkout error:', {
      type: error && error.type ? error.type : 'unknown',
      code: error && error.code ? error.code : 'unknown',
    });
    return res.status(500).json({ error: 'Checkout could not be started' });
  }
};

