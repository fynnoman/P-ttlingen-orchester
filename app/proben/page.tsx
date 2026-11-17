import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Kicker from "@/components/Kicker";
import { VEREIN } from "@/lib/data";

export const metadata = {
  title: "Proben · Akkordeon-Orchester Püttlingen e. V.",
  description:
    "Probenzeiten und Probenort des Akkordeon-Orchester Püttlingen e. V. Zuhörer und Interessierte sind jederzeit willkommen.",
};

export default function ProbenPage() {
  return (
    <>
      <PageHeader
        kicker="Proben"
        title="Hier entsteht unser Klang. Jede Woche aufs Neue."
        lead="Unsere Proben sind der Mittelpunkt des Vereinslebens. Wer mitspielen oder einfach einmal zuhören möchte, ist herzlich eingeladen. Kommen Sie vorbei."
        image="rehearsal"
      />

      <section className="mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <Kicker>So läuft eine Probe</Kicker>
          </Reveal>

          <div className="md:col-span-3 space-y-6 text-[1.05rem] leading-relaxed text-ink-600">
            <Reveal>
              <p>
                Unsere Proben finden regelmäßig in Püttlingen statt. Jede Probe
                beginnt mit dem Einspielen, gefolgt vom gemeinsamen Erarbeiten
                des aktuellen Programms. Dabei achten wir darauf, dass jede
                Stimme gehört wird und sich alle gut aufgehoben fühlen.
              </p>
            </Reveal>
            <Reveal delay={60}>
              <p>
                Interessierte sind jederzeit willkommen. Bitte melden Sie sich
                vorher kurz telefonisch an, dann können wir Ihnen genau sagen,
                wo und wann die nächste Probe stattfindet.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16">
          <div className="rounded-2xl border border-line bg-paper p-8 md:p-12 shadow-card">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-kicker text-ink-400">
                  Probentag
                </p>
                <p className="mt-3 font-serif text-xl text-navy">
                  Auf Anfrage
                </p>
                <p className="mt-1 text-sm text-ink-400">
                  Konkrete Uhrzeit nennen wir Ihnen gerne persönlich.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-kicker text-ink-400">
                  Probenort
                </p>
                <p className="mt-3 font-serif text-xl text-navy">
                  Püttlingen
                </p>
                <p className="mt-1 text-sm text-ink-400">
                  Treffpunkt teilen wir auf Anfrage mit.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-kicker text-ink-400">
                  Anmeldung
                </p>
                <a
                  href={`tel:${VEREIN.telefonHref.replace(/\s/g, "")}`}
                  className="mt-3 inline-block font-serif text-xl text-navy hover:text-royal"
                >
                  {VEREIN.telefon}
                </a>
                <p className="mt-1 text-sm text-ink-400">
                  {VEREIN.vorsitzende.name}, {VEREIN.vorsitzende.rolle}
                </p>
              </div>
            </div>

            <hr className="hr-thin my-10" />

            <div className="flex flex-wrap items-center justify-between gap-6">
              <p className="text-ink-500 max-w-md">
                Sie möchten vorher noch Fragen klären? Kein Problem. Melden Sie
                sich gerne, wir antworten persönlich.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-navy px-6 py-3 text-[0.95rem] text-white hover:bg-royal transition-colors"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
