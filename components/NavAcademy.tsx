"use client";

import Image from "next/image";

import { LangSwitcher } from "@/components/LangSwitcher";
import { useT } from "@/components/LanguageProvider";

export function NavAcademy() {
  const t = useT();
  return (
    <header className="nav nav-academy">
      <div className="container nav-inner">
        <a className="brand" href="/" aria-label="Início — Dépayser Academy">
          <span className="brand-mark" aria-hidden="true">
            <Image src="/brand/marca-conceitual-trim.png" alt="" width={46} height={50} priority />
          </span>
          <span className="brand-wordmark">
            <Image
              src="/brand/wordmark-depayser.png"
              alt="Dépayser Academy"
              width={131}
              height={30}
              priority
            />
          </span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#conceito">{t.nav.conceito}</a>
          <a href="#academy">{t.nav.academy}</a>
          <a href="#metodo">{t.nav.metodo}</a>
          <a href="#lideranca">{t.nav.lideranca}</a>
          <a className="is-event" href="/conference">
            {t.nav.conference}
          </a>

          <a className="cta" href="/conference#ingressos">
            {t.nav.cta}
          </a>
          <LangSwitcher />
        </nav>
      </div>
    </header>
  );
}
