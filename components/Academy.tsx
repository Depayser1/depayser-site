import Image from "next/image";

import { siteConfig } from "@/data/site";

const wa = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
  "Olá! Quero saber mais sobre a Dépayser Academy."
)}`;

/* ---------------- HERO ---------------- */
export function AcademyHero() {
  return (
    <section className="academy-hero" id="inicio">
      <div className="container academy-hero-grid">
        <div className="academy-hero-copy">
          <div className="eyebrow">Dépayser Academy</div>
          <h1>
            Transformar talento em <span className="gold">autoridade</span>.
          </h1>
          <p className="lead">
            A frente de educação e serviços do movimento Dépayser, dedicada a
            desenvolver empresários e empreendedores da comunidade lusófona na
            França — em uma jornada de transformação 360°.
          </p>
          <div className="academy-hero-actions">
            <a className="cta" href="/conference#ingressos">
              Garantir ingresso · Conference
            </a>
            <a className="cta outline" href="#metodo">
              Conhecer a Academy
            </a>
          </div>
          <div className="academy-hero-meta">
            <span>
              Próxima Conference · <strong>18 de outubro</strong> · Paris
            </span>
          </div>
        </div>
        <figure className="academy-hero-figure">
          <Image
            src="/brand/logo-academy.png"
            alt="Dépayser Academy"
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
            priority
          />
        </figure>
      </div>
    </section>
  );
}

/* ---------------- CONCEITO ---------------- */
export function AcademyConcept() {
  return (
    <section className="section academy-concept" id="conceito">
      <div className="container">
        <div className="eyebrow">O significado</div>
        <h2>
          Dépayser: sair do comum
          <br /> para se tornar inesquecível.
        </h2>
        <p className="lead">
          Em francês, <em>dépayser</em> é o deslocamento que amplia o olhar.
        </p>
        <div className="academy-etimo">
          <span>Dé · sair</span>
          <span>Pays · lugar</span>
          <span>Er · ação</span>
        </div>
        <p className="academy-quote">
          &ldquo;Não é sobre mudar de país. É sobre mudar de patamar.&rdquo;
        </p>
      </div>
    </section>
  );
}

/* ---------------- QUEM SOMOS ---------------- */
export function AcademyWho() {
  return (
    <section className="section academy-who" id="academy">
      <div className="container academy-who-grid">
        <div className="academy-who-copy">
          <div className="eyebrow">Quem somos</div>
          <h2 className="section-title">
            A frente de educação e serviços do movimento Dépayser.
          </h2>
          <p className="lead">
            Reunimos gestão empresarial, marketing e posicionamento, comunicação
            e imagem pessoal em uma única jornada de transformação 360°.
          </p>
          <p className="lead">
            Nosso propósito é simples: transformar talento em autoridade e marcas
            comuns em marcas memoráveis.
          </p>
        </div>
        <figure className="academy-who-figure">
          <Image
            src="/brand/academy-lockup.png"
            alt="Dépayser Academy"
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </figure>
      </div>
    </section>
  );
}

/* ---------------- PROVA SOCIAL ---------------- */
export function AcademyProof() {
  return (
    <section className="section academy-proof">
      <div className="container">
        <h2>
          +40 anos de experiência somada, +200 alunos, mentorados e clientes —
          resultados em <b>6 países</b>.
        </h2>
        <div className="academy-countries">
          Brasil · França · Itália · Portugal · Reino Unido · Austrália
        </div>
      </div>
    </section>
  );
}

/* ---------------- ORGANIZAÇÃO ---------------- */
export function AcademyOrg() {
  return (
    <section className="section academy-org" id="organizacao">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Como a Dépayser é organizada</div>
          <h2 className="section-title">Dois braços, um só movimento.</h2>
        </div>
        <div className="academy-org-grid">
          <div className="org-card is-event">
            <span className="org-kicker">Presencial · Paris</span>
            <h3>Dépayser Conference</h3>
            <p>
              Os encontros presenciais em Paris que acendem o movimento e reúnem
              a comunidade lusófona.
            </p>
            <a className="cta" href="/conference">
              Ver a Conference
            </a>
          </div>
          <div className="org-card">
            <span className="org-kicker">O ano inteiro</span>
            <h3>Dépayser Academy</h3>
            <p>
              A escola, as mentorias e os serviços que sustentam a transformação
              o ano inteiro.
            </p>
            <a className="cta outline" href="#metodo">
              Ver o método 360°
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MÉTODO 360 ---------------- */
const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Excelência e resultados sustentáveis começam dentro da empresa: estrutura sólida, equipes alinhadas, comunicação estratégica e propósito claro.",
    items: [
      "Gestão empresarial",
      "Contabilidade",
      "RH & treinamento de pessoal",
      "Implementação de processos",
      "Fluxo de vendas",
      "Gestão de canais de atendimento",
    ],
  },
  {
    n: "02",
    title: "Plano",
    desc: "Desenhamos a estratégia 360° sob medida. Marca desejada, visível, coerente e memorável.",
    items: [
      "Rebranding & identidade visual",
      "Posicionamento digital",
      "Criação de site",
      "E-mail marketing",
      "Gestão de redes sociais",
      "Captação & produção audiovisual",
      "Uniformes & brindes",
    ],
  },
  {
    n: "03",
    title: "Execução",
    desc: "Força-tarefa com todas as frentes. O empresário à altura da própria marca.",
    items: [
      "Comunicação & oratória",
      "Vendas",
      "Liderança",
      "Etiqueta",
      "Francês",
      "Imagem pessoal",
      "Visagismo",
    ],
  },
  {
    n: "04",
    title: "Acompanhamento",
    desc: "Medimos, ajustamos e elevamos o padrão. Não existe marca de alto nível com um empresário no limite.",
    items: [
      "Treinamento físico",
      "Nutrição",
      "Rotina do empresário",
      "Personal organizer",
      "Motivação e disciplina",
    ],
  },
];

export function AcademyMethod() {
  return (
    <section className="section academy-method" id="metodo">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">A Academy — o glow up completo do empresário</div>
          <h2 className="section-title">Um método, quatro passos.</h2>
          <p className="lead">
            Não entregamos serviços soltos, entregamos uma transformação 360°: do
            bastidor da empresa à sua presença diante do mundo.
          </p>
        </div>
        <div className="method-grid">
          {steps.map((s) => (
            <article className="method-card" key={s.n}>
              <span className="method-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="method-list">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LIDERANÇA ---------------- */
const leaders = [
  {
    name: "Watson Sartor",
    role: "Fundador & CEO",
    img: "/images/lider-watson.png",
    items: [
      "Especialista em comunicação e oratória",
      "1º brasileiro formado em Coach de Oratória — Academia Silence (Paris)",
      "Oratória (Senac) · Gestão Comercial",
      "+14 anos em vendas, atendimento e gestão de pessoas",
      "+80 pessoas formadas só em 2026",
    ],
  },
  {
    name: "Tiago Allaion",
    role: "Diretor Executivo",
    img: "/images/lider-tiago.png",
    items: [
      "Gestor especializado em Odontologia (UNIP)",
      "+16 anos de trajetória · na França desde os 22",
      "Liderança, gestão e visão estratégica",
      "Referência na comunidade brasileira em Paris",
      "Pastor da Igreja Lagoinha Paris",
    ],
  },
  {
    name: "Ricardo Carvalho",
    role: "Diretor de Marketing",
    img: "/images/lider-ricardo.png",
    items: [
      "Marketing digital, social media e audiovisual",
      "Sócio-fundador da Maison Rebuli e da Seeds Mkt Digital",
      "Oficial R/2 do Exército brasileiro e ex-integrante da Legião Estrangeira Francesa",
      "Clientes em 4 países (França, Itália, Reino Unido e Austrália)",
      "Disciplina militar + visão de negócio",
    ],
  },
];

export function AcademyLeadership() {
  return (
    <section className="section speakers-dark academy-leaders" id="lideranca">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Quem está por trás</div>
          <h2 className="section-title">A liderança do movimento.</h2>
        </div>
        <div className="leaders-grid">
          {leaders.map((l) => (
            <article className="leader-card" key={l.name}>
              <div className="leader-photo">
                <Image
                  src={l.img}
                  alt={l.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                />
              </div>
              <div className="leader-body">
                <h3>{l.name}</h3>
                <div className="leader-role">{l.role}</div>
                <ul className="leader-list">
                  {l.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PARCEIROS ---------------- */
export function AcademyPartners() {
  return (
    <section className="section academy-partners">
      <div className="container">
        <div className="eyebrow">Confiança</div>
        <h2 className="section-title">Marcas e nomes que já caminham conosco.</h2>
        <div className="partners-row">
          <span>Lagoinha</span>
          <span>Lumny</span>
          <span>Seeds</span>
          <span>Social do Imigrante</span>
          <span>Maison Rebuli</span>
          <span>Bárbara Oliveira</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMO COMEÇAR / CTA ---------------- */
export function AcademyStart() {
  return (
    <section className="section academy-start" id="comecar">
      <div className="container">
        <div className="eyebrow">Como começar</div>
        <h2>O primeiro passo é uma conversa.</h2>
        <div className="start-steps">
          <div className="start-step">
            <span>01</span>
            <h4>Agende seu diagnóstico</h4>
            <p>Uma conversa para entender o seu momento.</p>
          </div>
          <div className="start-step">
            <span>02</span>
            <h4>Receba seu plano 360°</h4>
            <p>A estratégia sob medida para a sua marca.</p>
          </div>
          <div className="start-step">
            <span>03</span>
            <h4>Comece a transformação</h4>
            <p>Execução e acompanhamento com o nosso time.</p>
          </div>
        </div>
        <div className="academy-start-actions">
          <a className="cta" href="/conference#ingressos">
            Garantir ingresso · Conference
          </a>
          <a className="cta outline" href={wa} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
