import { FooterMain } from "@/sections/Footer/components/FooterMain";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="relative text-[13.125px] bg-blue-950 bg-[linear-gradient(rgb(25,25,100)_60%,rgb(50,50,125)_100%)] bg-no-repeat box-border caret-transparent leading-[20.3438px] mt-[-17.5px] outline-[3px] z-0 overflow-hidden pt-[52.5px] pb-[26.25px] scroll-mt-[47.875px] md:text-[15px] md:leading-[23.25px] md:mt-[-60px] md:pt-20 md:pb-10 md:scroll-mt-[60px]"
    >
      <FooterMain />
      <FooterBottom />
    </footer>
  );
};
