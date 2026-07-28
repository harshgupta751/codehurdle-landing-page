import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names safely, resolving conflicting utility
 * classes (e.g. "p-2 p-4" -> "p-4") in addition to conditional joining.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats large numbers with a k/M suffix for compact stat display,
 * e.g. 1000 -> "1,000+", 12000 -> "12k+".
 */
export function formatCompactStat(value: number, suffix = "+"): string {
  if (value >= 1000) {
    return `${value.toLocaleString("en-US")}${suffix}`;
  }
  return `${value}${suffix}`;
}
