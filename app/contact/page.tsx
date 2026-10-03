import type { Metadata } from "next";
import { Facebook, Mail } from "lucide-react";
import { ContactSection } from "@/components/contact/ContactForm";
import { ContactHeader, ContactCards } from "@/components/contact/ContactSections";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Lantern Literary Society.",
};

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    handle: "@thebookcrew",
    href: "https://www.facebook.com/share/19eVypEHkd/",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "hello@lanternliterarysociety.haybee.xyz",
    href: "mailto:hello@lanternliterarysociety.haybee.xyz",
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactCards />
      <ContactSection />

      {/* Elsewhere online */}
      <section className="section bg-ivory">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Find us"
            title="Elsewhere online"
            subtitle="Follow the conversation on the platforms where readers actually live."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {socialLinks.map((s) => {
              const isExternal = s.href.startsWith("http");
              return (
                <a
                  key={s.label}
                  href={s.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  aria-label={s.label}
                  className="card-light group flex items-center gap-4 p-5 hover:shadow-card-hover"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-bronze/30 bg-bronze/5 text-bronze transition group-hover:bg-bronze/10">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{s.label}</p>
                    <p className="text-xs text-charcoal/60">{s.handle}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
