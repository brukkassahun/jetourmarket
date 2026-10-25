"use client";

/**
 * Footer
 *
 * Dark site footer with brand blurb, quick links, legal links, and contact
 * channels (WhatsApp + WeChat). WeChat ID can be copied to clipboard.
 */
import { useEffect, useState } from "react";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/cars", label: "Browse Cars" },
  { href: "/cars?condition=new", label: "New" },
  { href: "/cars?condition=used", label: "Used" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/shipping", label: "Shipping" },
  { href: "/faq", label: "FAQ" },
];

/* --------------------------------- icons --------------------------------- */

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
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
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function CopyIcon({ className }: { className?: string }) {
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
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

/* -------------------------------- footer --------------------------------- */

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const [wechatCopied, setWechatCopied] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const copyWeChat = async () => {
    try {
      await navigator.clipboard.writeText(site.wechat);
      setWechatCopied(true);
      setTimeout(() => setWechatCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  const whatsappHref = whatsappLink(
    `Hello ${site.name}, I'm interested in Jetour vehicles. Could you share more details?`,
  );

  return (
    <footer className="border-t border-asphalt-border bg-asphalt-light">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-black uppercase tracking-[0.14em] text-silver-bright">
              Jetour<span className="text-electric">&nbsp;Market</span>
            </h3>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-silver">
              {site.description}
            </p>
            <p className="mt-4 font-sans text-xs uppercase tracking-[0.16em] text-steel-muted">
              {site.tagline}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-silver">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-silver transition-colors hover:text-electric"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-silver">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-silver transition-colors hover:text-electric"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-silver">
              Get In Touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-sans text-sm text-silver-bright transition-colors hover:text-signal"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-signal/15 text-signal transition-colors group-hover:bg-signal group-hover:text-white">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-steel-muted">
                      WhatsApp
                    </span>
                    +{site.whatsapp}
                  </span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={copyWeChat}
                  className="group flex w-full items-center gap-3 font-sans text-sm text-silver-bright transition-colors hover:text-electric"
                  aria-label={`Copy WeChat ID: ${site.wechat}`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-electric/15 text-electric-glow transition-colors group-hover:bg-electric group-hover:text-white">
                    <ChatIcon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-steel-muted">
                      WeChat
                    </span>
                    <span className="flex items-center gap-1.5">
                      {site.wechat}
                      <CopyIcon className="h-3.5 w-3.5 text-steel-muted opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                  </span>
                  {wechatCopied && (
                    <span className="ml-auto rounded-md bg-signal/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-signal">
                      Copied
                    </span>
                  )}
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 font-sans text-sm text-silver-bright transition-colors hover:text-electric"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-silver transition-colors group-hover:bg-white/10">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-steel-muted">
                      Email
                    </span>
                    {site.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-asphalt-border pt-8 sm:flex-row">
          <p className="font-sans text-xs text-steel-muted">
            © {year ?? new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs text-steel-muted transition-colors hover:text-silver-bright"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
