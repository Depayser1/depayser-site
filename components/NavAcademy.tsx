import Image from "next/image";

export function NavAcademy() {
  return (
    <header className="nav nav-academy">
      <div className="container nav-inner">
        <a className="brand" href="/" aria-label="Início — Dépayser Academy">
          <span className="brand-mark" aria-hidden="true">
            <Image
              src="/brand/marca-conceitual-trim.png"
              alt=""
              width={46}
              height={50}
              priority
            />
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
          <a href="#conceito">Conceito</a>
          <a href="#academy">A Academy</a>
          <a href="#metodo">Método</a>
          <a href="#lideranca">Liderança</a>
          <a className="is-event" href="/conference">
            Conference · 18/10
          </a>

          <a className="cta" href="/conference#ingressos">
            Garantir ingresso
          </a>
        </nav>
      </div>
    </header>
  );
}
