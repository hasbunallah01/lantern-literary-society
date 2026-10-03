export const site = {
  name: "The Lantern Literary Society",
  shortName: "The Lantern",
  tagline: "Book Committee & Reading Community",
  description:
    "The Lantern Literary Society is a book committee and reading community where members read, discuss, discover and connect through live conversations and shared stories.",
  // Canonical site URL. Used for OG metadata base + canonical links.
  // Override with NEXT_PUBLIC_SITE_URL at build time (and runtime for client).
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://lantern-literary-society.vercel.app",
  email: "hello@lanternliterarysociety.haybee.xyz",
  phone: "",
  address: "",
  hours: "Mon – Fri · 9:00 – 18:00 (UTC)",
  socials: {
    facebook: "https://www.facebook.com/share/19eVypEHkd/",
    youtube: "https://youtube.com/@thebookcrew",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Live Conversations", href: "/conversations" },
    { label: "Featured Spotlight", href: "/spotlights" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "What We Do", href: "/#what-we-do" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Conversations", href: "/conversations" },
    ],
    resources: [
      { label: "Author Kit", href: "/contact" },
      { label: "Interview Tips", href: "/#faq" },
      { label: "FAQ", href: "/#faq" },
      { label: "Events", href: "/conversations" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Submit Your Story", href: "mailto:submissions@lanternliterarysociety.haybee.xyz" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
} as const;
