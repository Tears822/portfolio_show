export type SectionHeaderProps = {
    headerClassName: string;
    eyebrowText?: string;
    eyebrowHref?: string;
    eyebrowClassName: string;
    title: string;
    titleClassName: string;
    description?: React.ReactNode;
    descriptionClassName?: string;
    contentWrapperClassName?: string;
  };
  
  export const SectionHeader = (props: SectionHeaderProps) => {
    return (
      <header
        className={`text-sm bg-no-repeat box-border caret-transparent flex flex-col justify-start leading-[24.5px] outline-[3px] md:text-base md:leading-7 ${props.headerClassName}`}
      >
        {props.contentWrapperClassName ? (
          <div className={props.contentWrapperClassName}>
            {props.eyebrowHref ? (
              <a href={props.eyebrowHref} className={props.eyebrowClassName}>
                {props.eyebrowText}
              </a>
            ) : (
              <small className={props.eyebrowClassName}>
                {props.eyebrowText}
              </small>
            )}
            <h2 className={props.titleClassName}>{props.title}</h2>
            {props.description ? (
              <p className={props.descriptionClassName}>{props.description}</p>
            ) : null}
          </div>
        ) : (
          <>
            {props.eyebrowHref ? (
              <a href={props.eyebrowHref} className={props.eyebrowClassName}>
                {props.eyebrowText}
              </a>
            ) : (
              <small className={props.eyebrowClassName}>
                {props.eyebrowText}
              </small>
            )}
            <h2 className={props.titleClassName}>{props.title}</h2>
            {props.description ? (
              <p className={props.descriptionClassName}>{props.description}</p>
            ) : null}
          </>
        )}
      </header>
    );
  };
  