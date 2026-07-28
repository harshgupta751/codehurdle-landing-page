import { Youtube, Linkedin, MessageCircle } from "lucide-react";
import type { NavLink, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "CodeHurdle",
  tagline: "Master DSA. Crack interviews. Stop guessing what to practice.",
  description:
    "Pattern-based DSA practice, contest editorials, and company-simulated mock interviews for ambitious software engineers.",
  url: "https://codehurdle.dev",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Mock Interviews", href: "#mock-interviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "WhatsApp Community", href: "https://whatsapp.com", icon: MessageCircle },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export const HERO_STATS = [
  { label: "Curated problems", value: "1,000+" },
  { label: "Active learners", value: "42,000+" },
  { label: "Avg. rating", value: "4.9/5" },
];
