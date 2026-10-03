import { spotlights, type Spotlight } from "@/data/home";
import { conversations, type Conversation } from "@/data/conversations";

export const slugify = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const spotlightSlug = (s: Spotlight) => slugify(s.authorName);
export const getSpotlight = (slug: string) => spotlights.find((s) => spotlightSlug(s) === slug);
export const getConversation = (slug: string) => conversations.find((c) => c.id === slug);
export type { Spotlight, Conversation };

/** Trim to a share-friendly excerpt, ending on a sentence or word boundary. */
export function excerpt(text: string, max = 200) {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  if (end > max * 0.5) return cut.slice(0, end + 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\-–—]$/, "") + "…";
}
