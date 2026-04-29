import { Header } from "@/sections/Header";
import { Main } from "@/components/layout/Main";
import { CtaSection } from "@/sections/CtaSection";
import { BackToTop } from "@/components/navigation/BackToTop";

export const PageShell = () => {
  return (
    <div className="relative text-sm bg-transparent bg-no-repeat shadow-[rgba(0,0,50,0.25)_0px_17.5px_17.5px_0px,rgba(0,0,50,0.25)_0px_35px_35px_0px,rgba(0,0,50,0.25)_0px_70px_70px_0px] box-border caret-transparent leading-[24.5px] outline-[3px] z-20 pb-[35px] scroll-mt-[47.875px] rounded-b-[17.5px] md:text-base md:shadow-[rgba(0,0,50,0.25)_0px_40px_40px_0px,rgba(0,0,50,0.25)_0px_80px_80px_0px,rgba(0,0,50,0.25)_0px_160px_160px_0px] md:leading-7 md:pb-10 md:scroll-mt-[60px] md:rounded-b-[60px]">
      <Header />
      <Main />
      <CtaSection />
      <BackToTop />
    </div>
  );
};
