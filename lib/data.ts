export const VEREIN = {
  name: "Akkordeon-Orchester Püttlingen e. V.",
  kurzname: "Akkordeon-Orchester Püttlingen",
  claim: "Gemeinsam Musik machen. Mitten im Köllertal.",
  strasse: "Goethestraße 67",
  plz: "66346",
  ort: "Püttlingen",
  telefon: "06898 / 65881",
  telefonHref: "+4968986588 1",
  vorsitzende: {
    name: "Frau Gabriele Utter",
    rolle: "1. Vorsitzende",
    anschrift: "Goethestraße 67, 66346 Püttlingen",
    telefon: "06898 / 65881",
  },
} as const;

export const NAV: { href: string; label: string }[] = [
  { href: "/", label: "Start" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/proben", label: "Proben" },
  { href: "/konzerte", label: "Konzerte" },
  { href: "/mitmachen", label: "Mitmachen" },
  { href: "/kontakt", label: "Kontakt" },
];

// Stock-Fotos (Unsplash, direkte CDN-URLs, zu ersetzen durch eigene Vereinsbilder).
export const PHOTO = {
  hero:
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=2200&q=85&auto=format&fit=crop",
  heroAlt: "Nahaufnahme einer musikalischen Szene",
  ensemble:
    "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1800&q=85&auto=format&fit=crop",
  ensembleAlt: "Ensemble beim gemeinsamen Musizieren",
  score:
    "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1800&q=85&auto=format&fit=crop",
  scoreAlt: "Notenblätter beim Konzert",
  hands:
    "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1800&q=85&auto=format&fit=crop",
  handsAlt: "Hände an einem Instrument",
  rehearsal:
    "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1800&q=85&auto=format&fit=crop",
  rehearsalAlt: "Probensituation im Orchester",
  concert:
    "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=1800&q=85&auto=format&fit=crop",
  concertAlt: "Konzertabend mit Publikum",
} as const;
