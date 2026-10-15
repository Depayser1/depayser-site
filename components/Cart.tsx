"use client";

import Image from "next/image";

import { Countdown } from "@/components/Countdown";
import { useT } from "@/components/LanguageProvider";

type Ticket = {
  id: "classic" | "duo" | "vip" | "vipduo" | "kids";
  price: number;
  image: string;
  url: string; // página de pagamento SumUp
  featured?: boolean;
};

const TICKETS: Ticket[] = [
  { id: "classic", price: 39, image: "/images/ticket-classic.png", url: "https://pay.sumup.com/b2c/QTIE9FVF" },
  { id: "duo", price: 69, image: "/images/ticket-duo.png", url: "https://pay.sumup.com/b2c/QQYORM6E" },
  { id: "vip", price: 149, image: "/images/ticket-vip.png", url: "https://pay.sumup.com/b2c/QL2454SX", featured: true },
  { id: "vipduo", price: 279, image: "/images/ticket-vip-duo.png", url: "https://pay.sumup.com/b2c/QDYJXGDU", featured: true },
  { id: "kids", price: 20, image: "/images/ticket-kids.png", url: "https://pay.sumup.com/b2c/QIBBO7QM" },
];

export function Cart() {
  const t = useT();
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

        <div className="cart-items cart-items-grid">
          {TICKETS.map((it) => {
            const info = t.conf.cart.items[it.id];
            return (
              <article className={`cart-row${it.featured ? " is-featured" : ""}`} key={it.id}>
                <div className="cart-thumb">
                  <Image src={it.image} alt={info.name} fill sizes="88px" />
                </div>
                <div className="cart-info">
                  <h3>{info.name}</h3>
                  {info.note && <p>{info.note}</p>}
                  <span className="cart-scarcity">{t.conf.cart.scarcity}</span>
                  <span className="cart-price">{it.price}€</span>
                </div>
                <a className="cta cart-buy" href={it.url} target="_blank" rel="noreferrer">
                  {t.conf.cart.buy}
                </a>
              </article>
            );
          })}
        </div>

        <p className="cart-secure cart-secure-center">{t.conf.cart.secure}</p>
      </div>
    </section>
  );
}
