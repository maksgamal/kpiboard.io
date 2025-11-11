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
  
  // Helper function to determine billing cycle from card context
  function getBillingCycleFromCard(card) {
    if (!card) return null;
    
    const cardText = (card.textContent || '').toLowerCase();
    
    // Check for explicit billing cycle indicators in the card
    if (cardText.includes('monthly subscription') || 
        (cardText.includes('/month') && !cardText.includes('quarterly') && !cardText.includes('annual'))) {
      return 'monthly';
    } else if (cardText.includes('quarterly subscription') || cardText.includes('quarterly') || cardText.includes('10%')) {
      return 'quarterly';
    } else if (cardText.includes('annual subscription') || cardText.includes('annual') || cardText.includes('30%')) {
      return 'annual';
    }
    
    // Check for specific monthly prices (not quarterly/annual)
    if (cardText.includes('$3,000') && !cardText.includes('$2,700') && !cardText.includes('$2,100')) {
      return 'monthly';
    } else if (cardText.includes('$5,500') && !cardText.includes('$4,950') && !cardText.includes('$3,850')) {
      return 'monthly';
    } else if (cardText.includes('$10,000') && !cardText.includes('$9,000') && !cardText.includes('$7,000')) {
      return 'monthly';
    } else if (cardText.includes('$20,000') && !cardText.includes('$18,000') && !cardText.includes('$14,000')) {
      return 'monthly';
    }
    
    return null;
  }
  
  // Helper function to determine plan from context
  function getPlanFromContext(button) {
    // Try to find parent card/container
    let container = button;
    let bestMatch = null;
    let bestMatchScore = 0;
    
    for (let i = 0; i < 15; i++) {
      container = container.parentElement;
      if (!container) break;
      
      const containerText = (container.textContent || '').toLowerCase();
      const containerClass = (container.className || '').toLowerCase();
      
      let score = 0;
      let plan = null;
      
      // Check for plan names in text or class names (higher priority)
      if (containerText.includes('enterprise') || containerClass.includes('enterprise')) {
        plan = 'enterprise';
        score = containerText.includes('enterprise plan') ? 10 : 5;
      } else if (containerText.includes('advanced') || containerClass.includes('advanced')) {
        plan = 'advanced';
        score = containerText.includes('advanced plan') ? 10 : 5;
      } else if (containerText.includes('professional') || containerText.includes('pro plan') || 
                 containerClass.includes('professional') || (containerClass.includes('pro') && !containerClass.includes('product'))) {
        plan = 'pro';
        score = containerText.includes('pro plan') || containerText.includes('professional plan') ? 10 : 5;
      } else if (containerText.includes('basic') || containerText.includes('starter') || 
                 containerClass.includes('basic') || containerClass.includes('starter')) {
        plan = 'basic';
        score = containerText.includes('basic plan') || containerText.includes('starter plan') ? 10 : 5;
      }
      
      // If we found a plan name, use it if score is better
      if (plan && score > bestMatchScore) {
        bestMatch = plan;
        bestMatchScore = score;
      }
      
      // Check for price indicators (lower priority, but still useful)
      if (!bestMatch || bestMatchScore < 8) {
        if (containerText.includes('$3,000') || containerText.includes('$2,700') || containerText.includes('$2,100') || 
            containerText.includes('$8,100') || containerText.includes('$25,200')) {
          if (!bestMatch || bestMatchScore < 7) {
            bestMatch = 'basic';
            bestMatchScore = 7;
          }
        } else if (containerText.includes('$5,500') || containerText.includes('$4,950') || containerText.includes('$3,850') ||
                   containerText.includes('$14,850') || containerText.includes('$46,200')) {
          if (!bestMatch || bestMatchScore < 7) {
            bestMatch = 'pro';
            bestMatchScore = 7;
          }
        } else if (containerText.includes('$10,000') || containerText.includes('$9,000') || containerText.includes('$7,000') ||
                   containerText.includes('$27,000') || containerText.includes('$84,000')) {
          if (!bestMatch || bestMatchScore < 7) {
            bestMatch = 'advanced';
            bestMatchScore = 7;
          }
        } else if (containerText.includes('$20,000') || containerText.includes('$18,000') || containerText.includes('$14,000') ||
                   containerText.includes('$54,000') || containerText.includes('$168,000')) {
          if (!bestMatch || bestMatchScore < 7) {
            bestMatch = 'enterprise';
            bestMatchScore = 7;
          }
        }
      }
    }
    
    return bestMatch;
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
          
          // Try to determine billing cycle from card context (for summary cards)
          const card = button.closest('[class*="card"], [class*="plan"], [class*="pricing"], [class*="table"], [class*="summary"]') || 
                       button.closest('div')?.parentElement;
          let finalBillingCycle = billingCycle;
          const cardBillingCycle = getBillingCycleFromCard(card);
          if (cardBillingCycle) {
            finalBillingCycle = cardBillingCycle;
            console.log(`Found billing cycle from card context: ${finalBillingCycle}`);
          }
          
          // Create new button with Stripe link
          const newButton = document.createElement('a');
          const checkoutUrl = `/api/redirect-to-checkout?plan=${finalPlan}&billingCycle=${finalBillingCycle}`;
          newButton.href = checkoutUrl;
          newButton.className = button.className;
          newButton.textContent = 'Buy subscription';
          newButton.style.cssText = button.style.cssText;
          newButton.setAttribute('data-replaced', 'true');
          newButton.setAttribute('data-plan', finalPlan);
          newButton.setAttribute('data-billing', finalBillingCycle);
          
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
          const expectedPrice = expectedPrices[finalBillingCycle]?.[finalPlan];
          
          console.log(`✅ Replaced button ${buttonIndex + 1}:`, {
            plan: finalPlan,
            billingCycle: finalBillingCycle,
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
      // Determine billing cycle from active tab - summary buttons should always match active tab
      let defaultBillingCycle = 'monthly';
      const activeTab = pricingSection.querySelector('.w-tab-pane.w--tab-active');
      if (activeTab) {
        defaultBillingCycle = getBillingCycleFromTab(activeTab);
      }
      console.log(`Summary buttons: using active tab billingCycle = ${defaultBillingCycle}`);
      
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
        
        // Summary buttons should ALWAYS use active tab's billing cycle
        // They will be updated when tab changes via updateButtonUrls()
        const finalBillingCycle = defaultBillingCycle;
        
        // Create new button with Stripe link
        const newButton = document.createElement('a');
        const checkoutUrl = `/api/redirect-to-checkout?plan=${finalPlan}&billingCycle=${finalBillingCycle}`;
        newButton.href = checkoutUrl;
        newButton.className = button.className;
        newButton.textContent = 'Buy subscription';
        newButton.style.cssText = button.style.cssText;
        newButton.setAttribute('data-replaced', 'true');
        newButton.setAttribute('data-plan', finalPlan);
        newButton.setAttribute('data-billing', finalBillingCycle);
        
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
        const expectedPrice = expectedPrices[finalBillingCycle]?.[finalPlan];
        
        console.log(`✅ Replaced summary button ${buttonIndex + 1}:`, {
          plan: finalPlan,
          billingCycle: finalBillingCycle,
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
        console.log(`Updated tab button: plan=${plan}, billingCycle=${billingCycle}`);
      }
    });
    
    // Update ALL summary buttons outside tabs - they should always match active tab
    const summaryButtons = pricingSection.querySelectorAll('a[data-replaced="true"]:not(.w-tab-pane a)');
    console.log(`Found ${summaryButtons.length} summary buttons to update`);
    
    summaryButtons.forEach(button => {
      const plan = button.getAttribute('data-plan');
      if (plan) {
        // Always use active tab's billing cycle for summary buttons
        const checkoutUrl = `/api/redirect-to-checkout?plan=${plan}&billingCycle=${billingCycle}`;
        button.href = checkoutUrl;
        button.setAttribute('data-billing', billingCycle);
        console.log(`Updated summary button: plan=${plan}, billingCycle=${billingCycle}`);
      } else {
        // If button doesn't have data-plan, try to determine it again
        const finalPlan = getPlanFromContext(button);
        if (finalPlan) {
          const checkoutUrl = `/api/redirect-to-checkout?plan=${finalPlan}&billingCycle=${billingCycle}`;
          button.href = checkoutUrl;
          button.setAttribute('data-plan', finalPlan);
          button.setAttribute('data-billing', billingCycle);
          console.log(`Re-detected and updated summary button: plan=${finalPlan}, billingCycle=${billingCycle}`);
        }
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
          // Wait for tab to become active, then update
          setTimeout(() => {
            updateButtonUrls();
            // Also replace any new buttons that might have appeared
            replaceButtons();
          }, 100);
          
          // Additional update after tab animation completes
          setTimeout(() => {
            updateButtonUrls();
          }, 500);
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
          // Tab changed - update button URLs immediately
          setTimeout(() => {
            updateButtonUrls();
            replaceButtons();
          }, 100);
          setTimeout(() => {
            updateButtonUrls();
          }, 500);
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

