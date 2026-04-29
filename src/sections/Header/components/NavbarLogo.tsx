export const NavbarLogo = () => {
  return (
    <p className="items-center bg-no-repeat box-border caret-transparent flex min-w-40 outline-[3px]">
      <a
        aria-label="Go to Homepage"
        href="/"
        className="relative bg-no-repeat box-border caret-transparent block outline-transparent outline outline-2 px-[8.75px] py-[10px] rounded-bl rounded-br rounded-tl rounded-tr md:px-5 md:py-3"
      >
        <img
          src="/logo.png"
          alt="Jason Liu"
          className="h-[52px] w-auto object-contain md:h-[64px]"
        />
      </a>
    </p>
  );
};