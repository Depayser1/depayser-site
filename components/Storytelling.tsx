import Image from "next/image";

const challenges = [
  "Você sabe que pode ir além, mas ainda não encontrou o ambiente certo para crescer.",
  "Você quer se comunicar com mais clareza, confiança e presença.",
  "Você busca conexões reais com pessoas que também decidiram evoluir.",
];

const experiences = [
  "Conteúdos práticos sobre comunicação, mentalidade, carreira e empreendedorismo.",
  "Histórias reais de pessoas que transformaram desafios em movimento.",
  "Conexões com brasileiros e lusófonos que vivem e constroem projetos na Europa.",
  "Um ambiente pensado para inspirar decisões, fortalecer ideias e gerar oportunidades.",
];

export function Storytelling() {
  return (
    <>
      <section className="section light story-meaning" id="evento">
        <div className="container story-meaning-grid">
          <div className="story-meaning-copy">
            <div className="eyebrow">O significado</div>
            <h2 className="section-title serif story-meaning-title">
   <span>Dépayser é permitir-se</span>
  <span>viver além do que já</span>
  <span>é conhecido</span>
</h2>
            <p className="story-highlight">Sair do lugar habitual também pode significar reencontrar a própria direção.</p>
            <p className="lead">A Dépayser Conference nasce para reunir pessoas que decidiram crescer, fortalecer sua comunicação e construir novas possibilidades na Europa.</p>
            <p className="lead">Um encontro para transformar conhecimento em movimento, ampliar perspectivas e criar conexões que continuam depois do evento.</p>
          </div>

          <figure className="story-editorial-image">
            <Image src="/images/story-paris.jpg" alt="Paris vista como cenário de novas possibilidades" fill sizes="(max-width: 820px) 100vw, 46vw" />
            <figcaption>
              <span>Paris • 2026</span>
              <strong>Um novo ambiente pode revelar uma nova versão de você.</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section story-challenge">
        <div className="container">
          <div className="story-challenge-intro">
            <div className="eyebrow">O desafio</div>
            <h2 className="section-title">Crescer sozinho pode tornar o caminho mais longo</h2>
            <p className="lead">Muitas pessoas possuem capacidade, experiência e vontade de avançar, mas ainda precisam de repertório, direção e conexões para transformar potencial em resultado.</p>
          </div>
          <div className="story-statements">
            {challenges.map((challenge, index) => (
              <div className="story-statement" key={challenge}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section story-experience-light" id="experiencia">
        <div className="container story-experience-grid">
          <div className="story-experience-copy">
            <div className="eyebrow">O que você viverá</div>
            <h2 className="section-title">Uma experiência criada para gerar clareza, conexão e movimento</h2>
            <p className="lead">Um dia inteiro de conhecimento, trocas e encontros com pessoas que também escolheram viver à altura do próprio potencial.</p>
            <a className="cta outline" href="#ingressos">Garantir meu ingresso</a>
          </div>
          <div className="story-experience-list">
            {experiences.map((experience, index) => (
              <div className="story-experience-item" key={experience}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
