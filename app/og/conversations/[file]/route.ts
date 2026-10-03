import { conversations } from "@/data/conversations";
import { renderShareJpeg } from "@/lib/og";
import { getConversation } from "@/lib/share";

export const dynamicParams = false;
export function generateStaticParams() {
  return conversations.map((c) => ({ file: `${c.id}.jpg` }));
}

export async function GET(_: Request, { params }: { params: Promise<{ file: string }> }) {
  const c = getConversation((await params).file.replace(/\.jpg$/, ""));
  if (!c) return new Response("Not found", { status: 404 });
  return renderShareJpeg({
    kicker: "Live Conversation",
    name: c.authorName,
    title: c.conversationTitle,
    photo: c.authorPhoto,
    cover: c.bookCover,
  });
}
