"use client";

import { useEffect, useState } from "react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledPastHero = window.scrollY > 700;

      // Esconde quando ingressos, lista de espera ou rodapé estão visíveis
      // (evita redundância e impede o botão de cobrir conteúdo no fim da página).
      const isInView = (el: Element | null) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
      };
      const blocked =
        isInView(document.getElementById("ingressos")) ||
        isInView(document.getElementById("academy")) ||
        isInView(document.querySelector("footer"));

      setVisible(scrolledPastHero && !blocked);
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
