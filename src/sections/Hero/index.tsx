import { HeroVisuals } from "@/sections/Hero/components/HeroVisuals";
import { HeroActions } from "@/sections/Hero/components/HeroActions";

export const Hero = () => {
  return (
    <header className="relative text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] outline-[3px] overflow-x-clip z-10 pt-[84.5px] pb-[26.25px] md:text-base md:leading-7 md:pt-[152px] md:pb-10">
      <div className="relative text-sm [align-items:normal] bg-no-repeat box-border caret-transparent gap-x-[26.25px] flex flex-col grid-cols-none grid-rows-none leading-[24.5px] max-w-[min(1645px,100%)] outline-[3px] gap-y-[26.25px] w-[min(100%_-_35px,min(1645px,100%))] mx-auto md:text-base md:items-end md:gap-x-0.5 md:grid md:grid-cols-[repeat(12,1fr)] md:grid-rows-[auto] md:leading-7 md:max-w-[min(1840px,100%)] md:gap-y-0.5 md:w-[min(100%_-_80px,min(1840px,100%))]">
        <div className="relative text-sm items-start bg-no-repeat box-border caret-transparent gap-x-[8.75px] flex flex-col col-end-auto col-start-auto justify-start leading-[24.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[8.75px] z-20 pt-[26.25px] md:text-base md:gap-x-2.5 md:col-end-8 md:col-start-1 md:leading-7 md:gap-y-2.5 md:pt-10">
          <small className="text-[11.6667px] items-center bg-no-repeat box-border caret-transparent gap-x-0.5 flex flex-wrap leading-[20.4167px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-0.5 md:text-[13.3333px] md:leading-[23.3333px]">
            <a
              href="#services"
              className="text-violet-200 text-[12.25px] items-center bg-violet-200/10 bg-no-repeat box-border caret-transparent gap-x-[17.5px] block justify-center tracking-[0.30625px] leading-[16.5375px] min-h-[auto] min-w-[auto] outline-transparent outline-offset-4 outline outline-2 gap-y-[17.5px] underline-offset-[1.93201px] text-center max-w-[min(100%,20rem)] border px-[13.125px] py-[4.375px] rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent sm:max-w-none sm:text-nowrap md:text-sm md:gap-x-5 md:tracking-[0.35px] md:leading-[18.9px] md:gap-y-5 md:underline-offset-[2.20801px] md:px-[15px] md:py-[5px] hover:bg-violet-200/20"
            >
              Fullstack + AI Engineer
            </a>
             
          </small>
          <h1 className="text-[36.288px] font-medium bg-no-repeat box-border caret-transparent leading-[46.6019px] max-w-[587.503px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-geist md:text-[76.2939px] md:leading-[89.1726px] md:max-w-[1235.76px]">
            {" "}
            AI, Fullstack &{" "}
            <br className="text-[36.288px] bg-no-repeat box-border caret-transparent leading-[46.6019px] outline-[3px] break-words md:text-[76.2939px] md:leading-[89.1726px]" />
            Intelligent Products That Scale.{" "}
            <br className="text-[36.288px] bg-no-repeat box-border caret-transparent leading-[46.6019px] outline-[3px] break-words md:text-[76.2939px] md:leading-[89.1726px]" />
            <span className="text-[36.288px] bg-clip-text bg-white bg-[linear-gradient(to_right,rgb(250,175,200)_25%,rgb(175,200,250)_75%)] bg-no-repeat box-border caret-transparent leading-[46.6019px] outline-[3px] break-words md:text-[76.2939px] md:leading-[89.1726px]">
              Built by Jason Liu.
            </span>
          </h1>
        </div>
        <HeroVisuals />
        <p className="text-[15.75px] self-auto bg-no-repeat box-border caret-transparent col-end-auto col-start-auto row-end-auto row-start-auto leading-[27.5625px] max-w-max min-h-[auto] min-w-[auto] outline-[3px] pl-0 font-geist md:text-lg md:self-center md:col-end-6 md:col-start-1 md:row-end-3 md:row-start-2 md:leading-[31.5px] md:pl-10">
          Fullstack + AI with end-to-end ownership: AI-assisted workflows, automation pipelines, backend services, and
          production delivery with Java Spring Boot, .NET Core, Node.js, GraphQL/REST APIs, Azure/AKS, CI/CD, caching,
          and observability. Shopify and WordPress support project requirements when CMS is part of the roadmap.
        </p>
        <HeroActions />
      </div>
    </header>
  );
};
