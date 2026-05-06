export const FooterBrand = () => {
  return (
    <div className="text-[13.125px] items-end bg-no-repeat box-border caret-transparent gap-x-0 flex flex-wrap leading-[20.3438px] ml-[-13.125px] mr-[-13.125px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[26.25px] md:text-[15px] md:leading-[23.25px] md:ml-[-30px] md:mr-[-30px] md:gap-y-[60px]">
      <div className="text-[13.125px] bg-no-repeat box-border caret-transparent basis-full grow-0 shrink leading-[20.3438px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-[13.125px] md:text-[15px] md:basis-0 md:grow md:shrink-0 md:leading-[23.25px] md:px-[30px]">
        <h2 className="bg-no-repeat box-border caret-transparent flex justify-center outline-[3px] md:justify-start">
          <a href="/" className="block">
            <img
              src="/logo.png"
              alt="Jason Liu"
              className="h-[58px] w-auto object-contain md:h-[70px]"
            />
          </a>
        </h2>
      </div>
      <div className="text-[13.125px] bg-no-repeat box-border caret-transparent basis-full leading-[20.3438px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-[13.125px] md:text-[15px] md:basis-[content] md:leading-[23.25px] md:px-[30px]">
        <h3 className="text-[21px] bg-no-repeat box-border caret-transparent leading-[28.35px] max-w-[556.918px] outline-[3px] break-words text-center mx-auto font-geist md:text-[25px] md:leading-[33.75px] md:max-w-[663.002px] md:text-end">
          Fullstack + AI engineering, with CMS (Shopify + WordPress) as additional capability for storefronts,
          editorial sites, and the APIs behind them.
        </h3>
      </div>
    </div>
  );
};
