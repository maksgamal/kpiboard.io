# Швидкий старт: Перевірка кнопок та створення продуктів Stripe

## 1. Перевірка кнопок

### Крок 1: Відкрийте сайт
1. Відкрийте сайт у браузері
2. Натисніть `F12` для відкриття консолі
3. Перейдіть до вкладки **Console**

### Крок 2: Перейдіть до секції Pricing
1. Прокрутіть до секції Pricing
2. Перевірте повідомлення в консолі:
   - `Looking for Get Started buttons in pricing section...`
   - `Found X tabs`
   - `✅ Replaced button X: { plan: '...', billingCycle: '...', expectedPrice: '$...' }`
   - `=== Testing Pricing Buttons ===`

### Крок 3: Перевірте кнопки
1. Перевірте, що всі кнопки "Get Started" замінені на "Buy subscription"
2. Перевірте, що URL кнопок містить правильні параметри:
   - `/api/redirect-to-checkout?plan=basic&billingCycle=monthly`
   - `/api/redirect-to-checkout?plan=pro&billingCycle=quarterly`
   - і т.д.

### Крок 4: Перевірте ціни
Очікувані ціни:
- **Monthly**: Basic $3,000 | Pro $5,500 | Advanced $10,000 | Enterprise $20,000
- **Quarterly**: Basic $8,100 | Pro $14,850 | Advanced $27,000 | Enterprise $54,000
- **Annual**: Basic $25,200 | Pro $46,200 | Advanced $84,000 | Enterprise $168,000

## 2. Створення продуктів в Stripe

Створіть продукти через Stripe Dashboard:

1. Увійдіть в [Stripe Dashboard](https://dashboard.stripe.com/)
2. Перейдіть до **Products** → **Add product**
3. Створіть продукти з цінами згідно з `INSTRUCTIONS_STRIPE_PRODUCTS.md`
4. Після створення продуктів, оновіть `api/stripe-prices.js` з Price IDs з Stripe Dashboard

## 3. Тестування

### Локально (з Vercel CLI):
```bash
npm install -g vercel
vercel dev
```

### На Vercel:
1. Задеплойте проект на Vercel
2. Переконайтеся, що додано environment variables:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PUBLISHABLE_KEY` (опціонально, якщо використовується)

## 4. Якщо кнопки не працюють

1. Перевірте консоль на помилки
2. Перевірте, чи скрипт `js/replace-buttons.js` завантажується
3. Перевірте Network tab, чи API endpoint відповідає
4. Переконайтеся, що ви на Vercel (API endpoints працюють тільки там)

## 5. Примітки

- API endpoints використовують `price_data` для динамічного створення цін
- Створення продуктів заздалегідь **не обов'язкове**, але рекомендоване для кращої аналітики
- Всі ціни вказані в центах (cents) в коді

