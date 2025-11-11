const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Price mapping for all plans and billing cycles
const PRICE_MAP = {
  // Monthly prices (in cents)
  'basic-monthly': 300000,      // $3,000
  'pro-monthly': 550000,        // $5,500
  'advanced-monthly': 1000000,  // $10,000
  'enterprise-monthly': 2000000, // $20,000
  
  // Quarterly prices (10% discount, in cents)
  'basic-quarterly': 270000,     // $2,700
  'pro-quarterly': 495000,       // $4,950
  'advanced-quarterly': 900000,  // $9,000
  'enterprise-quarterly': 1800000, // $18,000
  
  // Annual prices (30% discount, in cents)
  'basic-annual': 210000,        // $2,100
  'pro-annual': 385000,          // $3,850
  'advanced-annual': 700000,     // $7,000
  'enterprise-annual': 1400000,  // $14,000
};

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
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { plan, billingCycle } = req.query;

  if (!plan || !billingCycle) {
    return res.status(400).json({ error: 'Missing plan or billingCycle' });
  }

  const priceKey = `${plan}-${billingCycle}`;
  const amount = PRICE_MAP[priceKey];

  if (!amount) {
    return res.status(400).json({ error: 'Invalid plan or billing cycle' });
  }

  try {
    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
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
      ],
      mode: 'subscription',
      success_url: `${req.headers.origin || 'https://www.kpiboard.io'}/thankyou?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || 'https://www.kpiboard.io'}/#Pricing`,
      metadata: {
        plan: plan,
        billingCycle: billingCycle,
      },
    });

    // Redirect to Stripe Checkout
    return res.redirect(302, session.url);
  } catch (error) {
    console.error('Stripe error:', error);
    return res.status(500).json({ error: error.message });
  }
};

