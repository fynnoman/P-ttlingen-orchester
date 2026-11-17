import Link from "next/link";
import Reveal from "./Reveal";
import Mark from "./Mark";
import { VEREIN } from "@/lib/data";

export default function KontaktCTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-36">
      <div className="relative grid gap-10 md:gap-16 md:grid-cols-12 items-start">
        <Reveal className="md:col-span-7">
          <div className="flex items-center gap-3 text-royal">
            <Mark className="h-8 w-8 md:h-9 md:w-9" stroke="#1e40af" />
            <span className="mono-label">Kontakt · Vorsitzende</span>
          </div>

          <h2 className="mt-5 md:mt-6 text-4xl sm:text-5xl md:text-7xl leading-[1.02] md:leading-[0.98] tracking-tight text-navy font-semibold">
            Schreiben. <br className="hidden md:block" />
            <span className="italic font-medium text-royal">Anrufen.</span>{" "}
            <br className="hidden md:block" />
            Vorbeikommen.
          </h2>

          <p className="mt-6 md:mt-8 text-ink-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
            Wenn Sie uns kennenlernen oder einmal reinhören möchten, melden
            Sie sich gerne bei unserer 1. Vorsitzenden. Jede Nachricht wird
            persönlich beantwortet.
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-full bg-navy px-5 py-3 md:px-7 md:py-3.5 text-sm md:text-[0.95rem] text-white hover:bg-royal transition-colors"
            >
              Zur Kontaktseite
              <span className="ml-2 md:ml-3" aria-hidden>→</span>
            </Link>
            <a
              href={`tel:${VEREIN.telefonHref.replace(/\s/g, "")}`}
              className="inline-flex items-center rounded-full border border-navy px-5 py-3 md:px-7 md:py-3.5 text-sm md:text-[0.95rem] text-navy hover:bg-navy hover:text-white transition-colors"
            >
              {VEREIN.telefon}
            </a>
          </div>
        </Reveal>

        <Reveal className="md:col-span-5" delay={80}>
          <div className="relative rounded-3xl bg-navy text-white p-6 sm:p-8 md:p-10 shadow-glow overflow-hidden">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(96,165,250,0.35), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07] diag-strip"
            />

            <p className="mono-label text-white/60">Ansprechpartnerin</p>
            <p className="mt-3 md:mt-4 text-2xl md:text-3xl leading-tight font-semibold">
              {VEREIN.vorsitzende.name}
            </p>
            <p className="text-white/70 text-sm">
              {VEREIN.vorsitzende.rolle}
            </p>

            <div className="my-6 h-px bg-white/10" />

            <p className="mono-label text-white/60">Anschrift</p>
            <address className="mt-3 not-italic text-white/90 leading-relaxed">
              {VEREIN.strasse}
              <br />
              {VEREIN.plz} {VEREIN.ort}
            </address>

            <div className="my-6 h-px bg-white/10" />

            <p className="mono-label text-white/60">Telefon</p>
            <a
              href={`tel:${VEREIN.telefonHref.replace(/\s/g, "")}`}
              className="mt-3 inline-block text-2xl md:text-3xl font-semibold hover:text-royal-300"
            >
              {VEREIN.telefon}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
