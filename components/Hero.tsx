import { Countdown } from "@/components/Countdown";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="hero-premium" id="inicio">
      <div className="hero-overlay" />

      <div className="container hero-premium-inner">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span>Paris</span>
            <span className="hero-kicker-dot" aria-hidden="true" />
            <span>2026</span>
          </div>

          <h1>
            Viva à altura
            <span>do seu potencial</span>
          </h1>

          <p className="hero-description">
            Uma conferência criada para fortalecer, desenvolver e conectar
            lusófonos que decidiram ir além.
          </p>

          <div className="hero-actions">
            <a className="cta" href="#ingressos">Garantir meu ingresso</a>
            <a className="cta outline" href="#experiencia">Descobrir a experiência</a>
          </div>

          <div className="hero-event-info">
            <div className="hero-event-item">
              <span className="hero-info-label">Data</span>
              <strong>{siteConfig.dateLabel}</strong>
            </div>
            <div className="hero-event-item">
              <span className="hero-info-label">Horário</span>
              <strong>{siteConfig.timeLabel}</strong>
            </div>
            <div className="hero-event-item">
              <span className="hero-info-label">Local</span>
              <strong>Paris, França</strong>
            </div>
          </div>

          <Countdown className="hero-countdown" />
        </div>
      </div>

      <a className="hero-scroll" href="#experiencia" aria-label="Ir para a próxima seção">
        <span aria-hidden="true" />
        Descobrir
      </a>
    </section>
  );
}
