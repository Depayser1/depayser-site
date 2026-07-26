import Image from "next/image";

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#inicio" aria-label="Início — Dépayser">
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
              src="/brand/logo-horizontal-trim.png"
              alt="Dépayser Paris"
              width={99}
              height={30}
              priority
            />
          </span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#evento">O evento</a>
          <a href="#palestrantes">Palestrantes</a>
          <a href="#programacao">Programação</a>
          <a href="#ingressos">Ingressos</a>
          <a href="#faq">Dúvidas</a>

          <a className="cta" href="#ingressos">
            Garantir ingresso
          </a>
        </nav>
      </div>
    </header>
  );
}
