import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Cormorant_Garamond({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "The Lantern Literary Society",
    template: `%s | The Lantern Literary Society`,
  },
  description:
    "A book committee and reading community. Read, discuss, discover and connect.",
  keywords: [
    "literary society",
    "book committee",
    "reading community",
    "book club",
    "The Lantern Literary Society",
    "author interviews",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: site.url,
  },
  icons: {
    icon: [
      { url: "/favicon-v3.ico", sizes: "any" },
      { url: "/favicon-32x32-v3.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16-v3.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-v3.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: "The Lantern Literary Society",
    description:
      "A book committee and reading community. Read, discuss, discover and connect.",
    siteName: site.name,
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "The Lantern Literary Society — Read, Discuss, Discover, Connect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lantern Literary Society",
    description:
      "A book committee and reading community. Read, discuss, discover and connect.",
    images: ["/og-banner.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
