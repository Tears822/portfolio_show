import { useEffect } from "react";
import { openContactModal } from "@/components/modals/ContactFormModal";

export type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <div className="text-sm bg-no-repeat box-border caret-transparent basis-0 grow shrink-0 leading-[24.5px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-[4.375px] md:text-base md:leading-7 md:px-2.5">
      <div
        className={`fixed text-sm bg-blue-950 bg-no-repeat box-border caret-transparent gap-x-[26.25px] flex flex-col justify-between leading-[24.5px] max-h-[calc(100dvh-70px)] min-w-[280px] outline-[3px] overflow-x-hidden overflow-y-auto overscroll-y-contain gap-y-[26.25px] w-[min(85vw,320px)] z-[190] scroll-mt-[47.875px] rounded-[8.75px] right-[8.75px] top-[70px] transition-all duration-300 ease-in-out md:static md:text-base md:bg-transparent md:gap-x-[normal] md:block md:flex-row md:justify-normal md:leading-7 md:max-h-none md:max-w-none md:min-w-0 md:overflow-x-visible md:overflow-y-visible md:overscroll-y-auto md:pointer-events-auto md:gap-y-[normal] md:transform-none md:w-auto md:z-auto md:scroll-mt-[60px] md:rounded-none md:right-auto md:top-auto md:opacity-100 ${
          isOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-[100%] opacity-0 md:pointer-events-auto"
        }`}
      >
        <nav
          aria-label="Navigation"
          className="relative text-[21px] items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.525px] leading-[36.75px] min-h-[auto] min-w-[auto] outline-[3px] z-10 px-[17.5px] py-8 font-geist md:text-base md:[align-items:normal] md:justify-end md:tracking-[0.4px] md:leading-7 md:min-h-0 md:min-w-0 md:pointer-events-auto md:p-0"
        >
          <ul className="text-[21px] items-stretch bg-no-repeat box-border caret-transparent gap-x-0.5 flex flex-col flex-wrap justify-center tracking-[0.525px] leading-[36.75px] list-none min-h-[auto] min-w-[auto] outline-[3px] gap-y-0.5 w-full pl-0 scroll-mt-[47.875px] md:text-base md:items-start md:flex-row md:tracking-[0.4px] md:leading-7 md:pointer-events-auto md:w-auto md:scroll-mt-[60px]">
            <li className="px-4 py-3 md:px-5 md:py-2.5">
              <a href="/" onClick={onClose} className="relative text-violet-200 pointer-events-auto md:pointer-events-auto hover:text-violet-200">
                Home
              </a>
            </li>
            <li className="px-4 py-3 md:px-5 md:py-2.5">
              <a href="#services" onClick={onClose} className="relative pointer-events-auto md:pointer-events-auto hover:text-violet-200">
                Expertise
              </a>
            </li>
            <li className="px-4 py-3 md:px-5 md:py-2.5">
              <a href="#projects" onClick={onClose} className="relative pointer-events-auto md:pointer-events-auto hover:text-violet-200">
                Projects
              </a>
            </li>
            <li className="px-4 py-3 md:px-5 md:py-2.5">
              <a href="#experience" onClick={onClose} className="relative pointer-events-auto md:pointer-events-auto hover:text-violet-200">
                Experience
              </a>
            </li>
            <li className="px-4 py-3 md:px-5 md:py-2.5">
              <a
                href="#contact"
                onClick={(e) => {
                  onClose();
                  openContactModal(e);
                }}
                className="relative pointer-events-auto md:pointer-events-auto hover:text-violet-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
