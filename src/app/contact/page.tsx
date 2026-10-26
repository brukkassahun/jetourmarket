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
                  <optgroup label="— West Africa —">
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Mali">Mali</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Côte d&apos;Ivoire">Côte d&apos;Ivoire</option>
                    <option value="Niger">Niger</option>
                    <option value="Benin">Benin</option>
                    <option value="Togo">Togo</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="The Gambia">The Gambia</option>
                  </optgroup>
                  <optgroup label="— North Africa —">
                    <option value="Egypt">Egypt</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Libya">Libya</option>
                    <option value="Sudan">Sudan</option>
                  </optgroup>
                  <optgroup label="— Central Africa —">
                    <option value="Cameroon">Cameroon</option>
                    <option value="Chad">Chad</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Congo">Congo (Brazzaville)</option>
                    <option value="DR Congo">DR Congo (Kinshasa)</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="São Tomé and Príncipe">São Tomé and Príncipe</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Rwanda">Rwanda</option>
                  </optgroup>
                  <optgroup label="— East Africa —">
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="South Sudan">South Sudan</option>
                  </optgroup>
                  <optgroup label="— Middle East —">
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Oman">Oman</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Syria">Syria</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Iran">Iran</option>
                    <option value="Turkey">Turkey</option>
                  </optgroup>
                  <optgroup label="— Europe —">
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Italy">Italy</option>
                    <option value="Spain">Spain</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Austria">Austria</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Norway">Norway</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Finland">Finland</option>
                    <option value="Iceland">Iceland</option>
                    <option value="Poland">Poland</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Romania">Romania</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Greece">Greece</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Russia">Russia</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Belarus">Belarus</option>
                  </optgroup>
                  <optgroup label="— Americas —">
                    <option value="USA">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Peru">Peru</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Chile">Chile</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Panama">Panama</option>
                    <option value="El Salvador">El Salvador</option>
                  </optgroup>
                  <optgroup label="— Asia —">
                    <option value="China">China</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Laos">Laos</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Afghanistan">Afghanistan</option>
                  </optgroup>
                  <optgroup label="— Other —">
                    <option value="Other">Other (LHD country)</option>
                  </optgroup>
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
