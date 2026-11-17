import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Kicker from "@/components/Kicker";
import Link from "next/link";

export const metadata = {
  title: "Über uns · Akkordeon-Orchester Püttlingen e. V.",
  description:
    "Wer wir sind, was uns verbindet und warum das Akkordeon-Orchester Püttlingen e. V. seit vielen Jahren gemeinsam musiziert.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        kicker="Über uns"
        title="Ein Orchester aus Nachbarn, Freunden und Musikliebhabern."
        lead="Wir sind das Akkordeon-Orchester Püttlingen e. V., ein eingetragener gemeinnütziger Verein aus dem Herzen des Köllertals. Zusammen entsteht aus vielen einzelnen Stimmen ein gemeinsamer Klang."
        image="ensemble"
      />

      <section className="mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <Kicker>Unser Selbstverständnis</Kicker>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl text-navy leading-[1.1]">
              Musik, die verbindet.
            </h2>
          </Reveal>

          <div className="md:col-span-3 space-y-6 text-[1.05rem] leading-relaxed text-ink-600">
            <Reveal>
              <p>
                Das Akkordeon-Orchester Püttlingen ist ein Ort, an dem Menschen
                unterschiedlicher Generationen zusammenkommen, um gemeinsam zu
                musizieren. Im Zentrum steht das Zusammenspiel: aufeinander
                hören, miteinander üben, miteinander wachsen.
              </p>
            </Reveal>
            <Reveal delay={60}>
              <p>
                Neben den regelmäßigen Proben pflegen wir das Vereinsleben als
                festen Teil unseres Wochenablaufs. Gemeinsame Auftritte,
                Vereinsfeste und der Austausch untereinander gehören für uns
                selbstverständlich dazu.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                Weitere Informationen zu Vereinsgeschichte, Vorstand und
                Mitgliedschaft erhalten Sie gerne auf Anfrage.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-20">
          <div className="rounded-2xl border border-line bg-paper p-8 md:p-12 shadow-card grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-kicker text-ink-400">
                Sitz
              </p>
              <p className="mt-3 font-serif text-xl text-navy">Püttlingen</p>
              <p className="mt-1 text-sm text-ink-400">Köllertal, Saarland</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-kicker text-ink-400">
                Rechtsform
              </p>
              <p className="mt-3 font-serif text-xl text-navy">
                Eingetragener Verein
              </p>
              <p className="mt-1 text-sm text-ink-400">e. V.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-kicker text-ink-400">
                Haltung
              </p>
              <p className="mt-3 font-serif text-xl text-navy">
                Offen für neue Mitglieder
              </p>
              <p className="mt-1 text-sm text-ink-400">
                <Link href="/mitmachen" className="underline-link">
                  Mitmachen
                </Link>
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
