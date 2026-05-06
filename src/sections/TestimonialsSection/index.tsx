import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section
      id="experience"
      className="relative text-sm bg-[radial-gradient(140%_120%_at_50%_100%,rgba(0,0,0,0)_25%,rgba(0,0,75,0)_35%,rgba(0,0,75,0.125)_50%,rgba(0,0,75,0.5)_90%,rgba(0,0,75,0.5)_95%)] bg-no-repeat box-border caret-transparent leading-[24.5px] outline-[3px] py-[47.875px] scroll-mt-[47.875px] rounded-[17.5px] md:text-base md:leading-7 md:py-[60px] md:scroll-mt-[60px] md:rounded-[60px]"
    >
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] max-w-[1260px] outline-[3px] w-[min(100%_-_35px,1260px)] mx-auto py-[47.875px] md:text-base md:leading-7 md:max-w-[1440px] md:w-[min(100%_-_80px,1440px)] md:py-[60px]">
        <SectionHeader
          headerClassName="gap-x-[26.25px] gap-y-[26.25px] text-center mb-[47.875px] md:gap-x-[30px] md:gap-y-[30px] md:mb-[60px]"
          eyebrowText="Career Highlights"
          eyebrowClassName="text-violet-200 text-sm items-center bg-violet-200/10 bg-no-repeat box-border caret-transparent gap-x-[17.5px] flex justify-center tracking-[0.35px] leading-[18.9px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[17.5px] border mx-auto px-[13.125px] py-[4.375px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent md:gap-x-5 md:gap-y-5 md:px-[15px] md:py-[5px]"
          title="Impact Across Commerce, Content, and Product Teams"
          titleClassName="text-[36.288px] font-medium bg-no-repeat box-border caret-transparent leading-[46.6019px] mt-[-13.125px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-geist md:text-[48.8281px] md:leading-[59.9445px] md:mt-[-15px]"
          description={
            <>
              Proven delivery across CMS, fullstack platform engineering, and cloud modernization with measurable
              outcomes in performance, reliability, and release speed.
            </>
          }
          descriptionClassName="text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] max-w-[662.402px] min-h-[auto] min-w-[auto] outline-[3px] mx-auto md:text-base md:leading-7 md:max-w-[757.031px]"
        />
        <div className="text-sm bg-no-repeat box-border caret-transparent gap-x-[26.25px] grid grid-cols-[repeat(1,minmax(min(320px,100%),1fr))] leading-[24.5px] outline-[3px] gap-y-[26.25px] mt-[47.875px] md:text-base md:gap-x-10 md:grid-cols-[repeat(3,minmax(min(320px,100%),1fr))] md:leading-7 md:gap-y-10 md:mt-[60px]">
          <TestimonialCard
            quote="Led 19 microservice migrations to AKS, delivering significant infrastructure savings and better API performance."
            name="Hongkong Land"
            role="Lead Software Engineer"
            company="Landmark BESPOKE Programme"
            logoSrc="/company_logo/hongkonglandlimited.svg"
            logoAlt="Hongkong Land logo"
          />
          <TestimonialCard
            quote="Built APIs, internal tooling, and platform architecture upgrades across multiple product lines, improving delivery speed and operational stability in a global R&D environment."
            name="RIB Software"
            role="Product Engineer"
            company="iTWO and Graphics Engine"
            logoSrc="/company_logo/RIB-Logo.svg"
            logoAlt="RIB Software logo"
          />
          <TestimonialCard
            quote="Founded Aunexes to deliver Fullstack + CMS (Shopify + WordPress), including themes, apps, integrations, and backend services, with production-grade engineering standards."
            name="Aunexes"
            role="Founder"
            company="Commerce & Software Agency"
            logoSrc="/logo.png"
            logoAlt="Aunexes logo"
          />
        </div>
      </div>
    </section>
  );
};
