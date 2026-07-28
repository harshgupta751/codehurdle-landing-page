"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  /** Target numeric value to count up to. */
  value: number;
  /** Text rendered after the number, e.g. "+", "%", "k". */
  suffix?: string;
  /** Text rendered before the number, e.g. "$". */
  prefix?: string;
  className?: string;
}

/**
 * Counts up from 0 to `value` once it enters the viewport. Falls back to
 * rendering the final value instantly when reduced motion is preferred.
 */
export function AnimatedCounter({ value, suffix = "", prefix = "", className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 90 });

  useEffect(() => {
    if (isInView && !shouldReduceMotion) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value, shouldReduceMotion]);

  useEffect(() => {
    if (!ref.current) return;
    if (shouldReduceMotion) {
      ref.current.textContent = `${prefix}${value.toLocaleString("en-US")}${suffix}`;
      return;
    }
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString("en-US")}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, shouldReduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
