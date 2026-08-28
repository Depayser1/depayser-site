"use client";

import Image from "next/image";
import { useState } from "react";

import { Countdown } from "@/components/Countdown";

type CartItem = {
  id: string;
  name: string;
  price: number; // euros (exibição). Fonte de verdade é o servidor.
  image: string;
  note?: string;
  featured?: boolean;
};

const ITEMS: CartItem[] = [
  { id: "classic", name: "Ingresso Classic", price: 39, image: "/images/ticket-classic.png", note: "Acesso ao ciclo de palestras e networking · 30 vagas" },
  { id: "duo", name: "Ingresso Classic Duo", price: 69, image: "/images/ticket-duo.png", note: "Dois ingressos Classic · 65 vagas" },
  { id: "vip", name: "Ingresso VIP", price: 149, image: "/images/ticket-vip.png", note: "Assento exclusivo, acesso aos palestrantes, brinde e coffee break · 10 vagas", featured: true },
  { id: "vipduo", name: "VIP + Acompanhante", price: 279, image: "/images/ticket-vip-duo.png", note: "Toda a experiência VIP para duas pessoas · 10 vagas", featured: true },
  { id: "kids", name: "Espaço Kids", price: 20, image: "/images/ticket-kids.png", note: "Para crianças que acompanharão os participantes" },
];

export function Cart() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const get = (id: string) => qty[id] || 0;
  const change = (id: string, delta: number) =>
    setQty((q) => ({ ...q, [id]: Math.max(0, Math.min(20, (q[id] || 0) + delta)) }));

  const total = ITEMS.reduce((s, it) => s + get(it.id) * it.price, 0);
  const count = ITEMS.reduce((s, it) => s + get(it.id), 0);

  async function checkout() {
    if (count === 0) {
      setError("Selecione ao menos um ingresso.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const items = ITEMS.filter((it) => get(it.id) > 0).map((it) => ({ id: it.id, qty: get(it.id) }));
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        setError(data?.error || "Não foi possível iniciar o pagamento.");
        setLoading(false);
      }
    } catch {
      setError("Erro de conexão. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <section className="section ticket-section" id="ingressos">
      <div className="container">
        <div className="ticket-section-heading">
          <div className="eyebrow">Ingressos</div>
          <h2 className="section-title">Monte a sua experiência</h2>
          <div className="divider-losango" aria-hidden="true"><span /></div>
          <p className="lead">
            Escolha a quantidade de cada ingresso — e leve as crianças no Espaço Kids.
            Você paga tudo de uma vez, com segurança.
          </p>
          <Countdown className="ticket-countdown" />
        </div>

        <div className="cart">
          <div className="cart-items">
            {ITEMS.map((it) => (
              <article className={`cart-row${it.featured ? " is-featured" : ""}`} key={it.id}>
                <div className="cart-thumb">
                  <Image src={it.image} alt={it.name} fill sizes="88px" />
                </div>
                <div className="cart-info">
                  <h3>{it.name}</h3>
                  {it.note && <p>{it.note}</p>}
                  <span className="cart-price">{it.price}€</span>
                </div>
                <div className="cart-stepper" aria-label={`Quantidade de ${it.name}`}>
                  <button type="button" onClick={() => change(it.id, -1)} aria-label="Diminuir" disabled={get(it.id) === 0}>−</button>
                  <span>{get(it.id)}</span>
                  <button type="button" onClick={() => change(it.id, 1)} aria-label="Aumentar">+</button>
                </div>
              </article>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <span>Total</span>
              <strong>{total}€</strong>
            </div>
            {error && <p className="cart-error" role="alert">{error}</p>}
            <button className="cart-checkout" onClick={checkout} disabled={loading || count === 0}>
              {loading ? "Redirecionando…" : "Finalizar compra"}
            </button>
            <p className="cart-secure">Pagamento seguro via Stripe · cartão e outros métodos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
