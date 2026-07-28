"use client";

import { Building2, Timer, Target } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { VerdictBadge } from "@/components/shared/verdict-badge";

const INTERVIEW_HIGHLIGHTS = [
  {
    icon: Building2,
    title: "Real company formats",
    description: "Problem sets matched to how Amazon, Google, and Flipkart actually structure their rounds.",
  },
  {
    icon: Timer,
    title: "Timed pressure, real stakes",
    description: "The clock runs like the real thing — no pausing to look something up mid-round.",
  },
  {
    icon: Target,
    title: "Analytics after every round",
    description: "A breakdown of correctness, time-to-solve, and the exact pattern to revisit next.",
  },
];

const ROUND_BREAKDOWN = [
  { pattern: "Sliding Window", verdict: "accepted" as const, time: "14m" },
  { pattern: "Graph Traversal", verdict: "accepted" as const, time: "21m" },
  { pattern: "Dynamic Programming", verdict: "wrong-answer" as const, time: "—" },
];

export function MockInterviewSection() {
  return (
    <section id="mock-interviews" className="border-t border-border-subtle py-20 sm:py-28">
      <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-lg border border-border-default bg-surface">
            <div className="flex items-center justify-between border-b border-border-subtle px-6 py-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-primary">Amazon · Round 2</span>
                <span className="text-xs text-tertiary">Onsite simulation · 45 min</span>
              </div>
              <VerdictBadge verdict="accepted" />
            </div>

            <div className="flex flex-col divide-y divide-border-subtle">
              {ROUND_BREAKDOWN.map((row) => (
                <div key={row.pattern} className="flex items-center justify-between px-6 py-4">
                  <span className="text-sm text-secondary">{row.pattern}</span>
                  <div className="flex items-center gap-4">
                    <span className="mono-nums font-mono text-xs text-tertiary">{row.time}</span>
                    <VerdictBadge verdict={row.verdict} />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 divide-x divide-border-subtle border-t border-border-subtle">
              <div className="flex flex-col items-center gap-1 px-4 py-6">
                <AnimatedCounter value={87} suffix="%" className="mono-nums font-mono text-2xl font-medium text-primary" />
                <span className="text-center text-xs text-tertiary">Pattern accuracy</span>
              </div>
              <div className="flex flex-col items-center gap-1 px-4 py-6">
                <AnimatedCounter value={2} suffix="/3" className="mono-nums font-mono text-2xl font-medium text-primary" />
                <span className="text-center text-xs text-tertiary">Solved on time</span>
              </div>
              <div className="flex flex-col items-center gap-1 px-4 py-6">
                <AnimatedCounter value={35} suffix="m" className="mono-nums font-mono text-2xl font-medium text-primary" />
                <span className="text-center text-xs text-tertiary">Total time used</span>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="order-1 flex flex-col gap-10 lg:order-2">
          <SectionHeader
            eyebrow="Company-simulated interviews"
            title="Practice the interview, not just the problem."
            description="Every mock round mirrors a real company's format and pace, then tells you precisely what to fix before the next one."
          />

          <div className="flex flex-col gap-6">
            {INTERVIEW_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border-default bg-surface text-accent">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-primary">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-secondary">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
