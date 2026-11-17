import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akkordeon-Orchester Püttlingen e. V.",
  description:
    "Akkordeon-Orchester Püttlingen e. V. Gemeinsam Musik machen im Köllertal. Informationen zu Verein, Proben, Konzerten und Mitgliedschaft.",
  metadataBase: new URL("https://akkordeon-puettlingen.de"),
  openGraph: {
    title: "Akkordeon-Orchester Püttlingen e. V.",
    description:
      "Gemeinsam Musik machen. Mitten im Köllertal. Der Akkordeon-Verein aus Püttlingen.",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable}`}>
      <body className="min-h-screen bg-paper text-navy antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Zum Inhalt springen
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
