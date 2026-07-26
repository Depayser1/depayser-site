import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";

import { siteConfig } from "@/data/site";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
