const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { STRIPE_PRICE_IDS, PRICE_MAP } = require('./stripe-prices');

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

  const { plan, billingCycle } = req.body;

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
      success_url: `${req.headers.origin}/thankyou?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/#Pricing`,
      metadata: {
        plan: plan,
        billingCycle: billingCycle,
      },
    });

    return res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return res.status(500).json({ error: error.message });
  }
}

