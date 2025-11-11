// Script to create Stripe products and prices
// Run with: node scripts/create-stripe-products.js

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PLANS = {
  basic: {
    name: 'Basic Plan',
    description: 'For small businesses that need essential analytics, but without mobile dashboard support or advanced features.',
    monthly: 300000,    // $3,000
    quarterly: 270000,  // $2,700 (10% off)
    annual: 210000,     // $2,100 (30% off)
  },
  pro: {
    name: 'Pro Plan',
    description: 'For growing companies that need custom dashboards, AI-driven insights, automation, and mobile reporting.',
    monthly: 550000,    // $5,500
    quarterly: 495000,  // $4,950 (10% off)
    annual: 385000,     // $3,850 (30% off)
  },
  advanced: {
    name: 'Advanced Plan',
    description: 'Suited for large enterprises needing fully tailored dashboards, advanced AI insights, and priority support.',
    monthly: 1000000,   // $10,000
    quarterly: 900000,  // $9,000 (10% off)
    annual: 700000,     // $7,000 (30% off)
  },
  enterprise: {
    name: 'Enterprise Plan',
    description: 'Complete BI service, with real-time analytics, AI insights, a dedicated BI consultant, and enterprise-level security.',
    monthly: 2000000,   // $20,000
    quarterly: 1800000, // $18,000 (10% off)
    annual: 1400000,    // $14,000 (30% off)
  },
};

async function createProducts() {
  console.log('Creating Stripe products and prices...\n');
  
  const products = {};
  
  for (const [planKey, planData] of Object.entries(PLANS)) {
    console.log(`Creating product: ${planData.name}`);
    
    // Create product
    const product = await stripe.products.create({
      name: planData.name,
      description: planData.description,
      metadata: {
        plan: planKey,
      },
    });
    
    products[planKey] = { product, prices: {} };
    console.log(`  Product created: ${product.id}\n`);
    
    // Create prices
    const intervals = [
      { key: 'monthly', amount: planData.monthly, interval: 'month', interval_count: 1 },
      { key: 'quarterly', amount: planData.quarterly, interval: 'month', interval_count: 3 },
      { key: 'annual', amount: planData.annual, interval: 'year', interval_count: 1 },
    ];
    
    for (const interval of intervals) {
      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: interval.amount,
        currency: 'usd',
        recurring: {
          interval: interval.interval,
          interval_count: interval.interval_count,
        },
        metadata: {
          plan: planKey,
          billingCycle: interval.key,
        },
      });
      
      products[planKey].prices[interval.key] = price;
      console.log(`  Price created (${interval.key}): ${price.id} - $${interval.amount / 100}/mo`);
    }
    
    console.log('');
  }
  
  console.log('\n✅ All products and prices created successfully!\n');
  console.log('Product IDs:');
  for (const [planKey, data] of Object.entries(products)) {
    console.log(`  ${planKey}: ${data.product.id}`);
    console.log(`    Monthly: ${data.prices.monthly.id}`);
    console.log(`    Quarterly: ${data.prices.quarterly.id}`);
    console.log(`    Annual: ${data.prices.annual.id}`);
  }
  
  return products;
}

// Run the script
createProducts().catch(console.error);

