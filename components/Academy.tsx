"use client";

import Image from "next/image";

import { useT } from "@/components/LanguageProvider";
import { siteConfig } from "@/data/site";

const wa = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
  "Olá! Quero saber mais sobre a Dépayser Academy."
)}`;

/* ---------------- HERO ---------------- */
export function AcademyHero() {
  const t = useT();
  return (
    <section className="academy-hero" id="inicio">
      <div className="container academy-hero-grid">
        <div className="academy-hero-copy">
          <div className="eyebrow">{t.hero.eyebrow}</div>
          <h1>
            {t.hero.titleA}
            <span className="gold">{t.hero.titleGold}</span>
            {t.hero.titleB}
          </h1>
          <p className="lead">{t.hero.lead}</p>
          <div className="academy-hero-actions">
            <a className="cta" href="/conference#ingressos">
              {t.common.garantirConference}
            </a>
            <a className="cta outline" href="#metodo">
              {t.common.conhecerAcademy}
            </a>
          </div>
          <div className="academy-hero-meta">
            <span>
              {t.hero.metaPre}
              <strong>{t.hero.metaDate}</strong>
              {t.hero.metaSuf}
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
  const t = useT();
  return (
    <section className="section academy-concept" id="conceito">
      <div className="container">
        <div className="eyebrow">{t.concept.eyebrow}</div>
        <h2>
          {t.concept.titleA}
          <br /> {t.concept.titleB}
        </h2>
        <p className="lead">
          {t.concept.leadA}
          <em>{t.concept.leadEm}</em>
          {t.concept.leadB}
        </p>
        <div className="academy-etimo">
          {t.concept.etimo.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>
        <p className="academy-quote">&ldquo;{t.concept.quote}&rdquo;</p>
      </div>
    </section>
  );
}

/* ---------------- QUEM SOMOS ---------------- */
export function AcademyWho() {
  const t = useT();
  return (
    <section className="section academy-who" id="academy">
      <div className="container academy-who-single">
        <div className="academy-who-copy">
          <div className="eyebrow">{t.who.eyebrow}</div>
          <h2 className="section-title">{t.who.title}</h2>
          <p className="lead">{t.who.lead1}</p>
          <p className="lead">{t.who.lead2}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROVA SOCIAL ---------------- */
export function AcademyProof() {
  const t = useT();
  return (
    <section className="section academy-proof">
      <div className="container">
        <h2>
          {t.proof.a}
          <b>{t.proof.bold}</b>
          {t.proof.b}
        </h2>
        <div className="academy-countries">{t.proof.countries}</div>
      </div>
    </section>
  );
}

/* ---------------- ORGANIZAÇÃO ---------------- */
export function AcademyOrg() {
  const t = useT();
  return (
    <section className="section academy-org" id="organizacao">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">{t.org.eyebrow}</div>
          <h2 className="section-title">{t.org.title}</h2>
        </div>
        <div className="academy-org-grid">
          <div className="org-card is-event">
            <span className="org-kicker">{t.org.confKicker}</span>
            <h3>{t.org.confTitle}</h3>
            <p>{t.org.confDesc}</p>
            <a className="cta" href="/conference">
              {t.org.confCta}
            </a>
          </div>
          <div className="org-card">
            <span className="org-kicker">{t.org.acadKicker}</span>
            <h3>{t.org.acadTitle}</h3>
            <p>{t.org.acadDesc}</p>
            <a className="cta outline" href="#metodo">
              {t.org.acadCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MÉTODO 360 ---------------- */
export function AcademyMethod() {
  const t = useT();
  return (
    <section className="section academy-method" id="metodo">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">{t.method.eyebrow}</div>
          <h2 className="section-title">{t.method.title}</h2>
          <p className="lead">{t.method.lead}</p>
        </div>
        <div className="method-grid">
          {t.method.steps.map((s) => (
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
export function AcademyLeadership() {
  const t = useT();
  const leaders = [
    { name: "Watson Sartor", role: t.leaders.roles.watson, img: "/images/lider-watson.png", items: t.leaders.watson },
    { name: "Tiago Allaion", role: t.leaders.roles.tiago, img: "/images/lider-tiago.png", items: t.leaders.tiago },
    { name: "Ricardo Carvalho", role: t.leaders.roles.ricardo, img: "/images/lider-ricardo.png", items: t.leaders.ricardo },
  ];
  return (
    <section className="section speakers-dark academy-leaders" id="lideranca">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">{t.leaders.eyebrow}</div>
          <h2 className="section-title">{t.leaders.title}</h2>
        </div>
        <div className="leaders-grid">
          {leaders.map((l) => (
            <article className="leader-card" key={l.name}>
              <div className="leader-photo">
                <Image src={l.img} alt={l.name} fill sizes="(max-width: 900px) 100vw, 30vw" />
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
  const t = useT();
  return (
    <section className="section academy-partners">
      <div className="container">
        <div className="eyebrow">{t.partners.eyebrow}</div>
        <h2 className="section-title">{t.partners.title}</h2>
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
  const t = useT();
  return (
    <section className="section academy-start" id="comecar">
      <div className="container">
        <div className="eyebrow">{t.start.eyebrow}</div>
        <h2>{t.start.title}</h2>
        <div className="start-steps">
          {t.start.steps.map((s) => (
            <div className="start-step" key={s.n}>
              <span>{s.n}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="academy-start-actions">
          <a className="cta" href="/conference#ingressos">
            {t.common.garantirConference}
          </a>
          <a className="cta outline" href={wa} target="_blank" rel="noreferrer">
            {t.common.falarWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
