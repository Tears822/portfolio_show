import { SectionHeader } from "@/components/SectionHeader";
import { CaseStudyCard } from "@/sections/CaseStudiesSection/components/CaseStudyCard";
import { CaseStudiesFooter } from "@/sections/CaseStudiesSection/components/CaseStudiesFooter";

export const CaseStudiesSection = () => {
  return (
    <section
      id="projects"
      className="relative text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] outline-[3px] scroll-mt-[47.875px] md:text-base md:leading-7 md:scroll-mt-[60px]"
    >
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] max-w-[min(1645px,100%)] outline-[3px] w-[min(100%_-_35px,min(1645px,100%))] mx-auto md:text-base md:leading-7 md:max-w-[min(1840px,100%)] md:w-[min(100%_-_80px,min(1840px,100%))]">
        <div className="text-sm bg-no-repeat box-border caret-transparent gap-x-[17.5px] grid grid-cols-[repeat(auto-fill,minmax(min(480px,100%),1fr))] leading-[24.5px] ml-[-13.125px] mr-[-13.125px] outline-[3px] gap-y-[17.5px] md:text-base md:gap-x-10 md:grid-cols-[repeat(2,minmax(min(480px,100%),1fr))] md:leading-7 md:ml-[-30px] md:mr-[-30px] md:gap-y-10">
          <SectionHeader
            headerClassName="text-sm items-start bg-no-repeat box-border caret-transparent gap-x-[35px] flex flex-col col-start-auto row-end-2 row-start-1 justify-start leading-[24.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[35px] pt-[26.25px] px-[13.125px] md:text-base md:gap-x-[60px] md:col-start-2 md:leading-7 md:gap-y-[60px] md:pt-10 md:px-[30px]"
            eyebrowText="Project Samples"
            eyebrowClassName="text-violet-200 text-sm items-center bg-violet-200/10 bg-no-repeat box-border caret-transparent gap-x-[17.5px] flex justify-center tracking-[0.35px] leading-[18.9px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[17.5px] border px-[13.125px] py-[4.375px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent md:gap-x-5 md:gap-y-5 md:px-[15px] md:py-[5px]"
            title="Selected Portfolio Projects"
            titleClassName="text-[25.2px] font-medium bg-no-repeat box-border caret-transparent leading-[34.02px] mt-[-13.125px] min-h-[auto] min-w-[auto] outline-[3px] break-words scroll-mt-[47.875px] font-geist md:text-[31.25px] md:leading-[42.1875px] md:mt-[-15px] md:scroll-mt-[60px]"
            contentWrapperClassName="text-sm items-start bg-no-repeat box-border caret-transparent gap-x-[26.25px] flex flex-col justify-start leading-[24.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[26.25px] md:text-base md:gap-x-[30px] md:leading-7 md:gap-y-[30px]"
          />

          <CaseStudyCard
            imageAlt="crafterblue.com storefront"
            imageSrc={[
              "/portfolios/crafterblue.com/1.png",
              "/portfolios/crafterblue.com/2.png",
              "/portfolios/crafterblue.com/3.png",
              "/portfolios/crafterblue.com/4.png",
            ]}
            imageSizes="(max-width: 360px) 100vw, (max-width: 480px) 100vw, (max-width: 720px) 100vw, (max-width: 1023px) 100vw, 50vw"
            href="https://crafterblue.com/"
            title="Crafter Blue"
            description="Shopify-focused e-commerce implementation with clear product storytelling, conversion-ready PDP structure, and performance-minded frontend delivery."
            tag1Title="Shopify"
            tag1ClassName="text-[12.25px] bg-pink-300 bg-no-repeat box-border caret-transparent leading-[21.4375px] min-h-1 min-w-4 outline-[3px] rounded-[35px] md:text-sm md:leading-[24.5px] md:rounded-[40px]"
            tag2Title="E-commerce UX"
            tag2ClassName="relative text-[12.25px] bg-no-repeat box-border caret-transparent leading-[21.4375px] min-h-1 min-w-8 outline-[3px] rounded-[35px] md:text-sm md:leading-[24.5px] md:rounded-[40px] before:accent-auto before:bg-[linear-gradient(to_right,rgb(250,175,200),rgb(175,200,250))] before:bg-no-repeat before:box-border before:caret-transparent before:text-blue-950 before:block before:text-[12.25px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4375px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[-1] before:rounded-[35px] before:border-separate before:inset-0 before:font-inter before:md:text-sm before:md:leading-[24.5px] before:md:rounded-[40px]"
          />

          <CaseStudyCard
            imageAlt="d-mop.com storefront"
            imageSrc={[
              "/portfolios/d-mop.com/1.png",
              "/portfolios/d-mop.com/2.png",
              "/portfolios/d-mop.com/3.png",
              "/portfolios/d-mop.com/4.png",
            ]}
            imageSizes="(max-width: 360px) 100vw, (max-width: 480px) 100vw, (max-width: 720px) 100vw, (max-width: 1023px) 100vw, 50vw"
            href="https://www.d-mop.com/"
            title="D-mop"
            description="Fashion commerce experience optimized for category discovery and product merchandising, with responsive layout behavior for high mobile traffic."
            tag1Title="Retail Commerce"
            tag1ClassName="text-[12.25px] bg-pink-300 bg-no-repeat box-border caret-transparent leading-[21.4375px] min-h-1 min-w-4 outline-[3px] rounded-[35px] md:text-sm md:leading-[24.5px] md:rounded-[40px]"
            tag2Title="Responsive UI"
            tag2ClassName="relative text-[12.25px] bg-no-repeat box-border caret-transparent leading-[21.4375px] min-h-1 min-w-8 outline-[3px] rounded-[35px] md:text-sm md:leading-[24.5px] md:rounded-[40px] before:accent-auto before:bg-[linear-gradient(to_right,rgb(250,175,200),rgb(175,200,250))] before:bg-no-repeat before:box-border before:caret-transparent before:text-blue-950 before:block before:text-[12.25px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4375px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[-1] before:rounded-[35px] before:border-separate before:inset-0 before:font-inter before:md:text-sm before:md:leading-[24.5px] before:md:rounded-[40px]"
          />

          <CaseStudyCard
            articleClassName="translate-y-[35px] z-20"
            imageAlt="foodpanda.hk platform screenshots"
            imageSrc={[
              "/portfolios/foodpanda.hk/1.png",
              "/portfolios/foodpanda.hk/2.png",
              "/portfolios/foodpanda.hk/3.png",
            ]}
            imageSizes="(max-width: 360px) 100vw, (max-width: 480px) 100vw, (max-width: 720px) 100vw, (max-width: 1023px) 100vw, 50vw"
            href="https://www.foodpanda.hk/"
            title="foodpanda HK"
            description="High-scale consumer ordering flow support with frontend consistency, operational clarity, and UX prioritization for rapid order journeys."
            tag1Title="High Traffic"
            tag1ClassName="text-[12.25px] bg-pink-300 bg-no-repeat box-border caret-transparent leading-[21.4375px] min-h-1 min-w-4 outline-[3px] rounded-[35px] md:text-sm md:leading-[24.5px] md:rounded-[40px]"
            tag2Title="Platform UX"
            tag2ClassName="relative text-[12.25px] bg-no-repeat box-border caret-transparent leading-[21.4375px] min-h-1 min-w-8 outline-[3px] rounded-[35px] md:text-sm md:leading-[24.5px] md:rounded-[40px] before:accent-auto before:bg-[linear-gradient(to_right,rgb(250,175,200),rgb(175,200,250))] before:bg-no-repeat before:box-border before:caret-transparent before:text-blue-950 before:block before:text-[12.25px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4375px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[-1] before:rounded-[35px] before:border-separate before:inset-0 before:font-inter before:md:text-sm before:md:leading-[24.5px] before:md:rounded-[40px]"
          />

          <CaseStudyCard
            articleClassName="translate-y-[35px] z-20 md:translate-y-20"
            imageAlt="hhp.com.hk commerce site"
            imageSrc={[
              "/portfolios/hhp.com.hk/1.png",
              "/portfolios/hhp.com.hk/2.png",
              "/portfolios/hhp.com.hk/3.png",
            ]}
            imageSizes="(max-width: 360px) 100vw, (max-width: 480px) 100vw, (max-width: 720px) 100vw, (max-width: 1023px) 100vw, 50vw"
            href="https://www.hhp.com.hk/"
            title="HHP"
            description="Commerce and catalog presentation work focused on clean visual hierarchy, product detail engagement, and maintainable front-end components."
            tag1Title="Catalog Design"
            tag1ClassName="text-[12.25px] bg-pink-300 bg-no-repeat box-border caret-transparent leading-[21.4375px] min-h-1 min-w-4 outline-[3px] rounded-[35px] md:text-sm md:leading-[24.5px] md:rounded-[40px]"
            tag2Title="Frontend Build"
            tag2ClassName="relative text-[12.25px] bg-no-repeat box-border caret-transparent leading-[21.4375px] min-h-1 min-w-8 outline-[3px] rounded-[35px] md:text-sm md:leading-[24.5px] md:rounded-[40px] before:accent-auto before:bg-[linear-gradient(to_right,rgb(250,175,200),rgb(175,200,250))] before:bg-no-repeat before:box-border before:caret-transparent before:text-blue-950 before:block before:text-[12.25px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4375px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[-1] before:rounded-[35px] before:border-separate before:inset-0 before:font-inter before:md:text-sm before:md:leading-[24.5px] before:md:rounded-[40px]"
          />

          <CaseStudyCard
            imageAlt="oiad.hk site"
            imageSrc={[
              "/portfolios/oiad.hk/1.png",
              "/portfolios/oiad.hk/2.png",
              "/portfolios/oiad.hk/3.png",
            ]}
            imageSizes="(max-width: 360px) 100vw, (max-width: 480px) 100vw, (max-width: 720px) 100vw, (max-width: 1023px) 100vw, 50vw"
            href="https://oiad.hk/"
            title="OIAD"
            description="Brand-forward website implementation with structured content sections, clear service messaging, and scalable page patterns for ongoing updates."
            tag1Title="Brand Site"
            tag1ClassName="text-[12.25px] bg-pink-300 bg-no-repeat box-border caret-transparent leading-[21.4375px] min-h-1 min-w-4 outline-[3px] rounded-[35px] md:text-sm md:leading-[24.5px] md:rounded-[40px]"
            tag2Title="Content Architecture"
            tag2ClassName="relative text-[12.25px] bg-no-repeat box-border caret-transparent leading-[21.4375px] min-h-1 min-w-8 outline-[3px] rounded-[35px] md:text-sm md:leading-[24.5px] md:rounded-[40px] before:accent-auto before:bg-[linear-gradient(to_right,rgb(250,175,200),rgb(175,200,250))] before:bg-no-repeat before:box-border before:caret-transparent before:text-blue-950 before:block before:text-[12.25px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4375px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[-1] before:rounded-[35px] before:border-separate before:inset-0 before:font-inter before:md:text-sm before:md:leading-[24.5px] before:md:rounded-[40px]"
          />

          <CaseStudyCard
            imageAlt="petshack.hk storefront"
            imageSrc={[
              "/portfolios/petshack.hk/1.png",
              "/portfolios/petshack.hk/2.png",
              "/portfolios/petshack.hk/3.png",
            ]}
            imageSizes="(max-width: 360px) 100vw, (max-width: 480px) 100vw, (max-width: 720px) 100vw, (max-width: 1023px) 100vw, 50vw"
            href="https://petshack.hk/"
            title="Petshack HK"
            description="Pet retail e-commerce delivery emphasizing trust cues, category clarity, and straightforward checkout behavior for recurring purchases."
            tag1Title="Retail UX"
            tag1ClassName="text-[12.25px] bg-pink-300 bg-no-repeat box-border caret-transparent leading-[21.4375px] min-h-1 min-w-4 outline-[3px] rounded-[35px] md:text-sm md:leading-[24.5px] md:rounded-[40px]"
            tag2Title="Conversion"
            tag2ClassName="relative text-[12.25px] bg-no-repeat box-border caret-transparent leading-[21.4375px] min-h-1 min-w-8 outline-[3px] rounded-[35px] md:text-sm md:leading-[24.5px] md:rounded-[40px] before:accent-auto before:bg-[linear-gradient(to_right,rgb(250,175,200),rgb(175,200,250))] before:bg-no-repeat before:box-border before:caret-transparent before:text-blue-950 before:block before:text-[12.25px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4375px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[-1] before:rounded-[35px] before:border-separate before:inset-0 before:font-inter before:md:text-sm before:md:leading-[24.5px] before:md:rounded-[40px]"
          />

          <CaseStudiesFooter />
        </div>
      </div>
    </section>
  );
};
