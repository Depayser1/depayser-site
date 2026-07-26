"use client";

import { useState } from "react";

import { siteConfig } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

// Configure este endpoint (Formspree, Getform, Brevo, ou uma rota /api própria)
// definindo NEXT_PUBLIC_WAITLIST_ENDPOINT no .env.local.
// Se ficar vazio, o formulário usa um fallback que abre o e-mail da equipe
// já preenchido — assim nenhum lead é perdido enquanto a ferramenta não é escolhida.
const ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? "";

export function AcademyWaitlist() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    // Sem endpoint configurado: fallback por e-mail (não perde o lead).
    if (!ENDPOINT) {
      const subject = encodeURIComponent("Lista de espera — Dépayser Academy");
      const body = encodeURIComponent(
        `Nome: ${name}\nE-mail: ${email}\nPerfil: ${profile || "não informado"}`
      );
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
          <div className="eyebrow">Dépayser Academy</div>
          <h2 className="section-title">O próximo passo depois da conferência</h2>
          <p className="lead">
            A Conference acende o movimento; a Academy sustenta a transformação o ano
            todo — com formações, mentorias e comunidade. Entre para a lista de espera e
            seja o primeiro a saber quando as inscrições abrirem.
          </p>
        </div>

        {status === "success" ? (
          <div className="academy-success" role="status">
            <div className="academy-success-mark" aria-hidden="true">✓</div>
            <h3>Você está na lista.</h3>
            <p>
              Obrigado. Assim que a Dépayser Academy abrir, você será um dos primeiros a
              receber o convite.
            </p>
          </div>
        ) : (
          <form className="academy-form" onSubmit={handleSubmit} noValidate>
            <div className="academy-field">
              <label htmlFor="wl-name">Nome</label>
              <input
                id="wl-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
              />
            </div>
            <div className="academy-field">
              <label htmlFor="wl-email">E-mail</label>
              <input
                id="wl-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@email.com"
              />
            </div>
            <div className="academy-field">
              <label htmlFor="wl-profile">Você é</label>
              <select
                id="wl-profile"
                name="profile"
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
              >
                <option value="">Selecione (opcional)</option>
                <option value="empresario">Empresário(a)</option>
                <option value="criador">Criador(a) de conteúdo</option>
                <option value="profissional">Profissional</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <button className="cta academy-submit" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Enviando..." : "Entrar na lista de espera"}
            </button>
            {status === "error" && (
              <p className="academy-error" role="alert">
                Não foi possível enviar agora. Tente novamente em instantes ou fale com a
                gente no WhatsApp.
              </p>
            )}
            <p className="academy-privacy">Sem spam. Só novidades da Academy — você sai quando quiser.</p>
          </form>
        )}
      </div>
    </section>
  );
}
