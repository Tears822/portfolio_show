import { Hero } from "@/sections/Hero";
import { CaseStudiesSection } from "@/sections/CaseStudiesSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";

export const Main = () => {
  return (
    <main className="relative text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] outline-[3px] overflow-x-clip z-10 pb-[35px] scroll-mt-[47.875px] md:text-base md:leading-7 md:pb-10 md:scroll-mt-[60px]">
      <Hero />
      <CaseStudiesSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
    </main>
  );
};
