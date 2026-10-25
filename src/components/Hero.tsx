"use client";

/**
 * Hero
 *
 * Client-only animated hero for the homepage. Uses motion/react for a
 * staggered entrance. Kept as a separate client island so the homepage
 * page.tsx can stay a server component that fetches car data from Supabase.
 */
import Link from "next/link";
import { motion } from "motion/react";

function ArrowRight({ className }: { className?: string }) {
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-asphalt-border">
      {/* Gradient background: asphalt -> asphalt-light */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-asphalt via-asphalt to-asphalt-light"
        aria-hidden="true"
      />
      {/* Glow accents */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-signal/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-electric" aria-hidden="true" />
            Jetour Market
          </motion.span>

          <motion.h1
            className="display-xl mt-6 text-silver-bright"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            New &amp; Used <span className="text-electric">Jetour</span> Vehicles
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl font-sans text-base leading-relaxed text-silver sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            Buy factory-direct from China. OEM-grade quality, transparent pricing,
            and global shipping to 30+ countries — T2, Dashing, X70, X90, Traveller
            and more, exported straight from the source.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          >
            <Link href="/cars" className="btn-primary">
              Browse Cars
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/cars?condition=new" className="btn-ghost">
              View New Arrivals
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
