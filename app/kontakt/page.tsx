import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Kicker from "@/components/Kicker";
import { VEREIN } from "@/lib/data";

export const metadata = {
  title: "Kontakt · Akkordeon-Orchester Püttlingen e. V.",
  description:
    "So erreichen Sie das Akkordeon-Orchester Püttlingen e. V. Adresse, Ansprechpartnerin und Telefonnummer.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        kicker="Kontakt"
        title="So erreichen Sie uns."
        lead="Rufen Sie uns an oder schauen Sie an unserer Vereinsadresse vorbei. Wir freuen uns, von Ihnen zu hören."
        image="score"
      />

      <section className="mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-line bg-paper p-8 md:p-10 shadow-card h-full">
              <Kicker>Ansprechpartnerin</Kicker>
              <p className="mt-5 font-serif text-2xl text-navy">
                {VEREIN.vorsitzende.name}
              </p>
              <p className="mt-1 text-ink-400">{VEREIN.vorsitzende.rolle}</p>

              <hr className="hr-thin my-8" />

              <p className="text-xs uppercase tracking-kicker text-ink-400">
                Anschrift
              </p>
              <address className="mt-3 not-italic text-ink-600 leading-relaxed">
                {VEREIN.strasse}
                <br />
                {VEREIN.plz} {VEREIN.ort}
              </address>

              <hr className="hr-thin my-8" />

              <p className="text-xs uppercase tracking-kicker text-ink-400">
                Telefon
              </p>
              <a
                href={`tel:${VEREIN.telefonHref.replace(/\s/g, "")}`}
                className="mt-3 inline-block font-serif text-2xl text-navy hover:text-royal"
              >
                {VEREIN.telefon}
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-line bg-paper p-8 md:p-10 shadow-card h-full">
              <Kicker>Vereinsadresse</Kicker>
              <p className="mt-5 font-serif text-2xl text-navy">
                {VEREIN.name}
              </p>
              <address className="mt-3 not-italic text-ink-600 leading-relaxed">
                {VEREIN.strasse}
                <br />
                {VEREIN.plz} {VEREIN.ort}
                <br />
                Saarland
              </address>

              <hr className="hr-thin my-8" />

              <p className="text-xs uppercase tracking-kicker text-ink-400">
                So finden Sie uns
              </p>
              <p className="mt-3 text-ink-500 leading-relaxed">
                Die Vereinsadresse liegt in der Goethestraße in Püttlingen.
                Routenplanung über den gewohnten Kartendienst mit dem Suchwort
                „Goethestraße 67, 66346 Püttlingen".
              </p>

              <a
                href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(
                  `${VEREIN.strasse}, ${VEREIN.plz} ${VEREIN.ort}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-navy hover:text-royal transition-colors"
              >
                <span className="underline-link">In OpenStreetMap öffnen</span>
                <span className="ml-2" aria-hidden>
                  ↗
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 max-w-3xl">
          <p className="text-sm text-ink-400 leading-relaxed">
            Hinweis: Wir pflegen bewusst keine Kontaktformulare, um Ihre Daten
            zu schützen. Der schnellste Weg zu uns ist der direkte Anruf.
          </p>
        </Reveal>
      </section>
    </>
  );
}
