import { openContactModal } from "@/components/modals/ContactFormModal";

export const DesktopSignIn = () => {
    return (
      <div className="text-sm bg-no-repeat box-border caret-transparent hidden basis-[content] justify-normal leading-[24.5px] min-h-0 min-w-0 outline-[3px] px-[4.375px] md:text-base md:flex md:justify-end md:leading-7 md:min-h-[auto] md:min-w-[auto] md:px-2.5">
        <nav
          aria-label="User Account"
          className="text-sm bg-no-repeat box-border caret-transparent leading-[24.5px] min-h-0 min-w-0 outline-[3px] w-full md:text-base md:leading-7 md:min-h-[auto] md:min-w-[auto]"
        >
          <ul className="text-sm items-center bg-no-repeat box-border caret-transparent gap-x-px flex flex-wrap leading-[24.5px] list-none outline-[3px] gap-y-px pl-0 md:text-base md:leading-7">
            <li className="relative text-sm bg-no-repeat box-border caret-transparent block leading-[24.5px] min-h-0 min-w-0 outline-[3px] py-0.5 md:text-base md:leading-7 md:min-h-[auto] md:min-w-[auto]">
              <a
                aria-label="Contact Jason Liu"
                href="mailto:jason@aunexes.com"
                onClick={openContactModal}
                className="relative text-[21px] items-center bg-no-repeat shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent gap-x-[13.125px] flex grid-cols-[1fr_auto] justify-between tracking-[0.525px] leading-[26.25px] min-w-0 outline-transparent outline outline-2 gap-y-[13.125px] text-center underline-offset-[3.48074px] pl-[17.5px] pr-[8.75px] py-[8.75px] rounded-br-[10.5625px] rounded-bl rounded-tl rounded-tr font-geist md:text-base md:gap-x-[15px] md:tracking-[0.4px] md:leading-5 md:min-w-[142px] md:gap-y-[15px] md:underline-offset-[2.652px] md:pl-5 md:pr-2.5 md:py-2.5 md:rounded-br-[11.5px] hover:text-violet-200 hover:border-violet-200"
              >
                <span className="text-[21px] bg-no-repeat box-border caret-transparent block tracking-[0.525px] leading-[26.25px] min-h-0 min-w-0 outline-[3px] underline-offset-[3.48074px] md:text-base md:tracking-[0.4px] md:leading-5 md:min-h-[auto] md:min-w-[auto] md:underline-offset-[2.652px]">
                  Contact
                </span>
                <img
                  src="https://c.animaapp.com/moj5o9goxZ3OI8/assets/icon-2.svg"
                  alt="Icon"
                  className="relative text-[21px] bg-no-repeat box-border caret-transparent h-6 tracking-[0.525px] leading-[26.25px] outline-[3px] pointer-events-none w-8 md:text-base md:tracking-[0.4px] md:leading-5"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  