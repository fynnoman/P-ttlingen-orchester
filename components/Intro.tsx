import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { PHOTO } from "@/lib/data";

export default function Intro() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-36">
      <div className="grid gap-10 md:gap-20 md:grid-cols-12 items-start">
        <Reveal className="md:col-span-5 md:sticky md:top-32">
          <span className="mono-label text-royal">Wer wir sind</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl leading-[1.02] md:leading-[0.98] tracking-tight text-navy font-semibold">
            Ein Orchester aus{" "}
            <span className="italic font-medium">Nachbarn,</span>
            <br />
            <span className="italic font-medium">Freunden</span> und
            Musikliebhabern.
          </h2>
          <Link
            href="/ueber-uns"
            className="mt-8 md:mt-10 inline-flex items-center text-navy hover:text-royal"
          >
            <span className="underline-link">Mehr über uns</span>
            <span className="ml-2" aria-hidden>→</span>
          </Link>
        </Reveal>

        <div className="md:col-span-7 md:pl-10 lg:pl-20">
          <Reveal stagger className="space-y-6 md:space-y-8 text-base sm:text-[1.05rem] md:text-[1.15rem] leading-relaxed text-ink-500">
            <p className="first-letter:italic first-letter:text-navy first-letter:text-5xl md:first-letter:text-7xl first-letter:leading-[0.9] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-semibold">
              Beim Akkordeon-Orchester Püttlingen treffen sich Menschen
              unterschiedlicher Generationen, um gemeinsam zu musizieren.
              Zusammenspiel heißt bei uns: aufeinander hören, miteinander
              üben, miteinander wachsen.
            </p>
            <p>
              Neben den Proben gehört das Vereinsleben für uns fest dazu.
              Gemeinsame Auftritte, Feste und der Austausch untereinander
              machen den Unterschied zwischen einer Probe und einem Verein
              aus.
            </p>
            <p>
              Interessierte sind herzlich eingeladen, uns kennenzulernen.
              Ob Sie Akkordeon spielen, lernen möchten oder einfach
              reinhören wollen, bei uns finden Sie einen Platz.
            </p>
          </Reveal>

          <Reveal className="mt-12 md:mt-14">
            <div className="img-zoom-wrap relative h-[46vh] sm:h-[52vh] md:h-[66vh] w-full overflow-hidden rounded-3xl shadow-card">
              <Image
                src={PHOTO.ensemble}
                alt={PHOTO.ensembleAlt}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover img-zoom"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,37,69,0) 55%, rgba(11,37,69,0.5) 100%)",
                }}
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 text-white">
                <p className="mono-label text-white/70">Ensemble</p>
                <p className="mt-2 italic text-lg sm:text-xl md:text-2xl max-w-md leading-snug">
                  Wenn viele Einzelne auf dasselbe Taktgefühl hören.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
