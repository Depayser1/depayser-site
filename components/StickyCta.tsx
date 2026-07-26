"use client";

import { useEffect, useState } from "react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledPastHero = window.scrollY > 700;

      // Esconde quando a própria seção de ingressos está visível (evita redundância).
      const tickets = document.getElementById("ingressos");
      let ticketsInView = false;
      if (tickets) {
        const rect = tickets.getBoundingClientRect();
        ticketsInView = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
      }

      setVisible(scrolledPastHero && !ticketsInView);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <a
      className={`sticky-cta${visible ? " is-visible" : ""}`}
      href="#ingressos"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <span className="sticky-cta-label">Garantir ingresso</span>
      <span className="sticky-cta-arrow" aria-hidden="true">→</span>
    </a>
  );
}
