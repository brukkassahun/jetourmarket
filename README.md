# Jetour Market

New & used Jetour vehicles direct from China. Full e-commerce marketplace for Jetour cars with global shipping.

## Tech Stack
- Next.js 14 (App Router)
- Supabase (PostgreSQL)
- Tailwind CSS (dark automotive theme)
- Vercel Blob (image storage)
- Vercel (hosting)

## Setup

### 1. Database
Run `supabase/schema.sql` in Supabase SQL Editor. Creates `cars` and `inquiries` tables.

### 2. Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=https://mmpyoqifmeanwtydghqe.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
BLOB_READ_WRITE_TOKEN=your_b...TE_URL=https://jetourmarket.com
WHATSAPP_NUMBER=8615365806070
WECHAT_ID=JETOURMARKET
CONTACT_EMAIL=contact@jetourmarket.com
```

### 3. Deploy to Vercel
Import repo, add env vars, deploy. Add domain `jetourmarket.com` in Settings > Domains.

## Pages
- `/` — Homepage (hero, featured cars, trust badges, model showcase)
- `/cars` — Car listing with filters (model, condition, sort)
- `/cars/[slug]` — Car detail with gallery, specs, WhatsApp inquiry
- `/about` — About page
- `/contact` — Contact form (saves to DB + WhatsApp)
- `/wholesale` — B2B bulk purchasing page
- `/api/inquiries` — POST endpoint for contact form submissions

## Car Models
T2, Dashing, X70, X70 Plus, X90, X90 Plus, Traveller
