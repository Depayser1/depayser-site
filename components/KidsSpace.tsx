import Image from "next/image";

export function KidsSpace() {
  return (
    <section className="section light kids-section" id="kids">
      <div className="container grid-2">
        <div className="image-card kids-image">
          <Image
            src="/images/ticket-kids.png"
            alt="Depayser Kids — Espaço Kids em Paris"
            fill
            sizes="(max-width: 920px) 100vw, 50vw"
          />
        </div>
        <div>
          <div className="eyebrow">Depayser Kids</div>
          <h2 className="section-title">Traga a família. A gente cuida das crianças.</h2>
          <p className="lead">
            Sabemos que sair de casa com os filhos pode ser um desafio — por isso criamos
            o Depayser Kids. Um espaço pensado para as crianças se divertirem com segurança
            enquanto você aproveita cada palestra, conexão e momento do evento com
            tranquilidade.
          </p>
          <ul className="kids-list">
            <li>Ambiente seguro e acolhedor, com monitores dedicados.</li>
            <li>Atividades e diversão ao longo de todo o evento (das 10h às 18h).</li>
            <li>Para os filhos dos participantes — você presente, sem preocupação.</li>
          </ul>
          <div className="kids-cta">
            <span className="kids-price">Apenas 20€ por criança</span>
            <a className="cta" href="#ingressos">Adicionar Espaço Kids</a>
          </div>
        </div>
      </div>
    </section>
  );
}
