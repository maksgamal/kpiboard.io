# Інструкції: Створення продуктів в Stripe

## Варіант 1: Використання скрипта (Рекомендовано)

### Крок 1: Встановіть залежності
```bash
npm install
```

### Крок 2: Створіть файл `.env`
Створіть файл `.env` в корені проекту з вашим Stripe Secret Key:
```env
STRIPE_SECRET_KEY=sk_live_...ваш_секретний_ключ
```

### Крок 3: Запустіть скрипт
```bash
node scripts/create-stripe-products.js
```

**Скрипт автоматично:**
- ✅ Створить 4 продукти (Basic, Pro, Advanced, Enterprise)
- ✅ Створить 12 цін (по 3 для кожного продукту: Monthly, Quarterly, Annual)
- ✅ Оновить `api/stripe-prices.js` з Price IDs
- ✅ Виведе всі Product IDs та Price IDs в консоль

**Після створення:**
- API endpoints автоматично використовуватимуть створені Price IDs
- Продукти будуть видимі в Stripe Dashboard
- Всі кнопки "Buy subscription" працюватимуть з правильними цінами

## Варіант 2: Створення через Stripe Dashboard

Якщо ви хочете створити продукти вручну:

1. Увійдіть в [Stripe Dashboard](https://dashboard.stripe.com/)
2. Перейдіть до **Products** → **Add product**

### Basic Plan
- **Monthly**: $3,000/month (Recurring, Monthly)
- **Quarterly**: $8,100 per quarter (Recurring, Every 3 months)
- **Annual**: $25,200 per year (Recurring, Yearly)

### Pro Plan
- **Monthly**: $5,500/month (Recurring, Monthly)
- **Quarterly**: $14,850 per quarter (Recurring, Every 3 months)
- **Annual**: $46,200 per year (Recurring, Yearly)

### Advanced Plan
- **Monthly**: $10,000/month (Recurring, Monthly)
- **Quarterly**: $27,000 per quarter (Recurring, Every 3 months)
- **Annual**: $84,000 per year (Recurring, Yearly)

### Enterprise Plan
- **Monthly**: $20,000/month (Recurring, Monthly)
- **Quarterly**: $54,000 per quarter (Recurring, Every 3 months)
- **Annual**: $168,000 per year (Recurring, Yearly)

## Перевірка кнопок

Після створення продуктів:

1. Відкрийте сайт у браузері
2. Відкрийте консоль (F12 → Console)
3. Перейдіть до секції Pricing
4. Перевірте повідомлення:
   - "Looking for Get Started buttons..."
   - "Replaced button: [plan] [billingCycle]"
   - "=== Testing Pricing Buttons ==="

5. Натисніть на кнопку "Buy subscription" - має відкритися Stripe Checkout

## Як це працює

API endpoints підтримують **два режими**:

1. **З Price IDs** (рекомендовано після створення продуктів):
   - Використовує попередньо створені продукти та ціни з Stripe
   - Краще для аналітики та управління
   - Продукти видимі в Stripe Dashboard
   - Скрипт автоматично оновлює `api/stripe-prices.js` з Price IDs

2. **З price_data** (fallback, якщо Price IDs не встановлені):
   - Створює ціни динамічно під час checkout
   - Працює навіть без попередньо створених продуктів
   - Продукти створюються автоматично при першому checkout

**Після запуску скрипта** `api/stripe-prices.js` автоматично оновлюється з Price IDs, і API endpoints використовуватимуть їх замість `price_data`.

## Якщо створюєте продукти вручну через Dashboard

Після створення продуктів вручну, оновіть `api/stripe-prices.js` з Price IDs:
1. Відкрийте `api/stripe-prices.js`
2. Замініть `null` на відповідні Price IDs з Stripe Dashboard
3. Price IDs мають формат `price_xxxxxxxxxxxxx`

