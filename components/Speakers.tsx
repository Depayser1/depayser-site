"use client";

import Image from "next/image";
import { useRef } from "react";

import { useT } from "@/components/LanguageProvider";

type Speaker = {
  key: "watson" | "giovanni" | "amanda" | "mikaelle" | "bruno" | "juliana" | "ricardo";
  name: string;
  photo: string;
  objectPosition?: string;
};

const roster: Speaker[] = [
  { key: "watson", name: "Watson Sartor", photo: "/images/watson-speaker.jpg", objectPosition: "center 20%" },
  { key: "giovanni", name: "Giovanni Begossi", photo: "/images/giovanni-speaker.jpg" },
  { key: "amanda", name: "Amanda Girotto", photo: "/images/amanda-speaker.jpg" },
  { key: "mikaelle", name: "Mikaelle Gomes", photo: "/images/mikaela.png" },
  { key: "bruno", name: "Bruno Rissi", photo: "/images/bruno.png" },
  { key: "juliana", name: "Juliana Coelho", photo: "/images/juliana.jpeg", objectPosition: "38% center" },
  { key: "ricardo", name: "Ricardo Carvalho", photo: "/images/ricardo.png", objectPosition: "center 8%" },
];

export function Speakers() {
  const t = useT();
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(".speaker-slide");
    const amount = slide ? slide.offsetWidth + 20 : el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="section speakers-dark" id="palestrantes">
      <div className="container">
        <div className="speakers-heading">
          <div className="eyebrow">{t.conf.speakers.eyebrow}</div>
          <h2 className="section-title">{t.conf.speakers.title}</h2>
          <div className="divider-losango" aria-hidden="true">
            <span />
          </div>
          <p className="lead">{t.conf.speakers.lead}</p>
        </div>

        <div className="speakers-gallery">
          <button type="button" className="gallery-arrow prev" aria-label={t.conf.speakers.prev} onClick={() => scroll(-1)}>
            ‹
          </button>
          <button type="button" className="gallery-arrow next" aria-label={t.conf.speakers.next} onClick={() => scroll(1)}>
            ›
          </button>

          <div className="speakers-track" ref={trackRef}>
            {roster.map((s) => (
              <article className="speaker-slide" key={s.name}>
                <div className="speaker-photo">
                  <Image
                    src={s.photo}
                    alt={s.name}
                    fill
                    sizes="(max-width: 760px) 100vw, 320px"
                    style={s.objectPosition ? { objectPosition: s.objectPosition } : undefined}
                  />
                </div>
                <div className="speaker-info">
                  <div className="eyebrow">{t.conf.speakers.roles[s.key]}</div>
                  <h3>{s.name}</h3>
                  <p>{t.conf.speakers.bios[s.key]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
