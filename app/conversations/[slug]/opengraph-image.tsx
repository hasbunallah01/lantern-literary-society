import { notFound } from "next/navigation";
import { renderShareImage, OG_SIZE } from "@/lib/og";
import { getConversation } from "@/lib/share";
import { conversations } from "@/data/conversations";

export const alt = "Live Conversation — The Lantern Literary Society";
export const size = OG_SIZE;
export const contentType = "image/png";
export function generateStaticParams() {
  return conversations.map((c) => ({ slug: c.id }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const c = getConversation((await params).slug);
  if (!c) notFound();
  return renderShareImage({
    kicker: "Live Conversation",
    name: c.authorName,
    title: c.conversationTitle,
    photo: c.authorPhoto,
    cover: c.bookCover,
  });
}
