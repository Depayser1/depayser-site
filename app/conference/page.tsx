import type { Metadata } from "next";

import { AcademyWaitlist } from "@/components/AcademyWaitlist";
import { BrandSignature } from "@/components/BrandSignature";
import { Cart } from "@/components/Cart";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { KidsSpace } from "@/components/KidsSpace";
import { Nav } from "@/components/Nav";
import { Schedule } from "@/components/Schedule";
import { Speakers } from "@/components/Speakers";
import { StickyCta } from "@/components/StickyCta";
import { Sponsor } from "@/components/Sponsor";
import { Storytelling } from "@/components/Storytelling";
import { Venue } from "@/components/Venue";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.eventName,
  description:
    "Conferência de desenvolvimento humano, comunicação, empreendedorismo e networking para a comunidade lusófona na Europa. 18 de outubro de 2026, em Paris.",
  alternates: { canonical: "/conference" },
  openGraph: {
    title: siteConfig.eventName,
    description: "Um dia de conhecimento, conexões e transformação em Paris.",
    url: `${siteConfig.domain}/conference`,
    siteName: "Dépayser",
    locale: "pt_BR",
    type: "website",
    images: ["/images/depayser-poster.png"],
  },
};

export default function ConferencePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Storytelling />
        <Speakers />
        <Schedule />
        <Cart />
        <KidsSpace />
        <Venue />
        <Faq />
        <Journey />
        <AcademyWaitlist />
        <Sponsor />
      </main>
      <BrandSignature />
      <Footer />
      <StickyCta />
    </>
  );
}
