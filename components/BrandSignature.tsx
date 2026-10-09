"use client";

import Image from "next/image";

import { useT } from "@/components/LanguageProvider";

export function BrandSignature() {
  const t = useT();
  return (
    <section className="brand-signature" aria-label="Dépayser">
      <div className="container brand-signature-inner">
        <div className="brand-signature-mark">
          <Image
            src="/brand/marca-conceitual.png"
            alt="Marca conceitual Dépayser"
            fill
            sizes="(max-width: 760px) 60vw, 300px"
          />
        </div>
        <p className="brand-signature-phrase">{t.brand.phrase}</p>
        <p className="brand-signature-sub">{t.brand.sub}</p>
      </div>
    </section>
  );
}
