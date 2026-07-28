import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  stat?: string;
  size?: "lg" | "md";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  platform: "linkedin" | "whatsapp" | "youtube";
  resultTag?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export type Verdict = "accepted" | "wrong-answer" | "pending" | "running";
