import { SectionHeader } from "@/components/shared/section-header";
import { FeatureCard } from "@/components/shared/feature-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { FEATURES } from "@/lib/data/features";

/**
 * Explicit grid spans per feature id — deliberately asymmetric (2+1 / 1+2)
 * rather than a uniform bento so Pattern-Based Learning reads as the
 * flagship differentiator, not one tile among equals.
 */
const GRID_SPAN: Record<string, string> = {
  "pattern-learning": "sm:col-span-2 lg:col-span-2",
  "problem-bank": "lg:col-span-1",
  tracker: "lg:col-span-1",
  editorials: "sm:col-span-2 lg:col-span-2",
};

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-border-subtle py-20 sm:py-28">
      <div className="container flex flex-col gap-14">
        <SectionHeader
          eyebrow="Key features"
          title="Everything built around one idea: patterns, not problems."
          description="Each piece reinforces the same loop — learn a pattern, apply it, see where it's still shaky."
        />

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.id} className={GRID_SPAN[feature.id]}>
              <FeatureCard feature={feature} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
