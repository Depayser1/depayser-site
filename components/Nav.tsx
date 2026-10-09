"use client";

import Image from "next/image";

import { LangSwitcher } from "@/components/LangSwitcher";
import { useT } from "@/components/LanguageProvider";

export function Nav() {
  const t = useT();
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="/" aria-label="Início — Dépayser Academy">
          <span className="brand-mark" aria-hidden="true">
            <Image src="/brand/marca-conceitual-trim.png" alt="" width={46} height={50} priority />
          </span>
          <span className="brand-wordmark">
            <Image src="/brand/wordmark-depayser.png" alt="Dépayser Paris" width={131} height={30} priority />
          </span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <LangSwitcher />
          <a href="/">{t.conf.nav.academy}</a>
          <a href="#palestrantes">{t.conf.nav.palestrantes}</a>
          <a href="#programacao">{t.conf.nav.programacao}</a>
          <a href="#ingressos">{t.conf.nav.ingressos}</a>
          <a href="#faq">{t.conf.nav.duvidas}</a>

          <a className="cta" href="#ingressos">
            {t.conf.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
