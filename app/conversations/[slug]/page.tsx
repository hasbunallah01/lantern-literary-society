import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { conversations } from "@/data/conversations";
import { ConversationCard } from "@/components/home/FeaturedConversation";
import { excerpt, getConversation } from "@/lib/share";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return conversations.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getConversation((await params).slug);
  if (!c) return {};
  const title = `${c.authorName}: ${c.conversationTitle}`;
  const description = excerpt(c.conversationDescription, 200);
  const url = `/conversations/${c.id}`;
  return {
    title: { absolute: `${title} | The Lantern Literary Society` },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article", url, title, description, siteName: "The Lantern Literary Society",
      ...(c.publishDate ? { publishedTime: c.publishDate } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ConversationPage({ params }: Props) {
  const c = getConversation((await params).slug);
  if (!c) notFound();
  return (
    <section className="section bg-white pt-28 md:pt-36">
      <div className="container-narrow space-y-8">
        <Link href="/conversations" className="text-sm font-medium text-bronze hover:underline">← All Live Conversations</Link>
        <ConversationCard conversation={c} />
      </div>
    </section>
  );
}
