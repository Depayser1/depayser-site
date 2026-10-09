import type { Metadata } from "next";

import {
  AcademyConcept,
  AcademyHero,
  AcademyLeadership,
  AcademyMethod,
  AcademyOrg,
  AcademyPartners,
  AcademyProof,
  AcademyStart,
  AcademyWho,
} from "@/components/Academy";
import { BrandSignature } from "@/components/BrandSignature";
import { Footer } from "@/components/Footer";
import { NavAcademy } from "@/components/NavAcademy";
import { StickyCta } from "@/components/StickyCta";

export const metadata: Metadata = {
  title: "Dépayser Academy — transformar talento em autoridade",
  description:
    "A frente de educação e serviços do movimento Dépayser: gestão, marketing, comunicação e imagem em uma jornada de transformação 360° para empresários lusófonos na Europa.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dépayser Academy",
    description:
      "Transformar talento em autoridade e marcas comuns em marcas memoráveis.",
    url: "https://depayseracademy.com",
    siteName: "Dépayser",
    locale: "pt_BR",
    type: "website",
    images: ["/images/depayser-poster.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <NavAcademy />
      <main>
        <AcademyHero />
        <AcademyConcept />
        <AcademyWho />
        <AcademyProof />
        <AcademyOrg />
        <AcademyMethod />
        <AcademyLeadership />
        <AcademyPartners />
        <AcademyStart />
      </main>
      <BrandSignature />
      <Footer />
      <StickyCta href="/conference#ingressos" />
    </>
  );
}
