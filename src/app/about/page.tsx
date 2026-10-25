import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Jetour Market is a direct exporter of Jetour vehicles from China to 30+ countries. Factory-direct access, LHD vehicles for Africa, the Middle East, and Europe.",
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: "About Jetour Market — Direct From China To Your Driveway",
    description:
      "Direct exporter of Jetour vehicles from China. Factory-direct pricing, global shipping, serving 30+ countries.",
    url: `${site.url}/about`,
    type: "website",
  },
};

/* --------------------------------- icons --------------------------------- */

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 20h20V8l-6 4V8l-6 4V4H4v16z" />
      <line x1="6" y1="16" x2="8" y2="16" />
      <line x1="11" y1="16" x2="13" y2="16" />
      <line x1="16" y1="16" x2="18" y2="16" />
    </svg>
  );
}

function SupportIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
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

const values = [
  {
    icon: ShieldIcon,
    title: "Quality Verified",
    description:
      "Every vehicle is inspected and verified before export. OEM-grade quality you can trust, backed by full documentation.",
  },
  {
    icon: FactoryIcon,
    title: "Factory Direct",
    description:
      "No middlemen, no markups. We secure vehicles directly from Jetour's production line at true factory-direct pricing.",
  },
  {
    icon: GlobeIcon,
    title: "Global Shipping",
    description:
      "RoRo and container shipping to 30+ countries across Africa, the Middle East, and Europe. We handle the logistics.",
  },
  {
    icon: SupportIcon,
    title: "Customer Support",
    description:
      "From inquiry to delivery, our team supports you in real time on WhatsApp — before, during, and after your purchase.",
  },
];

const stats = [
  { value: "30+", label: "Countries Served" },
  { value: "7+", label: "Jetour Models" },
  { value: "100+", label: "Vehicles Sold" },
  { value: "5-Star", label: "Service" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-asphalt-border bg-asphalt">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-signal/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <FadeIn>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-flare" aria-hidden="true" />
              About Us
            </span>
            <h1 className="display-lg mt-5 text-silver-bright">
              Direct From China. To Your Driveway.
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-silver sm:text-base">
              Jetour Market is a direct exporter of Jetour vehicles from China to
              global markets. We connect buyers worldwide with factory-direct
              pricing, verified quality, and reliable shipping — cutting out the
              middlemen so you get the best deal on a genuine Jetour.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-asphalt-border bg-asphalt-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <FadeIn className="lg:col-span-1">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                Our Story
              </span>
              <h2 className="title mt-4 text-silver-bright">
                Built on Factory Access
              </h2>
            </FadeIn>
            <div className="space-y-5 lg:col-span-2">
              <FadeIn delay={0.05}>
                <p className="font-sans text-sm leading-relaxed text-silver sm:text-base">
                  Jetour Market was founded with a simple mission: make buying a
                  Jetour vehicle direct from China straightforward, transparent,
                  and affordable. Because we hold factory-direct access to the
                  Jetour production line, our customers never pay dealer markups
                  or unnecessary middleman fees — they pay true ex-works pricing,
                  straight from the source.
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="font-sans text-sm leading-relaxed text-silver sm:text-base">
                  Today we serve importers and individual buyers across more than
                  30 countries, with a focus on left-hand-drive (LHD) Jetour
                  vehicles destined for Africa, the Middle East, and Europe. From
                  the off-road T2 flagship to the 7-seater X90 Plus, our catalog
                  spans the full Jetour lineup, ready for export.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="font-sans text-sm leading-relaxed text-silver sm:text-base">
                  Every order is handled end-to-end: vehicle sourcing, pre-export
                  inspection, documentation, RoRo or container shipping, and
                  final delivery to your port. Our team supports you on WhatsApp
                  throughout the entire process — so you always know exactly
                  where your vehicle is.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-asphalt-border bg-asphalt">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-electric" aria-hidden="true" />
              What We Stand For
            </span>
            <h2 className="display-md mt-4 text-silver-bright">Our Values</h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-silver">
              Four commitments that define how we do business — and why buyers
              in 30+ countries trust us with their Jetour purchase.
            </p>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={v.title} delay={i * 0.08}>
                  <div className="card-dark h-full p-6 hover:-translate-y-1 hover:border-electric">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-sm font-bold uppercase tracking-tight text-silver-bright">
                      {v.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-silver">
                      {v.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-asphalt-border bg-asphalt-light">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-stretch divide-x divide-asphalt-border overflow-x-auto rounded-2xl border border-asphalt-border bg-asphalt-card">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex min-w-[150px] flex-1 flex-col items-center justify-center px-4 py-6 text-center"
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

      {/* CTA */}
      <section className="bg-asphalt">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn>
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
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={whatsappLink(
                      "Hi, I'd like to learn more about buying a Jetour direct from China.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-signal"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                  <Link href="/cars" className="btn-ghost">
                    Browse Vehicles
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
