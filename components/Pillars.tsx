import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { PHOTO } from "@/lib/data";

type Chapter = {
  title: string;
  lead: string;
  text: string;
  href: string;
  cta: string;
  image: string;
  alt: string;
};

const CHAPTERS: Chapter[] = [
  {
    title: "Proben",
    lead: "Hier entsteht unser Klang.",
    text: "Unsere Proben sind der Mittelpunkt des Vereinslebens. Wer mitspielen oder einfach einmal zuhören möchte, ist herzlich eingeladen. Konkrete Zeiten und den Probenort teilen wir Ihnen persönlich mit.",
    href: "/proben",
    cta: "Zu den Proben",
    image: PHOTO.rehearsal,
    alt: PHOTO.rehearsalAlt,
  },
  {
    title: "Konzerte",
    lead: "Wenn aus Proben Musik wird.",
    text: "Unsere Auftritte sind der Moment, auf den wir hinarbeiten. Aktuelle Termine veröffentlichen wir an dieser Stelle. Für Veranstalter nehmen wir Anfragen individuell entgegen.",
    href: "/konzerte",
    cta: "Konzerte ansehen",
    image: PHOTO.concert,
    alt: PHOTO.concertAlt,
  },
  {
    title: "Mitmachen",
    lead: "Vom ersten Besuch zur Mitgliedschaft.",
    text: "Sie spielen Akkordeon oder möchten es lernen? Kommen Sie zu einer Probe, ganz unverbindlich und einfach als Gast. Alles Weitere besprechen wir persönlich.",
    href: "/mitmachen",
    cta: "Mitmachen",
    image: PHOTO.hands,
    alt: PHOTO.handsAlt,
  },
];

export default function Pillars() {
  return (
    <section className="relative bg-paper border-y border-line overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-36">
        <Reveal className="mb-14 md:mb-28 grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <span className="mono-label text-royal">Vereinsleben</span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl leading-[1.02] md:leading-[0.98] tracking-tight text-navy font-semibold">
              Was bei uns <span className="italic font-medium">passiert.</span>
            </h2>
          </div>
          <div className="md:col-span-5 text-ink-500 text-base sm:text-lg leading-relaxed">
            <p>
              Die Probe, der Auftritt und der Weg hinein. Jedes für sich
              einfach, zusammen das, was den Verein trägt.
            </p>
          </div>
        </Reveal>

        <div className="space-y-20 md:space-y-40">
          {CHAPTERS.map((c, i) => (
            <Chapter key={c.title} c={c} align={i % 2 === 0 ? "L" : "R"} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Chapter({ c, align }: { c: Chapter; align: "L" | "R" }) {
  const imageRight = align === "L";
  return (
    <Reveal>
      <div className="relative grid gap-8 md:gap-16 md:grid-cols-12 items-center">
        {/* Text */}
        <div className={`md:col-span-5 ${imageRight ? "" : "md:order-2"}`}>
          <h3 className="text-3xl sm:text-4xl md:text-6xl leading-[1.05] md:leading-[1.02] tracking-tight text-navy font-semibold">
            {c.title}.
          </h3>
          <p className="mt-3 md:mt-4 italic text-lg sm:text-xl md:text-2xl text-ink-500">
            {c.lead}
          </p>
          <p className="mt-5 md:mt-6 text-base md:text-[1.02rem] leading-relaxed text-ink-500 max-w-md">
            {c.text}
          </p>
          <Link
            href={c.href}
            className="mt-6 md:mt-8 inline-flex items-center gap-2 group"
          >
            <span className="rounded-full bg-navy text-white px-5 py-2.5 text-sm group-hover:bg-royal transition-colors">
              {c.cta}
            </span>
            <span
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-navy text-navy group-hover:bg-navy group-hover:text-white transition-colors"
              aria-hidden
            >
              →
            </span>
          </Link>
        </div>

        {/* Image */}
        <div className={`md:col-span-7 ${imageRight ? "" : "md:order-1"}`}>
          <div className="img-zoom-wrap relative h-[48vh] sm:h-[56vh] md:h-[72vh] w-full overflow-hidden frame-arch shadow-card">
            <Image
              src={c.image}
              alt={c.alt}
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover img-zoom"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11,37,69,0) 55%, rgba(11,37,69,0.42) 100%)",
              }}
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 text-white">
              <p className="italic text-lg md:text-2xl">
                {c.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
