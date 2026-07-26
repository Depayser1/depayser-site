import Image from "next/image";

import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/brand/marca-conceitual-trim.png" alt="" width={44} height={48} />
            </span>
            <span className="brand-wordmark">
              <Image src="/brand/logo-horizontal-trim.png" alt="Dépayser Paris" width={99} height={30} />
            </span>
          </div>
          <p>Desenvolvimento humano, comunicação e experiências para a comunidade lusófona na Europa.</p>
        </div>
        <div>
          <strong>Contato</strong>
          <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />{siteConfig.whatsappDisplay}</p>
        </div>
        <div>
          <strong>Redes</strong>
          <p><a href={siteConfig.instagram} target="_blank" rel="noreferrer">{siteConfig.instagramLabel}</a></p>
        </div>
      </div>
    </footer>
  );
}
