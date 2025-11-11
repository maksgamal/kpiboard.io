// Replace all "Get Started" buttons with "Buy subscription" buttons with direct Stripe links
(function() {
  const replacedButtons = new Set();
  
  // Helper function to determine billing cycle from tab
  function getBillingCycleFromTab(tab) {
    // Check tab link text
    const tabLink = document.querySelector(`.w-tab-link[aria-controls="${tab.id}"]`);
    if (tabLink) {
      const linkText = tabLink.textContent.trim().toLowerCase();
      if (linkText.includes('quarterly') || linkText.includes('quarter')) {
        return 'quarterly';
      } else if (linkText.includes('annual') || linkText.includes('year')) {
        return 'annual';
      }
    }
    
    // Check tab content
    const tabContent = tab.textContent || '';
    if (tabContent.includes('Quarterly') || tabContent.includes('10%') || tabContent.includes('quarter')) {
      return 'quarterly';
    } else if (tabContent.includes('Annual') || tabContent.includes('30%') || tabContent.includes('year')) {
      return 'annual';
    }
    
    // Default to monthly
    return 'monthly';
  }
  
  // Helper function to determine plan from context
  function getPlanFromContext(button) {
    // Try to find parent card/container
    let container = button;
    for (let i = 0; i < 10; i++) {
      container = container.parentElement;
      if (!container) break;
      
      const containerText = (container.textContent || '').toLowerCase();
      const containerClass = (container.className || '').toLowerCase();
      
      // Check for plan names in text or class names
      if (containerText.includes('enterprise') || containerClass.includes('enterprise')) {
        return 'enterprise';
      } else if (containerText.includes('advanced') || containerClass.includes('advanced')) {
        return 'advanced';
      } else if (containerText.includes('professional') || containerText.includes('pro plan') || 
                 containerClass.includes('professional') || containerClass.includes('pro')) {
        return 'pro';
      } else if (containerText.includes('basic') || containerText.includes('starter') || 
                 containerClass.includes('basic') || containerClass.includes('starter')) {
        return 'basic';
      }
      
      // Check for price indicators
      if (containerText.includes('$3,000') || containerText.includes('$2,700') || containerText.includes('$2,100')) {
        return 'basic';
      } else if (containerText.includes('$5,500') || containerText.includes('$4,950') || containerText.includes('$3,850')) {
        return 'pro';
      } else if (containerText.includes('$10,000') || containerText.includes('$9,000') || containerText.includes('$7,000')) {
        return 'advanced';
      } else if (containerText.includes('$20,000') || containerText.includes('$18,000') || containerText.includes('$14,000')) {
        return 'enterprise';
      }
    }
    
    return null;
  }
  
  function replaceButtons() {
    const pricingSection = document.getElementById('Pricing') || document.querySelector('.section_pricing-home');
    if (!pricingSection) {
      console.log('Pricing section not found');
      return;
    }
    
    console.log('Looking for Get Started buttons in pricing section...');
    
    // Find all tabs (Monthly, Quarterly, Annual)
    const tabs = pricingSection.querySelectorAll('.w-tab-pane');
    console.log('Found', tabs.length, 'tabs');
    
    let totalReplaced = 0;
    
    // Process buttons in tabs
    if (tabs.length > 0) {
      tabs.forEach((tab, tabIndex) => {
        // Determine billing cycle from tab
        const billingCycle = getBillingCycleFromTab(tab);
        console.log(`Tab ${tabIndex}: billingCycle = ${billingCycle}`);
        
        // Find all "Get Started" buttons in this tab
        const buttons = tab.querySelectorAll('a, button');
        console.log('Found', buttons.length, 'buttons in tab', tabIndex);
        
        // Get all Get Started buttons to determine order
        const allGetStartedButtons = Array.from(buttons).filter(btn => {
          const text = btn.textContent.trim().toLowerCase();
          return text.includes('get started') && !replacedButtons.has(btn);
        });
        
        console.log('Found', allGetStartedButtons.length, 'Get Started buttons in tab', tabIndex);
        
        allGetStartedButtons.forEach((button, buttonIndex) => {
          if (replacedButtons.has(button)) {
            return; // Already replaced
          }
          
          // Try to determine plan from context first (most reliable)
          let finalPlan = getPlanFromContext(button);
          
          // If not found, use button position as fallback
          if (!finalPlan) {
            const plans = ['basic', 'pro', 'advanced', 'enterprise'];
            finalPlan = plans[buttonIndex % 4] || 'basic';
            console.warn(`Could not determine plan from context for button ${buttonIndex}, using position fallback: ${finalPlan}`);
          }
          
          // Create new button with Stripe link
          const newButton = document.createElement('a');
          const checkoutUrl = `/api/redirect-to-checkout?plan=${finalPlan}&billingCycle=${billingCycle}`;
          newButton.href = checkoutUrl;
          newButton.className = button.className;
          newButton.textContent = 'Buy subscription';
          newButton.style.cssText = button.style.cssText;
          newButton.setAttribute('data-replaced', 'true');
          newButton.setAttribute('data-plan', finalPlan);
          newButton.setAttribute('data-billing', billingCycle);
          
          // Copy all attributes except data-w-id, onclick, and href
          Array.from(button.attributes).forEach(attr => {
            if (attr.name !== 'data-w-id' && attr.name !== 'onclick' && attr.name !== 'href' && attr.name !== 'data-replaced') {
              newButton.setAttribute(attr.name, attr.value);
            }
          });
          
          // Replace old button with new one
          button.parentNode.replaceChild(newButton, button);
          replacedButtons.add(button);
          totalReplaced++;
          
          // Expected prices for verification
          const expectedPrices = {
            'monthly': { basic: 3000, pro: 5500, advanced: 10000, enterprise: 20000 },
            'quarterly': { basic: 8100, pro: 14850, advanced: 27000, enterprise: 54000 },
            'annual': { basic: 25200, pro: 46200, advanced: 84000, enterprise: 168000 },
          };
          const expectedPrice = expectedPrices[billingCycle]?.[finalPlan];
          
          console.log(`✅ Replaced button ${buttonIndex + 1}:`, {
            plan: finalPlan,
            billingCycle: billingCycle,
            url: checkoutUrl,
            expectedPrice: expectedPrice ? `$${expectedPrice.toLocaleString()}` : 'N/A',
            button: newButton
          });
        });
      });
    }
    
    // Also search in the entire pricing section (for Summary cards outside tabs)
    const allButtonsInSection = pricingSection.querySelectorAll('a, button');
    const summaryButtons = Array.from(allButtonsInSection).filter(btn => {
      const text = btn.textContent.trim().toLowerCase();
      return text.includes('get started') && !replacedButtons.has(btn) && !btn.closest('.w-tab-pane');
    });
    
    console.log('Found', summaryButtons.length, 'Get Started buttons outside tabs');
    
    if (summaryButtons.length > 0) {
      // Determine billing cycle from active tab or default to monthly
      let billingCycle = 'monthly';
      const activeTab = pricingSection.querySelector('.w-tab-pane.w--tab-active');
      if (activeTab) {
        billingCycle = getBillingCycleFromTab(activeTab);
      }
      console.log(`Summary buttons: billingCycle = ${billingCycle}`);
      
      summaryButtons.forEach((button, buttonIndex) => {
        if (replacedButtons.has(button)) {
          return;
        }
        
        // Try to determine plan from context first
        let finalPlan = getPlanFromContext(button);
        
        // If not found, use button index as fallback
        if (!finalPlan) {
          const plans = ['basic', 'pro', 'advanced', 'enterprise'];
          finalPlan = plans[buttonIndex % 4] || 'basic';
          console.warn(`Could not determine plan from context for summary button ${buttonIndex}, using position fallback: ${finalPlan}`);
        }
        
        // Create new button with Stripe link
        const newButton = document.createElement('a');
        const checkoutUrl = `/api/redirect-to-checkout?plan=${finalPlan}&billingCycle=${billingCycle}`;
        newButton.href = checkoutUrl;
        newButton.className = button.className;
        newButton.textContent = 'Buy subscription';
        newButton.style.cssText = button.style.cssText;
        newButton.setAttribute('data-replaced', 'true');
        newButton.setAttribute('data-plan', finalPlan);
        newButton.setAttribute('data-billing', billingCycle);
        
        // Copy all attributes except data-w-id, onclick, and href
        Array.from(button.attributes).forEach(attr => {
          if (attr.name !== 'data-w-id' && attr.name !== 'onclick' && attr.name !== 'href' && attr.name !== 'data-replaced') {
            newButton.setAttribute(attr.name, attr.value);
          }
        });
        
        // Replace old button with new one
        button.parentNode.replaceChild(newButton, button);
        replacedButtons.add(button);
        totalReplaced++;
        
        // Expected prices for verification
        const expectedPrices = {
          'monthly': { basic: 3000, pro: 5500, advanced: 10000, enterprise: 20000 },
          'quarterly': { basic: 8100, pro: 14850, advanced: 27000, enterprise: 54000 },
          'annual': { basic: 25200, pro: 46200, advanced: 84000, enterprise: 168000 },
        };
        const expectedPrice = expectedPrices[billingCycle]?.[finalPlan];
        
        console.log(`✅ Replaced summary button ${buttonIndex + 1}:`, {
          plan: finalPlan,
          billingCycle: billingCycle,
          url: checkoutUrl,
          expectedPrice: expectedPrice ? `$${expectedPrice.toLocaleString()}` : 'N/A',
          button: newButton
        });
      });
    }
    
    if (totalReplaced > 0) {
      console.log('Total buttons replaced:', totalReplaced);
    } else {
      console.log('No buttons found to replace');
    }
  }
  
  // Try multiple times
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replaceButtons);
  } else {
    replaceButtons();
  }
  
  // Try multiple times to catch dynamically loaded content
  setTimeout(replaceButtons, 100);
  setTimeout(replaceButtons, 500);
  setTimeout(replaceButtons, 1000);
  setTimeout(replaceButtons, 2000);
  setTimeout(replaceButtons, 3000);
  
  // Function to update button URLs when tab changes
  function updateButtonUrls() {
    const pricingSection = document.getElementById('Pricing') || document.querySelector('.section_pricing-home');
    if (!pricingSection) return;
    
    // Find active tab
    const activeTab = pricingSection.querySelector('.w-tab-pane.w--tab-active');
    if (!activeTab) return;
    
    const billingCycle = getBillingCycleFromTab(activeTab);
    console.log(`Tab changed, updating button URLs for billingCycle: ${billingCycle}`);
    
    // Update all replaced buttons in active tab
    const buttons = activeTab.querySelectorAll('a[data-replaced="true"], a[data-plan]');
    buttons.forEach(button => {
      const plan = button.getAttribute('data-plan');
      if (plan) {
        const checkoutUrl = `/api/redirect-to-checkout?plan=${plan}&billingCycle=${billingCycle}`;
        button.href = checkoutUrl;
        button.setAttribute('data-billing', billingCycle);
        console.log(`Updated button: plan=${plan}, billingCycle=${billingCycle}`);
      }
    });
    
    // Also update summary buttons outside tabs
    const summaryButtons = pricingSection.querySelectorAll('a[data-replaced="true"]:not(.w-tab-pane a)');
    summaryButtons.forEach(button => {
      const plan = button.getAttribute('data-plan');
      if (plan) {
        const checkoutUrl = `/api/redirect-to-checkout?plan=${plan}&billingCycle=${billingCycle}`;
        button.href = checkoutUrl;
        button.setAttribute('data-billing', billingCycle);
      }
    });
  }
  
  // Also listen for tab changes in Webflow
  document.addEventListener('DOMContentLoaded', function() {
    const pricingSection = document.getElementById('Pricing') || document.querySelector('.section_pricing-home');
    if (pricingSection) {
      const tabLinks = pricingSection.querySelectorAll('.w-tab-link');
      tabLinks.forEach(tabLink => {
        tabLink.addEventListener('click', function() {
          // First replace any new buttons
          setTimeout(replaceButtons, 300);
          // Then update URLs for billing cycle change
          setTimeout(updateButtonUrls, 500);
        });
      });
      
      // Use MutationObserver to watch for tab content changes
      const observer = new MutationObserver(function(mutations) {
        // Check if active tab changed
        const hasActiveTabChange = mutations.some(mutation => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const target = mutation.target;
            return target.classList.contains('w-tab-pane') && 
                   (target.classList.contains('w--tab-active') || 
                    !target.classList.contains('w--tab-active'));
          }
          return false;
        });
        
        if (hasActiveTabChange) {
          setTimeout(replaceButtons, 300);
          setTimeout(updateButtonUrls, 500);
        } else {
          setTimeout(replaceButtons, 300);
        }
      });
      
      const tabContent = pricingSection.querySelector('.w-tab-content');
      if (tabContent) {
        observer.observe(tabContent, {
          attributes: true,
          attributeFilter: ['class'],
          childList: true,
          subtree: true
        });
      }
    }
  });
})();

