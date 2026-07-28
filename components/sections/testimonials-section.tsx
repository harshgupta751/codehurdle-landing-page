import { SectionHeader } from "@/components/shared/section-header";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="border-t border-border-subtle bg-surface py-20 sm:py-28">
      <div className="container flex flex-col gap-14">
        <SectionHeader
          eyebrow="Social proof"
          title="42,000+ engineers practice here every week."
          description="From first-year CS students to engineers prepping for a jump — here's what changed for them."
          align="center"
          className="mx-auto"
        />

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
