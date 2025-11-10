// Stripe Checkout Integration
document.addEventListener('DOMContentLoaded', function() {
  // Auto-detect and add data attributes to "Get Started" buttons in pricing section
  const pricingSection = document.getElementById('Pricing') || document.querySelector('.section_pricing-home');
  
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
      
      // Find all "Get Started" buttons in this tab
      const buttons = tab.querySelectorAll('a.w-button, button.w-button, a.button, button.button');
      
      buttons.forEach((button, buttonIndex) => {
        const buttonText = button.textContent.trim();
        if (buttonText.includes('Get Started') || buttonText.includes('Get started')) {
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
        }
      });
    });
  }
  
  // Handle all Stripe checkout buttons
  const checkoutButtons = document.querySelectorAll('[data-stripe-plan]');
  
  checkoutButtons.forEach(button => {
    button.addEventListener('click', async function(e) {
      e.preventDefault();
      
      const plan = this.getAttribute('data-stripe-plan');
      const billingCycle = this.getAttribute('data-stripe-billing') || 'monthly';
      
      if (!plan) {
        console.error('Missing plan data');
        return;
      }
      
      // Disable button during processing
      this.disabled = true;
      const originalText = this.textContent;
      this.textContent = 'Processing...';
      
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
          this.disabled = false;
          this.textContent = originalText;
          return;
        }
        
        // Redirect to Stripe Checkout
        if (data.url) {
          window.location.href = data.url;
        } else if (data.sessionId) {
          // Fallback: use Stripe.js to redirect
          // Note: You need to set STRIPE_PUBLISHABLE_KEY in your environment
          const stripePublishableKey = window.STRIPE_PUBLISHABLE_KEY || 'pk_test_...';
          const stripe = Stripe(stripePublishableKey);
          const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
          if (error) {
            alert('Error redirecting to checkout: ' + error.message);
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
    });
  });
});

