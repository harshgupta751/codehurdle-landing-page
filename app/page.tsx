import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductOverviewSection } from "@/components/sections/product-overview-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { WhyCodeHurdleSection } from "@/components/sections/why-codehurdle-section";
import { MockInterviewSection } from "@/components/sections/mock-interview-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductOverviewSection />
        <FeaturesSection />
        <WhyCodeHurdleSection />
        <MockInterviewSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
