"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { CodeWindow, CodeLine, tok } from "@/components/shared/code-window";
import { VerdictBadge } from "@/components/shared/verdict-badge";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import type { Verdict } from "@/types";

const TRUST_STATS = [
  { value: 1000, suffix: "+", label: "Curated problems" },
  { value: 42000, suffix: "+", label: "Active learners" },
];

/** Cycles the hero's verdict badge through a short judging sequence, looping. */
function useVerdictCycle(): Verdict {
  const sequence: Verdict[] = ["running", "accepted", "accepted", "accepted"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % sequence.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [sequence.length]);

  return sequence[index] ?? "accepted";
}

export function HeroSection() {
  const verdict = useVerdictCycle();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="container relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="flex flex-col gap-8">
          <FadeIn hero>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border-default bg-surface px-3 py-1 font-mono text-xs font-medium text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Built for competitive programmers
            </span>
          </FadeIn>

          <FadeIn hero delay={0.08}>
            <h1 className="text-hero font-semibold text-balance text-primary">
              Master DSA without guessing what to practice next.
            </h1>
          </FadeIn>

          <FadeIn hero delay={0.16}>
            <p className="max-w-lg text-lg leading-relaxed text-secondary">
              CodeHurdle groups 1,000+ problems by pattern, tracks your weak spots, and runs
              company-simulated mock interviews — so every hour of practice moves your interview
              readiness, not just your solve count.
            </p>
          </FadeIn>

          <FadeIn hero delay={0.24}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#cta">
                  Start practicing free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#mock-interviews">
                  <PlayCircle className="h-4 w-4" />
                  See a mock interview
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn hero delay={0.32}>
            <div className="flex items-center gap-8 border-t border-border-subtle pt-6">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="mono-nums font-mono text-2xl font-medium text-primary"
                  />
                  <span className="text-xs text-tertiary">{stat.label}</span>
                </div>
              ))}
              <div className="flex flex-col gap-1">
                <span className="mono-nums font-mono text-2xl font-medium text-primary">4.9/5</span>
                <span className="text-xs text-tertiary">Avg. learner rating</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn hero delay={0.2} className="lg:justify-self-end lg:pl-4">
          <CodeWindow
            fileName="two_sum.cpp"
            footer={
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-tertiary">Pattern: Hash Map</span>
                <VerdictBadge verdict={verdict} />
              </div>
            }
            className="w-full max-w-md"
          >
            <CodeLine lineNumber={1}>{tok.keyword("vector<int>")} twoSum(vector{"<int>"}& nums, int target) {"{"}</CodeLine>
            <CodeLine lineNumber={2} highlighted>
              {"  "}unordered_map{"<int, int>"} seen;
            </CodeLine>
            <CodeLine lineNumber={3}>{"  "}for (int i = 0; i {"<"} nums.size(); i++) {"{"}</CodeLine>
            <CodeLine lineNumber={4}>{"    "}int need = target - nums[i];</CodeLine>
            <CodeLine lineNumber={5}>{"    "}if (seen.count(need))</CodeLine>
            <CodeLine lineNumber={6}>{"      "}return {"{seen[need], i}"};</CodeLine>
            <CodeLine lineNumber={7}>{"    "}seen[nums[i]] = i;</CodeLine>
            <CodeLine lineNumber={8}>{"  }"}</CodeLine>
            <CodeLine lineNumber={9}>{"  "}return {"{}"};</CodeLine>
            <CodeLine lineNumber={10}>{"}"}</CodeLine>
          </CodeWindow>
        </FadeIn>
      </div>
    </section>
  );
}
