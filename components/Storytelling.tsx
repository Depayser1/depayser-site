"use client";

import Image from "next/image";

import { useT } from "@/components/LanguageProvider";

export function Storytelling() {
  const t = useT();
  const s = t.conf.story;
  return (
    <>
      <section className="section light story-meaning" id="evento">
        <div className="container story-meaning-grid">
          <div className="story-meaning-copy">
            <div className="eyebrow">{s.meaningEyebrow}</div>
            <h2 className="section-title serif story-meaning-title">
              {s.meaningTitle.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="story-highlight">{s.meaningHighlight}</p>
            <p className="lead">{s.meaningLead1}</p>
            <p className="lead">{s.meaningLead2}</p>
          </div>

          <figure className="story-editorial-image">
            <Image src="/images/story-paris.jpg" alt="Paris" fill sizes="(max-width: 820px) 100vw, 46vw" />
            <figcaption>
              <span>{s.figCaption}</span>
              <strong>{s.figStrong}</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section story-challenge">
        <div className="container">
          <div className="story-challenge-intro">
            <div className="eyebrow">{s.challengeEyebrow}</div>
            <h2 className="section-title">{s.challengeTitle}</h2>
            <p className="lead">{s.challengeLead}</p>
          </div>
          <div className="story-statements">
            {s.challenges.map((challenge, index) => (
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
            <div className="eyebrow">{s.expEyebrow}</div>
            <h2 className="section-title">{s.expTitle}</h2>
            <p className="lead">{s.expLead}</p>
            <a className="cta outline" href="#ingressos">
              {s.expCta}
            </a>
          </div>
          <div className="story-experience-list">
            {s.experiences.map((experience, index) => (
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
