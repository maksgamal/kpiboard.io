// Stripe Checkout Integration for KPI BOARD Subscription
// Product: Subscribe to KPI BOARD - Dedicated BI Team
// Price: $2,995/month (recurring subscription)

(function() {
  // ============================================
  // CONFIGURATION - Choose one option below
  // ============================================
  
  // OPTION 1: Stripe Payment Link (Recommended - No backend needed)
  // Create a Payment Link in Stripe Dashboard and paste the URL here
  // Instructions: Stripe Dashboard > Payment Links > Create payment link
  const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/dRmcN54er42ccFe5mT4wM00';
  
  // OPTION 2: Stripe Checkout Session (Requires backend API)
  // Create a product in Stripe Dashboard and paste the Price ID here
  const STRIPE_PRICE_ID = ''; // e.g., 'price_1234567890'
  const STRIPE_PUBLISHABLE_KEY = window.STRIPE_PUBLISHABLE_KEY || 'pk_live_51SRstvIjrSulcnnC6b9JAPyxUiE8dWPJTjgYbBOwhok9yTl5SQQKdXXMKoX7EGVEMsMyFEAHfGTVsm0CBTgDjjd700V0vcujQP';
  
  // ============================================
  // Implementation
  // ============================================
  
  const checkoutButton = document.getElementById('stripe-checkout-btn');
  
  if (!checkoutButton) {
    console.warn('Stripe checkout button not found');
    return;
  }
  
  // OPTION 1: Use Payment Link (Simplest - No backend needed)
  if (STRIPE_PAYMENT_LINK && STRIPE_PAYMENT_LINK.startsWith('https://buy.stripe.com/')) {
    console.log('Using Stripe Payment Link');
    checkoutButton.href = STRIPE_PAYMENT_LINK;
    checkoutButton.target = '_blank';
    checkoutButton.setAttribute('data-stripe-type', 'payment-link');
    return; // Exit early - Payment Link handles everything
  }
  
  // OPTION 2: Use Checkout Session (Requires backend)
  if (!STRIPE_PRICE_ID) {
    console.error('Stripe configuration missing. Please set either STRIPE_PAYMENT_LINK or STRIPE_PRICE_ID in stripe-checkout.js');
    checkoutButton.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Stripe is not configured. Please contact support or check STRIPE_SETUP_INSTRUCTIONS.md');
    });
    return;
  }
  
  // Initialize Stripe
  const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
  checkoutButton.setAttribute('data-stripe-price-id', STRIPE_PRICE_ID);
  checkoutButton.setAttribute('data-stripe-type', 'checkout-session');
  
  // Handle button click for Checkout Session
  checkoutButton.addEventListener('click', async function(e) {
    e.preventDefault();
    
    // Disable button during processing
    checkoutButton.disabled = true;
    const originalText = checkoutButton.innerHTML;
    checkoutButton.innerHTML = '<span class="icon"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></span>Processing...';
    checkoutButton.style.opacity = '0.6';
    checkoutButton.style.cursor = 'not-allowed';
    
    try {
      // Create Checkout Session via your backend API
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: STRIPE_PRICE_ID,
          successUrl: window.location.origin + '/success?session_id={CHECKOUT_SESSION_ID}',
          cancelUrl: window.location.origin + window.location.pathname + '#Pricing',
          metadata: {
            product: 'KPI BOARD Subscription',
            plan: 'Monthly Club',
            price: '2995'
          }
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to create checkout session' }));
        throw new Error(errorData.message || 'Failed to create checkout session');
      }
      
      const session = await response.json();
      
      if (!session.id) {
        throw new Error('Invalid session response');
      }
      
      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });
      
      if (result.error) {
        throw new Error(result.error.message);
      }
      
    } catch (error) {
      console.error('Stripe Checkout Error:', error);
      alert('Unable to start checkout. Please try again or contact support at hello@kpiboard.io');
      
      // Re-enable button
      checkoutButton.disabled = false;
      checkoutButton.innerHTML = originalText;
      checkoutButton.style.opacity = '1';
      checkoutButton.style.cursor = 'pointer';
    }
  });
  
})();
