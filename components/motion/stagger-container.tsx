"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUpVariants, staggerContainerVariants } from "./variants";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a list of children (e.g. cards) so they reveal in sequence as the
 * container enters the viewport. Each direct child should be wrapped in
 * <StaggerItem> to receive the individual reveal animation.
 */
export function StaggerContainer({ children, className }: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
}
