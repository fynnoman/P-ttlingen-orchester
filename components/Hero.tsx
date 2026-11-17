import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import Mark from "./Mark";
import { PHOTO, VEREIN } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper">
      {/* Editorial Dateline (ab sm sichtbar, auf mobile zu voll) */}
      <div className="hidden sm:block absolute top-24 md:top-28 inset-x-0 z-10 pointer-events-none">
        <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
          <span className="mono-label text-navy/70">
            Nº AP · Saison laufend
          </span>
          <span className="mono-label text-navy/70">
            {VEREIN.plz} Püttlingen · Köllertal
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-28 sm:pt-36 md:pt-44 pb-12 md:pb-16">
        <div className="grid gap-8 md:gap-14 md:grid-cols-12 items-end">
          {/* LINKE Seite: Typografie */}
          <Reveal stagger className="md:col-span-7 relative">
            <div className="flex items-center gap-3 text-navy">
              <Mark className="h-8 w-8 md:h-9 md:w-9" stroke="#0b2545" />
              <span className="mono-label text-navy/70">
                Akkordeon-Orchester · Püttlingen e. V.
              </span>
            </div>

            <h1 className="mt-6 md:mt-8 text-[2.4rem] sm:text-6xl md:text-[5.6rem] lg:text-[6.4rem] leading-[0.95] md:leading-[0.92] tracking-[-0.02em] text-navy font-semibold">
              Ein Klang,
              <br />
              <span className="italic font-medium text-royal">den wir</span>
              <br />
              <span className="italic font-medium">gemeinsam</span>
              <br />
              entstehen lassen.
            </h1>

            <p className="mt-6 md:mt-10 max-w-xl text-base sm:text-lg md:text-xl text-ink-500 leading-relaxed">
              {VEREIN.kurzname} ist ein gemeinnütziger Verein aus Püttlingen.
              In unseren Proben entsteht aus vielen Stimmen eine Musik, die
              Menschen zusammenbringt.
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4">
              <Link
                href="/mitmachen"
                className="inline-flex items-center rounded-full bg-navy px-5 py-3 md:px-7 md:py-3.5 text-sm md:text-[0.95rem] text-white hover:bg-royal transition-colors"
              >
                Mitspielen und kennenlernen
                <span className="ml-2 md:ml-3" aria-hidden>→</span>
              </Link>
              <Link
                href="/konzerte"
                className="inline-flex items-center text-sm md:text-[0.95rem] text-navy hover:text-royal transition-colors"
              >
                <span className="underline-link">Zu den Konzerten</span>
              </Link>
            </div>
          </Reveal>

          {/* RECHTE Seite: Foto */}
          <Reveal className="md:col-span-5 relative">
            <div className="img-zoom-wrap relative h-[52vh] sm:h-[58vh] md:h-[82vh] w-full overflow-hidden rounded-3xl shadow-card">
              <Image
                src={PHOTO.hero}
                alt={PHOTO.heroAlt}
                fill
                priority
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover img-zoom"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(200deg, rgba(11,37,69,0.15) 0%, rgba(11,37,69,0.55) 100%)",
                }}
                aria-hidden
              />
              {/* Caption chip */}
              <span className="absolute top-4 left-4 md:top-5 md:left-5 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-royal animate-pulse" />
                <span className="mono-label text-navy">Im Proben-Modus</span>
              </span>
              {/* Vertical caption (nur Desktop) */}
              <span className="vrl-text hidden md:inline absolute right-4 top-5 bottom-5 text-white/70 mono-label">
                AP · 06898 / 65881 · Goethestr. 67
              </span>
              {/* Lower caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 text-white">
                <p className="mono-label text-white/70">
                  Protokoll 0·01
                </p>
                <p className="mt-2 italic text-base md:text-xl max-w-xs leading-snug">
                  Jede Probe beginnt mit dem ersten Atemzug des Balgs.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom grid: dateline + meta */}
        <div className="mt-10 md:mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-12 border-t border-line pt-8">
          <div className="md:col-span-3 flex items-center gap-3">
            <span className="scroll-cue" aria-hidden />
            <span className="mono-label text-navy/70">Weiter lesen</span>
          </div>
          <div className="md:col-span-3">
            <p className="mono-label text-ink-400">Verein</p>
            <p className="mt-2 text-base md:text-lg text-navy font-medium">
              Eingetragen · e. V.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="mono-label text-ink-400">Sitz</p>
            <p className="mt-2 text-base md:text-lg text-navy font-medium">
              Püttlingen, Köllertal
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="mono-label text-ink-400">Kontakt</p>
            <p className="mt-2 text-base md:text-lg text-navy font-medium">
              06898 / 65881
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
