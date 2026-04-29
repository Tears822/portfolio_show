export const FooterLegalNav = () => {
  return (
    <nav
      aria-label="Footer Navigation"
      className="relative text-[13.125px] bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.328125px] leading-[20.3438px] min-h-[auto] min-w-[auto] outline-[3px] z-10 font-geist md:text-[15px] md:tracking-[0.375px] md:leading-[23.25px]"
    >
      <ul className="text-[13.125px] items-center bg-no-repeat box-border caret-transparent gap-x-0.5 flex flex-wrap justify-center tracking-[0.328125px] leading-[20.3438px] list-none min-h-[auto] min-w-[auto] outline-[3px] gap-y-0.5 pl-0 md:text-[15px] md:justify-start md:tracking-[0.375px] md:leading-[23.25px]">
        <li className="px-[17.5px] py-[8.75px] md:px-5 md:py-2.5">
          <a href="#" className="hover:text-violet-200">Privacy</a>
        </li>
        <li className="px-[17.5px] py-[8.75px] md:px-5 md:py-2.5">
          <a href="#" className="hover:text-violet-200">Terms</a>
        </li>
      </ul>
    </nav>
  );
};
