import Image from "next/image";

import { Countdown } from "@/components/Countdown";
import { tickets } from "@/data/site";

export function Tickets() {
  return (
    <section className="section ticket-section" id="ingressos">
      <div className="container">
        <div className="ticket-section-heading">
          <div className="eyebrow">Ingressos</div>
          <h2 className="section-title">Escolha como viver esta experiência</h2>
          <div className="divider-losango" aria-hidden="true"><span /></div>
          <p className="lead">
            Vagas limitadas para um encontro pensado para conhecimento, conexões e movimento.
            Garanta a sua antes que esgote.
          </p>
          <Countdown className="ticket-countdown" />
        </div>

        <div className="ticket-gallery">
          {tickets.map((ticket) => (
            <article
              className={`ticket-visual-card${ticket.featured ? " is-featured" : ""}`}
              key={ticket.name}
            >
              <div className="ticket-image-wrapper">
                <Image
                  className="ticket-image"
                  src={ticket.image}
                  alt={`Ingresso ${ticket.name} — ${ticket.price}`}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
                <span className="ticket-seats" aria-label={`${ticket.seats} disponíveis`}>
                  {ticket.seats}
                </span>
              </div>
              <div className="ticket-card-action">
                <a
                  className="ticket-buy-button"
                  href={ticket.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {ticket.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
