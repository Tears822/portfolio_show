import { SkipLinks } from "@/components/navigation/SkipLinks";
import { PageShell } from "@/components/layout/PageShell";
import { Footer } from "@/sections/Footer";
import { LottieBackground } from "@/components/background/LottieBackground";
import { ContactFormModal } from "@/components/modals/ContactFormModal";

export const App = () => {
  return (
    <div className="relative min-h-screen w-full text-white text-sm not-italic normal-nums font-normal accent-auto bg-blue-950 bg-no-repeat box-border caret-transparent block tracking-[normal] leading-[24.5px] list-outside list-disc min-w-0 outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-inter md:text-base md:leading-7">
      <SkipLinks href="#navigation" text="Skip to navigation" />
      <SkipLinks href="#content" text="Skip to content" />
      <SkipLinks href="#footer" text="Skip to footer" />
      <LottieBackground />
      <PageShell />
      <ul className="absolute text-sm bg-no-repeat box-border caret-transparent h-full leading-[24.5px] list-[square] max-w-full outline-[3px] overflow-x-clip pointer-events-none z-[180] pl-0 inset-0 md:text-base md:leading-7"></ul>
      <Footer />
      <ContactFormModal />
    </div>
  );
};
