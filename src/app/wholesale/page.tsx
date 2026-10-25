import { whatsappLink, site } from '@/lib/site';
import { Ship, Tag, Factory, Package, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Wholesale & Bulk Purchasing',
  description: 'Bulk Jetour vehicle purchasing for dealers and importers. Volume discounts, sea freight consolidation, and custom branding.',
};

const benefits = [
  { icon: Tag, title: 'Volume Discounts', desc: 'Tiered pricing starting from 5 vehicles. The more you buy, the better the rate.' },
  { icon: Ship, title: 'Sea Freight Consolidation', desc: 'Consolidate multiple vehicles into single containers for lower per-unit shipping cost.' },
  { icon: Factory, title: 'Custom Branding', desc: 'Optional custom badging, documentation, and branding for your market.' },
  { icon: Package, title: 'Priority Allocation', desc: 'Wholesale orders get priority in production scheduling and vehicle allocation.' },
];

const steps = [
  { num: '01', title: 'Send Requirements', desc: 'Tell us which models, quantities, and target market.' },
  { num: '02', title: 'Receive Quote', desc: 'Get a detailed quote with vehicle prices, shipping, and timeline.' },
  { num: '03', title: 'Confirm Order', desc: 'Pay deposit to lock in pricing and start preparation.' },
  { num: '04', title: 'Preparation', desc: 'Vehicles inspected, documented, and prepared for export.' },
  { num: '05', title: 'Shipping', desc: 'Container loading, customs clearance, and sea freight.' },
  { num: '06', title: 'Delivery', desc: 'Arrival at destination port with all export documents.' },
];

export default function WholesalePage() {
  return (
    <div className="animate-fade-up">
      {/* Hero */}
      <div className="border-b border-asphalt-border bg-gradient-to-b from-asphalt-light to-asphalt px-4 py-20 text-center">
        <p className="eyebrow">Wholesale / B2B</p>
        <h1 className="display-lg mx-auto mt-4 max-w-2xl text-silver-bright">
          Bulk Purchasing For Dealers
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-steel-muted">
          Are you a car dealer, importer, or fleet buyer? Get factory-direct pricing on bulk Jetour vehicle orders. From 5 vehicles with consolidated shipping to 30+ countries.
        </p>
        <a href={whatsappLink("Hi, I'm interested in wholesale Jetour vehicle purchasing. Can you share bulk pricing?")}
          target="_blank" rel="noopener noreferrer"
          className="btn-primary mt-8">
          Get Wholesale Pricing <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Benefits */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="title mb-8 text-center text-silver-bright">Why Buy Wholesale</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(b => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="card-dark p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15">
                  <Icon className="h-6 w-6 text-electric" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans text-sm font-bold text-silver-bright">{b.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-steel-muted">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process */}
      <div className="border-y border-asphalt-border bg-asphalt-light px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="title mb-8 text-center text-silver-bright">How It Works</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(step => (
              <div key={step.num} className="relative">
                <span className="font-display text-4xl font-black text-electric/30">{step.num}</span>
                <h3 className="mt-2 font-sans text-sm font-bold text-silver-bright">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-steel-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="display-md text-silver-bright">Ready To Order?</h2>
        <p className="mt-4 text-sm text-steel-muted">
          Minimum order: 5 vehicles. Contact us on WhatsApp for a custom quote.
        </p>
        <a href={whatsappLink("Hi, I'm interested in wholesale Jetour vehicle purchasing. Can you share bulk pricing?")}
          target="_blank" rel="noopener noreferrer"
          className="btn-primary mt-8">
          Contact Us <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
