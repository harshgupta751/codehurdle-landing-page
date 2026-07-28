import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="cta" className="border-t border-border-subtle py-24 sm:py-32">
      <div className="container flex flex-col items-center gap-8 text-center">
        <FadeIn className="flex flex-col items-center gap-6">
          <h2 className="max-w-xl text-h2 font-semibold text-balance text-primary">
            Start your next solve streak today.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-secondary">
            Free plan gets you the full problem bank and tracker. Upgrade whenever you&rsquo;re
            ready for mock interviews and contest editorials — backed by a 14-day money-back
            guarantee.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col items-center gap-4">
          <Button size="lg" asChild>
            <Link href="#signup">
              Start practicing free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <span className="flex items-center gap-1.5 text-xs text-tertiary">
            <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.75} />
            No credit card required · 14-day money-back guarantee on Premium
          </span>
        </FadeIn>
      </div>
    </section>
  );
}
