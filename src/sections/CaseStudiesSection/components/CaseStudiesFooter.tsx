import { openContactModal } from "@/components/modals/ContactFormModal";

export const CaseStudiesFooter = () => {
  return (
    <footer className="flex flex-col gap-6 px-[13.125px] pt-[26.25px] md:items-end md:px-[30px] md:pt-10">
      <h3 className="font-geist text-3xl md:text-4xl">Want to discuss your project?</h3>
      <nav aria-label="Projects Navigation" className="overflow-auto md:overflow-visible">
        <ul className="flex gap-3">
          <li>
            <a href="mailto:jason@aunexes.com" onClick={openContactModal} className="rounded-full border border-white/20 px-4 py-2 hover:text-violet-200">
              Contact Jason
            </a>
          </li>
          <li>
            <a href="#services" className="rounded-full border border-white/20 px-4 py-2 hover:text-violet-200">
              Fullstack + CMS
            </a>
          </li>
          <li>
            <a href="#services" className="rounded-full border border-white/20 px-4 py-2 hover:text-violet-200">
              Shopify + WordPress
            </a>
          </li>
          <li>
            <a href="#experience" className="rounded-full border border-white/20 px-4 py-2 hover:text-violet-200">
              Architecture
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
