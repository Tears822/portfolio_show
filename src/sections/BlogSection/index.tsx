import { BlogSectionHeader } from "@/sections/BlogSection/components/BlogSectionHeader";
import { BlogPostCard } from "@/sections/BlogSection/components/BlogPostCard";

export const BlogSection = () => {
  return (
    <section className="relative text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] outline-[3px] py-[47.875px] scroll-mt-[47.875px] md:text-base md:leading-7 md:py-[60px] md:scroll-mt-[60px]">
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] max-w-[1260px] outline-[3px] w-[min(100%_-_35px,1260px)] mx-auto py-[47.875px] md:text-base md:leading-7 md:max-w-[1440px] md:w-[min(100%_-_80px,1440px)] md:py-[60px]">
        <BlogSectionHeader />
        <div className="text-sm bg-no-repeat box-border caret-transparent gap-x-[52.5px] grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] leading-[24.5px] outline-[3px] gap-y-[26.25px] mt-[47.875px] md:text-base md:gap-x-[120px] md:grid-cols-[repeat(2,minmax(min(320px,100%),1fr))] md:leading-7 md:gap-y-10 md:mt-[60px]">
          <BlogPostCard
            href="#"
            imageAlt="AKS migration lessons"
            imageSrc="https://c.animaapp.com/moj5o9goxZ3OI8/assets/image-3.svg"
            title="Lessons from Migrating 19 Microservices to Azure Kubernetes Service"
            date="2026"
            ctaText="Read"
          />
          <BlogPostCard
            href="#"
            imageAlt="Shopify architecture and integrations"
            imageSrc="https://c.animaapp.com/moj5o9goxZ3OI8/assets/image-3.svg"
            title="When to Pair Shopify with WordPress and How to Integrate Both"
            date="2026"
            ctaText="Read"
          />
        </div>
      </div>
    </section>
  );
};
