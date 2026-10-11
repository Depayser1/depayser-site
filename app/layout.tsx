import type { Metadata } from "next";
import localFont from "next/font/local";

import { Suspense } from "react";

import { LanguageProvider } from "@/components/LanguageProvider";
import { MetaPixel, MetaPixelEvents } from "@/components/MetaPixel";
import { siteConfig, tickets } from "@/data/site";

// Fontes auto-hospedadas (next/font/local) — o build não depende mais de baixar do Google.
const cormorant = localFont({
  variable: "--font-cormorant",
  display: "swap",
  src: [
    { path: "./fonts/cormorant-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cormorant-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/cormorant-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cormorant-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/cormorant-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/cormorant-latin-600-italic.woff2", weight: "600", style: "italic" },
    { path: "./fonts/cormorant-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/cormorant-latin-700-italic.woff2", weight: "700", style: "italic" },
  ],
});

const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  src: [
    { path: "./fonts/montserrat-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/montserrat-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/montserrat-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/montserrat-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/montserrat-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/montserrat-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
});

import "./globals.css";
import "../styles/navigation.css";
import "../styles/hero.css";
import "../styles/storytelling.css";
import "../styles/sections.css";
import "../styles/speakers.css";
import "../styles/tickets.css";
import "../styles/cart.css";
import "../styles/countdown.css";
import "../styles/sticky.css";
import "../styles/faq.css";
import "../styles/waitlist.css";
import "../styles/brand.css";
import "../styles/academy.css";
import "../styles/responsive.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Dépayser Academy",
    template: "%s | Dépayser",
  },
  description:
    "A frente de educação e serviços do movimento Dépayser para empresários lusófonos na Europa — uma jornada de transformação 360°.",
  openGraph: {
    title: "Dépayser Academy",
    description:
      "Transformar talento em autoridade e marcas comuns em marcas memoráveis.",
    url: siteConfig.domain,
    siteName: "Dépayser",
    locale: "pt_BR",
    type: "website",
    images: ["/images/depayser-poster.png"],
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: siteConfig.eventName,
  startDate: siteConfig.eventDateISO,
  endDate: "2026-10-18T18:00:00+02:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: siteConfig.venue,
    address: {
      "@type": "PostalAddress",
      streetAddress: "20 Espl. Nathalie Sarraute",
      postalCode: "75018",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
  },
  image: [`${siteConfig.domain}/images/depayser-poster.png`],
  description:
    "Conferência de desenvolvimento humano, comunicação, empreendedorismo e networking para a comunidade lusófona na Europa.",
  organizer: { "@type": "Organization", name: "Dépayser", url: siteConfig.domain },
  performer: [
    { "@type": "Person", name: "Giovanni Begossi" },
    { "@type": "Person", name: "Amanda Girotto" },
    { "@type": "Person", name: "Watson Sartor" },
    { "@type": "Person", name: "Ricardo Carvalho" },
  ],
  offers: tickets.map((t) => ({
    "@type": "Offer",
    name: t.name,
    price: t.price.replace(/[^0-9]/g, ""),
    priceCurrency: "EUR",
    url: t.href,
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        <MetaPixel />
        <Suspense fallback={null}>
          <MetaPixelEvents />
        </Suspense>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
