import Link from "next/link";
import Kicker from "@/components/Kicker";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 md:px-8 pt-40 pb-28 md:pt-52 md:pb-40 text-center">
      <Kicker>Seite nicht gefunden</Kicker>
      <h1 className="mt-6 font-serif text-4xl md:text-6xl text-navy leading-[1.05]">
        Diese Seite existiert nicht.
      </h1>
      <p className="mt-6 text-ink-500 text-lg">
        Vielleicht ist der Link veraltet. Starten Sie am besten auf der
        Startseite neu.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center rounded-full bg-navy px-6 py-3 text-white hover:bg-royal transition-colors"
      >
        Zur Startseite
      </Link>
    </section>
  );
}
