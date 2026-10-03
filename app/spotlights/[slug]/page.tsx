import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { spotlights } from "@/data/home";
import { SpotlightProfile } from "@/components/spotlights/SpotlightProfiles";
import { excerpt, getSpotlight, spotlightSlug } from "@/lib/share";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return spotlights.map((s) => ({ slug: spotlightSlug(s) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getSpotlight((await params).slug);
  if (!item) return {};
  const title = `${item.authorName}: ${item.bookTitle} | Featured Spotlight`;
  const description = excerpt(item.description, 200);
  const url = `/spotlights/${spotlightSlug(item)}`;
  const images = [{ url: `/og/spotlights/${spotlightSlug(item)}.jpg`, width: 1200, height: 630, type: "image/jpeg", alt: `${item.authorName} — Featured Spotlight` }];
  return {
    title: { absolute: `${title} | The Lantern Literary Society` },
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description, siteName: "The Lantern Literary Society", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default async function SpotlightPage({ params }: Props) {
  const item = getSpotlight((await params).slug);
  if (!item) notFound();
  return (
    <section className="section bg-white pt-28 md:pt-36">
      <div className="container-narrow space-y-8">
        <Link href="/spotlights" className="text-sm font-medium text-bronze hover:underline">← All Featured Spotlights</Link>
        <SpotlightProfile item={item} />
      </div>
    </section>
  );
}
