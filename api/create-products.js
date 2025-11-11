// API endpoint to create Stripe products and prices
// Call this once after deployment: https://your-domain.vercel.app/api/create-products
// Or use: curl https://your-domain.vercel.app/api/create-products

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fs = require('fs');
const path = require('path');

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

async function findOrCreateProduct(planKey, planData) {
  // First, try to find existing product by name
  const existingProducts = await stripe.products.list({
    limit: 100,
  });
  
  const existingProduct = existingProducts.data.find(
    p => p.name === planData.name && p.metadata?.plan === planKey
  );
  
  if (existingProduct) {
    console.log(`Found existing product: ${planData.name} (${existingProduct.id})`);
    return existingProduct;
  }
  
  // If not found, create new product
  console.log(`Creating new product: ${planData.name}`);
  const product = await stripe.products.create({
    name: planData.name,
    description: planData.description,
    metadata: {
      plan: planKey,
    },
  });
  
  return product;
}

async function findOrCreatePrice(product, planKey, interval, amount) {
  // First, try to find existing price
  const existingPrices = await stripe.prices.list({
    product: product.id,
    limit: 100,
  });
  
  const existingPrice = existingPrices.data.find(
    p => 
      p.unit_amount === amount &&
      p.currency === 'usd' &&
      p.recurring?.interval === interval.interval &&
      p.recurring?.interval_count === interval.interval_count &&
      p.metadata?.plan === planKey &&
      p.metadata?.billingCycle === interval.key
  );
  
  if (existingPrice) {
    console.log(`Found existing price: ${interval.key} (${existingPrice.id})`);
    return existingPrice;
  }
  
  // If not found, create new price
  console.log(`Creating new price: ${interval.key}`);
  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: amount,
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
  
  return price;
}

async function createProducts() {
  const products = {};
  
  for (const [planKey, planData] of Object.entries(PLANS)) {
    // Find or create product
    const product = await findOrCreateProduct(planKey, planData);
    
    products[planKey] = { product, prices: {} };
    
    // Find or create prices
    const intervals = [
      { key: 'monthly', amount: planData.monthly, interval: 'month', interval_count: 1 },
      { key: 'quarterly', amount: planData.quarterly, interval: 'month', interval_count: 3 },
      { key: 'annual', amount: planData.annual, interval: 'year', interval_count: 1 },
    ];
    
    for (const interval of intervals) {
      const price = await findOrCreatePrice(
        product,
        planKey,
        interval,
        interval.amount
      );
      
      products[planKey].prices[interval.key] = price;
    }
  }
  
  return products;
}

function getPriceIds(products) {
  return {
    'basic-monthly': products.basic.prices.monthly.id,
    'pro-monthly': products.pro.prices.monthly.id,
    'advanced-monthly': products.advanced.prices.monthly.id,
    'enterprise-monthly': products.enterprise.prices.monthly.id,
    'basic-quarterly': products.basic.prices.quarterly.id,
    'pro-quarterly': products.pro.prices.quarterly.id,
    'advanced-quarterly': products.advanced.prices.quarterly.id,
    'enterprise-quarterly': products.enterprise.prices.quarterly.id,
    'basic-annual': products.basic.prices.annual.id,
    'pro-annual': products.pro.prices.annual.id,
    'advanced-annual': products.advanced.prices.annual.id,
    'enterprise-annual': products.enterprise.prices.annual.id,
  };
}

function generateUpdatedStripePricesFile(priceIds) {
  return `// Stripe Price IDs configuration
// Auto-generated by /api/create-products endpoint

const STRIPE_PRICE_IDS = {
  // Monthly prices
  'basic-monthly': '${priceIds['basic-monthly']}',
  'pro-monthly': '${priceIds['pro-monthly']}',
  'advanced-monthly': '${priceIds['advanced-monthly']}',
  'enterprise-monthly': '${priceIds['enterprise-monthly']}',
  
  // Quarterly prices
  'basic-quarterly': '${priceIds['basic-quarterly']}',
  'pro-quarterly': '${priceIds['pro-quarterly']}',
  'advanced-quarterly': '${priceIds['advanced-quarterly']}',
  'enterprise-quarterly': '${priceIds['enterprise-quarterly']}',
  
  // Annual prices
  'basic-annual': '${priceIds['basic-annual']}',
  'pro-annual': '${priceIds['pro-annual']}',
  'advanced-annual': '${priceIds['advanced-annual']}',
  'enterprise-annual': '${priceIds['enterprise-annual']}',
};

// Fallback: Price mapping for dynamic creation (if Price IDs not set)
const PRICE_MAP = {
  // Monthly prices (in cents)
  'basic-monthly': 300000,      // $3,000
  'pro-monthly': 550000,        // $5,500
  'advanced-monthly': 1000000,  // $10,000
  'enterprise-monthly': 2000000, // $20,000
  
  // Quarterly prices (10% discount, in cents) - price per quarter
  'basic-quarterly': 810000,     // $2,700/month * 3 = $8,100 per quarter
  'pro-quarterly': 1485000,      // $4,950/month * 3 = $14,850 per quarter
  'advanced-quarterly': 2700000, // $9,000/month * 3 = $27,000 per quarter
  'enterprise-quarterly': 5400000, // $18,000/month * 3 = $54,000 per quarter
  
  // Annual prices (30% discount, in cents) - price per year
  'basic-annual': 2520000,       // $2,100/month * 12 = $25,200 per year
  'pro-annual': 4620000,         // $3,850/month * 12 = $46,200 per year
  'advanced-annual': 8400000,     // $7,000/month * 12 = $84,000 per year
  'enterprise-annual': 16800000, // $14,000/month * 12 = $168,000 per year
};

module.exports = {
  STRIPE_PRICE_IDS,
  PRICE_MAP,
};
`;
}

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET and POST
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if STRIPE_SECRET_KEY is set
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ 
      error: 'STRIPE_SECRET_KEY is not set in Vercel environment variables' 
    });
  }

  try {
    console.log('Finding or creating Stripe products and prices...');
    
    const products = await createProducts();
    const priceIds = getPriceIds(products);
    const updatedFileContent = generateUpdatedStripePricesFile(priceIds);
    
    // Format response
    const response = {
      success: true,
      message: 'Products and prices ready! (Existing products were reused to avoid duplicates)',
      note: 'If you see duplicate products in Stripe Dashboard, you can archive or delete the older ones manually.',
      products: {},
      priceIds: priceIds,
      updatedFile: {
        path: 'api/stripe-prices.js',
        content: updatedFileContent,
        instructions: 'Copy the content above and replace api/stripe-prices.js with it',
      },
    };
    
    // Add product details
    for (const [planKey, data] of Object.entries(products)) {
      response.products[planKey] = {
        productId: data.product.id,
        name: data.product.name,
        prices: {
          monthly: data.prices.monthly.id,
          quarterly: data.prices.quarterly.id,
          annual: data.prices.annual.id,
        },
      };
    }
    
    return res.status(200).json(response);
  } catch (error) {
    console.error('Error creating products:', error);
    return res.status(500).json({ 
      error: error.message,
      details: error.stack,
    });
  }
};

