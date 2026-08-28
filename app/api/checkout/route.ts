import { NextResponse } from "next/server";
import Stripe from "stripe";

// Catálogo — FONTE DE VERDADE dos preços (em centavos de euro).
// O servidor recalcula o total; o cliente nunca define o valor.
const CATALOG: Record<string, { name: string; amount: number }> = {
  classic: { name: "Ingresso Classic", amount: 3900 },
  duo: { name: "Ingresso Classic Duo", amount: 6900 },
  vip: { name: "Ingresso VIP", amount: 14900 },
  vipduo: { name: "Ingresso VIP + Acompanhante", amount: 27900 },
  kids: { name: "Espaço Kids", amount: 2000 },
};

type Item = { id: string; qty: number };

export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "Pagamento ainda não configurado. Adicione STRIPE_SECRET_KEY na Vercel." },
      { status: 500 }
    );
  }

  let items: Item[] = [];
  try {
    const body = await req.json();
    items = Array.isArray(body?.items) ? body.items : [];
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const line_items = items
    .filter((it) => CATALOG[it?.id] && Number(it?.qty) > 0)
    .map((it) => ({
      price_data: {
        currency: "eur",
        product_data: { name: CATALOG[it.id].name },
        unit_amount: CATALOG[it.id].amount,
      },
      quantity: Math.min(Math.max(parseInt(String(it.qty)) || 0, 1), 20),
    }));

  if (line_items.length === 0) {
    return NextResponse.json({ error: "Selecione ao menos um ingresso." }, { status: 400 });
  }

  const origin =
    req.headers.get("origin") || "https://www.depayseracademy.com";

  try {
    const stripe = new Stripe(key);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      locale: "pt-BR",
      billing_address_collection: "auto",
      success_url: `${origin}/?compra=sucesso`,
      cancel_url: `${origin}/#ingressos`,
    });
    return NextResponse.json({ url: session.url });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Não foi possível iniciar o pagamento." }, { status: 500 });
  }
}
