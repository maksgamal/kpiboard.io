// Script to call /api/create-products and update api/stripe-prices.js
// Run with: node scripts/update-prices-from-api.js [url]
// Example: node scripts/update-prices-from-api.js https://kpiboard.io

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const DEFAULT_URL = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}`
  : 'https://www.kpiboard.io';

const apiUrl = process.argv[2] || DEFAULT_URL;
const endpoint = `${apiUrl}/api/create-products`;

console.log(`Calling ${endpoint}...\n`);

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            resolve(data);
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function updatePrices() {
  try {
    const response = await makeRequest(endpoint);
    
    if (!response.success) {
      console.error('❌ Error:', response.error || response.message);
      process.exit(1);
    }
    
    console.log('✅ Products created successfully!\n');
    console.log('Product IDs:');
    for (const [planKey, productData] of Object.entries(response.products)) {
      console.log(`  ${planKey}:`);
      console.log(`    Product: ${productData.productId}`);
      console.log(`    Monthly: ${productData.prices.monthly}`);
      console.log(`    Quarterly: ${productData.prices.quarterly}`);
      console.log(`    Annual: ${productData.prices.annual}`);
    }
    
    // Update stripe-prices.js file
    const pricesFilePath = path.join(__dirname, '..', 'api', 'stripe-prices.js');
    const fileContent = response.updatedFile.content;
    
    fs.writeFileSync(pricesFilePath, fileContent, 'utf8');
    console.log(`\n✅ Updated ${pricesFilePath} with Price IDs`);
    console.log('\n📝 Next steps:');
    console.log('  1. Review the updated api/stripe-prices.js file');
    console.log('  2. Commit and push to GitHub');
    console.log('  3. Deploy to Vercel (or wait for auto-deploy)');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

updatePrices();

