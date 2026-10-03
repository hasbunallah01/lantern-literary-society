import { spotlights } from "@/data/home";
import { renderBannerJpeg, renderShareJpeg } from "@/lib/og";
import { getSpotlight, spotlightSlug } from "@/lib/share";

export const dynamicParams = false;
export function generateStaticParams() {
  return spotlights.map((s) => ({ file: `${spotlightSlug(s)}.jpg` }));
}

export async function GET(_: Request, { params }: { params: Promise<{ file: string }> }) {
  const item = getSpotlight((await params).file.replace(/\.jpg$/, ""));
  if (!item) return new Response("Not found", { status: 404 });
  try {
    return await renderBannerJpeg(item.banner);
  } catch {
    // banner unreachable at build time: fall back to the generated card
  }
  return renderShareJpeg({
    kicker: "Featured Spotlight",
    name: item.authorName,
    title: item.bookTitle,
    photo: item.authorPhoto,
    cover: item.bookCover,
    banner: item.banner,
  });
}
