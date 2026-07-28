import { SectionHeader } from "@/components/shared/section-header";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";

const PATH_STEPS = [
  {
    step: "01",
    title: "Pick a pattern",
    description: "Start from a roadmap sequenced by difficulty — sliding window before segment trees, not the other way around.",
  },
  {
    step: "02",
    title: "Solve with context",
    description: "Each problem links back to the pattern it teaches, so a stuck attempt points to a concept, not just a wrong answer.",
  },
  {
    step: "03",
    title: "Review the editorial",
    description: "Worked explanations — including live contest editorials — show the reasoning, not just a solution to copy.",
  },
  {
    step: "04",
    title: "Track what's weak",
    description: "Your tracker resurfaces the exact patterns you're avoiding, so gaps get closed before an interview finds them.",
  },
];

export function ProductOverviewSection() {
  return (
    <section id="product" className="border-t border-border-subtle py-20 sm:py-28">
      <div className="container flex flex-col gap-14">
        <SectionHeader
          eyebrow="How it works"
          title="A practice path, not a problem dump."
          description="Every other platform hands you a search bar and a difficulty filter. CodeHurdle sequences your practice so each session builds on the last."
        />

        <StaggerContainer className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border-default bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
          {PATH_STEPS.map((item) => (
            <StaggerItem key={item.step} className="flex flex-col gap-4 bg-surface p-7">
              <span className="font-mono text-sm text-accent">{item.step}</span>
              <div className="flex flex-col gap-2">
                <h3 className="text-h3 font-semibold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
