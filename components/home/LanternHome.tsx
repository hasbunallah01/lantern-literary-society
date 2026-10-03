import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const gold = "text-bronze";

export function LanternHero() {
  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(203,146,34,0.30),transparent_55%)]" />
      <div className="container-wide relative grid items-center gap-14 px-6 py-20 md:grid-cols-[1.15fr_1fr] md:px-10 md:py-28">
        <div>
          <p className={`text-[12px] font-medium uppercase tracking-[0.3em] ${gold}`}>
            Book Committee &amp; Reading Community
          </p>
          <h1 className="mt-5 text-balance font-display text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Read by the <span className={`italic ${gold}`}>same light.</span>
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-ivory/75">
            We choose a book together, talk it through, and keep the conversation
            going long after the last page.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-bronze px-7 py-3.5 text-sm font-semibold text-forest transition hover:bg-bronze-300">
              Join the Society <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="text-sm font-medium text-ivory/80 underline decoration-bronze underline-offset-8 hover:text-ivory">
              Our story
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-full bg-ivory p-4 shadow-[0_0_120px_rgba(203,146,34,0.45)]">
            <Image src="/lantern-logo.png" alt="The Lantern Literary Society" width={512} height={512} priority className="rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  ["I", "Read", "One shared book at a time, chosen by the committee."],
  ["II", "Discuss", "Open conversations where every reading is welcome."],
  ["III", "Discover", "New voices and hidden gems, recommended by members."],
  ["IV", "Connect", "A circle of readers who show up for each other."],
];

export function Pillars() {
  return (
    <section className="bg-ivory px-6 py-20 md:px-10 md:py-28">
      <div className="container-wide grid gap-10 md:grid-cols-4">
        {pillars.map(([n, verb, line]) => (
          <div key={verb} className="border-t-2 border-bronze pt-5">
            <span className={`font-display text-sm tracking-[0.3em] ${gold}`}>{n}</span>
            <h2 className="mt-3 font-display text-4xl font-bold">{verb}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">{line}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  ["Nominate", "Members suggest the books they can't stop thinking about."],
  ["Vote", "The committee shortlists, and the society picks the next read."],
  ["Gather", "We read, then meet to discuss, argue and compare notes."],
];

export function Committee() {
  return (
    <section className="bg-stone px-6 py-20 md:px-10 md:py-28">
      <div className="container-wide grid gap-14 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className={`text-[12px] font-medium uppercase tracking-[0.3em] ${gold}`}>The Committee</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            How the next book gets chosen.
          </h2>
        </div>
        <ol className="divide-y divide-charcoal/15">
          {steps.map(([t, d], i) => (
            <li key={t} className="flex gap-6 py-7 first:pt-0">
              <span className="font-display text-5xl font-bold text-bronze/80">{i + 1}</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">{t}</h3>
                <p className="mt-1.5 text-charcoal/70">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const gatherings = [
  ["Monthly Discussion", "The main event: one book, one evening, everyone talking."],
  ["Reading Sprints", "Quiet, focused hours to read alongside the community."],
  ["Member Recommendations", "Share what moved you and find your next favorite."],
];

export function Gatherings() {
  return (
    <section className="bg-forest px-6 py-20 text-ivory md:px-10 md:py-28">
      <div className="container-wide">
        <p className={`text-[12px] font-medium uppercase tracking-[0.3em] ${gold}`}>Gatherings</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
          Find a seat at the table.
        </h2>
        <ul className="mt-12 divide-y divide-ivory/15 border-y border-ivory/15">
          {gatherings.map(([t, d]) => (
            <li key={t} className="grid gap-2 py-7 md:grid-cols-[1fr_1.2fr] md:items-center">
              <h3 className="font-display text-2xl font-semibold">{t}</h3>
              <p className="text-ivory/70">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
