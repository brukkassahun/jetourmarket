export const site = {
  name: "Jetour Market",
  tagline: "New & Used Jetour Vehicles Direct From China",
  description:
    "Buy new and used Jetour vehicles direct from China. Factory-direct pricing, global shipping, and OEM-grade quality. T2, Dashing, X70, X90 and more.",
  phone: process.env.WHATSAPP_NUMBER || "8615365806070",
  whatsapp: process.env.WHATSAPP_NUMBER || "8615365806070",
  wechat: process.env.WECHAT_ID || "JETOURMARKET",
  email: process.env.CONTACT_EMAIL || "contact@jetourmarket.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jetourmarket.com",
  address: "China",
  currency: "USD" as const,
  exchangeRate: 7.2, // CNY to USD
};

export const navLinks = [
  { href: "/cars", label: "Browse Cars" },
  { href: "/cars?condition=new", label: "New" },
  { href: "/cars?condition=used", label: "Used" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Car model catalog
export const carModels = [
  { id: "T2", name: "Jetour T2", tagline: "Off-road flagship SUV" },
  { id: "Dashing", name: "Jetour Dashing", tagline: "Coupe SUV" },
  { id: "X70", name: "Jetour X70", tagline: "Mid-size family SUV" },
  { id: "X70 Plus", name: "Jetour X70 Plus", tagline: "Upgraded family SUV" },
  { id: "X90", name: "Jetour X90", tagline: "Large 7-seater SUV" },
  { id: "X90 Plus", name: "Jetour X90 Plus", tagline: "Premium 7-seater SUV" },
  { id: "Traveller", name: "Jetour Traveller", tagline: "Adventure SUV" },
] as const;

export const trustBadges = [
  { icon: "globe", title: "Global Shipping", sub: "RoRo & container shipping to 30+ countries" },
  { icon: "shield", title: "Quality Verified", sub: "Every vehicle inspected before export" },
  { icon: "factory", title: "Factory Direct", sub: "No middlemen — buy direct from China" },
];

export const currencies = [
  { code: "USD", symbol: "$", rate: 1, label: "US Dollar" },
  { code: "CNY", symbol: "¥", rate: 7.2, label: "Chinese Yuan" },
  { code: "NGN", symbol: "₦", rate: 1530, label: "Nigerian Naira" },
  { code: "GHS", symbol: "₵", rate: 15.4, label: "Ghanaian Cedi" },
  { code: "AED", symbol: "AED", rate: 3.67, label: "UAE Dirham" },
  { code: "EUR", symbol: "€", rate: 0.92, label: "Euro" },
] as const;

export type CurrencyCode = (typeof currencies)[number]["code"];

// Price conversion: CNY input -> USD base -> display currency
export function cnyToUsd(cny: number): number {
  return Math.round(cny / site.exchangeRate);
}

export function formatPrice(cny: number, currencyCode: CurrencyCode = "USD"): string {
  const usd = cnyToUsd(cny);
  const currency = currencies.find(c => c.code === currencyCode);
  if (!currency) return `$${usd.toLocaleString()}`;
  const converted = Math.round(usd * currency.rate);
  return `${currency.symbol}${converted.toLocaleString()}`;
}
