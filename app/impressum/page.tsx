import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { VEREIN } from "@/lib/data";

export const metadata = {
  title: "Impressum · Akkordeon-Orchester Püttlingen e. V.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader kicker="Rechtliches" title="Impressum" />

      <section className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-20 space-y-10 text-ink-600 leading-relaxed">
        <Reveal>
          <h2 className="font-serif text-2xl text-navy">
            Angaben gemäß § 5 TMG
          </h2>
          <address className="mt-4 not-italic">
            {VEREIN.name}
            <br />
            {VEREIN.strasse}
            <br />
            {VEREIN.plz} {VEREIN.ort}
          </address>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-2xl text-navy">
            Vertretungsberechtigt
          </h2>
          <p className="mt-4">
            {VEREIN.vorsitzende.name}, {VEREIN.vorsitzende.rolle}
          </p>
          <p>Telefon: {VEREIN.telefon}</p>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-2xl text-navy">
            Vereinsregister
          </h2>
          <p className="mt-4 text-ink-400">
            Eintragung in das Vereinsregister. Registergericht und
            Registernummer ergänzen.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-2xl text-navy">
            Verantwortlich für den Inhalt
          </h2>
          <p className="mt-4">
            {VEREIN.vorsitzende.name}
            <br />
            {VEREIN.strasse}, {VEREIN.plz} {VEREIN.ort}
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-2xl text-navy">Haftung</h2>
          <p className="mt-4 text-ink-500">
            Dieser Abschnitt ist ein Platzhalter und sollte vor
            Veröffentlichung durch eine rechtlich geprüfte Fassung ersetzt
            werden (Haftung für Inhalte, Links und Urheberrecht).
          </p>
        </Reveal>
      </section>
    </>
  );
}
