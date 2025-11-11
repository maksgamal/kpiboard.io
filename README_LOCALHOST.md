# ⚠️ Важливо: API Endpoints на Localhost

## Проблема
API endpoints (`/api/redirect-to-checkout`, `/api/create-checkout-session`) **НЕ працюють** на звичайному localhost (Python http.server), тому що вони є **Vercel Serverless Functions**.

## Рішення: Використання Vercel CLI

### Крок 1: Встановіть Vercel CLI
```bash
npm install -g vercel
```

### Крок 2: Увійдіть в Vercel (якщо ще не увійшли)
```bash
vercel login
```

### Крок 3: Запустіть локальний сервер з підтримкою API
```bash
vercel dev
```

Це запустить сервер на `http://localhost:3000` (за замовчуванням) з повною підтримкою:
- ✅ API endpoints (`/api/*`)
- ✅ Environment variables
- ✅ Serverless functions

### Крок 4: Тестуйте
Відкрийте `http://localhost:3000` і перевірте кнопки "Buy subscription".

## Альтернатива: Тестування на Vercel Preview

Якщо не хочете встановлювати Vercel CLI:

1. Задеплойте проект на Vercel:
   ```bash
   vercel
   ```

2. Тестуйте на preview URL від Vercel

## Чому не працює на звичайному localhost?

- Python `http.server` - це простий статичний сервер
- Він не виконує JavaScript/Node.js код
- API endpoints (`/api/*`) - це Node.js функції, які виконуються на Vercel

## Швидка перевірка

Після запуску `vercel dev`, перевірте:
- `http://localhost:3000/api/redirect-to-checkout?plan=basic&billingCycle=monthly` - має перенаправити на Stripe

