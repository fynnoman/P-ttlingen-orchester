import Link from "next/link";
import Image from "next/image";
import { VEREIN } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-navy text-white/90">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white font-serif text-base"
            >
              AP
              <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-sm bg-royal-400" />
            </span>
            <div className="leading-tight">
              <p className="font-serif text-lg text-white">
                Akkordeon-Orchester
              </p>
              <p className="text-xs uppercase tracking-kicker text-white/60">
                Püttlingen e. V.
              </p>
            </div>
          </div>
          <p className="mt-6 text-white/70 max-w-sm leading-relaxed">
            Gemeinnütziger Verein für gemeinsames Musizieren im Köllertal.
            Wir freuen uns über neue Stimmen im Ensemble.
          </p>
          <Link
            href="/mitmachen"
            className="mt-6 inline-flex items-center rounded-full bg-white text-navy px-5 py-2.5 text-sm hover:bg-royal-400 hover:text-white transition-colors"
          >
            Mitspielen und kennenlernen
          </Link>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-kicker text-white/50">
            Kontakt
          </p>
          <address className="mt-4 not-italic leading-relaxed text-white/90">
            <span className="font-serif">{VEREIN.vorsitzende.name}</span>
            <br />
            <span className="text-white/60 text-sm">
              {VEREIN.vorsitzende.rolle}
            </span>
            <br />
            <span className="block mt-3">
              {VEREIN.strasse}
              <br />
              {VEREIN.plz} {VEREIN.ort}
            </span>
            <a
              href={`tel:${VEREIN.telefonHref.replace(/\s/g, "")}`}
              className="mt-3 inline-block font-serif text-lg hover:text-royal-400"
            >
              {VEREIN.telefon}
            </a>
          </address>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-kicker text-white/50">
            Seiten
          </p>
          <ul className="mt-4 space-y-2.5 text-white/80">
            <li>
              <Link href="/ueber-uns" className="hover:text-white">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/proben" className="hover:text-white">
                Proben
              </Link>
            </li>
            <li>
              <Link href="/konzerte" className="hover:text-white">
                Konzerte
              </Link>
            </li>
            <li>
              <Link href="/mitmachen" className="hover:text-white">
                Mitmachen
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-white">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Verbundenheit zur Stadt Püttlingen */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-8 flex flex-col sm:flex-row items-center sm:justify-between gap-5">
          <div className="flex items-center gap-4">
            <p className="text-xs uppercase tracking-kicker text-white/50">
              Ein Verein aus der
            </p>
            <a
              href="https://www.puettlingen.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5"
              aria-label="Stadt Püttlingen"
            >
              <Image
                src="/images/stadt-puettlingen-logo.png"
                alt="Logo der Stadt Püttlingen"
                width={140}
                height={75}
                className="h-9 w-auto"
              />
            </a>
          </div>
          <p className="italic text-white/60 text-sm">
            Köllertalstadt Püttlingen
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/50">
          <p>© {year} {VEREIN.name}</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
