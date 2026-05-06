import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/sections/ServicesSection/components/ServicesFooterCta";
import { ServicesFooterCta } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesSection = () => {
  return (
    <section id="services" className="relative text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] outline-[3px] py-[47.875px] scroll-mt-[47.875px] md:text-base md:leading-7 md:py-[60px] md:scroll-mt-[60px]">
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] max-w-[1260px] outline-[3px] w-[min(100%_-_35px,1260px)] mx-auto py-[47.875px] md:text-base md:leading-7 md:max-w-[1440px] md:w-[min(100%_-_80px,1440px)] md:py-[60px]">
        <SectionHeader
          headerClassName="text-sm items-center bg-no-repeat box-border caret-transparent gap-x-[26.25px] flex flex-col justify-start leading-[24.5px] outline-[3px] gap-y-[26.25px] text-center mb-[47.875px] md:text-base md:gap-x-[30px] md:leading-7 md:gap-y-[30px] md:mb-[60px]"
          eyebrowText="Core Expertise"
          eyebrowClassName="text-violet-200 text-sm items-center bg-violet-200/10 bg-no-repeat box-border caret-transparent gap-x-[17.5px] flex justify-center tracking-[0.35px] leading-[18.9px] min-h-[auto] min-w-[auto] outline-transparent outline-offset-4 outline outline-2 gap-y-[17.5px] underline-offset-[2.20801px] border mx-auto px-[13.125px] py-[4.375px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent md:gap-x-5 md:gap-y-5 md:px-[15px] md:py-[5px] hover:bg-violet-200/20"
          title="Fullstack + AI Engineering"
          titleClassName="text-[36.288px] font-medium bg-no-repeat box-border caret-transparent leading-[46.6019px] mt-[-13.125px] max-w-[783.337px] min-h-[auto] min-w-[auto] outline-[3px] break-words scroll-mt-[47.875px] font-geist md:text-[48.8281px] md:leading-[59.9445px] md:mt-[-15px] md:max-w-[1054.35px] md:scroll-mt-[60px]"
          descriptionClassName="text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] max-w-[662.402px] min-h-[auto] min-w-[auto] outline-[3px] mx-auto md:text-base md:leading-7 md:max-w-[757.031px]"
          description={
            <>
              10+ years building production fullstack systems with growing focus on AI-enabled features, intelligent
              automation, platform architecture, and high-reliability delivery.
            </>
          }
        />

        <div className="text-sm bg-no-repeat box-border caret-transparent gap-x-[35px] grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] leading-[24.5px] outline-[3px] gap-y-[35px] mt-[47.875px] md:text-base md:gap-x-[60px] md:grid-cols-[repeat(2,minmax(min(320px,100%),1fr))] md:leading-7 md:gap-y-[60px] md:mt-[60px]">
          <ServiceCard
            sectionVariant="bg-[linear-gradient(175deg,rgba(255,255,255,0.1)_0px,rgba(255,255,255,0)_50%),linear-gradient(-30deg,rgba(175,200,250,0.45)_0px,rgba(175,200,250,0)_60%)]"
            imageSrc="https://c.animaapp.com/moj5o9goxZ3OI8/assets/web-development.svg"
            imageAlt="AI and application engineering"
            title="AI Product Delivery"
            titleVariant="text-indigo-300"
            titleHref="#"
            subtitle="AI-assisted product features, agent-ready workflows, and automation integrated into real applications with strong API contracts and production safeguards."
            listVariant="translate-x-[-682px]"
            itemLinkClassName="text-indigo-300 text-[13.125px] items-center bg-white/10 bg-no-repeat box-border caret-transparent gap-x-[17.5px] inline-flex justify-center tracking-[0.328125px] leading-[17.7188px] outline-transparent outline-offset-4 outline outline-2 gap-y-[17.5px] underline-offset-[2.06754px] text-nowrap border px-[17.5px] py-[8.75px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent md:text-base md:gap-x-5 md:tracking-[0.4px] md:leading-[21.6px] md:gap-y-5 md:underline-offset-[2.52344px] md:px-5 md:py-2.5 hover:bg-white/20"
            items={[
              { label: "AI Feature Integration", href: "#" },
              { label: "Workflow Automation", href: "#" },
              { label: "Prompt + Tool Orchestration", href: "#" },
              { label: "Data Enrichment Pipelines", href: "#" },
              { label: "API-first System Design", href: "#" },
              { label: "Event-driven Services", href: "#" },
              { label: "Quality + Guardrails", href: "#" },
              { label: "A/B Test Ready UI", href: "#" },
              { label: "Monitoring + Feedback Loop", href: "#" },
            ]}
            description={
              <>
                From idea to production: design, implementation, deployment, and iteration of AI-enabled user flows with
                maintainable code and measurable business outcomes.
              </>
            }
            iconItemVariant="text-indigo-300"
            iconSrc="https://c.animaapp.com/moj5o9goxZ3OI8/assets/icon-6.svg"
            iconAlt="Icon"
            iconClassName="w-5 h-5"
            footerText="Built for intelligence, reliability, and fast iteration."
            footerTextVariant="text-indigo-300"
            ctaHref="mailto:jason@aunexes.com"
            ctaText="Discuss AI Build Scope"
            ctaVariant="text-indigo-300"
          />

          <ServiceCard
            sectionVariant="bg-[linear-gradient(175deg,rgba(255,255,255,0.1)_0px,rgba(255,255,255,0)_50%),linear-gradient(-30deg,rgba(250,175,200,0.5)_0px,rgba(250,175,200,0)_60%)]"
            imageSrc="https://c.animaapp.com/moj5o9goxZ3OI8/assets/web-design.svg"
            imageAlt="Fullstack systems supporting commerce"
            title="Core Fullstack Platform"
            titleVariant="text-pink-300"
            titleHref="#"
            subtitle="Custom backends, APIs, cloud infrastructure, and internal tooling for enterprise and startup products with secure, scalable, observable systems."
            listVariant="translate-x-[-682px]"
            itemLinkClassName="text-pink-300 text-[13.125px] items-center bg-white/10 bg-no-repeat box-border caret-transparent gap-x-[17.5px] inline-flex justify-center tracking-[0.328125px] leading-[17.7188px] outline-transparent outline-offset-4 outline outline-2 gap-y-[17.5px] underline-offset-[2.06754px] text-nowrap border px-[17.5px] py-[8.75px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent md:text-base md:gap-x-5 md:tracking-[0.4px] md:leading-[21.6px] md:gap-y-5 md:underline-offset-[2.52344px] md:px-5 md:py-2.5 hover:bg-white/20"
            items={[
              { label: "Python Services", href: "#" },
              { label: "Java + Spring Boot", href: "#" },
              { label: ".NET Core APIs", href: "#" },
              { label: "React / Angular", href: "#" },
              { label: "Node.js Services", href: "#" },
              { label: "GraphQL", href: "#" },
              { label: "REST Webhooks", href: "#" },
              { label: "PostgreSQL + Redis", href: "#" },
              { label: "Redis Caching", href: "#" },
              { label: "Azure / AKS", href: "#" },
              { label: "CI/CD Pipelines", href: "#" },
              { label: "Monitoring + Alerts", href: "#" },
            ]}
            description={
              <>
                Enterprise architecture with performance budgets, security controls, deployment strategy, and
                observability so teams can ship quickly without risking production stability.
              </>
            }
            iconItemVariant="text-pink-300"
            iconSrc="https://c.animaapp.com/moj5o9goxZ3OI8/assets/icon-4.svg"
            iconAlt="Icon"
            iconClassName="w-5 h-5"
            footerText="Production delivery when your roadmap leaves the theme editor."
            footerTextVariant="text-pink-300"
            ctaHref="mailto:jason@aunexes.com"
            ctaText="Discuss Backend Work"
            ctaVariant="text-pink-300"
          />
        </div>
        <ServicesFooterCta />
      </div>
    </section>
  );
};
