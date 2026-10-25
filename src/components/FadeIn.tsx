"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Extra classes to merge onto the motion element. */
  className?: string;
  /** Render as a different HTML tag (defaults to div). */
  as?: "div" | "section" | "article" | "li" | "span";
  /** Only animate once when it scrolls into view. */
  once?: boolean;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Subtle fade-up animation that triggers when the element scrolls into view.
 * Used to animate sections of server-rendered pages without forcing the whole
 * page to become a client component.
 */
export default function FadeIn({
  children,
  delay = 0,
  className,
  as = "div",
  once = true,
}: FadeInProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
