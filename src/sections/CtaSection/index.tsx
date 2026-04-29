import { CtaContent } from "@/sections/CtaSection/components/CtaContent";

export const CtaSection = () => {
  return (
    <section
      aria-label="Ready to start a project?"
      role="region"
      className="relative text-sm bg-[radial-gradient(140%_120%_at_50%_100%,rgba(0,0,0,0)_25%,rgba(0,0,75,0)_35%,rgba(0,0,75,0.125)_50%,rgba(0,0,75,0.5)_90%,rgba(0,0,75,0.5)_95%)] bg-no-repeat box-border caret-transparent leading-[24.5px] outline-[3px] py-[47.875px] scroll-mt-[47.875px] rounded-[17.5px] md:text-base md:leading-7 md:py-[60px] md:scroll-mt-[60px] md:rounded-[60px]"
    >
      <div className="text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] max-w-[1260px] outline-[3px] w-[min(100%_-_35px,1260px)] mx-auto py-[47.875px] md:text-base md:leading-7 md:max-w-[1440px] md:w-[min(100%_-_80px,1440px)] md:py-[60px]">
        <CtaContent />
      </div>
    </section>
  );
};
