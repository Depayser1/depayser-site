import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";

import { siteConfig, tickets } from "@/data/site";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

import "./globals.css";
import "../styles/navigation.css";
import "../styles/hero.css";
import "../styles/storytelling.css";
import "../styles/sections.css";
import "../styles/speakers.css";
import "../styles/tickets.css";
import "../styles/countdown.css";
import "../styles/sticky.css";
import "../styles/faq.css";
import "../styles/waitlist.css";
import "../styles/brand.css";
import "../styles/responsive.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: `${siteConfig.eventName} | Dépayser`,
  description:
    "Conferência de desenvolvimento humano, comunicação, empreendedorismo e networking para a comunidade lusófona na Europa.",
  openGraph: {
    title: siteConfig.eventName,
    description: "Um dia de conhecimento, conexões e transformação em Paris.",
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
        {children}
      </body>
    </html>
  );
}
