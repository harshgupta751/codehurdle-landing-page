import { Layers, ListChecks, Trophy, LineChart, Users, BookOpen } from "lucide-react";
import type { Feature } from "@/types";

export const FEATURES: Feature[] = [
  {
    id: "pattern-learning",
    icon: Layers,
    title: "Pattern-based learning",
    description:
      "Stop grinding random problems. Every question is grouped by the underlying pattern — sliding window, two pointers, DP on trees — so you learn the shape once and reuse it everywhere.",
    stat: "18 core patterns",
    size: "lg",
  },
  {
    id: "problem-bank",
    icon: ListChecks,
    title: "1,000+ curated problems",
    description: "Hand-picked and difficulty-tagged, pulled from real interview loops and top-tier contests.",
    stat: "1,000+ problems",
    size: "md",
  },
  {
    id: "tracker",
    icon: LineChart,
    title: "Practice tracker",
    description: "See your solve streak, weak patterns, and time-per-problem trend at a glance.",
    size: "md",
  },
  {
    id: "editorials",
    icon: Trophy,
    title: "Contest editorials",
    description: "Clear, worked explanations for every Codeforces and CodeChef round — no more cryptic official editorials.",
    size: "md",
  },
];

export const WHY_CODEHURDLE: Feature[] = [
  {
    id: "structured-path",
    icon: BookOpen,
    title: "A path, not a list",
    description: "Sequenced roadmaps replace endless scrolling through unranked problem sets.",
  },
  {
    id: "real-feedback",
    icon: LineChart,
    title: "Feedback that's specific",
    description: "Post-interview analytics point to the exact pattern or edge case you missed, not just a pass/fail.",
  },
  {
    id: "community",
    icon: Users,
    title: "A community that ships",
    description: "42,000+ engineers trading notes daily on WhatsApp, not a silent forum.",
  },
];
