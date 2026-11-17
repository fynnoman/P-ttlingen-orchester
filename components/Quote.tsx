import Image from "next/image";
import Reveal from "./Reveal";
import { PHOTO } from "@/lib/data";

export default function Quote() {
  return (
    <section className="relative isolate overflow-hidden bg-paper">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-36">
        <Reveal className="grid gap-8 md:gap-14 md:grid-cols-12 items-start">
          <div className="md:col-span-5 relative">
            <div className="img-zoom-wrap relative h-[42vh] sm:h-[48vh] md:h-[68vh] w-full overflow-hidden rounded-3xl shadow-card">
              <Image
                src={PHOTO.score}
                alt={PHOTO.scoreAlt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover img-zoom"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,37,69,0) 50%, rgba(11,37,69,0.5) 100%)",
                }}
                aria-hidden
              />
              <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5">
                <span className="mono-label text-navy">Partitur</span>
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 text-white">
                <p className="mono-label text-white/70">Aus dem Archiv</p>
                <p className="mt-1 italic text-base md:text-xl leading-snug">
                  Zwischen zwei Takten liegt die eigentliche Probe.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 relative">
            <span className="mono-label text-royal">Selbstverständnis</span>
            <blockquote className="mt-4 md:mt-6 relative">
              <p className="text-3xl sm:text-4xl md:text-6xl leading-[1.1] md:leading-[1.05] tracking-tight text-navy font-semibold">
                Ein Akkordeon klingt nie allein so schön wie im{" "}
                <span className="italic font-medium text-royal">Zusammenspiel.</span> Das
                gilt für die Musik und für den Verein dahinter.
              </p>
            </blockquote>
            <div className="mt-8 md:mt-10 flex items-center gap-4">
              <span className="h-px w-12 md:w-16 bg-navy/60" aria-hidden />
              <span className="mono-label text-ink-500">
                Akkordeon-Orchester Püttlingen e. V.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
