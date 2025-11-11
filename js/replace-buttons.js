// Replace all "Get Started" buttons with "Buy subscription" buttons with direct Stripe links
(function() {
  const replacedButtons = new Set();
  
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
        // Determine billing cycle
        let billingCycle = 'monthly';
        const tabContent = tab.textContent || '';
        if (tabContent.includes('Quarterly') || tabContent.includes('10%')) {
          billingCycle = 'quarterly';
        } else if (tabContent.includes('Annual') || tabContent.includes('30%')) {
          billingCycle = 'annual';
        }
        
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
          
          // Determine plan based on button position (order in the tab)
          // Usually: Basic (0), Pro (1), Advanced (2), Enterprise (3)
          const plans = ['basic', 'pro', 'advanced', 'enterprise'];
          const plan = plans[buttonIndex % 4] || 'basic';
          
          // Also try to determine from context as backup
          const card = button.closest('[class*="card"], [class*="plan"], [class*="pricing"], [class*="table"], [class*="summary"]') || 
                       button.closest('div')?.parentElement;
          const cardText = card ? card.textContent.toLowerCase() : '';
          
          let finalPlan = plan;
          if (cardText.includes('enterprise')) {
            finalPlan = 'enterprise';
          } else if (cardText.includes('advanced')) {
            finalPlan = 'advanced';
          } else if (cardText.includes('pro') || cardText.includes('professional')) {
            finalPlan = 'pro';
          } else if (cardText.includes('basic') || cardText.includes('starter')) {
            finalPlan = 'basic';
          }
          
          // Create new button with Stripe link
          const newButton = document.createElement('a');
          newButton.href = `/api/redirect-to-checkout?plan=${finalPlan}&billingCycle=${billingCycle}`;
          newButton.className = button.className;
          newButton.textContent = 'Buy subscription';
          newButton.style.cssText = button.style.cssText;
          newButton.setAttribute('data-replaced', 'true');
          
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
          
          console.log('Replaced button:', finalPlan, billingCycle, buttonIndex, newButton);
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
        const tabContent = activeTab.textContent || '';
        if (tabContent.includes('Quarterly') || tabContent.includes('10%')) {
          billingCycle = 'quarterly';
        } else if (tabContent.includes('Annual') || tabContent.includes('30%')) {
          billingCycle = 'annual';
        }
      }
      
      summaryButtons.forEach((button, buttonIndex) => {
        if (replacedButtons.has(button)) {
          return;
        }
        
        // Determine plan from context
        const card = button.closest('[class*="card"], [class*="plan"], [class*="pricing"], [class*="table"], [class*="summary"]') || 
                     button.closest('div')?.parentElement;
        const cardText = card ? card.textContent.toLowerCase() : '';
        
        let finalPlan = 'basic';
        if (cardText.includes('enterprise')) {
          finalPlan = 'enterprise';
        } else if (cardText.includes('advanced')) {
          finalPlan = 'advanced';
        } else if (cardText.includes('pro') || cardText.includes('professional')) {
          finalPlan = 'pro';
        } else if (cardText.includes('basic') || cardText.includes('starter')) {
          finalPlan = 'basic';
        } else {
          // Fallback: determine by button index
          const plans = ['basic', 'pro', 'advanced', 'enterprise'];
          finalPlan = plans[buttonIndex % 4] || 'basic';
        }
        
        // Create new button with Stripe link
        const newButton = document.createElement('a');
        newButton.href = `/api/redirect-to-checkout?plan=${finalPlan}&billingCycle=${billingCycle}`;
        newButton.className = button.className;
        newButton.textContent = 'Buy subscription';
        newButton.style.cssText = button.style.cssText;
        newButton.setAttribute('data-replaced', 'true');
        
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
        
        console.log('Replaced summary button:', finalPlan, billingCycle, buttonIndex, newButton);
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
  
  // Also listen for tab changes in Webflow
  document.addEventListener('DOMContentLoaded', function() {
    const pricingSection = document.getElementById('Pricing') || document.querySelector('.section_pricing-home');
    if (pricingSection) {
      const tabLinks = pricingSection.querySelectorAll('.w-tab-link');
      tabLinks.forEach(tabLink => {
        tabLink.addEventListener('click', function() {
          setTimeout(replaceButtons, 500);
        });
      });
      
      // Use MutationObserver to watch for tab content changes
      const observer = new MutationObserver(function(mutations) {
        setTimeout(replaceButtons, 300);
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

