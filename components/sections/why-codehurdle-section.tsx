import { SectionHeader } from "@/components/shared/section-header";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { WHY_CODEHURDLE } from "@/lib/data/features";

export function WhyCodeHurdleSection() {
  return (
    <section className="border-t border-border-subtle bg-surface py-20 sm:py-28">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Why CodeHurdle"
            title="Most platforms give you a list. We give you a plan."
            description="The difference shows up in how you spend the hour you actually have, not in a longer feature list."
          />
        </div>

        <StaggerContainer className="flex flex-col">
          {WHY_CODEHURDLE.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <div
                  className={`flex items-start gap-5 py-7 ${
                    index !== 0 ? "border-t border-border-default" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border-default bg-base text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-h3 font-semibold text-primary">{item.title}</h3>
                    <p className="max-w-md text-sm leading-relaxed text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
