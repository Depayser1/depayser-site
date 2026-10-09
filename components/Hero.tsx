"use client";

import { Countdown } from "@/components/Countdown";
import { useT } from "@/components/LanguageProvider";

export function Hero() {
  const t = useT();
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
            {t.conf.hero.titleA}
            <span>{t.conf.hero.titleB}</span>
          </h1>

          <p className="hero-description">{t.conf.hero.desc}</p>

          <div className="hero-actions">
            <a className="cta" href="#ingressos">
              {t.conf.hero.ctaPrimary}
            </a>
            <a className="cta outline" href="#experiencia">
              {t.conf.hero.ctaSecondary}
            </a>
          </div>

          <div className="hero-event-info">
            <div className="hero-event-item">
              <span className="hero-info-label">{t.conf.hero.data}</span>
              <strong>{t.conf.dateLabel}</strong>
            </div>
            <div className="hero-event-item">
              <span className="hero-info-label">{t.conf.hero.horario}</span>
              <strong>{t.conf.timeLabel}</strong>
            </div>
            <div className="hero-event-item">
              <span className="hero-info-label">{t.conf.hero.local}</span>
              <strong>{t.conf.hero.localValue}</strong>
            </div>
          </div>

          <Countdown className="hero-countdown" />
        </div>
      </div>

      <a className="hero-scroll" href="#experiencia" aria-label={t.conf.hero.scroll}>
        <span aria-hidden="true" />
        {t.conf.hero.scroll}
      </a>
    </section>
  );
}
