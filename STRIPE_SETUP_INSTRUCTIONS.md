# Stripe Integration Setup Instructions

## Створення продукту та підписки в Stripe

### Крок 1: Створіть продукт в Stripe Dashboard

1. Увійдіть в [Stripe Dashboard](https://dashboard.stripe.com/)
2. Перейдіть до **Products** → **Add product**
3. Заповніть форму:
   - **Name**: `Subscribe to KPI BOARD - Dedicated BI Team`
   - **Description**: `Monthly subscription for dedicated BI team services. Includes unlimited data sources, dashboards, revisions, and 48-hour average delivery.`
   - **Pricing model**: `Standard pricing`
   - **Price**: `$2,995.00`
   - **Billing period**: `Monthly` (recurring)
   - **Currency**: `USD`

4. Натисніть **Save product**
5. Скопіюйте **Price ID** (починається з `price_`) - він знадобиться для інтеграції

### Крок 2: Налаштування підписки

Stripe автоматично налаштує:
- ✅ Місячну підписку (recurring)
- ✅ Можливість паузи через Billing Portal
- ✅ Можливість скасування
- ✅ Автоматичне продовження

### Крок 3: Варіант A - Stripe Payment Link (Найпростіший, без backend)

1. В Stripe Dashboard перейдіть до **Payment Links** → **Create payment link**
2. Виберіть створений продукт
3. Налаштуйте:
   - **Allow customers to update payment method**: ✅
   - **Allow customers to cancel**: ✅
   - **Allow customers to pause**: ✅ (важливо!)
4. Скопіюйте Payment Link URL (виглядає як `https://buy.stripe.com/...`)
5. Оновіть `index.html` - замініть `href` кнопки на Payment Link:

```html
<a href="https://buy.stripe.com/YOUR_LINK_ID" class="pricing-cta-btn" target="_blank">
```

**Переваги Payment Link:**
- ✅ Не потребує backend
- ✅ Автоматично налаштований Billing Portal
- ✅ Клієнти можуть паузити/продовжувати через Stripe Customer Portal

### Крок 4: Варіант B - Stripe Checkout Session (з backend API)

Якщо потрібен більший контроль, використовуйте Checkout Session:

1. Створіть backend endpoint `/api/create-checkout-session`
2. Оновіть `js/stripe-checkout.js` - вставте ваш Price ID
3. Backend endpoint має виглядати так:

```javascript
// Node.js example
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/api/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{
      price: 'price_YOUR_PRICE_ID',
      quantity: 1,
    }],
    success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/pricing`,
    subscription_data: {
      metadata: {
        product: 'KPI BOARD Subscription',
        plan: 'Monthly Club'
      }
    },
    // Enable customer portal for pause/resume
    customer_creation: 'always',
  });
  
  res.json({ id: session.id });
});
```

### Крок 5: Налаштування Customer Portal для паузи

1. В Stripe Dashboard перейдіть до **Settings** → **Billing** → **Customer portal**
2. Увімкніть:
   - ✅ **Allow customers to update payment methods**
   - ✅ **Allow customers to cancel subscriptions**
   - ✅ **Allow customers to pause subscriptions** (важливо!)
3. Налаштуйте текст та налаштування паузи

### Крок 6: Тестування

1. Використовуйте тестові картки Stripe:
   - Успішна оплата: `4242 4242 4242 4242`
   - Будь-яка дата в майбутньому
   - Будь-який CVC
   - Будь-який ZIP

2. Перевірте:
   - ✅ Створення підписки
   - ✅ Доступ до Customer Portal
   - ✅ Можливість паузи підписки
   - ✅ Можливість продовження підписки

## Важливі налаштування

### Можливість паузи підписки

Для того, щоб клієнти могли паузити підписку (як у Designjoy):

1. **Stripe Dashboard** → **Settings** → **Billing** → **Customer portal**
2. Увімкніть **"Allow customers to pause subscriptions"**
3. Налаштуйте:
   - **Pause duration**: Unlimited (або вкажіть максимальний термін)
   - **Resume behavior**: Resume immediately when customer resumes

### Email нагадування

Налаштуйте email-нагадування для клієнтів:
- **Settings** → **Emails** → **Subscription emails**
- Увімкніть нагадування про паузу/продовження

## Перевірка інтеграції

Після налаштування перевірте:

1. ✅ Кнопка "Join today" веде на Stripe Checkout
2. ✅ Після оплати створюється підписка
3. ✅ Клієнт отримує доступ до Customer Portal
4. ✅ Клієнт може паузити підписку
5. ✅ Клієнт може продовжити підписку після паузи

## Посилання

- [Stripe Dashboard](https://dashboard.stripe.com/)
- [Stripe Payment Links Documentation](https://stripe.com/docs/payments/payment-links)
- [Stripe Customer Portal](https://stripe.com/docs/billing/subscriptions/customer-portal)
- [Stripe Checkout Documentation](https://stripe.com/docs/payments/checkout)
