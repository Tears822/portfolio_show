import { FormEvent, MouseEvent, useEffect, useState } from "react";

const OPEN_CONTACT_MODAL_EVENT = "open-contact-modal";

export const openContactModal = (event?: MouseEvent<HTMLElement>) => {
  event?.preventDefault();
  window.dispatchEvent(new Event(OPEN_CONTACT_MODAL_EVENT));
};

export const ContactFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const open = () => setIsOpen(true);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener(OPEN_CONTACT_MODAL_EVENT, open);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener(OPEN_CONTACT_MODAL_EVENT, open);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Project Inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "N/A"}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    window.location.href = `mailto:jason@aunexes.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[260] flex items-center justify-center p-4 md:p-6">
      <button
        type="button"
        aria-label="Close contact form modal overlay"
        className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(99,102,241,0.25),rgba(15,23,42,0.9))] backdrop-blur-[5px]"
        onClick={() => setIsOpen(false)}
      />

      <section className="relative w-full max-w-[860px] overflow-hidden rounded-3xl border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(30,41,59,0.96))] shadow-[0_30px_80px_rgba(0,0,50,0.45)]">
        <div className="pointer-events-none absolute -left-20 -top-28 h-56 w-56 rounded-full bg-violet-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative grid md:grid-cols-[0.9fr_1.1fr]">
          <aside className="border-b border-white/10 bg-[linear-gradient(165deg,rgba(30,41,59,0.85),rgba(49,46,129,0.45))] p-6 md:border-b-0 md:border-r md:p-8">
            <p className="text-violet-200">Let&apos;s build together</p>
            <h2 className="mt-2 font-geist text-3xl text-white md:text-4xl">Start Your Project</h2>
            <p className="mt-4 text-sm text-white/75 md:text-[15px]">
              Share your goals and timeline. I&apos;ll reply with suggested scope, architecture direction, and next
              steps for delivery.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-300" />
                Shopify + WordPress (Fullstack + CMS)
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-300" />
                API integrations and cloud architecture
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-300" />
                Performance, migrations, and launch support
              </li>
            </ul>
          </aside>

          <div className="p-6 md:p-8">
            <header className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-white/65">Project intake form</p>
                <h3 className="font-geist text-2xl text-white">Tell Me About Your Build</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-white/20 px-3 py-1.5 text-sm text-white/80 hover:text-violet-200"
              >
                Close
              </button>
            </header>

            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-white/85">
                  Name
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-white/20 bg-blue-950/60 px-3 py-2.5 text-white outline-none ring-0 placeholder:text-white/40 focus:border-violet-300 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.25)]"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm text-white/85">
                  Email
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-white/20 bg-blue-950/60 px-3 py-2.5 text-white outline-none ring-0 placeholder:text-white/40 focus:border-violet-300 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.25)]"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="block text-sm text-white/85">
                Company
                <input
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-white/20 bg-blue-950/60 px-3 py-2.5 text-white outline-none ring-0 placeholder:text-white/40 focus:border-violet-300 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.25)]"
                  placeholder="Company name (optional)"
                />
              </label>

              <label className="block text-sm text-white/85">
                Project details
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="mt-1.5 w-full resize-y rounded-xl border border-white/20 bg-blue-950/60 px-3 py-2.5 text-white outline-none ring-0 placeholder:text-white/40 focus:border-violet-300 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.25)]"
                  placeholder="Tell me your goals, timeline, budget range, and stack..."
                />
              </label>

              <div className="flex items-center justify-between pt-1">
                <p className="text-xs text-white/60">You will send via your email client.</p>
                <button
                  type="submit"
                  className="rounded-xl border border-violet-200/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(49,46,129,0.7)_40%,rgba(15,23,42,0.95))] px-5 py-2.5 font-geist text-white shadow-[0_14px_28px_rgba(0,0,60,0.45)] transition hover:text-violet-100 hover:shadow-[0_18px_34px_rgba(67,56,202,0.35)]"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
