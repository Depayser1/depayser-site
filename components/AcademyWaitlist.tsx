"use client";

import { useState } from "react";

import { useT } from "@/components/LanguageProvider";
import { siteConfig } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

// Configure este endpoint (Formspree, Getform, Brevo, ou uma rota /api própria)
// definindo NEXT_PUBLIC_WAITLIST_ENDPOINT no .env.local.
const ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? "";

export function AcademyWaitlist() {
  const t = useT();
  const w = t.conf.waitlist;
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    if (!ENDPOINT) {
      const subject = encodeURIComponent(w.mailSubject);
      const body = encodeURIComponent(`${w.name}: ${name}\n${w.email}: ${email}\n${w.youAre}: ${profile || "-"}`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, profile, source: "site-academy-waitlist" }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section academy-waitlist" id="academy">
      <div className="container academy-inner">
        <div className="academy-copy">
          <div className="eyebrow">{w.eyebrow}</div>
          <h2 className="section-title">{w.title}</h2>
          <p className="lead">{w.lead}</p>
        </div>

        {status === "success" ? (
          <div className="academy-success" role="status">
            <div className="academy-success-mark" aria-hidden="true">
              ✓
            </div>
            <h3>{w.successTitle}</h3>
            <p>{w.successText}</p>
          </div>
        ) : (
          <form className="academy-form" onSubmit={handleSubmit} noValidate>
            <div className="academy-field">
              <label htmlFor="wl-name">{w.name}</label>
              <input
                id="wl-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={w.namePh}
              />
            </div>
            <div className="academy-field">
              <label htmlFor="wl-email">{w.email}</label>
              <input
                id="wl-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={w.emailPh}
              />
            </div>
            <div className="academy-field">
              <label htmlFor="wl-profile">{w.youAre}</label>
              <select id="wl-profile" name="profile" value={profile} onChange={(e) => setProfile(e.target.value)}>
                <option value="">{w.selectOpt}</option>
                <option value="empresario">{w.optEmpresario}</option>
                <option value="criador">{w.optCriador}</option>
                <option value="profissional">{w.optProfissional}</option>
                <option value="outro">{w.optOutro}</option>
              </select>
            </div>
            <button className="cta academy-submit" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? w.sending : w.submit}
            </button>
            {status === "error" && (
              <p className="academy-error" role="alert">
                {w.err}
              </p>
            )}
            <p className="academy-privacy">{w.privacy}</p>
          </form>
        )}
      </div>
    </section>
  );
}
