"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUpVariants, heroFadeUpVariants } from "./variants";

interface FadeInProps {
  children: ReactNode;
  /** Delay in seconds before this element's animation starts. */
  delay?: number;
  /** Use the larger hero-scale movement instead of the standard reveal. */
  hero?: boolean;
  className?: string;
  /** Re-trigger animation every time it re-enters the viewport (default: once). */
  triggerOnce?: boolean;
}

/**
 * Wraps content in a viewport-triggered fade + slide-up animation.
 * Falls back to an instant opacity swap when the user prefers reduced motion.
 */
export function FadeIn({
  children,
  delay = 0,
  hero = false,
  className,
  triggerOnce = true,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = hero ? heroFadeUpVariants : fadeUpVariants;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
