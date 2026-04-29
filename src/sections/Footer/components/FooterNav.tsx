import { openContactModal } from "@/components/modals/ContactFormModal";

export const FooterNav = () => {
  return (
    <nav className="relative text-sm [align-items:normal] bg-no-repeat box-border caret-transparent flex flex-col col-start-auto justify-end tracking-[0.35px] leading-[21.7px] min-h-[auto] min-w-[auto] outline-[3px] text-center z-10 pt-[26.25px] font-geist md:text-base md:items-end md:col-start-[span_8] md:tracking-[0.4px] md:leading-[24.8px] md:pt-0">
      <ul className="text-sm items-center bg-no-repeat box-border caret-transparent gap-x-0.5 flex flex-wrap justify-center tracking-[0.35px] leading-[21.7px] list-none min-h-[auto] min-w-[auto] outline-[3px] gap-y-0.5 pl-0 scroll-mt-[47.875px] md:text-base md:items-start md:tracking-[0.4px] md:leading-[24.8px] md:scroll-mt-[60px]">
        <li className="px-[17.5px] py-[8.75px] md:px-5 md:py-2.5">
          <a href="/" className="hover:text-violet-200">Home</a>
        </li>
        <li className="px-[17.5px] py-[8.75px] md:px-5 md:py-2.5">
          <a href="#services" className="hover:text-violet-200">Expertise</a>
        </li>
        <li className="px-[17.5px] py-[8.75px] md:px-5 md:py-2.5">
          <a href="#experience" className="hover:text-violet-200">Experience</a>
        </li>
        <li className="px-[17.5px] py-[8.75px] md:px-5 md:py-2.5">
          <a href="#contact" onClick={openContactModal} className="hover:text-violet-200">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
