"use client";

import { useT } from "@/components/LanguageProvider";
import { siteConfig } from "@/data/site";

const MAP_URL = "https://maps.google.com/?q=20+Espl.+Nathalie+Sarraute+75018+Paris";

export function Faq() {
  const t = useT();
  const f = t.conf.faq;

  return (
    <section className="section light faq-section" id="faq">
      <div className="container">
        <div className="faq-heading">
          <div className="eyebrow">{f.eyebrow}</div>
          <h2 className="section-title">{f.title}</h2>
          <div className="divider-losango" aria-hidden="true">
            <span />
          </div>
        </div>

        <div className="faq-list">
          {f.items.map((item) => {
            const it = item as { q: string; a: string[]; bold?: boolean; link?: string };
            return (
              <details className="faq-item" key={it.q}>
                <summary>
                  <span>{it.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  {it.link === "contact" ? (
                    <p>
                      {f.contactPre}
                      <a href={`https://wa.me/${siteConfig.whatsappRaw}`} target="_blank" rel="noreferrer">
                        {siteConfig.whatsappDisplay}
                      </a>
                      {f.contactMid}
                      <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                      {f.contactSuf}
                    </p>
                  ) : (
                    <>
                      {it.a.map((para, i) => {
                        if (it.bold) {
                          const idx = para.indexOf(": ");
                          if (idx > -1) {
                            return (
                              <p key={i}>
                                <strong>{para.slice(0, idx + 1)}</strong>
                                {para.slice(idx + 1)}
                              </p>
                            );
                          }
                        }
                        return <p key={i}>{para}</p>;
                      })}
                      {it.link === "map" && (
                        <p>
                          <a href={MAP_URL} target="_blank" rel="noreferrer">
                            {f.mapLink}
                          </a>
                        </p>
                      )}
                    </>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
