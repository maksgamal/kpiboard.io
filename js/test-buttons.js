// Test script to verify button configuration and prices
(function() {
  function testButtons() {
    console.log('=== Testing Pricing Buttons ===');
    
    const pricingSection = document.getElementById('Pricing') || document.querySelector('.section_pricing-home');
    if (!pricingSection) {
      console.error('❌ Pricing section not found');
      return;
    }
    
    console.log('✅ Pricing section found');
    
    // Find all tabs
    const tabs = pricingSection.querySelectorAll('.w-tab-pane');
    console.log(`Found ${tabs.length} tabs`);
    
    const expectedPrices = {
      monthly: {
        basic: 300000,      // $3,000
        pro: 550000,        // $5,500
        advanced: 1000000,  // $10,000
        enterprise: 2000000, // $20,000
      },
      quarterly: {
        basic: 810000,      // $8,100
        pro: 1485000,       // $14,850
        advanced: 2700000,  // $27,000
        enterprise: 5400000, // $54,000
      },
      annual: {
        basic: 2520000,     // $25,200
        pro: 4620000,       // $46,200
        advanced: 8400000,  // $84,000
        enterprise: 16800000, // $168,000
      },
    };
    
    tabs.forEach((tab, tabIndex) => {
      // Determine billing cycle
      let billingCycle = 'monthly';
      const tabContent = tab.textContent || '';
      if (tabContent.includes('Quarterly') || tabContent.includes('10%')) {
        billingCycle = 'quarterly';
      } else if (tabContent.includes('Annual') || tabContent.includes('30%')) {
        billingCycle = 'annual';
      }
      
      console.log(`\n--- Tab ${tabIndex + 1}: ${billingCycle.toUpperCase()} ---`);
      
      // Find all Buy subscription buttons
      const buttons = tab.querySelectorAll('a[href*="redirect-to-checkout"], a[data-replaced="true"]');
      console.log(`Found ${buttons.length} Buy subscription buttons`);
      
      buttons.forEach((button, buttonIndex) => {
        const href = button.getAttribute('href') || '';
        const url = new URL(href, window.location.origin);
        const plan = url.searchParams.get('plan');
        const billing = url.searchParams.get('billingCycle');
        
        console.log(`\nButton ${buttonIndex + 1}:`);
        console.log(`  Plan: ${plan}`);
        console.log(`  Billing: ${billing}`);
        console.log(`  URL: ${href}`);
        
        if (plan && billing) {
          const expectedPrice = expectedPrices[billing]?.[plan];
          if (expectedPrice) {
            const priceInDollars = expectedPrice / 100;
            console.log(`  ✅ Expected price: $${priceInDollars.toLocaleString()}`);
          } else {
            console.log(`  ⚠️  No expected price found for ${plan}-${billing}`);
          }
        } else {
          console.log(`  ❌ Missing plan or billingCycle in URL`);
        }
      });
    });
    
    // Also check summary buttons
    const summaryButtons = pricingSection.querySelectorAll('a[href*="redirect-to-checkout"]:not(.w-tab-pane a)');
    if (summaryButtons.length > 0) {
      console.log(`\n--- Summary Buttons (${summaryButtons.length}) ---`);
      summaryButtons.forEach((button, index) => {
        const href = button.getAttribute('href') || '';
        const url = new URL(href, window.location.origin);
        const plan = url.searchParams.get('plan');
        const billing = url.searchParams.get('billingCycle');
        console.log(`Summary Button ${index + 1}: ${plan} - ${billing}`);
      });
    }
    
    console.log('\n=== Test Complete ===');
  }
  
  // Run test after page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', testButtons);
  } else {
    testButtons();
  }
  
  setTimeout(testButtons, 2000);
  setTimeout(testButtons, 5000);
})();

