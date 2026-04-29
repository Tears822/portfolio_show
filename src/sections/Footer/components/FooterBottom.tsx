import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const FooterBottom = () => {
  return (
    <section className="relative text-white/80 text-[13.125px] bg-no-repeat box-border caret-transparent leading-[20.3438px] outline-[3px] text-center py-[17.5px] scroll-mt-[47.875px] md:text-[15px] md:leading-[23.25px] md:py-5 md:scroll-mt-[60px]">
      <div className="text-[13.125px] bg-no-repeat box-border caret-transparent leading-[20.3438px] max-w-[1260px] outline-[3px] w-[min(100%_-_35px,1260px)] mx-auto py-[17.5px] md:text-[15px] md:leading-[23.25px] md:max-w-[1440px] md:w-[min(100%_-_80px,1440px)] md:py-5">
        <div className="text-[13.125px] bg-no-repeat box-border caret-transparent gap-x-[17.5px] flex flex-col justify-start leading-[20.3438px] outline-[3px] gap-y-[17.5px] md:text-[15px] md:gap-x-5 md:leading-[23.25px] md:gap-y-5">
          <FooterCopyright />
        </div>
      </div>
    </section>
  );
};
