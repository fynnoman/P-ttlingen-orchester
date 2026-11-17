import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Kicker from "@/components/Kicker";
import { VEREIN } from "@/lib/data";

export const metadata = {
  title: "Konzerte · Akkordeon-Orchester Püttlingen e. V.",
  description:
    "Aktuelle Konzerte und Auftritte des Akkordeon-Orchester Püttlingen e. V.",
};

export default function KonzertePage() {
  return (
    <>
      <PageHeader
        kicker="Konzerte und Auftritte"
        title="Wann Sie uns als Nächstes hören können."
        lead="Hier sammeln wir unsere kommenden Konzerte und Auftritte. Sobald Termine feststehen, veröffentlichen wir sie an dieser Stelle."
        image="concert"
      />

      <section className="mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-24">
        <Reveal>
          <div className="rounded-2xl border border-line border-dashed bg-ice p-10 md:p-14 text-center">
            <Kicker>Aktuell</Kicker>
            <h2 className="mt-5 font-serif text-2xl md:text-3xl text-navy leading-snug max-w-2xl mx-auto">
              Zurzeit werden neue Termine geplant.
            </h2>
            <p className="mt-5 text-ink-500 max-w-xl mx-auto">
              Sobald der nächste Auftritt feststeht, finden Sie ihn hier. Für
              kurzfristige Termine erreichen Sie uns auch jederzeit persönlich.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${VEREIN.telefonHref.replace(/\s/g, "")}`}
                className="inline-flex items-center rounded-full bg-navy px-6 py-3 text-[0.95rem] text-white hover:bg-royal transition-colors"
              >
                {VEREIN.telefon}
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center rounded-full border border-navy px-6 py-3 text-[0.95rem] text-navy hover:bg-navy hover:text-white transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 max-w-3xl">
          <h3 className="font-serif text-2xl text-navy">Für Veranstalter</h3>
          <p className="mt-4 text-ink-500 leading-relaxed">
            Sie planen eine Veranstaltung und möchten uns als Orchester
            einladen? Sprechen Sie uns gerne an, wir prüfen jede Anfrage
            individuell und freuen uns auf Ihre Nachricht.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-flex items-center text-navy hover:text-royal transition-colors"
          >
            <span className="underline-link">Zum Kontakt</span>
            <span className="ml-2" aria-hidden>
              →
            </span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
