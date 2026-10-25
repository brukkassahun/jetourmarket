import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { carModels, trustBadges, whatsappLink } from "@/lib/site";
import CarCard, { type Car } from "@/components/CarCard";
import Hero from "@/components/Hero";

export const revalidate = 60;

/* --------------------------------- icons --------------------------------- */

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 20h20V8l-6 4V8l-6 4V4H4v16z" />
      <line x1="6" y1="16" x2="8" y2="16" />
      <line x1="11" y1="16" x2="13" y2="16" />
      <line x1="16" y1="16" x2="18" y2="16" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const badgeIcon = {
  globe: GlobeIcon,
  shield: ShieldIcon,
  factory: FactoryIcon,
} as const;

/* --------------------------------- page ---------------------------------- */

export default async function HomePage() {
  // Fetch featured cars + total available count in parallel.
  let featuredCars: Car[] = [];
  let availableCount = 0;
  try {
    const [featuredRes, countRes] = await Promise.all([
      supabaseAdmin
        .from("cars")
        .select("*")
        .eq("featured", true)
        .eq("status", "available")
        .order("created_at", { ascending: false })
        .limit(6),
      supabaseAdmin
        .from("cars")
        .select("id", { count: "exact", head: true })
        .eq("status", "available"),
    ]);
    featuredCars = (featuredRes.data ?? []) as Car[];
    availableCount = countRes.count ?? 0;
  } catch {
    /* Supabase not configured / unreachable — render with empty inventory */
  }

  const stats = [
    { value: "30+", label: "Countries Served" },
    { value: String(carModels.length), label: "Jetour Models" },
    {
      value: availableCount > 0 ? String(availableCount) : "100+",
      label: "Vehicles Available",
    },
    { value: "Direct", label: "Factory Pricing" },
  ];

  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Stats bar */}
      <section className="border-b border-asphalt-border bg-asphalt">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-stretch divide-x divide-asphalt-border overflow-x-auto rounded-2xl border border-asphalt-border bg-asphalt-card">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex min-w-[150px] flex-1 flex-col items-center justify-center px-4 py-5 text-center"
              >
                <span className="font-display text-2xl font-black text-silver-bright sm:text-3xl">
                  {s.value}
                </span>
                <span className="mt-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-steel-muted">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trust badges */}
      <section className="border-b border-asphalt-border bg-asphalt-light">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {trustBadges.map((b) => {
              const Icon = badgeIcon[b.icon as keyof typeof badgeIcon] ?? GlobeIcon;
              return (
                <div key={b.title} className="card-dark flex items-start gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-tight text-silver-bright">
                      {b.title}
                    </h3>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-silver">
                      {b.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured cars */}
      <section className="border-b border-asphalt-border bg-asphalt">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-flare" aria-hidden="true" />
                Featured
              </span>
              <h2 className="display-md mt-4 text-silver-bright">Featured Vehicles</h2>
            </div>
            <Link
              href="/cars"
              className="hidden shrink-0 items-center gap-1 font-sans text-xs font-bold uppercase tracking-[0.14em] text-electric hover:underline sm:inline-flex"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {featuredCars.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCars.map((car) => (
                <CarCard key={car.slug} car={car} />
              ))}
            </div>
          ) : (
            <div className="card-dark mt-8 flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-asphalt-border text-silver">
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 17H3v-5l2-5h11l2 5v5h-2" />
                  <circle cx="7.5" cy="17.5" r="2.5" />
                  <circle cx="16.5" cy="17.5" r="2.5" />
                </svg>
              </div>
              <p className="font-sans text-sm font-semibold text-silver-bright">
                Inventory coming soon
              </p>
              <p className="font-sans text-xs text-steel-muted">
                Our Jetour catalog is being updated. Check back shortly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 5. Model showcase */}
      <section className="border-b border-asphalt-border bg-asphalt-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            Lineup
          </span>
          <h2 className="display-md mt-4 text-silver-bright">Explore by Model</h2>
          <p className="mt-3 max-w-xl font-sans text-sm text-silver">
            From the off-road T2 flagship to the 7-seater X90 Plus, find the Jetour
            that fits your needs.
          </p>

          <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
            {carModels.map((m) => (
              <Link
                key={m.id}
                href={`/cars?model=${encodeURIComponent(m.id)}`}
                className="card-dark group flex w-60 shrink-0 snap-start flex-col p-5 hover:-translate-y-1 hover:border-electric"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-silver-bright">
                  {m.name}
                </h3>
                <p className="mt-1 font-sans text-xs text-silver">{m.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-electric transition-transform group-hover:translate-x-0.5">
                  View Listings <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-asphalt">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="card-dark relative overflow-hidden p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-signal/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="display-md text-silver-bright">
                Ready to find your Jetour?
              </h2>
              <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-silver sm:text-base">
                Chat with our export team on WhatsApp for personalized quotes,
                shipping estimates, and live availability — straight from the
                factory in China.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href={whatsappLink(
                    "Hi, I'm interested in buying a Jetour vehicle. Can you share available options?",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-signal"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
