# Локальне тестування API Endpoints

## Проблема
API endpoints (`/api/redirect-to-checkout`, `/api/create-checkout-session`) працюють тільки на Vercel як serverless functions. На звичайному localhost (Python http.server) вони не працюють.

## Рішення 1: Використання Vercel CLI (Рекомендовано)

### Встановлення Vercel CLI:
```bash
npm install -g vercel
```

### Запуск локального сервера:
```bash
vercel dev
```

Це запустить локальний сервер з підтримкою serverless functions.

## Рішення 2: Тестування на Vercel Preview

1. Задеплойте проект на Vercel:
   ```bash
   vercel
   ```

2. Тестуйте на preview URL, який надасть Vercel

## Рішення 3: Створення локального Node.js сервера (для розробки)

Якщо потрібно тестувати локально без Vercel CLI, можна створити простий Express сервер.

### Встановлення Express:
```bash
npm install express
```

### Створення server.js:
```javascript
const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static('.'));

// Proxy API calls to Vercel or handle locally
app.get('/api/*', (req, res) => {
  res.json({ 
    error: 'API endpoints work only on Vercel. Use "vercel dev" for local testing.' 
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Note: API endpoints require Vercel CLI. Run "vercel dev" instead.');
});
```

### Запуск:
```bash
node server.js
```

## Рекомендація

Для повного тестування Stripe інтеграції використовуйте:
```bash
vercel dev
```

Це дозволить:
- ✅ Тестувати API endpoints локально
- ✅ Використовувати environment variables
- ✅ Імітувати Vercel serverless functions

