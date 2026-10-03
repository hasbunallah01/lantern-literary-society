import { notFound } from "next/navigation";
import { renderShareImage, OG_SIZE } from "@/lib/og";
import { getSpotlight, spotlightSlug } from "@/lib/share";
import { spotlights } from "@/data/home";

export const alt = "Featured Spotlight — The Lantern Literary Society";
export const size = OG_SIZE;
export const contentType = "image/png";
export function generateStaticParams() {
  return spotlights.map((s) => ({ slug: spotlightSlug(s) }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const item = getSpotlight((await params).slug);
  if (!item) notFound();
  return renderShareImage({
    kicker: "Featured Spotlight",
    name: item.authorName,
    title: item.bookTitle,
    photo: item.authorPhoto,
    cover: item.bookCover,
    banner: item.banner,
  });
}
