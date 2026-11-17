import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Kicker from "@/components/Kicker";
import { VEREIN } from "@/lib/data";

const SCHRITTE = [
  {
    nr: "01",
    titel: "Melden Sie sich bei uns",
    text: "Ein kurzer Anruf oder eine Nachricht an unsere Vorsitzende genügt. Sie erfahren Probentag, Probenort und was Sie mitbringen sollten.",
  },
  {
    nr: "02",
    titel: "Kommen Sie zur Probe",
    text: "Einfach als Gast dazukommen. Sie lernen den Verein kennen, hören rein, spielen bei Lust und Laune mit. Alles unverbindlich.",
  },
  {
    nr: "03",
    titel: "Bleiben Sie dabei",
    text: "Fühlt es sich gut an, werden Sie Mitglied. Zu Beitrag, Noten und Abläufen informieren wir Sie persönlich.",
  },
];

export const metadata = {
  title: "Mitmachen · Akkordeon-Orchester Püttlingen e. V.",
  description:
    "So werden Sie Teil des Akkordeon-Orchesters Püttlingen e. V.: vom unverbindlichen Besuch bis zur Mitgliedschaft.",
};

export default function MitmachenPage() {
  return (
    <>
      <PageHeader
        kicker="Mitmachen"
        title="Spielen Sie mit uns."
        lead="Ob Sie seit Jahren Akkordeon spielen oder gerade erst beginnen, bei uns finden Sie Platz. Drei einfache Schritte, bis Sie Teil des Orchesters sind."
        image="hands"
      />

      <section className="mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-24">
        <Reveal stagger className="grid gap-6 md:grid-cols-3">
          {SCHRITTE.map((s) => (
            <article
              key={s.nr}
              className="rounded-2xl border border-line bg-paper p-8 shadow-card"
            >
              <p className="font-serif italic text-royal/80 text-sm">
                {s.nr}
              </p>
              <h3 className="mt-3 font-serif text-xl text-navy">
                {s.titel}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-500">
                {s.text}
              </p>
            </article>
          ))}
        </Reveal>

        <Reveal className="mt-16">
          <div className="rounded-2xl bg-navy text-white p-10 md:p-14 grid gap-8 md:grid-cols-5">
            <div className="md:col-span-3">
              <Kicker>
                <span className="text-white/80">Erste Kontaktaufnahme</span>
              </Kicker>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-snug">
                Am schnellsten erreichen Sie uns telefonisch.
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed max-w-lg">
                Unsere 1. Vorsitzende nimmt Ihre Anfrage persönlich entgegen und
                beantwortet alle Fragen rund um Probe und Mitgliedschaft.
              </p>
            </div>
            <div className="md:col-span-2 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-kicker text-white/60">
                Direkt
              </p>
              <a
                href={`tel:${VEREIN.telefonHref.replace(/\s/g, "")}`}
                className="mt-3 font-serif text-3xl md:text-4xl hover:text-royal-200"
              >
                {VEREIN.telefon}
              </a>
              <p className="mt-2 text-white/70 text-sm">
                {VEREIN.vorsitzende.name}
              </p>
              <Link
                href="/kontakt"
                className="mt-6 inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm text-white hover:bg-paper hover:text-navy transition-colors w-max"
              >
                Zur Kontaktseite
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
