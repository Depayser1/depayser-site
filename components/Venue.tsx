"use client";

import Image from "next/image";

import { useT } from "@/components/LanguageProvider";
import { siteConfig } from "@/data/site";

export function Venue() {
  const t = useT();
  return (
    <section className="section light" id="local">
      <div className="container grid-2">
        <div>
          <div className="eyebrow">{t.conf.venue.eyebrow}</div>
          <h2 className="section-title">{siteConfig.venue}</h2>
          <p className="lead">{siteConfig.address}</p>
          <p className="lead">
            {t.conf.dateLabel} • {t.conf.timeLabel} • {t.conf.langLine}
          </p>
          <a
            className="cta"
            href="https://maps.google.com/?q=20+Espl.+Nathalie+Sarraute+75018+Paris"
            target="_blank"
            rel="noreferrer"
          >
            {t.conf.venue.cta}
          </a>
        </div>
        <div className="image-card venue-image">
          <Image
            src="/images/paris-modern-interior.png"
            alt={t.conf.venue.imgAlt}
            fill
            sizes="(max-width: 920px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
