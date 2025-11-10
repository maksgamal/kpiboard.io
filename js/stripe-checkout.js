// Stripe Checkout Integration
// Wait for both DOM and Webflow to be ready
let stripeCheckoutInitialized = false;

function initStripeCheckout() {
  // Prevent multiple initializations
  if (stripeCheckoutInitialized) {
    return;
  }
  
  // Auto-detect and add data attributes to "Get Started" buttons in pricing section
  const pricingSection = document.getElementById('Pricing') || document.querySelector('.section_pricing-home');
  
  if (!pricingSection) {
    return; // Pricing section not found yet
  }
  
  // Check if we already have configured buttons
  const existingButtons = pricingSection.querySelectorAll('[data-stripe-plan]');
  if (existingButtons.length > 0) {
    stripeCheckoutInitialized = true;
    return; // Already configured
  }
  
  if (pricingSection) {
    // Find all tabs
    const tabs = pricingSection.querySelectorAll('.w-tab-pane');
    
    tabs.forEach((tab, tabIndex) => {
      // Determine billing cycle based on tab
      let billingCycle = 'monthly';
      const tabContent = tab.textContent || '';
      if (tabContent.includes('Quarterly') || tabContent.includes('10%')) {
        billingCycle = 'quarterly';
      } else if (tabContent.includes('Annual') || tabContent.includes('30%')) {
        billingCycle = 'annual';
      }
      
      // Find all "Get Started" buttons in this tab - more comprehensive search
      const buttons = tab.querySelectorAll('a, button');
      
      buttons.forEach((button, buttonIndex) => {
        const buttonText = button.textContent.trim();
        if (buttonText.includes('Get Started') || buttonText.includes('Get started') || buttonText === 'Get Started') {
          // Determine plan based on button position or parent card
          let plan = 'basic';
          const card = button.closest('.plan_card, .pricing_card, [class*="card"]');
          const cardText = card ? card.textContent : '';
          
          // Try to determine plan from context
          // Check for plan names in card text (case insensitive)
          const cardTextLower = cardText.toLowerCase();
          if (cardTextLower.includes('enterprise')) {
            plan = 'enterprise';
          } else if (cardTextLower.includes('advanced')) {
            plan = 'advanced';
          } else if (cardTextLower.includes('pro') || cardTextLower.includes('professional')) {
            plan = 'pro';
          } else if (cardTextLower.includes('basic') || cardTextLower.includes('starter')) {
            plan = 'basic';
          } else {
            // Fallback: determine by button index (0=Basic, 1=Pro, 2=Advanced, 3=Enterprise)
            const plans = ['basic', 'pro', 'advanced', 'enterprise'];
            plan = plans[buttonIndex] || 'basic';
          }
          
          // Add data attributes
          button.setAttribute('data-stripe-plan', plan);
          button.setAttribute('data-stripe-billing', billingCycle);
          button.classList.add('stripe-checkout-btn');
          
          // Remove Webflow data attributes that might trigger form opening
          button.removeAttribute('data-w-id');
          // Remove onclick handlers
          button.onclick = null;
          // Set href to # to prevent navigation
          if (button.tagName === 'A') {
            button.setAttribute('href', '#');
          }
          
          console.log('Stripe button configured:', plan, billingCycle, button);
          
          // Also add direct click handler to button as backup
          button.addEventListener('click', async function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            const btnPlan = this.getAttribute('data-stripe-plan');
            const btnBilling = this.getAttribute('data-stripe-billing') || 'monthly';
            
            if (!btnPlan) return;
            
            this.disabled = true;
            const originalText = this.textContent;
            this.textContent = 'Processing...';
            
            try {
              const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ plan: btnPlan, billingCycle: btnBilling }),
              });
              
              const data = await response.json();
              
              if (data.error) {
                alert('Error: ' + data.error);
                this.disabled = false;
                this.textContent = originalText;
                return;
              }
              
              if (data.url) {
                window.location.href = data.url;
              } else if (data.sessionId) {
                const stripePublishableKey = window.STRIPE_PUBLISHABLE_KEY;
                if (!stripePublishableKey || stripePublishableKey === 'pk_test_...') {
                  alert('Stripe Publishable Key not configured.');
                  this.disabled = false;
                  this.textContent = originalText;
                  return;
                }
                const stripe = Stripe(stripePublishableKey);
                const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
                if (error) {
                  alert('Error: ' + error.message);
                  this.disabled = false;
                  this.textContent = originalText;
                }
              }
            } catch (error) {
              console.error('Error:', error);
              alert('An error occurred. Please try again.');
              this.disabled = false;
              this.textContent = originalText;
            }
          }, true); // Use capture phase
        }
      });
    });
    
    // Mark as initialized if we found and configured buttons
    const configuredButtons = pricingSection.querySelectorAll('[data-stripe-plan]');
    if (configuredButtons.length > 0) {
      stripeCheckoutInitialized = true;
      console.log('Stripe checkout initialized with', configuredButtons.length, 'buttons');
    }
  }
  
  // Also handle via document-level delegation as backup (only add once)
  if (!window.stripeDocumentHandlerAdded) {
    window.stripeDocumentHandlerAdded = true;
    document.addEventListener('click', async function(e) {
    // Check if clicked element or its parent has stripe data attributes
    const button = e.target.closest('[data-stripe-plan]');
    
    if (!button) {
      return; // Not a stripe button, let other handlers work
    }
    
    const plan = button.getAttribute('data-stripe-plan');
    const billingCycle = button.getAttribute('data-stripe-billing') || 'monthly';
    
    if (!plan) {
      return;
    }
    
    // Prevent default and stop propagation to block Webflow handlers
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
      
    // Disable button during processing
    button.disabled = true;
    const originalText = button.textContent;
    button.textContent = 'Processing...';
      
      try {
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan: plan,
            billingCycle: billingCycle,
          }),
        });
        
        const data = await response.json();
        
        if (data.error) {
          alert('Error: ' + data.error);
          button.disabled = false;
          button.textContent = originalText;
          return;
        }
        
        // Redirect to Stripe Checkout
        if (data.url) {
          window.location.href = data.url;
        } else if (data.sessionId) {
          // Fallback: use Stripe.js to redirect
          const stripePublishableKey = window.STRIPE_PUBLISHABLE_KEY || 'pk_test_...';
          if (!stripePublishableKey || stripePublishableKey === 'pk_test_...') {
            alert('Stripe Publishable Key not configured. Please check your settings.');
            button.disabled = false;
            button.textContent = originalText;
            return;
          }
          const stripe = Stripe(stripePublishableKey);
          const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
          if (error) {
            alert('Error redirecting to checkout: ' + error.message);
            button.disabled = false;
            button.textContent = originalText;
          }
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
        button.disabled = false;
        button.textContent = originalText;
      }
  }, true); // Use capture phase to run before other handlers
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStripeCheckout);
} else {
  initStripeCheckout();
}

// Also try after a delay to catch dynamically loaded content
setTimeout(initStripeCheckout, 1000);
setTimeout(initStripeCheckout, 2000);

