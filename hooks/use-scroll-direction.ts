"use client";

import { useEffect, useState } from "react";

interface ScrollState {
  direction: "up" | "down";
  isScrolled: boolean;
}

/**
 * Tracks scroll direction (for hiding the navbar on scroll-down) and whether
 * the page has scrolled past a small threshold (for adding a background/border).
 */
export function useScrollDirection(threshold = 12): ScrollState {
  const [state, setState] = useState<ScrollState>({ direction: "up", isScrolled: false });

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastY && currentY > threshold ? "down" : "up";
      const isScrolled = currentY > threshold;

      setState((prev) => {
        if (prev.direction === direction && prev.isScrolled === isScrolled) return prev;
        return { direction, isScrolled };
      });

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return state;
}
