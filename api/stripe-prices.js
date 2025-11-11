// Stripe Price IDs configuration
// After creating products in Stripe, update this file with actual Price IDs

const STRIPE_PRICE_IDS = {
  // Monthly prices
  'basic-monthly': null,      // Replace with price_xxx after creating in Stripe
  'pro-monthly': null,        // Replace with price_xxx after creating in Stripe
  'advanced-monthly': null,   // Replace with price_xxx after creating in Stripe
  'enterprise-monthly': null, // Replace with price_xxx after creating in Stripe
  
  // Quarterly prices
  'basic-quarterly': null,     // Replace with price_xxx after creating in Stripe
  'pro-quarterly': null,       // Replace with price_xxx after creating in Stripe
  'advanced-quarterly': null,  // Replace with price_xxx after creating in Stripe
  'enterprise-quarterly': null, // Replace with price_xxx after creating in Stripe
  
  // Annual prices
  'basic-annual': null,        // Replace with price_xxx after creating in Stripe
  'pro-annual': null,          // Replace with price_xxx after creating in Stripe
  'advanced-annual': null,     // Replace with price_xxx after creating in Stripe
  'enterprise-annual': null,   // Replace with price_xxx after creating in Stripe
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

