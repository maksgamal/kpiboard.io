# Stripe Integration - Quick Start Guide

## Швидке налаштування (5 хвилин)

### Варіант 1: Stripe Payment Link (Рекомендовано - без backend)

1. **Створіть продукт в Stripe:**
   - Stripe Dashboard → Products → Add product
   - Name: `Subscribe to KPI BOARD - Dedicated BI Team`
   - Price: `$2,995.00` / month (recurring)
   - Save

2. **Створіть Payment Link:**
   - Stripe Dashboard → Payment Links → Create payment link
   - Виберіть створений продукт
   - Увімкніть: "Allow customers to pause subscriptions" ✅
   - Скопіюйте URL (виглядає як `https://buy.stripe.com/...`)

3. **Оновіть `js/stripe-checkout.js`:**
   ```javascript
   const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/YOUR_LINK_ID';
   ```

4. **Готово!** Кнопка "Join today" тепер веде на Stripe Checkout.

### Варіант 2: Stripe Checkout Session (з backend)

1. Створіть продукт (як у Варіанті 1)
2. Скопіюйте Price ID (починається з `price_`)
3. Оновіть `js/stripe-checkout.js`:
   ```javascript
   const STRIPE_PRICE_ID = 'price_YOUR_PRICE_ID';
   ```
4. Створіть backend endpoint `/api/create-checkout-session` (див. `STRIPE_SETUP_INSTRUCTIONS.md`)

## Налаштування паузи підписки

1. Stripe Dashboard → Settings → Billing → Customer portal
2. Увімкніть: **"Allow customers to pause subscriptions"** ✅
3. Налаштуйте тривалість паузи (Unlimited або вкажіть термін)

## Тестування

Використовуйте тестову картку: `4242 4242 4242 4242`

## Детальні інструкції

Див. `STRIPE_SETUP_INSTRUCTIONS.md` для повної документації.
