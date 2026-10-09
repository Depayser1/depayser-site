"use client";

import Image from "next/image";
import { useState } from "react";

import { Countdown } from "@/components/Countdown";
import { useT } from "@/components/LanguageProvider";

type CartBase = {
  id: "classic" | "duo" | "vip" | "vipduo" | "kids";
  price: number; // euros (exibição). Fonte de verdade é o servidor.
  image: string;
  featured?: boolean;
};

const BASE: CartBase[] = [
  { id: "classic", price: 39, image: "/images/ticket-classic.png" },
  { id: "duo", price: 69, image: "/images/ticket-duo.png" },
  { id: "vip", price: 149, image: "/images/ticket-vip.png", featured: true },
  { id: "vipduo", price: 279, image: "/images/ticket-vip-duo.png", featured: true },
  { id: "kids", price: 20, image: "/images/ticket-kids.png" },
];

export function Cart() {
  const t = useT();
  const [qty, setQty] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const get = (id: string) => qty[id] || 0;
  const change = (id: string, delta: number) =>
    setQty((q) => ({ ...q, [id]: Math.max(0, Math.min(20, (q[id] || 0) + delta)) }));

  const total = BASE.reduce((s, it) => s + get(it.id) * it.price, 0);
  const count = BASE.reduce((s, it) => s + get(it.id), 0);

  async function checkout() {
    if (count === 0) {
      setError(t.conf.cart.errSelect);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const items = BASE.filter((it) => get(it.id) > 0).map((it) => ({ id: it.id, qty: get(it.id) }));
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        setError(data?.error || t.conf.cart.errStart);
        setLoading(false);
      }
    } catch {
      setError(t.conf.cart.errConn);
      setLoading(false);
    }
  }

  return (
    <section className="section ticket-section" id="ingressos">
      <div className="container">
        <div className="ticket-section-heading">
          <div className="eyebrow">{t.conf.cart.eyebrow}</div>
          <h2 className="section-title">{t.conf.cart.title}</h2>
          <div className="divider-losango" aria-hidden="true">
            <span />
          </div>
          <p className="lead">{t.conf.cart.lead}</p>
          <Countdown className="ticket-countdown" />
        </div>

        <div className="cart">
          <div className="cart-items">
            {BASE.map((it) => {
              const info = t.conf.cart.items[it.id];
              return (
                <article className={`cart-row${it.featured ? " is-featured" : ""}`} key={it.id}>
                  <div className="cart-thumb">
                    <Image src={it.image} alt={info.name} fill sizes="88px" />
                  </div>
                  <div className="cart-info">
                    <h3>{info.name}</h3>
                    {info.note && <p>{info.note}</p>}
                    <span className="cart-price">{it.price}€</span>
                  </div>
                  <div className="cart-stepper" aria-label={info.name}>
                    <button type="button" onClick={() => change(it.id, -1)} aria-label="−" disabled={get(it.id) === 0}>
                      −
                    </button>
                    <span>{get(it.id)}</span>
                    <button type="button" onClick={() => change(it.id, 1)} aria-label="+">
                      +
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <span>{t.conf.cart.total}</span>
              <strong>{total}€</strong>
            </div>
            {error && (
              <p className="cart-error" role="alert">
                {error}
              </p>
            )}
            <button className="cart-checkout" onClick={checkout} disabled={loading || count === 0}>
              {loading ? t.conf.cart.redirecting : t.conf.cart.checkout}
            </button>
            <p className="cart-secure">{t.conf.cart.secure}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
