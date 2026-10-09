"use client";

import Image from "next/image";

import { useT } from "@/components/LanguageProvider";

export function KidsSpace() {
  const t = useT();
  return (
    <section className="section light kids-section" id="kids">
      <div className="container grid-2">
        <div className="image-card kids-image">
          <Image
            src="/images/ticket-kids.png"
            alt={t.conf.kids.imgAlt}
            fill
            sizes="(max-width: 920px) 100vw, 50vw"
          />
        </div>
        <div>
          <div className="eyebrow">{t.conf.kids.eyebrow}</div>
          <h2 className="section-title">{t.conf.kids.title}</h2>
          <p className="lead">{t.conf.kids.lead}</p>
          <ul className="kids-list">
            {t.conf.kids.list.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
          <div className="kids-cta">
            <span className="kids-price">{t.conf.kids.price}</span>
            <a className="cta" href="#ingressos">
              {t.conf.kids.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
