const { STRIPE_PRICE_IDS, PRICE_MAP } = require('./stripe-prices');

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return null;
  }
  return require('stripe')(key);
}

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
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
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

  const { plan, billingCycle, promotionCode } = parsedBody;

  if (!plan || !billingCycle) {
    return res.status(400).json({ error: 'Missing plan or billingCycle' });
  }

  const priceKey = `${plan}-${billingCycle}`;
  const priceId = STRIPE_PRICE_IDS[priceKey];
  const amount = PRICE_MAP[priceKey];

  if (!amount && !priceId) {
    return res.status(400).json({ error: 'Invalid plan or billing cycle' });
  }

  try {
    const protocol =
      req.headers['x-forwarded-proto'] ||
      (req.headers.host && req.headers.host.includes('localhost') ? 'http' : 'https');
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const origin = req.headers.origin || (host ? `${protocol}://${host}` : 'https://kpiboard.io');

    let discounts = [];
    if (promotionCode && typeof promotionCode === 'string') {
      // Attempt to find matching promotion code in Stripe.
      // If it's not found, we still allow customer to apply a promotion code manually (see allow_promotion_codes).
      const promoList = await stripe.promotionCodes.list({
        code: promotionCode.trim(),
        active: true,
        limit: 1,
      });

      if (promoList && promoList.data && promoList.data.length > 0) {
        const promo = promoList.data[0];
        discounts = [{ promotion_code: promo.id }];
      }
    }

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

    // Stripe: you cannot set both `discounts` and `allow_promotion_codes` on the same session.
    // - With pre-applied promotion → discounts only, no promo field on checkout.
    // - Without pre-applied discount → customer can enter a code on Checkout.
    const sessionOptions = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'subscription',
      allow_promotion_codes: discounts.length === 0,
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#Pricing`,
      metadata: {
        plan: plan,
        billingCycle: billingCycle,
        ...(promotionCode ? { promotionCode: promotionCode } : {}),
      },
    };

    if (discounts.length > 0) {
      sessionOptions.discounts = discounts;
    }

    const session = await stripe.checkout.sessions.create(sessionOptions);

    return res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return res.status(500).json({ error: error.message, message: error.message });
  }
}

