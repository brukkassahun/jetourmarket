"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

/**
 * Shield badge with JM monogram + green road line.
 * Dark variant: ink shield on cream background (header).
 * Light variant: cream shield on dark background (footer).
 */
export function LogoMark({ className = "h-8 w-8", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const shieldFill = variant === "dark" ? "#0A0A0A" : "#FAF9F6";
  const monoStroke = variant === "dark" ? "#FAF9F6" : "#0A0A0A";
  const dashColor = variant === "dark" ? "#FAF9F6" : "#0A0A0A";
  const green = "#0E7A3D";

  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Shield */}
      <path d="M24 3L41 9V22C41 32 33 40 24 44C15 40 7 32 7 22V9L24 3Z" fill={shieldFill} />
      {/* Inner shield border */}
      <path d="M24 7L37 11.5V22C37 29.5 31 36 24 39.5C17 36 11 29.5 11 22V11.5L24 7Z" fill="none" stroke={green} strokeWidth="1" opacity="0.6" />
      {/* J stroke */}
      <path d="M18 14V24C18 26.5 16 28.5 13.5 28.5C11 28.5 9 26.5 9 24V22.5" stroke={monoStroke} strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* M stroke */}
      <path d="M22 28V16M22 16L26 22L30 16M30 16V28" stroke={monoStroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Green road line */}
      <path d="M10 35 L38 35" stroke={green} strokeWidth="2.5" strokeLinecap="round" />
      {/* Road dashes */}
      <path d="M15 35 L17 35 M21 35 L23 35 M27 35 L29 35 M33 35 L35 35" stroke={dashColor} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const text = variant === "dark" ? "text-silver-bright" : "text-cream";
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Jetour Market home">
      <LogoMark variant={variant} />
      <span className={`font-display text-base font-black uppercase tracking-[0.18em] ${text} sm:text-lg`}>
        Jetour<span className="font-medium text-electric">&nbsp;Market</span>
      </span>
    </Link>
  );
}
