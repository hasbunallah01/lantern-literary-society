import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const EMAIL_RE = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

/**
 * Convert plain text containing one or more email addresses into HTML where
 * each email is wrapped in a mailto: link. The link uses the same
 * tailwind-friendly styling as the surrounding paragraph so it does not
 * visually shout.
 *
 * Intended for trusted, author-controlled data (e.g. legal copy in
 * data/terms.ts) — do not feed untrusted user input here.
 */
export function linkifyEmails(
  text: string,
  className = "font-medium text-forest underline underline-offset-2 transition-colors hover:text-bronze",
): string {
  return text.replace(
    EMAIL_RE,
    (_full, addr: string) =>
      `<a href="mailto:${addr}" class="${className}">${addr}</a>`,
  );
}