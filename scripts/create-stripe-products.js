// Script to create Stripe products and prices
// Run with: node scripts/create-stripe-products.js

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PLANS = {
  basic: {
    name: 'Basic Plan',
    description: 'For small businesses that need essential analytics, but without mobile dashboard support or advanced features.',
    monthly: 300000,    // $3,000/month
    quarterly: 810000,  // $2,700/month * 3 = $8,100 per quarter (10% off)
    annual: 2520000,    // $2,100/month * 12 = $25,200 per year (30% off)
  },
  pro: {
    name: 'Pro Plan',
    description: 'For growing companies that need custom dashboards, AI-driven insights, automation, and mobile reporting.',
    monthly: 550000,    // $5,500/month
    quarterly: 1485000, // $4,950/month * 3 = $14,850 per quarter (10% off)
    annual: 4620000,    // $3,850/month * 12 = $46,200 per year (30% off)
  },
  advanced: {
    name: 'Advanced Plan',
    description: 'Suited for large enterprises needing fully tailored dashboards, advanced AI insights, and priority support.',
    monthly: 1000000,   // $10,000/month
    quarterly: 2700000, // $9,000/month * 3 = $27,000 per quarter (10% off)
    annual: 8400000,    // $7,000/month * 12 = $84,000 per year (30% off)
  },
  enterprise: {
    name: 'Enterprise Plan',
    description: 'Complete BI service, with real-time analytics, AI insights, a dedicated BI consultant, and enterprise-level security.',
    monthly: 2000000,   // $20,000/month
    quarterly: 5400000, // $18,000/month * 3 = $54,000 per quarter (10% off)
    annual: 16800000,   // $14,000/month * 12 = $168,000 per year (30% off)
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
      const displayAmount = interval.amount / 100;
      const displayText = interval.key === 'monthly' 
        ? `$${displayAmount}/month`
        : interval.key === 'quarterly'
        ? `$${displayAmount} per quarter ($${displayAmount / 3}/month)`
        : `$${displayAmount} per year ($${displayAmount / 12}/month)`;
      console.log(`  Price created (${interval.key}): ${price.id} - ${displayText}`);
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

