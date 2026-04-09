/**
 * Creates Stripe Coupon + Promotion code KPIBOARD34 for the KPI BOARD subscription product(s).
 *
 * Usage (from kpiboard.io):
 *   set STRIPE_SECRET_KEY=sk_live_...
 *   node scripts/create-kpiboard34-promo.mjs
 *
 * Optional env:
 *   STRIPE_PRICE_ID     — default: basic-monthly from api/stripe-prices.js
 *   ALL_PLAN_PRODUCTS=1 — attach coupon to every product used by prices in stripe-prices.js
 *   PERCENT_OFF         — default: 34 (matches site "-34% off")
 *   COUPON_ID           — default: kpiboard34_off (Stripe coupon id, must be unique)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import Stripe from "stripe";

const require = createRequire(import.meta.url);
const { STRIPE_PRICE_IDS } = require("../api/stripe-prices.js");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

function loadStripeSecret() {
  if (process.env.STRIPE_SECRET_KEY?.trim()) {
    return process.env.STRIPE_SECRET_KEY.trim();
  }
  const candidates = [
    path.resolve(rootDir, "env.local"),
    path.resolve(rootDir, "..", "env.local"),
  ];
  for (const p of candidates) {
    if (!fs.existsSync(p)) continue;
    const raw = fs.readFileSync(p, "utf8");
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^STRIPE_SECRET_KEY\s*=\s*(.+)$/);
      if (m) return m[1].trim().replace(/^["']|["']$/g, "");
    }
  }
  return null;
}

const defaultPriceId = STRIPE_PRICE_IDS["basic-monthly"];

const secret = loadStripeSecret();
if (!secret) {
  console.error(
    "Set STRIPE_SECRET_KEY (or add it to env.local in kpiboard.io or kpiboard_io root)."
  );
  process.exit(1);
}

const stripe = new Stripe(secret);
const priceId = process.env.STRIPE_PRICE_ID || defaultPriceId;
const percentOff = parseInt(process.env.PERCENT_OFF || "34", 10);
const couponId = (process.env.COUPON_ID || "kpiboard34_off").replace(/\s/g, "");

let productIds;
if (process.env.ALL_PLAN_PRODUCTS === "1") {
  const uniq = new Set();
  for (const pid of Object.values(STRIPE_PRICE_IDS)) {
    const pr = await stripe.prices.retrieve(pid);
    const id = typeof pr.product === "string" ? pr.product : pr.product.id;
    uniq.add(id);
  }
  productIds = [...uniq];
  console.log("ALL_PLAN_PRODUCTS: products", productIds.join(", "));
} else {
  const price = await stripe.prices.retrieve(priceId, { expand: ["product"] });
  const product =
    typeof price.product === "object" && price.product
      ? price.product
      : await stripe.products.retrieve(price.product);
  productIds = [product.id];
  console.log("Price:", priceId);
  console.log("Product:", product.id, product.name || "");
}

let coupon;
try {
  coupon = await stripe.coupons.create({
    id: couponId,
    name: "KPIBOARD34 — site offer",
    percent_off: percentOff,
    duration: "forever",
    applies_to: { products: productIds },
  });
  console.log("Created coupon:", coupon.id);
} catch (e) {
  if (e.code === "resource_already_exists") {
    coupon = await stripe.coupons.retrieve(couponId);
    console.log("Using existing coupon:", coupon.id);
  } else {
    throw e;
  }
}

let promo;
try {
  promo = await stripe.promotionCodes.create({
    coupon: coupon.id,
    code: "KPIBOARD34",
    active: true,
  });
  console.log("Created promotion code:", promo.code, "id:", promo.id);
} catch (e) {
  if (
    e.code === "resource_already_exists" ||
    (e.message && String(e.message).includes("already exists"))
  ) {
    const list = await stripe.promotionCodes.list({
      code: "KPIBOARD34",
      limit: 1,
    });
    promo = list.data[0];
    if (promo) {
      await stripe.promotionCodes.update(promo.id, { active: true });
      console.log(
        "Promotion code KPIBOARD34 already exists; ensured active. id:",
        promo.id
      );
    } else {
      throw e;
    }
  } else {
    throw e;
  }
}

console.log("\nDone. Stripe Dashboard: Billing → Coupons / Promotion codes.");
console.log(
  "Checkout: KPIBOARD34 →",
  percentOff + "% off, products:",
  productIds.join(", ")
);
