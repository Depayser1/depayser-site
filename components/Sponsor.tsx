export function Sponsor() {
  const msg = encodeURIComponent("Olá! Quero me tornar um PATROCINADOR Dépayser");
  return (
    <section className="section sponsor-section" id="patrocinio">
      <div className="container sponsor-inner">
        <div className="eyebrow">Marcas e parceiros</div>
        <h2 className="section-title">Sua marca na Dépayser Conference</h2>
        <div className="divider-losango" aria-hidden="true"><span /></div>
        <p className="lead">
          Sua marca não estará apenas patrocinando um evento. Estará apoiando histórias,
          sonhos, crescimento e transformação de centenas de lusófonos que decidiram
          construir uma nova vida fora do país.
        </p>
        <p className="lead">
          Associe a sua marca ao movimento Dépayser e alcance uma comunidade engajada de
          empresários, criadores e profissionais na Europa.
        </p>
        <a
          className="cta"
          href={`https://wa.me/33758127257?text=${msg}`}
          target="_blank"
          rel="noreferrer"
        >
          Quero ser patrocinador
        </a>
      </div>
    </section>
  );
}
