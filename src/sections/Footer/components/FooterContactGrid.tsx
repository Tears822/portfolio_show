import { openContactModal } from "@/components/modals/ContactFormModal";

export const FooterContactGrid = () => {
  const itemClassName =
    "md:col-start-[span_2] relative text-[17.5px] items-center bg-[linear-gradient(177deg,rgba(255,255,255,0.1),rgba(255,255,255,0))] bg-no-repeat box-border flex justify-center text-center p-[26.25px] rounded-lg font-geist hover:text-violet-200";

  return (
    <div id="contact" className="text-[13.125px] [align-items:normal] bg-no-repeat box-border caret-transparent gap-x-[17.5px] flex flex-col grid-cols-none leading-[20.3438px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[17.5px] md:text-[15px] md:items-stretch md:gap-x-5 md:grid md:grid-cols-[repeat(10,1fr)] md:leading-[23.25px] md:gap-y-5">
      <a href="mailto:jason@aunexes.com" className={`md:col-start-[span_3] ${itemClassName}`}>
        <span className="inline-flex items-center gap-2.5">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] text-violet-200/90">
            <path
              fill="currentColor"
              d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.1-.34a.75.75 0 0 0-.1.37v.04l6.59 5.2a.66.66 0 0 0 .82 0l6.58-5.2v-.04a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.65.38Zm13.9 2.31-5.34 4.22a2.66 2.66 0 0 1-3.32 0L5 8.72v8.53c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V8.72Z"
            />
          </svg>
          <span>jason@aunexes.com</span>
        </span>
      </a>
      <a href="tel:+85263249572" className={itemClassName}>
        <span className="inline-flex items-center gap-2.5">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] text-violet-200/90">
            <path
              fill="currentColor"
              d="M6.62 3A2.62 2.62 0 0 0 4 5.62c0 8.49 6.89 15.38 15.38 15.38A2.62 2.62 0 0 0 22 18.38v-1.75a1.5 1.5 0 0 0-1.13-1.45l-3.23-.8a1.5 1.5 0 0 0-1.51.53l-.71.95a1 1 0 0 1-1.2.3 12.29 12.29 0 0 1-6.38-6.38 1 1 0 0 1 .3-1.2l.95-.71a1.5 1.5 0 0 0 .53-1.51l-.8-3.23A1.5 1.5 0 0 0 7.37 3H6.62Z"
            />
          </svg>
          <span>+852 6324 9572</span>
        </span>
      </a>
      <a href="https://linkedin.com/in/jason-liu-6b8aa780" className={`md:col-start-[span_3] ${itemClassName}`}>
        <span className="inline-flex items-center gap-2.5">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] text-violet-200/90">
            <path
              fill="currentColor"
              d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.5 9.75h2.88v8.75H5.5V9.75Zm4.5 0h2.76v1.2h.04c.38-.73 1.32-1.5 2.73-1.5 2.92 0 3.46 1.92 3.46 4.42v4.63h-2.88v-4.1c0-.98-.02-2.24-1.37-2.24-1.37 0-1.58 1.07-1.58 2.17v4.17H10V9.75Z"
            />
          </svg>
          <span>LinkedIn Profile</span>
        </span>
      </a>
      <a href="mailto:jason@aunexes.com?subject=Project%20Inquiry" onClick={openContactModal} className={itemClassName}>
        <span className="inline-flex items-center gap-2.5">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] text-violet-200/90">
            <path
              fill="currentColor"
              d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1Z"
            />
          </svg>
          <span>Start Project</span>
        </span>
      </a>
    </div>
  );
};
