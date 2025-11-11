// API endpoint to clean up duplicate Stripe products
// Keeps only products that are used in api/stripe-prices.js
// Call: https://your-domain.vercel.app/api/cleanup-duplicates

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { STRIPE_PRICE_IDS } = require('./stripe-prices');

const PLANS = {
  basic: 'Basic Plan',
  pro: 'Pro Plan',
  advanced: 'Advanced Plan',
  enterprise: 'Enterprise Plan',
};

async function cleanupDuplicates() {
  const usedPriceIds = new Set(Object.values(STRIPE_PRICE_IDS));
  const productsToKeep = new Set();
  const productsToDelete = [];
  
  console.log('Used Price IDs:', Array.from(usedPriceIds));
  
  // Get all products
  const allProducts = await stripe.products.list({
    limit: 100,
  });
  
  console.log(`Found ${allProducts.data.length} total products`);
  
  // Group products by plan name
  const productsByPlan = {};
  for (const product of allProducts.data) {
    const planKey = Object.keys(PLANS).find(
      key => PLANS[key] === product.name
    );
    
    if (planKey) {
      if (!productsByPlan[planKey]) {
        productsByPlan[planKey] = [];
      }
      productsByPlan[planKey].push(product);
    }
  }
  
  // For each plan, find which product to keep (the one with used Price IDs)
  for (const [planKey, products] of Object.entries(productsByPlan)) {
    if (products.length === 0) continue;
    
    console.log(`\nProcessing ${planKey}: ${products.length} products found`);
    
    // Find the product that has the used Price IDs
    let productToKeep = null;
    let maxMatchingPrices = 0;
    
    for (const product of products) {
      // Get all prices for this product
      const prices = await stripe.prices.list({
        product: product.id,
        limit: 100,
      });
      
      const priceIds = prices.data.map(p => p.id);
      const matchingPrices = priceIds.filter(id => usedPriceIds.has(id)).length;
      
      console.log(`  Product ${product.id}: ${matchingPrices} matching prices`);
      
      if (matchingPrices > maxMatchingPrices) {
        maxMatchingPrices = matchingPrices;
        productToKeep = product;
      }
    }
    
    if (productToKeep) {
      console.log(`  ✅ Keeping product: ${productToKeep.id}`);
      productsToKeep.add(productToKeep.id);
      
      // Mark others for deletion
      for (const product of products) {
        if (product.id !== productToKeep.id) {
          productsToDelete.push(product);
          console.log(`  ❌ Marking for deletion: ${product.id}`);
        }
      }
    } else {
      // If no product matches, keep the newest one
      const newestProduct = products.sort((a, b) => 
        new Date(b.created) - new Date(a.created)
      )[0];
      console.log(`  ✅ Keeping newest product (no matches): ${newestProduct.id}`);
      productsToKeep.add(newestProduct.id);
      
      for (const product of products) {
        if (product.id !== newestProduct.id) {
          productsToDelete.push(product);
          console.log(`  ❌ Marking for deletion: ${product.id}`);
        }
      }
    }
  }
  
  // Delete duplicate products
  const deletedProducts = [];
  const errors = [];
  
  for (const product of productsToDelete) {
    try {
      // Archive the product first (safer than deleting)
      await stripe.products.update(product.id, {
        active: false,
      });
      
      // Then delete it
      await stripe.products.del(product.id);
      deletedProducts.push({
        id: product.id,
        name: product.name,
      });
      console.log(`✅ Deleted product: ${product.id} (${product.name})`);
    } catch (error) {
      errors.push({
        productId: product.id,
        productName: product.name,
        error: error.message,
      });
      console.error(`❌ Error deleting product ${product.id}:`, error.message);
    }
  }
  
  return {
    totalProducts: allProducts.data.length,
    productsToKeep: Array.from(productsToKeep),
    deletedProducts,
    errors,
  };
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
    console.log('Cleaning up duplicate products...');
    
    const result = await cleanupDuplicates();
    
    return res.status(200).json({
      success: true,
      message: `Cleanup completed! Deleted ${result.deletedProducts.length} duplicate products.`,
      summary: {
        totalProducts: result.totalProducts,
        productsKept: result.productsToKeep.length,
        productsDeleted: result.deletedProducts.length,
        errors: result.errors.length,
      },
      productsKept: result.productsToKeep,
      deletedProducts: result.deletedProducts,
      errors: result.errors.length > 0 ? result.errors : undefined,
    });
  } catch (error) {
    console.error('Error cleaning up duplicates:', error);
    return res.status(500).json({ 
      error: error.message,
      details: error.stack,
    });
  }
};

