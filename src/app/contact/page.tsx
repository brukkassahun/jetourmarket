'use client';

import { useState } from 'react';
import { site, whatsappLink } from '@/lib/site';
import { MessageCircle, Mail, Clock, Send, Check } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', country: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          const msg = `Hi, I'm ${form.name}. I have a question about Jetour vehicles.\n\n${form.message}`;
          window.open(whatsappLink(msg), '_blank');
        }, 500);
      }
    } catch {}
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="card-dark max-w-md p-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-signal/20">
            <Check className="h-8 w-8 text-signal" strokeWidth={2} />
          </div>
          <h1 className="display-md text-silver-bright">Message Sent</h1>
          <p className="mt-3 text-sm leading-relaxed text-steel-muted">
            Your inquiry has been recorded. We&apos;re opening WhatsApp so you can chat with us directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-up space-y-12 py-12">
      {/* Hero */}
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="eyebrow">Get In Touch</p>
        <h1 className="display-lg mt-4 text-silver-bright">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-steel-muted">
          Have questions about buying a Jetour vehicle from China? We&apos;re here to help. Send us a message or reach out directly on WhatsApp.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 px-4 lg:grid-cols-3">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="card-dark space-y-5 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-sans text-sm font-semibold text-silver-bright">Name *</label>
                <input type="text" required value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  placeholder="Your full name" className="input-dark" />
              </div>
              <div>
                <label className="mb-2 block font-sans text-sm font-semibold text-silver-bright">Phone / WhatsApp *</label>
                <input type="tel" required value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                  placeholder="+233 55 123 4567" className="input-dark" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-sans text-sm font-semibold text-silver-bright">Email</label>
                <input type="email" value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="you@email.com" className="input-dark" />
              </div>
              <div>
                <label className="mb-2 block font-sans text-sm font-semibold text-silver-bright">Country</label>
                <select value={form.country}
                  onChange={e => setForm({...form, country: e.target.value})}
                  className="input-dark">
                  <option value="">Select country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Kenya">Kenya</option>
                  <option value="UAE">UAE</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-2 block font-sans text-sm font-semibold text-silver-bright">Message</label>
              <textarea value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                placeholder="What vehicle are you interested in?"
                rows={4} className="input-dark resize-none" />
            </div>
            <button type="submit" disabled={submitting}
              className="btn-primary w-full justify-center py-4">
              {submitting ? 'Sending...' : (<><Send className="h-4 w-4" /> Send Message</>)}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <a href={whatsappLink("Hi, I have a question about Jetour vehicles.")} target="_blank" rel="noopener noreferrer"
            className="card-dark flex items-center gap-4 p-5 transition hover:border-signal/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal/15 flex-shrink-0">
              <MessageCircle className="h-6 w-6 text-signal" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-sans text-sm font-bold text-silver-bright">WhatsApp</p>
              <p className="text-xs text-steel-muted">+{site.whatsapp}</p>
            </div>
          </a>

          <div className="card-dark flex items-center gap-4 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15 flex-shrink-0">
              <Mail className="h-6 w-6 text-electric" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-sans text-sm font-bold text-silver-bright">Email</p>
              <p className="text-xs text-steel-muted">{site.email}</p>
            </div>
          </div>

          <div className="card-dark flex items-center gap-4 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-flare/15 flex-shrink-0">
              <Clock className="h-6 w-6 text-flare" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-sans text-sm font-bold text-silver-bright">Response Time</p>
              <p className="text-xs text-steel-muted">Within 2 hours on WhatsApp</p>
            </div>
          </div>

          <div className="card-dark p-5">
            <p className="font-sans text-sm font-bold text-silver-bright">WeChat</p>
            <p className="mt-1 text-xs text-steel-muted">{site.wechat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
