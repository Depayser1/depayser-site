import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Venue() {
  return (
    <section className="section light" id="local">
      <div className="container grid-2">
        <div>
          <div className="eyebrow">Local</div>
          <h2 className="section-title">{siteConfig.venue}</h2>
          <p className="lead">{siteConfig.address}</p>
          <p className="lead">{siteConfig.dateLabel} • {siteConfig.timeLabel} • Evento em {siteConfig.language}</p>
          <a className="cta" href="https://maps.google.com/?q=20+Espl.+Nathalie+Sarraute+75018+Paris" target="_blank" rel="noreferrer">Abrir no mapa</a>
        </div>
        <div className="image-card venue-image">
          <Image src="/images/paris-modern-interior.png" alt="Auditório do HI Hostel Paris Yves Robert" fill sizes="(max-width: 920px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
