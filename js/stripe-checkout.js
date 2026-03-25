// Stripe Checkout Integration for KPI BOARD Subscription
// Offer: -30% for 2 slots using promo code KPIBOARD34
(function() {
  const checkoutButton = document.getElementById('stripe-checkout-btn');
  if (!checkoutButton) {
    console.warn('Stripe checkout button not found');
    return;
  }

  if (typeof Stripe !== 'function') {
    alert('Stripe is not loaded. Please try again in a moment.');
    return;
  }

  const PROMO_CODE = 'KPIBOARD34';

  // This card ("Monthly Club") maps to the "basic" monthly subscription in our Stripe backend.
  const STRIPE_PLAN = 'basic';
  const STRIPE_BILLING_CYCLE = 'monthly';

  const STRIPE_PUBLISHABLE_KEY =
    window.STRIPE_PUBLISHABLE_KEY ||
    'pk_live_51SRstvIjrSulcnnC6b9JAPyxUiE8dWPJTjgYbBOwhok9yTl5SQQKdXXMKoX7EGVEMsMyFEAHfGTVsm0CBTgDjjd700V0vcujQP';

  const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
  checkoutButton.setAttribute('data-stripe-type', 'checkout-session');

  checkoutButton.addEventListener('click', async function(e) {
    e.preventDefault();

    checkoutButton.disabled = true;
    const originalText = checkoutButton.innerHTML;
    checkoutButton.innerHTML =
      '<span class="icon"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></span>Processing...';
    checkoutButton.style.opacity = '0.6';
    checkoutButton.style.cursor = 'not-allowed';

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: STRIPE_PLAN,
          billingCycle: STRIPE_BILLING_CYCLE,
          promotionCode: PROMO_CODE,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to create checkout session' }));
        throw new Error(errorData.message || 'Failed to create checkout session');
      }

      const session = await response.json();
      const sessionId = session && (session.sessionId || session.id);
      if (!sessionId) throw new Error('Invalid session response');

      const result = await stripe.redirectToCheckout({ sessionId: sessionId });
      if (result && result.error) throw new Error(result.error.message);
    } catch (error) {
      console.error('Stripe Checkout Error:', error);
      alert('Unable to start checkout. Please try again or contact support at hello@kpiboard.io');

      checkoutButton.disabled = false;
      checkoutButton.innerHTML = originalText;
      checkoutButton.style.opacity = '1';
      checkoutButton.style.cursor = 'pointer';
    }
  });
})();
