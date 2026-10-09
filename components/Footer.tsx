"use client";

import Image from "next/image";

import { useT } from "@/components/LanguageProvider";
import { siteConfig } from "@/data/site";

export function Footer() {
  const t = useT();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/brand/marca-conceitual-trim.png" alt="" width={44} height={48} />
            </span>
            <span className="brand-wordmark">
              <Image src="/brand/wordmark-depayser.png" alt="Dépayser Paris" width={131} height={30} />
            </span>
          </div>
          <p>{t.footer.tagline}</p>
        </div>
        <div>
          <strong>{t.footer.contato}</strong>
          <p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <br />
            {siteConfig.whatsappDisplay}
          </p>
        </div>
        <div>
          <strong>{t.footer.redes}</strong>
          <p>
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
              {siteConfig.instagramLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
