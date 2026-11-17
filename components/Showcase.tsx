import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { PHOTO } from "@/lib/data";

// Drei grosse Image-Cards, leicht gekippt und gestaffelt, auf einem
// kräftigen Navy-Verlauf. Ersetzt den langweiligen Marquee-Streifen.
export default function Showcase() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-navy" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 0%, rgba(96,165,250,0.35), transparent 60%), radial-gradient(70% 60% at 100% 100%, rgba(30,64,175,0.55), transparent 55%), linear-gradient(180deg, #0b2545 0%, #061527 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.06] diag-strip" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-40 text-white">
        <Reveal className="max-w-3xl">
          <p className="mono-label text-white/50">Eine Saison in Bildern</p>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl leading-[1] md:leading-[0.98] tracking-tight font-semibold">
            Was uns im <span className="italic font-medium text-royal-300">Verein</span>{" "}
            <br className="hidden md:block" />
            zusammenhält.
          </h2>
          <p className="mt-5 md:mt-6 text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
            Drei Blicke in das Vereinsleben: die Probe, die Partitur und der
            Moment auf der Bühne.
          </p>
        </Reveal>

        <div className="relative mt-14 md:mt-28">
          {/* Ambient glow behind cards */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-10 h-[60%] rounded-[4rem]"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(96,165,250,0.18), transparent 70%)",
            }}
          />

          <Reveal stagger className="relative grid gap-6 md:gap-8 md:grid-cols-12">
            <Card
              cls="md:col-span-5 md:translate-y-10 md:-rotate-[1.5deg]"
              image={PHOTO.rehearsal}
              alt={PHOTO.rehearsalAlt}
              num="01"
              kicker="In der Probe"
              title="Aufeinander hören."
              href="/proben"
            />
            <Card
              cls="md:col-span-7 md:rotate-[0.8deg]"
              image={PHOTO.ensemble}
              alt={PHOTO.ensembleAlt}
              num="02"
              kicker="Im Ensemble"
              title="Viele Stimmen, ein Klang."
              href="/ueber-uns"
              tall
            />
            <Card
              cls="md:col-span-7 md:-translate-y-6 md:rotate-[-0.6deg]"
              image={PHOTO.concert}
              alt={PHOTO.concertAlt}
              num="03"
              kicker="Auf der Bühne"
              title="Wenn aus Proben Musik wird."
              href="/konzerte"
              tall
            />
            <Card
              cls="md:col-span-5 md:translate-y-4 md:rotate-[1.2deg]"
              image={PHOTO.hands}
              alt={PHOTO.handsAlt}
              num="04"
              kicker="Zum Mitmachen"
              title="Platz für neue Hände."
              href="/mitmachen"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Card({
  cls = "",
  image,
  alt,
  num,
  kicker,
  title,
  href,
  tall = false,
}: {
  cls?: string;
  image: string;
  alt: string;
  num: string;
  kicker: string;
  title: string;
  href: string;
  tall?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative block rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-40px_rgba(0,0,0,0.55)] ring-1 ring-white/10 transition-transform hover:translate-y-[-4px] ${cls}`}
    >
      <div className={`relative w-full ${tall ? "h-[48vh] sm:h-[56vh] md:h-[62vh]" : "h-[42vh] sm:h-[48vh] md:h-[52vh]"}`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,37,69,0.1) 0%, rgba(11,37,69,0.15) 45%, rgba(11,37,69,0.75) 100%)",
          }}
          aria-hidden
        />
        <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5">
          <span className="mono-label text-navy">Nº {num}</span>
        </span>
        <span className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur text-white ring-1 ring-white/20 group-hover:bg-white group-hover:text-navy transition-colors">
          →
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 text-white">
          <p className="mono-label text-white/70">{kicker}</p>
          <p className="mt-2 text-xl sm:text-2xl md:text-4xl leading-[1.05] max-w-md font-medium">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}
