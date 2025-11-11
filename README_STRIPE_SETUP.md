# Stripe Products Setup

## Створення продуктів в Stripe

Створіть продукти через Stripe Dashboard:

1. Увійдіть в [Stripe Dashboard](https://dashboard.stripe.com/)
2. Перейдіть до **Products** → **Add product**
3. Створіть продукти з такими параметрами:

#### Basic Plan
- **Monthly**: $3,000/month
- **Quarterly**: $2,700/month (billed every 3 months)
- **Annual**: $2,100/month (billed yearly)

#### Pro Plan
- **Monthly**: $5,500/month
- **Quarterly**: $4,950/month (billed every 3 months)
- **Annual**: $3,850/month (billed yearly)

#### Advanced Plan
- **Monthly**: $10,000/month
- **Quarterly**: $9,000/month (billed every 3 months)
- **Annual**: $7,000/month (billed yearly)

#### Enterprise Plan
- **Monthly**: $20,000/month
- **Quarterly**: $18,000/month (billed every 3 months)
- **Annual**: $14,000/month (billed yearly)

### Поточна реалізація

API endpoints використовують `price_data` для динамічного створення цін під час checkout, тому **створення продуктів заздалегідь не обов'язкове**. 

Однак, якщо ви хочете використовувати попередньо створені продукти та ціни (що краще для аналітики та управління):

1. Створіть продукти через Stripe Dashboard
2. Оновіть `api/stripe-prices.js` з Price IDs з Stripe Dashboard
3. API endpoints автоматично використовуватимуть Price IDs замість `price_data`

### Локальне тестування

Для локального тестування API endpoints потрібно використовувати Vercel CLI:

```bash
npm install -g vercel
vercel dev
```

Або використовувати прямий Stripe Checkout через Payment Links (створються в Stripe Dashboard).

