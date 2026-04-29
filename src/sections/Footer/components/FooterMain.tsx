import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterContactGrid } from "@/sections/Footer/components/FooterContactGrid";

export const FooterMain = () => {
  return (
    <section className="relative text-[13.125px] bg-no-repeat box-border caret-transparent leading-[20.3438px] outline-[3px] py-[26.25px] scroll-mt-[47.875px] md:text-[15px] md:leading-[23.25px] md:py-10 md:scroll-mt-[60px]">
      <div className="text-[13.125px] bg-no-repeat box-border caret-transparent leading-[20.3438px] max-w-[min(1645px,100%)] outline-[3px] w-[min(100%_-_35px,min(1645px,100%))] mx-auto py-[26.25px] md:text-[15px] md:leading-[23.25px] md:max-w-[min(1840px,100%)] md:w-[min(100%_-_80px,min(1840px,100%))] md:py-10">
        <div className="relative text-[13.125px] bg-no-repeat box-border caret-transparent gap-x-[26.25px] flex flex-col justify-start leading-[20.3438px] outline-[3px] gap-y-[26.25px] md:text-[15px] md:gap-x-10 md:leading-[23.25px] md:gap-y-10">
          <FooterBrand />
          <FooterContactGrid />
        </div>
      </div>
    </section>
  );
};
