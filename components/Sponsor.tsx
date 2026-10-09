"use client";

import { useT } from "@/components/LanguageProvider";

export function Sponsor() {
  const t = useT();
  const msg = encodeURIComponent("Olá! Quero me tornar um PATROCINADOR Dépayser");
  return (
    <section className="section sponsor-section" id="patrocinio">
      <div className="container sponsor-inner">
        <div className="eyebrow">{t.conf.sponsor.eyebrow}</div>
        <h2 className="section-title">{t.conf.sponsor.title}</h2>
        <div className="divider-losango" aria-hidden="true">
          <span />
        </div>
        <p className="lead">{t.conf.sponsor.lead1}</p>
        <p className="lead">{t.conf.sponsor.lead2}</p>
        <a className="cta" href={`https://wa.me/33758127257?text=${msg}`} target="_blank" rel="noreferrer">
          {t.conf.sponsor.cta}
        </a>
      </div>
    </section>
  );
}
