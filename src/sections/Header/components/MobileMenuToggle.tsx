export type MobileMenuToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const MobileMenuToggle = ({ isOpen, onToggle }: MobileMenuToggleProps) => {
  return (
    <div className="text-sm items-center bg-no-repeat box-border caret-transparent gap-x-[17.5px] flex basis-[content] flex-wrap justify-end leading-[24.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[17.5px] px-[4.375px] md:text-base md:gap-x-5 md:hidden md:leading-7 md:min-h-0 md:min-w-0 md:gap-y-5 md:px-2.5">
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="relative text-[14.875px] font-medium items-center bg-transparent bg-no-repeat caret-transparent gap-x-[8.75px] flex justify-center tracking-[0.371875px] leading-[18.5938px] min-h-[auto] min-w-[auto] outline-transparent outline outline-2 pointer-events-auto gap-y-[8.75px] text-center border p-[13.0156px] rounded-lg border-transparent font-geist md:text-[17px] md:gap-x-2.5 md:hidden md:tracking-[0.425px] md:leading-[21.25px] md:min-h-0 md:min-w-0 md:pointer-events-none md:gap-y-2.5 md:p-[14.875px] hover:text-violet-200"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>
    </div>
  );
};