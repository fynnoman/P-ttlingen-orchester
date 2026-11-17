import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { VEREIN } from "@/lib/data";

export const metadata = {
  title: "Datenschutz · Akkordeon-Orchester Püttlingen e. V.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        kicker="Rechtliches"
        title="Datenschutz"
        lead="Wir behandeln Ihre Daten mit Sorgfalt. Diese Website kommt ohne Tracking, ohne Cookies und ohne externe Analysedienste aus."
      />

      <section className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-20 space-y-10 text-ink-600 leading-relaxed">
        <Reveal>
          <h2 className="font-serif text-2xl text-navy">
            Verantwortliche Stelle
          </h2>
          <address className="mt-4 not-italic">
            {VEREIN.name}
            <br />
            {VEREIN.strasse}
            <br />
            {VEREIN.plz} {VEREIN.ort}
            <br />
            Telefon: {VEREIN.telefon}
          </address>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-2xl text-navy">Erhobene Daten</h2>
          <p className="mt-4">
            Beim Aufruf dieser Website werden technisch notwendige Daten
            verarbeitet (z. B. IP-Adresse, Zeitpunkt des Aufrufs, aufgerufene
            Seite). Diese Daten dienen ausschließlich der sicheren und
            fehlerfreien Auslieferung der Website und werden nicht ausgewertet.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-2xl text-navy">Kontaktaufnahme</h2>
          <p className="mt-4">
            Nehmen Sie telefonisch Kontakt mit uns auf, verarbeiten wir die
            dabei übermittelten Daten ausschließlich zur Bearbeitung Ihres
            Anliegens. Eine Weitergabe an Dritte findet nicht statt.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-2xl text-navy">
            Externe Karten, Social Media
          </h2>
          <p className="mt-4">
            Wir binden keine Karten, Fonts oder Social-Media-Inhalte Dritter
            automatisch ein. Verweise auf Kartendienste öffnen sich ausdrücklich
            erst nach Ihrem Klick.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-2xl text-navy">Ihre Rechte</h2>
          <p className="mt-4">
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
            Einschränkung, Löschung und Übertragbarkeit Ihrer Daten sowie das
            Recht auf Beschwerde bei einer Aufsichtsbehörde. Wenden Sie sich
            dazu an unsere oben genannte Vereinsadresse.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-sm text-ink-400">
            Hinweis: Diese Datenschutzerklärung ist ein Platzhalter und sollte
            vor Veröffentlichung durch eine rechtlich geprüfte Fassung ersetzt
            werden.
          </p>
        </Reveal>
      </section>
    </>
  );
}
