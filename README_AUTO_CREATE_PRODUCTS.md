# Автоматичне створення продуктів Stripe

## Швидкий старт

Після деплою на Vercel, викликайте endpoint один раз для створення всіх продуктів:

### Варіант 1: Через браузер (найпростіше)

1. Відкрийте в браузері:
   ```
   https://www.kpiboard.io/api/create-products
   ```

2. Скопіюйте вміст з поля `updatedFile.content` з JSON відповіді

3. Вставте його в файл `api/stripe-prices.js` локально

4. Закомітьте та запуште зміни:
   ```bash
   git add api/stripe-prices.js
   git commit -m "Update Stripe Price IDs"
   git push origin main
   ```

### Варіант 2: Через скрипт (автоматично)

1. Запустіть скрипт:
   ```bash
   node scripts/update-prices-from-api.js https://www.kpiboard.io
   ```

2. Скрипт автоматично:
   - Викличе `/api/create-products`
   - Оновить `api/stripe-prices.js` з Price IDs
   - Виведе всі Product IDs та Price IDs

3. Закомітьте та запуште зміни:
   ```bash
   git add api/stripe-prices.js
   git commit -m "Update Stripe Price IDs"
   git push origin main
   ```

### Варіант 3: Через curl (термінал)

```bash
curl https://www.kpiboard.io/api/create-products | jq -r '.updatedFile.content' > api/stripe-prices.js
```

Потім закомітьте зміни:
```bash
git add api/stripe-prices.js
git commit -m "Update Stripe Price IDs"
git push origin main
```

## Що робить endpoint?

`/api/create-products` автоматично:

1. ✅ Створює 4 продукти в Stripe (Basic, Pro, Advanced, Enterprise)
2. ✅ Створює 12 цін (по 3 для кожного продукту: Monthly, Quarterly, Annual)
3. ✅ Повертає готовий код для `api/stripe-prices.js` з усіма Price IDs
4. ✅ Виводить всі Product IDs та Price IDs в JSON відповіді

## Перевірка

Після оновлення `api/stripe-prices.js`:

1. Перевірте, що всі Price IDs заповнені (не `null`)
2. Перевірте в Stripe Dashboard, що продукти створені
3. Перевірте кнопки "Buy subscription" на сайті - вони мають працювати з правильними цінами

## Важливо

- ⚠️ Викликайте endpoint **тільки один раз** після деплою
- ⚠️ Якщо викликати повторно, створяться дублікати продуктів
- ✅ Після створення продуктів, API endpoints автоматично використовуватимуть Price IDs
- ✅ Якщо Price IDs не встановлені, використовується fallback з `price_data`

## Структура відповіді

```json
{
  "success": true,
  "message": "Products and prices created successfully!",
  "products": {
    "basic": {
      "productId": "prod_xxx",
      "name": "Basic Plan",
      "prices": {
        "monthly": "price_xxx",
        "quarterly": "price_xxx",
        "annual": "price_xxx"
      }
    },
    ...
  },
  "priceIds": {
    "basic-monthly": "price_xxx",
    ...
  },
  "updatedFile": {
    "path": "api/stripe-prices.js",
    "content": "...",
    "instructions": "..."
  }
}
```

