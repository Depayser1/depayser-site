import Image from "next/image";

export function BrandSignature() {
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
        <p className="brand-signature-phrase">Um movimento, não um evento.</p>
        <p className="brand-signature-sub">
          Dépayser — sair do conhecido para descobrir uma nova perspectiva sobre a vida.
        </p>
      </div>
    </section>
  );
}
