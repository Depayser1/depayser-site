"use client";

import { useT } from "@/components/LanguageProvider";

export function Schedule() {
  const t = useT();
  return (
    <section className="section light" id="programacao">
      <div className="container">
        <div className="eyebrow">{t.conf.schedule.eyebrow}</div>
        <h2 className="section-title">{t.conf.schedule.title}</h2>
        <div className="schedule-grid">
          {t.conf.schedule.items.map((item) => (
            <article className="schedule-card" key={item.time}>
              <div className="eyebrow">{item.time}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
