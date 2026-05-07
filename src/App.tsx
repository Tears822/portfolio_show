import { useState } from "react";
import { SkipLinks } from "@/components/navigation/SkipLinks";
import { PageShell } from "@/components/layout/PageShell";
import { Footer } from "@/sections/Footer";
import { LottieBackground } from "@/components/background/LottieBackground";
import { ContactFormModal } from "@/components/modals/ContactFormModal";

export const App = () => {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      className="relative min-h-screen w-full text-white text-sm not-italic normal-nums font-normal accent-auto bg-blue-950 bg-no-repeat box-border caret-transparent block tracking-[normal] leading-[24.5px] list-outside list-disc min-w-0 outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-inter md:text-base md:leading-7"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setCursorPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }}
      onMouseLeave={() => setCursorPosition(null)}
    >
      <SkipLinks href="#navigation" text="Skip to navigation" />
      <SkipLinks href="#content" text="Skip to content" />
      <SkipLinks href="#footer" text="Skip to footer" />
      <LottieBackground />
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed z-[90] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.20)_0%,rgba(99,102,241,0.13)_42%,rgba(30,58,138,0)_74%)] blur-2xl transition-opacity duration-300 md:h-80 md:w-80 ${
          cursorPosition ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: cursorPosition?.x ?? 0,
          top: cursorPosition?.y ?? 0,
          transform: "translate(-50%, -50%)",
        }}
      />
      <PageShell />
      <ul className="absolute text-sm bg-no-repeat box-border caret-transparent h-full leading-[24.5px] list-[square] max-w-full outline-[3px] overflow-x-clip pointer-events-none z-[180] pl-0 inset-0 md:text-base md:leading-7"></ul>
      <Footer />
      <ContactFormModal />
    </div>
  );
};
