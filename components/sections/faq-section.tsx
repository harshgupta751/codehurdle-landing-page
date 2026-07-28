import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/data/faqs";

export function FAQSection() {
  return (
    <section id="faq" className="border-t border-border-subtle py-20 sm:py-28">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions, answered directly."
          description="Can't find what you're looking for? Reach out on WhatsApp — the community usually answers faster than support tickets."
        />

        <FadeIn>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
