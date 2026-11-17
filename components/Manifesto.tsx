import Reveal from "./Reveal";
import Mark from "./Mark";

export default function Manifesto() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {/* Diagonal paper texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] diag-strip"
      />
      {/* Royal radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(96,165,250,0.35), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-36">
        <Reveal className="grid gap-8 md:gap-14 md:grid-cols-12 items-start">
          <div className="md:col-span-3 flex md:block items-center gap-4">
            <Mark className="h-12 w-12 md:h-14 md:w-14" stroke="#60a5fa" />
            <div className="md:mt-6">
              <p className="mono-label text-white/50">
                Manifest · Saison AP
              </p>
              <p className="mt-2 md:mt-3 italic text-white/70 max-w-[14rem] text-sm md:text-base">
                Was uns an der Musik, am Verein und an diesem Ort hält.
              </p>
            </div>
          </div>

          <div className="md:col-span-9">
            <p className="text-3xl sm:text-4xl md:text-7xl leading-[1.08] md:leading-[1.02] tracking-tight font-semibold">
              <span className="italic font-medium text-royal-300">Zusammenspiel</span> ist
              die einzige Sprache,
              <br className="hidden md:block" />{" "}
              die ein Akkordeon richtig gut spricht.
              <br className="hidden md:block" />{" "}
              Allein klingt es nach Instrument,
              <br className="hidden md:block" />{" "}
              gemeinsam <span className="italic font-medium">nach Verein.</span>
            </p>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-28 grid gap-8 sm:grid-cols-3 border-t border-white/10 pt-8 md:pt-10">
          <div>
            <p className="mono-label text-white/50">Haltung</p>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl leading-snug font-medium">
              Jede Stimme wird gehört. Jede Hand hat Platz.
            </p>
          </div>
          <div>
            <p className="mono-label text-white/50">Rhythmus</p>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl leading-snug font-medium">
              Wir proben. Wir treten auf. Wir feiern.
            </p>
          </div>
          <div>
            <p className="mono-label text-white/50">Einladung</p>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl leading-snug font-medium">
              Kommen Sie dazu, wenn Ihr Ohr Lust hat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
