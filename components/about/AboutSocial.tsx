import { Facebook, Mail } from "lucide-react";

/**
 * About-page social/contact block.
 * - Social icon row: Facebook + Email (the only two social channels)
 * - Contact email list: Email (general inbox) / Press / Contact
 *
 * Each email card renders a small Mail icon next to the address so the
 * "mailto:" affordance reads at a glance (matches the footer pattern).
 */
export function AboutSocial() {
  const emails = [
    {
      label: "Email",
      address: "lanternliterarysociety@gmail.com",
    },
    {
      label: "Press",
      address: "press@lanternliterarysociety.haybee.xyz",
    },
    {
      label: "Contact",
      address: "contact@lanternliterarysociety.haybee.xyz",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-narrow">
        <div className="text-center">
          <p className="eyebrow">Stay Connected</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
            Follow the conversation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-charcoal/70">
            Find us on Facebook, or reach the team directly for stories,
            partnerships, and press inquiries.
          </p>
        </div>

        {/* Social icon row */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/share/19eVypEHkd/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook"
            className="grid h-12 w-12 place-items-center rounded-full border border-bronze/30 bg-bronze/5 text-bronze transition hover:border-bronze hover:bg-bronze/10 hover:text-bronze-700"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@lanternliterarysociety.haybee.xyz"
            aria-label="Email"
            className="grid h-12 w-12 place-items-center rounded-full border border-bronze/30 bg-bronze/5 text-bronze transition hover:border-bronze hover:bg-bronze/10 hover:text-bronze-700"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Contact email list */}
        <ul className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
          {emails.map((item) => (
            <li
              key={item.label}
              className="card-light flex flex-col items-center gap-2 p-5 text-center"
            >
              <span className="font-display text-[12px] font-medium uppercase tracking-[0.22em] text-bronze">
                {item.label}
              </span>
              <a
                href={`mailto:${item.address}`}
                className="inline-flex items-center gap-1.5 break-all text-sm font-medium text-charcoal transition-colors hover:text-bronze"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-bronze" />
                <span>{item.address}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}