# Stripe Integration Setup

## Prerequisites

1. Stripe account with API keys
2. Vercel deployment (for serverless functions)

## Setup Instructions

### 1. Get Stripe API Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable Key** (starts with `pk_`)
3. Copy your **Secret Key** (starts with `sk_`)

### 2. Configure Environment Variables in Vercel

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add the following variables:
   - `STRIPE_SECRET_KEY` = your Stripe secret key (starts with `sk_`)
   - `STRIPE_PUBLISHABLE_KEY` = your Stripe publishable key (starts with `pk_`)

### 3. Add Stripe Publishable Key to HTML

The Stripe Publishable Key is already added to `index.html` (around line 3739). You need to replace the placeholder:

1. Open `index.html`
2. Find the script block with `window.STRIPE_PUBLISHABLE_KEY`
3. Replace `'pk_test_...'` with your actual Stripe Publishable Key

**Current location in index.html:**
```html
<script>
  window.STRIPE_PUBLISHABLE_KEY = 'pk_test_...'; // Replace with your publishable key
</script>
```

**Important:** 
- For testing, use your **Test Publishable Key** (starts with `pk_test_`)
- For production, use your **Live Publishable Key** (starts with `pk_live_`)
- Alternatively, you can inject this from Vercel environment variables during build using a build script

### 4. Button Configuration (Automatic)

**Good news!** The JavaScript automatically detects and configures "Get Started" buttons in the pricing section. You don't need to manually add data attributes.

The script (`js/stripe-checkout.js`) will:
1. Find all "Get Started" buttons in the Pricing section
2. Automatically determine the plan (Basic, Pro, Advanced, Enterprise) based on button context
3. Automatically determine the billing cycle (Monthly, Quarterly, Annual) based on which tab is active
4. Add the necessary `data-stripe-plan` and `data-stripe-billing` attributes

**Manual Configuration (Optional):**
If you want to manually configure buttons, add these attributes:
- `data-stripe-plan="basic|pro|advanced|enterprise"`
- `data-stripe-billing="monthly|quarterly|annual"`

**Available Plans:**
- `basic` - Basic Plan ($3,000/month)
- `pro` - Pro Plan ($5,500/month)
- `advanced` - Advanced Plan ($10,000/month)
- `enterprise` - Enterprise Plan ($20,000/month)

**Available Billing Cycles:**
- `monthly` - Monthly subscription (no discount)
- `quarterly` - Quarterly subscription (10% discount)
- `annual` - Annual subscription (30% discount)

### 5. Install Dependencies

```bash
npm install
```

### 6. Deploy to Vercel

```bash
vercel deploy
```

## Pricing Structure

### Monthly Prices:
- Basic: $3,000/month
- Pro: $5,500/month
- Advanced: $10,000/month
- Enterprise: $20,000/month

### Quarterly Prices (10% discount):
- Basic: $2,700/month
- Pro: $4,950/month
- Advanced: $9,000/month
- Enterprise: $18,000/month

### Annual Prices (30% discount):
- Basic: $2,100/month
- Pro: $3,850/month
- Advanced: $7,000/month
- Enterprise: $14,000/month

## Testing

Use Stripe test mode:
- Test card: `4242 4242 4242 4242`
- Any future expiry date
- Any 3-digit CVC

## Support

For issues, check:
- [Stripe Documentation](https://stripe.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)

