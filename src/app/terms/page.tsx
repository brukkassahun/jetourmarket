import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import {
  FileCheck,
  Car,
  CreditCard,
  Ship,
  ShieldCheck,
  Scale,
  Gavel,
  RefreshCw,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that apply when you purchase Jetour vehicles for export from China through Jetour Market, including pricing, payment, shipping, and warranties.",
  alternates: { canonical: `${site.url}/terms` },
  openGraph: {
    title: "Terms of Service · Jetour Market",
    description:
      "Terms and conditions for buying Jetour vehicles direct from China — pricing, payment, shipping, warranties, and dispute resolution.",
    url: `${site.url}/terms`,
    type: "website",
  },
};

const lastUpdated = "October 26, 2026";

const sections = [
  {
    icon: FileCheck,
    title: "Acceptance of Terms",
    body: (
      <div className="space-y-3">
        <p>
          These Terms of Service govern your use of the {site.name} website
          ({site.url}) and any purchase of Jetour vehicles arranged through us
          for export from China. By browsing the site, submitting an inquiry,
          requesting a quotation, or placing an order, you confirm that you have
          read, understood, and agree to be bound by these terms.
        </p>
        <p>
          If you do not agree with any part of these terms, please do not use
          our services or place an order. We may update these terms from time to
          time in line with the &quot;Changes to Terms&quot; section below.
        </p>
        <p>
          You confirm that you are at least 18 years of age and legally able to
          enter into a purchase agreement in your country of residence.
        </p>
      </div>
    ),
  },
  {
    icon: Car,
    title: "Vehicle Purchases",
    body: (
      <div className="space-y-3">
        <p>
          All vehicles offered by {site.name} are genuine Jetour models sourced
          directly from the Jetour production line in China. The following
          applies to every purchase:
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            <strong>Pricing currency.</strong> Vehicle prices are set in Chinese
            Yuan (CNY) at the factory level. For your convenience, the website
            displays an approximate converted price in your selected currency
            (USD, NGN, GHS, AED, or EUR) using a reference exchange rate. The
            exchange rate is indicative only; the final amount payable is
            calculated at the rate confirmed on your proforma invoice.
          </li>
          <li>
            <strong>Left-hand drive only.</strong> All vehicles are supplied in
            left-hand drive (LHD) configuration, as produced by Jetour for
            domestic and LHD export markets. We do not offer right-hand drive
            (RHD) conversions.
          </li>
          <li>
            <strong>Vehicle condition.</strong> Vehicles are listed as either
            &quot;New&quot; (factory-fresh, zero kilometres, full factory
            warranty) or &quot;Used&quot; (pre-owned, inspected, with
            documented mileage and history). The condition is clearly marked on
            each listing.
          </li>
          <li>
            <strong>Specifications.</strong> Listed specifications (engine,
            transmission, seating, features) are based on the standard Jetour
            configuration for the model and market. Final specifications are
            confirmed on the proforma invoice before you pay a deposit.
          </li>
          <li>
            <strong>Availability.</strong> Vehicle availability is subject to
            production scheduling and stock at the time of order confirmation.
            We will inform you promptly if a model is temporarily unavailable
            and offer an equivalent alternative where possible.
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: CreditCard,
    title: "Payment Terms",
    body: (
      <div className="space-y-3">
        <p>
          Orders are processed in two stages, each with its own payment
          requirement. All payments are made by international bank transfer
          (T/T) to our designated account unless otherwise agreed in writing.
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            <strong>Deposit.</strong> A deposit of 30% of the total vehicle
            price is required to confirm your order, lock in pricing, and
            initiate vehicle allocation and preparation. The deposit is
            non-refundable once the vehicle has been allocated to your order, as
            it covers sourcing and pre-export preparation costs.
          </li>
          <li>
            <strong>Balance before shipping.</strong> The remaining 70% balance,
            plus shipping and documentation fees, must be settled in full before
            the vehicle is loaded onto the vessel. No vehicle will be released
            for shipping with an outstanding balance.
          </li>
          <li>
            <strong>Additional costs.</strong> Shipping (RoRo or container),
            marine insurance, China export documentation, and pre-export
            inspection fees are itemised on your proforma invoice and are
            payable with the balance unless otherwise stated.
          </li>
          <li>
            <strong>Currency of payment.</strong> Invoices are issued in USD.
            If you choose to pay in another currency, any bank conversion fees
            and exchange rate differences are your responsibility.
          </li>
          <li>
            <strong>Proof of payment.</strong> Please send the bank transfer
            slip or SWIFT confirmation to us on WhatsApp or by email so we can
            match your payment to your order without delay.
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: Ship,
    title: "Shipping & Delivery",
    body: (
      <div className="space-y-3">
        <p>
          We arrange export shipping from major Chinese ports (primarily Tianjin
          and Shanghai) to your destination port. Two shipping methods are
          available:
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            <strong>RoRo (Roll-on/Roll-off).</strong> The vehicle is driven
            aboard a dedicated car carrier vessel and driven off at the
            destination port. Best for single-vehicle orders and faster
            turnaround.
          </li>
          <li>
            <strong>Container shipping.</strong> The vehicle is secured inside a
            20ft or 40ft shipping container. Best for added protection, multiple
            vehicles, or destinations with limited RoRo service.
          </li>
        </ul>
        <p>
          <strong>Buyer responsibilities at destination.</strong> Unless we have
          expressly agreed otherwise in writing, the buyer is responsible for:
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>Import duties, taxes, and customs clearance fees at the destination port.</li>
          <li>Local vehicle registration, licensing, and number plates.</li>
          <li>
            Any pre-registration inspection required by the destination country
            (for example, roadworthiness or emissions testing).
          </li>
          <li>Arranging inland transport from the port to your final location.</li>
        </ul>
        <p>
          Delivery is considered complete when the vehicle arrives at the
          destination port and is made available for your collection. Transit
          times are estimates and may vary with vessel schedules and port
          congestion.
        </p>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Warranties",
    body: (
      <div className="space-y-3">
        <p>
          Vehicles are sold on an &quot;as-is&quot; basis at the point of
          delivery at the destination port, except where a manufacturer warranty
          applies:
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            <strong>Factory warranty.</strong> New Jetour vehicles carry the
            manufacturer&apos;s warranty as applicable to the model and market.
            The warranty period and coverage are set by Jetour and are
            documented in the vehicle&apos;s warranty booklet. Warranty claims
            are handled through Jetour&apos;s authorised service network where
            available in your country.
          </li>
          <li>
            <strong>Used vehicles.</strong> Used vehicles are sold as-is, with
            any remaining factory warranty (if transferable) being the only
            applicable coverage. We provide a full inspection report and
            documented mileage for every used vehicle before export.
          </li>
          <li>
            <strong>Pre-export inspection.</strong> Every vehicle is inspected
            before loading to confirm it matches the agreed specification and is
            in the stated condition. Any discrepancy must be reported to us
            within 48 hours of collection at the destination port.
          </li>
          <li>
            <strong>Exclusions.</strong> We are not responsible for damage
            caused by improper handling after delivery, unauthorised
            modifications, failure to perform required servicing, or issues
            arising from local fuel quality or road conditions.
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    body: (
      <div className="space-y-3">
        <p>
          To the fullest extent permitted by law, {site.name} shall not be
          liable for any indirect, incidental, special, or consequential damages
          arising from your purchase, including but not limited to loss of use,
          loss of income, or costs of alternative transport.
        </p>
        <p>
          Our total liability for any claim arising from a vehicle purchase is
          limited to the vehicle purchase price paid by you to {site.name}. We
          are not liable for delays caused by shipping lines, customs
          authorities, port operators, or other third parties outside our
          control.
        </p>
        <p>
          We are not responsible for the destination country&apos;s import
          regulations, including any restrictions, prohibitions, or changes in
          duty rates that may affect your ability to import or register the
          vehicle. You are responsible for verifying import eligibility before
          placing an order.
        </p>
      </div>
    ),
  },
  {
    icon: Gavel,
    title: "Dispute Resolution",
    body: (
      <div className="space-y-3">
        <p>
          We are committed to resolving any concern or dispute promptly and
          fairly. If you have an issue with your order, please contact us first
          on WhatsApp or by email so we can attempt to resolve it directly.
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            <strong>Step 1 — Direct discussion.</strong> Raise the issue with
            our team within 14 days of the event giving rise to the dispute. We
            will respond within 7 business days.
          </li>
          <li>
            <strong>Step 2 — Formal complaint.</strong> If the matter is not
            resolved, you may submit a formal written complaint to {site.email},
            which will be reviewed by management.
          </li>
          <li>
            <strong>Step 3 — Arbitration.</strong> Any dispute that cannot be
            resolved amicably shall be referred to arbitration in China in
            accordance with the rules of the China International Economic and
            Trade Arbitration Commission (CIETAC), with the seat of arbitration
            in Beijing and the language of proceedings in English.
          </li>
        </ul>
        <p>
          These terms are governed by the laws of the People&apos;s Republic of
          China, without regard to conflict-of-laws principles.
        </p>
      </div>
    ),
  },
  {
    icon: RefreshCw,
    title: "Changes to Terms",
    body: (
      <div className="space-y-3">
        <p>
          We may update these Terms of Service from time to time to reflect
          changes in our operations, shipping routes, payment methods, or
          applicable regulations. When we do, we will revise the &quot;Last
          updated&quot; date at the top of this page.
        </p>
        <p>
          For material changes that affect existing orders, we will notify you
          directly on WhatsApp or by email. Continued use of our services after
          changes take effect constitutes acceptance of the updated terms.
        </p>
        <p>
          We encourage you to review this page periodically to stay informed of
          any updates.
        </p>
      </div>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-asphalt-border bg-asphalt">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-flare/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-electric" aria-hidden="true" />
            Legal
          </span>
          <h1 className="display-lg mt-5 text-silver-bright">Terms of Service</h1>
          <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-silver sm:text-base">
            These terms govern every purchase of a Jetour vehicle arranged
            through {site.name} for export from China. Please read them
            carefully before placing an order.
          </p>
          <p className="mt-4 font-sans text-xs font-bold uppercase tracking-[0.18em] text-steel-muted">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="border-b border-asphalt-border bg-asphalt-light">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="card-dark p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h2 className="title text-silver-bright">{s.title}</h2>
                  </div>
                  <div className="mt-5 space-y-3 font-sans text-sm leading-relaxed text-silver sm:text-base">
                    {s.body}
                  </div>
                </article>
              );
            })}

            {/* Contact */}
            <article className="card-dark p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  <Mail className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h2 className="title text-silver-bright">Questions About These Terms?</h2>
              </div>
              <div className="mt-5 space-y-3 font-sans text-sm leading-relaxed text-silver sm:text-base">
                <p>
                  If anything in these Terms of Service is unclear, or you would
                  like to discuss a specific clause before ordering, our team is
                  happy to help.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappLink(
                      "Hi, I have a question about your Terms of Service.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Chat On WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/contact" className="btn-ghost">
                    Contact Page
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
