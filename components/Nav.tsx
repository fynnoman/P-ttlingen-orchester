"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, VEREIN } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-line shadow-[0_1px_0_rgba(15,23,42,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">
          <Link href="/" className="group flex items-center gap-3">
            <Monogram scrolled={scrolled} />
            <div className="flex flex-col leading-tight">
              <span
                className={`font-serif text-[1.05rem] md:text-[1.15rem] ${
                  scrolled ? "text-navy" : "text-navy"
                }`}
              >
                Akkordeon-Orchester
              </span>
              <span
                className={`text-[0.72rem] uppercase tracking-kicker ${
                  scrolled ? "text-ink-400" : "text-ink-400"
                }`}
              >
                Püttlingen e. V.
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV.slice(1).map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.92rem] transition-colors ${
                    active
                      ? "text-royal"
                      : "text-ink-600 hover:text-royal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              className="ml-2 inline-flex items-center rounded-full bg-navy px-4 py-2 text-[0.85rem] text-white hover:bg-royal transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-md border border-line bg-paper/90 text-navy"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5 animate-fadeInUp bg-paper/95 backdrop-blur-md rounded-b-2xl -mx-5 px-5">
            <div className="flex flex-col divide-y divide-line border-t border-line">
              {NAV.slice(1).map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`py-3 text-[1.05rem] ${
                      active ? "text-royal" : "text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-ink-400">
              <span>Tel.</span>
              <a
                href={`tel:${VEREIN.telefonHref.replace(/\s/g, "")}`}
                className="underline-link text-navy"
              >
                {VEREIN.telefon}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Monogram({ scrolled }: { scrolled: boolean }) {
  return (
    <span
      aria-hidden
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white font-serif text-sm shadow-sm"
    >
      AP
      <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-sm bg-royal" />
    </span>
  );
}
