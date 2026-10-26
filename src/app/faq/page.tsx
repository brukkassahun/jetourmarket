import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import {
  HelpCircle,
  Car,
  CreditCard,
  Ship,
  Settings,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about buying Jetour vehicles direct from China — ordering, payment, shipping, vehicle specifications, and after-sales support.",
  alternates: { canonical: `${site.url}/faq` },
  openGraph: {
    title: "Frequently Asked Questions · Jetour Market",
    description:
      "Common questions about buying and shipping Jetour vehicles from China to Africa, the Middle East, and beyond.",
    url: `${site.url}/faq`,
    type: "website",
  },
};

type Faq = { q: string; a: React.ReactNode };

const categories: {
  icon: typeof Car;
  title: string;
  items: Faq[];
}[] = [
  {
    icon: HelpCircle,
    title: "General Questions",
    items: [
      {
        q: "What is Jetour Market?",
        a: (
          <>
            <p>
              Jetour Market is a direct exporter of Jetour vehicles from China.
              We hold factory-direct access to the Jetour production line, which
              means we can secure genuine Jetour SUVs — including the T2,
              Dashing, X70, X70 Plus, X90, X90 Plus, and Traveller — at true
              ex-works pricing and arrange export shipping to your country.
            </p>
            <p className="mt-2">
              We cut out dealer markups and middleman fees, so buyers in Africa,
              the Middle East, South America, and Southeast Asia get the best
              possible price on a genuine, factory-backed Jetour.
            </p>
          </>
        ),
      },
      {
        q: "Which countries do you ship to?",
        a: (
          <>
            <p>
              We ship to more than 30 countries, with regular service to Africa
              (Nigeria, Ghana, Kenya, Tanzania, South Africa, and more), the
              Middle East (UAE, Saudi Arabia, Qatar, Iran), South America (Peru,
              Ecuador, Colombia, Brazil), and Southeast Asia (Philippines,
              Vietnam, Thailand, Indonesia).
            </p>
            <p className="mt-2">
              If your country is not listed, contact us on WhatsApp and we will
              check the latest available routes and ports for you.
            </p>
          </>
        ),
      },
      {
        q: "Are the vehicles genuine and factory-backed?",
        a: (
          <p>
            Yes. Every vehicle we supply is a genuine Jetour produced at the
            Jetour factory in China. New vehicles come with the
            manufacturer&apos;s factory warranty as applicable to the model and
            market, along with full documentation. We do not sell modified,
            cloned, or counterfeit vehicles.
          </p>
        ),
      },
    ],
  },
  {
    icon: Car,
    title: "Purchasing & Payment",
    items: [
      {
        q: "How do I place an order?",
        a: (
          <>
            <p>Placing an order is straightforward:</p>
            <ol className="ml-5 mt-2 list-decimal space-y-1">
              <li>Browse our catalog or message us with the model you want.</li>
              <li>Receive a proforma invoice with vehicle price, shipping, and fees.</li>
              <li>Pay the 30% deposit by bank transfer to confirm the order.</li>
              <li>We allocate, inspect, and prepare the vehicle for export.</li>
              <li>Pay the 70% balance plus shipping before loading.</li>
              <li>Vehicle ships and you collect it at your destination port.</li>
            </ol>
          </>
        ),
      },
      {
        q: "What payment methods do you accept?",
        a: (
          <p>
            We accept international bank transfers (T/T) to our designated
            account. Invoices are issued in USD; if you pay in another currency,
            any bank conversion fees and exchange rate differences are your
            responsibility. We do not currently accept credit cards, PayPal, or
            cryptocurrency. Always confirm our bank details on your proforma
            invoice before transferring funds.
          </p>
        ),
      },
      {
        q: "How much deposit is required, and is it refundable?",
        a: (
          <p>
            A 30% deposit of the vehicle price is required to confirm your
            order, lock in pricing, and start vehicle allocation. The deposit is
            non-refundable once the vehicle has been allocated to your order, as
            it covers sourcing and pre-export preparation costs. If we are unable
            to source the vehicle, the deposit will be refunded in full.
          </p>
        ),
      },
      {
        q: "Why are prices shown in different currencies?",
        a: (
          <p>
            Vehicle prices are set in Chinese Yuan (CNY) at the factory level.
            For convenience, the website shows an approximate converted price in
            your selected currency (USD, NGN, GHS, AED, or EUR) using a
            reference exchange rate. The final amount payable is calculated at
            the rate confirmed on your proforma invoice, so the displayed price
            is indicative only.
          </p>
        ),
      },
    ],
  },
  {
    icon: Ship,
    title: "Shipping & Delivery",
    items: [
      {
        q: "What shipping methods are available?",
        a: (
          <>
            <p>We offer two methods from Tianjin and Shanghai:</p>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>
                <strong>RoRo (Roll-on/Roll-off)</strong> — the vehicle is driven
                aboard a car carrier vessel. Best for single vehicles and faster
                turnaround.
              </li>
              <li>
                <strong>Container shipping</strong> — the vehicle is secured in a
                20ft or 40ft container. Best for added protection or multiple
                vehicles.
              </li>
            </ul>
          </>
        ),
      },
      {
        q: "How long does shipping take?",
        a: (
          <p>
            Transit times depend on the destination. For example, China to
            Lagos, Nigeria is around 30–38 days by RoRo and 38–45 days by
            container; China to Jebel Ali, UAE is around 18–24 days by RoRo; and
            China to Manila, Philippines is around 10–14 days by RoRo. These
            estimates exclude vehicle preparation, customs clearance, and inland
            transport. See our Shipping & Logistics page for full transit times.
          </p>
        ),
      },
      {
        q: "Who handles customs and import duties?",
        a: (
          <p>
            We handle all China-side export documentation, including the export
            customs declaration, certificate of origin, pre-export inspection
            certificate, and bill of lading. You are responsible for import
            duties, taxes, customs clearance, and vehicle registration in your
            destination country. Always verify your country&apos;s import rules
            and duty rates before ordering.
          </p>
        ),
      },
      {
        q: "Can I track my vehicle during shipping?",
        a: (
          <p>
            Yes. We send updates at every stage: pre-export photos and an
            inspection report, a loading confirmation with the bill of lading
            and vessel details, regular voyage position updates, and an arrival
            notice when the vehicle reaches your port. All updates are sent on
            WhatsApp.
          </p>
        ),
      },
    ],
  },
  {
    icon: Settings,
    title: "Vehicle Questions",
    items: [
      {
        q: "Are the vehicles left-hand drive or right-hand drive?",
        a: (
          <p>
            All vehicles are supplied in left-hand drive (LHD) configuration, as
            produced by Jetour for the domestic and LHD export markets. We do not
            offer right-hand drive (RHD) conversions. LHD is suitable for most
            of our destination countries in Africa, the Middle East, South
            America, and Southeast Asia.
          </p>
        ),
      },
      {
        q: "What is the difference between new and used vehicles?",
        a: (
          <p>
            New vehicles are factory-fresh with zero kilometres and the full
            Jetour factory warranty. Used vehicles are pre-owned, fully
            inspected, and sold with documented mileage and history; any
            remaining transferable factory warranty is the only applicable
            coverage. The condition is clearly marked on every listing.
          </p>
        ),
      },
      {
        q: "Which Jetour models do you offer?",
        a: (
          <p>
            Our catalog spans the full Jetour lineup, including the T2 off-road
            flagship, the Dashing coupe SUV, the X70 and X70 Plus family SUVs,
            the X90 and X90 Plus 7-seaters, and the Traveller adventure SUV.
            Availability varies with production scheduling, so contact us for
            current stock and lead times.
          </p>
        ),
      },
      {
        q: "Do the vehicles come with a warranty?",
        a: (
          <p>
            New Jetour vehicles carry the manufacturer&apos;s factory warranty as
            applicable to the model and market, documented in the vehicle&apos;s
            warranty booklet. Warranty claims are handled through Jetour&apos;s
            authorised service network where available in your country. Used
            vehicles are sold as-is, with any remaining transferable factory
            warranty being the only coverage.
          </p>
        ),
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-asphalt-border bg-asphalt">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-signal/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-electric" aria-hidden="true" />
            Help Center
          </span>
          <h1 className="display-lg mt-5 text-silver-bright">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-silver sm:text-base">
            Answers to the questions we hear most often from buyers across
            Africa, the Middle East, and beyond. Can&apos;t find what you&apos;re
            looking for? Message us on WhatsApp and we&apos;ll help directly.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="border-b border-asphalt-border bg-asphalt-light">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.title}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h2 className="title text-silver-bright">{cat.title}</h2>
                  </div>
                  <div className="mt-6 space-y-4">
                    {cat.items.map((item) => (
                      <div key={item.q} className="card-dark p-6 sm:p-7">
                        <h3 className="font-sans text-sm font-bold text-silver-bright sm:text-base">
                          {item.q}
                        </h3>
                        <div className="mt-3 space-y-2 font-sans text-sm leading-relaxed text-silver">
                          {item.a}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-asphalt">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-signal/15">
            <MessageCircle className="h-7 w-7 text-signal" strokeWidth={1.75} />
          </span>
          <h2 className="display-md mt-6 text-silver-bright">
            Still have questions?
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-silver sm:text-base">
            Chat with us on WhatsApp — our export team typically responds within
            2 hours and can help with quotes, shipping estimates, vehicle
            availability, and anything else you need.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(
                "Hi, I have a question about buying a Jetour vehicle from China.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Chat With Us On WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/contact" className="btn-ghost">
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
