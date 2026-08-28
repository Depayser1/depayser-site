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

export default function HomePage() {
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
