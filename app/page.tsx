import { AcademyWaitlist } from "@/components/AcademyWaitlist";
import { BrandSignature } from "@/components/BrandSignature";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Nav } from "@/components/Nav";
import { Schedule } from "@/components/Schedule";
import { Speakers } from "@/components/Speakers";
import { StickyCta } from "@/components/StickyCta";
import { Storytelling } from "@/components/Storytelling";
import { Tickets } from "@/components/Tickets";
import { Venue } from "@/components/Venue";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Storytelling />
        <Speakers />
        <Schedule />
        <Tickets />
        <Venue />
        <Faq />
        <Journey />
        <AcademyWaitlist />
      </main>
      <BrandSignature />
      <Footer />
      <StickyCta />
    </>
  );
}
