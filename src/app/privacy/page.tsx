import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import {
  User,
  Database,
  Share2,
  Lock,
  Cookie,
  ShieldCheck,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Jetour Market collects, uses, and protects your personal information when you inquire about or purchase Jetour vehicles for export from China.",
  alternates: { canonical: `${site.url}/privacy` },
  openGraph: {
    title: "Privacy Policy · Jetour Market",
    description:
      "How we collect, use, and protect your personal information when you buy Jetour vehicles direct from China.",
    url: `${site.url}/privacy`,
    type: "website",
  },
};

const lastUpdated = "October 26, 2026";

const sections = [
  {
    icon: User,
    title: "Information We Collect",
    body: (
      <div className="space-y-3">
        <p>
          We collect information that you provide directly to us when you
          submit an inquiry, request a quote, or place an order for a Jetour
          vehicle. This includes:
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            <strong>Full name</strong> — so we can address you correctly and
            prepare export documentation.
          </li>
          <li>
            <strong>Phone number / WhatsApp</strong> — our primary channel for
            sending quotes, order updates, and shipping notifications.
          </li>
          <li>
            <strong>Email address</strong> — for sending formal quotations,
            invoices, and copies of export documents.
          </li>
          <li>
            <strong>Country and destination port</strong> — so we can calculate
            shipping costs, transit times, and required customs documentation
            for your market.
          </li>
          <li>
            <strong>Order details</strong> — the Jetour model, configuration,
            and quantity you are interested in, along with any preferred
            shipping method (RoRo or container).
          </li>
        </ul>
        <p>
          We also collect payment confirmation details (such as deposit and
          balance transfer references) required to process your order. We never
          ask for, and we do not store, full card numbers or online banking
          credentials.
        </p>
      </div>
    ),
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    body: (
      <div className="space-y-3">
        <p>We use the information you provide for the following purposes:</p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            <strong>Responding to inquiries</strong> — answering your questions
            about Jetour models, pricing, availability, and export logistics.
          </li>
          <li>
            <strong>Processing orders</strong> — preparing proforma invoices,
            confirming deposits, scheduling vehicle allocation, and arranging
            pre-export inspection.
          </li>
          <li>
            <strong>Arranging shipping</strong> — booking RoRo or container
            freight, preparing bills of lading, and coordinating loading at the
            port of origin (Tianjin or Shanghai).
          </li>
          <li>
            <strong>Customs and documentation</strong> — preparing China export
            customs declarations, certificates of origin, and the paperwork your
            destination country requires.
          </li>
          <li>
            <strong>Order updates</strong> — keeping you informed of vehicle
            preparation status, vessel sailing dates, and estimated arrival at
            your port.
          </li>
          <li>
            <strong>Service improvement</strong> — understanding which models
            and destinations are in demand so we can expand our catalog and
            shipping routes.
          </li>
        </ul>
        <p>
          We do not use your personal information to send unsolicited marketing
          messages. If you wish to receive updates about new models or
          promotions, you may opt in through WhatsApp.
        </p>
      </div>
    ),
  },
  {
    icon: Share2,
    title: "Information Sharing",
    body: (
      <div className="space-y-3">
        <p>
          We share your personal information only with the third parties
          necessary to fulfil your order and deliver your vehicle. We never sell
          your data. Specifically, we may share:
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            <strong>Shipping companies and freight forwarders</strong> — your
            name, contact details, and destination port so they can book vessel
            space, issue the bill of lading, and arrange delivery.
          </li>
          <li>
            <strong>Customs brokers</strong> — your details and vehicle
            information so they can prepare export declarations on the China
            side and, where instructed, assist with import clearance at your
            destination.
          </li>
          <li>
            <strong>Inspection and certification agencies</strong> — vehicle
            identification numbers and specifications required to issue
            pre-export inspection certificates (such as CQC or VIN verification).
          </li>
          <li>
            <strong>Payment processors</strong> — limited reference information
            so we can match your deposit and balance transfers to your order.
          </li>
        </ul>
        <p>
          Each third party is given access only to the information needed to
          perform their role in your transaction, and is expected to handle it
          in line with applicable data protection rules.
        </p>
      </div>
    ),
  },
  {
    icon: Lock,
    title: "Data Security",
    body: (
      <div className="space-y-3">
        <p>
          We take reasonable measures to protect the personal information you
          share with us against unauthorised access, loss, or misuse. These
          measures include:
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            Storing inquiry and order records in access-controlled systems,
            with access limited to our export and logistics team.
          </li>
          <li>
            Transmitting quotations and invoices over encrypted channels (HTTPS)
            and sharing sensitive documents through secure links rather than
            open email attachments.
          </li>
          <li>
            Retaining order and shipping records for the period required by
            Chinese export regulations and for resolving any post-delivery
            queries, after which they are deleted or anonymised.
          </li>
          <li>
            Reviewing our internal handling practices when onboarding new
            freight forwarders or customs brokers.
          </li>
        </ul>
        <p>
          While no method of transmission or storage is fully secure, we work to
          protect your information using industry-standard practices.
        </p>
      </div>
    ),
  },
  {
    icon: Cookie,
    title: "Cookie Usage",
    body: (
      <div className="space-y-3">
        <p>
          Our website uses a small number of cookies and similar technologies to
          operate correctly and to understand how visitors use the site:
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            <strong>Essential cookies</strong> — required for core site
            functions such as remembering your selected display currency (USD,
            NGN, GHS, AED, EUR, or CNY) as you browse vehicles.
          </li>
          <li>
            <strong>Analytics cookies</strong> — used to collect aggregate,
            non-identifying statistics about page views and traffic sources so
            we can improve the site.
          </li>
        </ul>
        <p>
          We do not use cookies to build identifying profiles of individual
          visitors or to serve targeted advertising. You can disable cookies in
          your browser settings; the site will continue to function, though your
          currency preference will not be remembered between visits.
        </p>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Your Rights",
    body: (
      <div className="space-y-3">
        <p>You have the following rights regarding your personal data:</p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            <strong>Access</strong> — request a copy of the personal information
            we hold about you and your order.
          </li>
          <li>
            <strong>Correction</strong> — ask us to correct inaccurate contact
            or destination details so your shipping documents are right.
          </li>
          <li>
            <strong>Deletion</strong> — request that we delete your personal
            data once your order is complete and any regulatory retention period
            has ended.
          </li>
          <li>
            <strong>Opt-out</strong> — withdraw consent to receive order updates
            or opt out of analytics cookies at any time.
          </li>
          <li>
            <strong>Complaint</strong> — raise a concern with us first, and
            where applicable with your local data protection authority.
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us using the details in the
          section below. We will respond within a reasonable timeframe, usually
          within 7 business days.
        </p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
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
            Legal
          </span>
          <h1 className="display-lg mt-5 text-silver-bright">Privacy Policy</h1>
          <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-silver sm:text-base">
            This policy explains what personal information Jetour Market
            collects when you inquire about or purchase a Jetour vehicle for
            export from China, how we use it, who we share it with, and the
            rights you have over your data.
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
                <h2 className="title text-silver-bright">Contact Us</h2>
              </div>
              <div className="mt-5 space-y-3 font-sans text-sm leading-relaxed text-silver sm:text-base">
                <p>
                  If you have any questions about this Privacy Policy or how we
                  handle your personal information, please get in touch:
                </p>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="font-semibold text-electric underline-offset-2 hover:underline"
                    >
                      {site.email}
                    </a>
                  </li>
                  <li>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href={whatsappLink(
                        "Hi, I have a question about your privacy policy.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-electric underline-offset-2 hover:underline"
                    >
                      +{site.whatsapp}
                    </a>
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <Link
                      href="/"
                      className="font-semibold text-electric underline-offset-2 hover:underline"
                    >
                      {site.url.replace("https://", "")}
                    </Link>
                  </li>
                </ul>
                <a
                  href={whatsappLink(
                    "Hi, I have a question about your privacy policy.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-2"
                >
                  Chat With Us
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
