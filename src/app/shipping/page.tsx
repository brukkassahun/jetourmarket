import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { site, whatsappLink } from "@/lib/site";
import {
  Ship,
  Container,
  Anchor,
  Route,
  Clock,
  DollarSign,
  FileCheck,
  ShieldCheck,
  MapPin,
  PackageCheck,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Logistics",
  description:
    "How Jetour Market ships vehicles from China to Africa, the Middle East, South America, and Southeast Asia — RoRo and container methods, routes, transit times, costs, customs, insurance, and tracking.",
  alternates: { canonical: `${site.url}/shipping` },
  openGraph: {
    title: "Shipping & Logistics · Jetour Market",
    description:
      "RoRo and container shipping of Jetour vehicles from Tianjin and Shanghai to 30+ countries. Routes, transit times, costs, customs, and tracking.",
    url: `${site.url}/shipping`,
    type: "website",
  },
};

const shippingMethods = [
  {
    icon: Ship,
    title: "RoRo — Roll-on / Roll-off",
    badge: "Most Popular",
    description:
      "Your vehicle is driven aboard a dedicated car carrier vessel at the port of origin and driven off at the destination port. RoRo is the simplest and usually the most cost-effective method for single-vehicle orders.",
    points: [
      "Fastest loading and unloading — no container packing required.",
      "Lower cost for a single vehicle on routes with regular RoRo service.",
      "Vehicle remains drivable throughout — no disassembly or reassembly.",
      "Ideal for standard SUVs like the Jetour T2, X70, and X90.",
    ],
  },
  {
    icon: Container,
    title: "Container Shipping",
    badge: "Maximum Protection",
    description:
      "Your vehicle is secured inside a sealed shipping container for the full voyage. Container shipping offers the highest level of protection and is recommended for high-value vehicles or destinations without RoRo service.",
    points: [
      "20ft container — fits one standard SUV with securing straps and braces.",
      "40ft container — fits up to three or four vehicles, ideal for wholesale and dealer orders.",
      "Sealed container reduces exposure to weather, handling, and theft risk.",
      "Best for ports without dedicated RoRo car carrier service.",
    ],
  },
];

const routes = [
  {
    region: "Africa",
    ports: "Tianjin / Shanghai → Lagos (Nigeria), Tema (Ghana), Mombasa (Kenya), Dar es Salaam (Tanzania), Durban (South Africa)",
  },
  {
    region: "Middle East",
    ports: "Tianjin / Shanghai → Jebel Ali (UAE), Dammam (Saudi Arabia), Doha (Qatar), Bandar Abbas (Iran)",
  },
  {
    region: "South America",
    ports: "Shanghai → Callao (Peru), Guayaquil (Ecuador), Buenaventura (Colombia), Santos (Brazil)",
  },
  {
    region: "Southeast Asia",
    ports: "Shanghai → Manila (Philippines), Ho Chi Minh City (Vietnam), Bangkok (Thailand), Jakarta (Indonesia)",
  },
];

const transitTimes = [
  { route: "China → Lagos, Nigeria", roro: "30 – 38 days", container: "38 – 45 days" },
  { route: "China → Tema, Ghana", roro: "32 – 40 days", container: "40 – 48 days" },
  { route: "China → Mombasa, Kenya", roro: "28 – 35 days", container: "35 – 42 days" },
  { route: "China → Dar es Salaam, Tanzania", roro: "26 – 33 days", container: "33 – 40 days" },
  { route: "China → Durban, South Africa", roro: "24 – 30 days", container: "30 – 38 days" },
  { route: "China → Jebel Ali, UAE", roro: "18 – 24 days", container: "22 – 28 days" },
  { route: "China → Dammam, Saudi Arabia", roro: "20 – 26 days", container: "24 – 32 days" },
  { route: "China → Callao, Peru", roro: "35 – 42 days", container: "42 – 50 days" },
  { route: "China → Manila, Philippines", roro: "10 – 14 days", container: "14 – 18 days" },
  { route: "China → Ho Chi Minh City, Vietnam", roro: "9 – 13 days", container: "13 – 17 days" },
];

const costFactors = [
  "Shipping method — RoRo is typically cheaper per vehicle, while container offers better per-unit cost when consolidating multiple vehicles.",
  "Destination port and distance from China — longer voyages and less-traded routes cost more.",
  "Vehicle size and weight — larger SUVs like the X90 Plus may carry a surcharge on RoRo vessels.",
  "Container type — a 40ft container is more economical per vehicle when shipping three or more units.",
  "Seasonal demand and vessel availability — rates rise during peak shipping seasons and Chinese public holidays.",
  "Marine insurance and documentation fees — itemised separately on your proforma invoice.",
];

const customsDocs = [
  {
    icon: FileCheck,
    title: "Export Documents (Handled By Us)",
    items: [
      "China Customs export declaration",
      "Commercial invoice and packing list",
      "Certificate of Origin (CO) where required",
      "Pre-export inspection certificate (CQC / VIN verification)",
      "Bill of Lading issued by the shipping line",
    ],
  },
  {
    icon: PackageCheck,
    title: "Import Documents (Buyer Responsibility)",
    items: [
      "Import permit or licence (if required by your country)",
      "Customs declaration and payment of import duties and taxes",
      "Pre-registration or roadworthiness inspection (if applicable)",
      "Vehicle registration and number plates with your local authority",
      "Arrangement of inland transport from the port to your location",
    ],
  },
];

export default function ShippingPage() {
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
              <span className="h-1.5 w-1.5 rounded-full bg-electric" aria-hidden="true" />
              Logistics
            </span>
            <h1 className="display-lg mt-5 text-silver-bright">Shipping & Logistics</h1>
            <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-silver sm:text-base">
              We ship Jetour vehicles from Tianjin and Shanghai to more than 30
              countries across Africa, the Middle East, South America, and
              Southeast Asia. Choose RoRo for speed and simplicity, or container
              for maximum protection. Either way, we handle the export
              paperwork and keep you updated from loading to arrival.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="border-b border-asphalt-border bg-asphalt-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
              Methods
            </span>
            <h2 className="display-md mt-4 text-silver-bright">Shipping Methods</h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-silver sm:text-base">
              Two reliable ways to move your Jetour from China to your port.
              We&apos;ll recommend the best option based on your destination,
              order size, and budget.
            </p>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {shippingMethods.map((m, i) => {
              const Icon = m.icon;
              return (
                <FadeIn key={m.title} delay={i * 0.08}>
                  <div className="card-dark h-full p-6 sm:p-8 hover:border-electric">
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </span>
                      <span className="badge badge-available">{m.badge}</span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-silver-bright">
                      {m.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-silver">
                      {m.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {m.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 font-sans text-xs leading-relaxed text-steel sm:text-sm"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric"
                            aria-hidden="true"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shipping Routes */}
      <section className="border-b border-asphalt-border bg-asphalt">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-flare" aria-hidden="true" />
              Network
            </span>
            <h2 className="display-md mt-4 text-silver-bright">Shipping Routes</h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-silver sm:text-base">
              Our primary departure ports are Tianjin in northern China and
              Shanghai in eastern China. Below are the main destination regions
              and ports we serve.
            </p>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {routes.map((r, i) => (
              <FadeIn key={r.region} delay={i * 0.08}>
                <div className="card-dark h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-flare/10 text-flare">
                      <Route className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-base font-bold uppercase tracking-tight text-silver-bright">
                      {r.region}
                    </h3>
                  </div>
                  <p className="mt-3 flex items-start gap-2 font-sans text-xs leading-relaxed text-steel sm:text-sm">
                    <MapPin
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-steel-muted"
                      strokeWidth={1.75}
                    />
                    {r.ports}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Transit Times */}
      <section className="border-b border-asphalt-border bg-asphalt-light">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-electric" aria-hidden="true" />
              Schedules
            </span>
            <h2 className="display-md mt-4 text-silver-bright">Estimated Transit Times</h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-silver sm:text-base">
              Typical voyage durations from China to common destination ports.
              These are estimates and may vary with vessel schedules, port
              congestion, and weather.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="mt-8 card-dark overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 border-b border-asphalt-border bg-asphalt-light px-5 py-3 sm:px-6">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-steel-muted">
                  Route
                </span>
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-steel-muted">
                  RoRo
                </span>
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-steel-muted">
                  Container
                </span>
              </div>
              <ul className="divide-y divide-asphalt-border">
                {transitTimes.map((t) => (
                  <li
                    key={t.route}
                    className="grid grid-cols-3 gap-4 px-5 py-3 sm:px-6"
                  >
                    <span className="font-sans text-xs font-semibold text-silver-bright sm:text-sm">
                      {t.route}
                    </span>
                    <span className="flex items-center gap-1.5 font-sans text-xs text-steel sm:text-sm">
                      <Ship className="h-3.5 w-3.5 text-electric" strokeWidth={2} />
                      {t.roro}
                    </span>
                    <span className="flex items-center gap-1.5 font-sans text-xs text-steel sm:text-sm">
                      <Container className="h-3.5 w-3.5 text-signal" strokeWidth={2} />
                      {t.container}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 flex items-center gap-2 font-sans text-xs text-steel-muted">
              <Clock className="h-4 w-4" strokeWidth={1.75} />
              Times are from vessel departure to port arrival and exclude
              vehicle preparation, customs clearance, and inland transport.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Shipping Costs */}
      <section className="border-b border-asphalt-border bg-asphalt">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
              Pricing
            </span>
            <h2 className="display-md mt-4 text-silver-bright">Shipping Costs</h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-silver sm:text-base">
              Shipping cost is quoted per order based on the factors below. We
              provide a fixed shipping quote on your proforma invoice, so there
              are no surprises after you confirm the order.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="mt-8 card-dark p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <DollarSign className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-silver-bright">
                  Factors That Affect Cost
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {costFactors.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 font-sans text-sm leading-relaxed text-silver"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric"
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Customs & Documentation */}
      <section className="border-b border-asphalt-border bg-asphalt-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-flare" aria-hidden="true" />
              Paperwork
            </span>
            <h2 className="display-md mt-4 text-silver-bright">Customs & Documentation</h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-silver sm:text-base">
              We handle all China-side export documentation. You are responsible
              for import clearance and registration in your country. Here is who
              does what.
            </p>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {customsDocs.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn key={c.title} delay={i * 0.08}>
                  <div className="card-dark h-full p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <h3 className="font-display text-base font-bold text-silver-bright">
                        {c.title}
                      </h3>
                    </div>
                    <ul className="mt-5 space-y-2.5">
                      {c.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 font-sans text-xs leading-relaxed text-steel sm:text-sm"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance & Tracking */}
      <section className="border-b border-asphalt-border bg-asphalt">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Insurance */}
            <FadeIn>
              <div className="card-dark h-full p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal/10 text-signal">
                    <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-base font-bold uppercase tracking-tight text-silver-bright">
                    Insurance Options
                  </h3>
                </div>
                <div className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-silver">
                  <p>
                    Marine transit insurance protects your vehicle against loss
                    or damage during the sea voyage. We strongly recommend it for
                    every shipment.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-xs text-steel sm:text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal" aria-hidden="true" />
                      <strong>All-risk cover</strong> — protects against theft,
                      total loss, and accidental damage during loading, transit,
                      and discharge.
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-steel sm:text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal" aria-hidden="true" />
                      <strong>Total loss cover</strong> — a lower-cost option
                      covering only the total loss of the vehicle.
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-steel sm:text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal" aria-hidden="true" />
                      Insurance is arranged at the same time as booking and is
                      itemised on your proforma invoice.
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Tracking */}
            <FadeIn delay={0.08}>
              <div className="card-dark h-full p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric">
                    <Anchor className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-base font-bold uppercase tracking-tight text-silver-bright">
                    Tracking Your Shipment
                  </h3>
                </div>
                <div className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-silver">
                  <p>
                    From the moment your vehicle leaves the factory to its
                    arrival at your port, we keep you informed at every stage.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5 text-xs text-steel sm:text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric" aria-hidden="true" />
                      <strong>Pre-export updates</strong> — photos and an
                      inspection report once your vehicle is prepared and ready
                      for loading.
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-steel sm:text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric" aria-hidden="true" />
                      <strong>Loading confirmation</strong> — bill of lading
                      number and vessel details once the vehicle is on board.
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-steel sm:text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric" aria-hidden="true" />
                      <strong>Voyage tracking</strong> — regular WhatsApp
                      updates on vessel position and estimated arrival date.
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-steel sm:text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric" aria-hidden="true" />
                      <strong>Arrival notice</strong> — confirmation when the
                      vessel arrives and the vehicle is ready for collection at
                      your port.
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
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
                  Get A Shipping Quote
                </h2>
                <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-silver sm:text-base">
                  Tell us your destination port and preferred shipping method,
                  and we&apos;ll send you a detailed quote with vehicle price,
                  freight, insurance, and documentation fees.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={whatsappLink(
                      "Hi, I'd like a shipping quote for a Jetour vehicle to my port. Can you help?",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Get Your Quote
                    <ArrowRight className="h-4 w-4" />
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
