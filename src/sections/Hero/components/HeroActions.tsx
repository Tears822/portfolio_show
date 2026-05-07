import { openContactModal } from "@/components/modals/ContactFormModal";

export const HeroActions = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-5">
      <a
        href="mailto:jason@aunexes.com"
        onClick={openContactModal}
        className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-[linear-gradient(177deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_75%)] px-6 py-3 font-geist text-base font-medium text-white shadow-[0_14px_34px_rgba(0,0,50,0.36)] transition hover:border-violet-200/70 hover:text-violet-100"
      >
        Start a Conversation
      </a>
      <a
        href="https://linkedin.com/in/jason-liu-6b8aa780"
        className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-[linear-gradient(177deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.04)_75%)] px-6 py-3 font-geist text-base font-medium text-white/95 shadow-[0_10px_24px_rgba(0,0,40,0.28)] transition hover:border-violet-200/60 hover:text-violet-100"
      >
        View LinkedIn
      </a>
    </div>
  );
};
  