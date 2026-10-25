"use client";

/**
 * Header
 *
 * Fixed dark top navigation. Desktop nav + currency selector + CTA on lg+,
 * full-screen overlay menu with hamburger on mobile.
 */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { currencies, navLinks } from "@/lib/site";
import { useCurrency } from "@/components/CurrencyProvider";

/* --------------------------------- icons --------------------------------- */

function MenuIcon({ className }: { className?: string }) {
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
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
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
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
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
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* -------------------------------- header --------------------------------- */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const { code, symbol, setCode } = useCurrency();
  const pathname = usePathname();

  const currencyRef = useRef<HTMLDivElement>(null);

  // Close menus whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setCurrencyOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close currency dropdown on outside click.
  useEffect(() => {
    if (!currencyOpen) return;
    function handlePointer(e: MouseEvent) {
      if (currencyRef.current && !currencyRef.current.contains(e.target as Node)) {
        setCurrencyOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointer);
    return () => document.removeEventListener("mousedown", handlePointer);
  }, [currencyOpen]);

  // Escape closes any open menu.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setCurrencyOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => {
    const base = href.split("?")[0];
    if (base === "/cars") {
      return pathname === "/cars" || pathname.startsWith("/cars/");
    }
    return pathname === base;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-asphalt-border bg-asphalt/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Jetour Market home"
        >
          <span className="font-display text-base font-black uppercase tracking-[0.18em] text-silver-bright sm:text-lg">
            Jetour<span className="text-electric">&nbsp;Market</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 font-sans text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                isActive(link.href)
                  ? "text-electric"
                  : "text-silver hover:text-silver-bright"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Currency selector */}
          <div className="relative" ref={currencyRef}>
            <button
              type="button"
              onClick={() => setCurrencyOpen((o) => !o)}
              className="flex items-center gap-1.5 rounded-lg border border-asphalt-border bg-asphalt-light px-2.5 py-2 font-sans text-xs font-bold uppercase tracking-[0.1em] text-silver-bright transition-colors hover:border-white/30"
              aria-label={`Currency: ${code}. Change currency`}
              aria-expanded={currencyOpen}
              aria-haspopup="listbox"
            >
              <span className="text-electric">{symbol}</span>
              <span className="hidden sm:inline">{code}</span>
              <ChevronDownIcon
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  currencyOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {currencyOpen && (
              <div
                role="listbox"
                aria-label="Select currency"
                className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-asphalt-border bg-asphalt-card py-1 shadow-xl shadow-black/40"
              >
                {currencies.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    role="option"
                    aria-selected={c.code === code}
                    onClick={() => {
                      setCode(c.code);
                      setCurrencyOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-3 py-2 text-left font-sans text-xs transition-colors hover:bg-white/5 ${
                      c.code === code ? "text-electric" : "text-silver-bright"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-4 text-center font-bold">{c.symbol}</span>
                      <span className="font-bold uppercase tracking-wider">
                        {c.code}
                      </span>
                    </span>
                    <span className="text-silver">{c.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Browse Cars CTA */}
          <Link
            href="/cars"
            className="btn-primary hidden px-4 py-2.5 text-[11px] sm:inline-flex"
          >
            Browse Cars
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-silver-bright transition-colors hover:bg-white/5 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed bottom-0 left-0 right-0 top-16 z-40 animate-fade-in overflow-y-auto bg-asphalt lg:hidden"
        >
          <nav className="flex flex-col gap-1 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-4 font-display text-lg font-bold uppercase tracking-tight transition-colors ${
                  isActive(link.href)
                    ? "text-electric"
                    : "text-silver-bright hover:text-electric"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/cars" className="btn-primary mt-4 w-full">
              Browse Cars
            </Link>

            {/* Currency picker */}
            <div className="mt-8 border-t border-asphalt-border pt-6">
              <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-silver">
                Currency
              </p>
              <div className="grid grid-cols-3 gap-2">
                {currencies.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => setCode(c.code)}
                    className={`rounded-lg border px-2 py-2 font-sans text-xs font-bold uppercase tracking-wider transition-colors ${
                      c.code === code
                        ? "border-electric bg-electric/10 text-electric"
                        : "border-asphalt-border text-silver-bright hover:border-white/30"
                    }`}
                  >
                    {c.symbol} {c.code}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
