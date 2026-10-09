"use client";

import Image from "next/image";

import { useT } from "@/components/LanguageProvider";
import { siteConfig } from "@/data/site";

export function Journey() {
  const t = useT();
  const contactMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre a Dépayser Conference Paris 2026."
  );
  return (
    <section className="section journey-section">
      <div className="container grid-2">
        <div>
          <div className="eyebrow">{t.conf.journey.eyebrow}</div>
          <h2 className="section-title">{t.conf.journey.title}</h2>
          <p className="lead">{t.conf.journey.lead}</p>
          <div className="hero-actions">
            <a className="cta" href="#academy">
              {t.conf.journey.cta1}
            </a>
            <a className="cta outline" href={siteConfig.pageParis} target="_blank" rel="noreferrer">
              {t.conf.journey.cta2}
            </a>
            <a
              className="cta outline"
              href={`https://wa.me/${siteConfig.whatsappRaw}?text=${contactMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              {t.conf.journey.cta3}
            </a>
          </div>
        </div>
        <div className="image-card journey-watson-image">
          <Image
            src="/images/watson-speaker.jpg"
            alt={t.conf.journey.imgAlt}
            fill
            sizes="(max-width: 920px) 100vw, 460px"
          />
        </div>
      </div>
    </section>
  );
}
