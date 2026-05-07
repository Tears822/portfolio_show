import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";
import { MobileMenuToggle } from "@/sections/Header/components/MobileMenuToggle";
import { DesktopSignIn } from "@/sections/Header/components/DesktopSignIn";

export const Navbar = () => {
  return (
    <div className="text-sm items-center bg-no-repeat box-border caret-transparent gap-x-0 flex flex-wrap leading-[24.5px] ml-[-4.375px] mr-[-4.375px] outline-[3px] gap-y-[8.75px] md:text-base md:leading-7 md:gap-y-5 md:-mx-2.5">
      <div className="text-sm bg-no-repeat box-border caret-transparent basis-[content] leading-[24.5px] min-h-[auto] min-w-[auto] outline-[3px] px-[4.375px] md:text-base md:leading-7 md:px-2.5">
        <NavbarLogo />
      </div>
      <MobileMenu />
      <MobileMenuToggle />
      <DesktopSignIn />
    </div>
  );
};
