export const siteConfig = {
  brand: "Dépayser",
  eventName: "Dépayser Conference Paris 2026",
  domain: "https://depayseracademy.com",
  instagram: "https://instagram.com/depayser.academy",
  instagramLabel: "@depayser.academy",
  email: "suporte@depayseracademy.com",
  whatsappRaw: "330784864245",
  whatsappDisplay: "+33 07 84 86 42 45",
  dateLabel: "18 de outubro de 2026",
  // Data/hora de início do evento (Paris, UTC+2 no horário de verão) — usada pelo contador regressivo
  eventDateISO: "2026-10-18T10:00:00+02:00",
  timeLabel: "10h às 18h",
  venue: "HI Hostel Paris Yves Robert",
  address: "20 Espl. Nathalie Sarraute, 75018 Paris",
  language: "português",
  ticketLinks: {
    classic: "https://buy.stripe.com/aFa00b6nB2AN0DseSecwg0i",
    duo: "https://buy.stripe.com/7sY00b9zNfnz71Q4dAcwg0h",
    vip: "https://buy.stripe.com/28E4gr8vJ3ERcmah0mcwg0g",
    vipDuo: "https://buy.stripe.com/28E28jaDR8Zbfym7pMcwg0k",
  },
  pageParis: "https://pageparis.myshopify.com/",
} as const;

export type Ticket = {
  name: string;
  price: string;
  seats: string;
  image: string;
  href: string;
  cta: string;
  featured?: boolean;
};

// Ingressos exibidos no site (Patrocínio NÃO entra no site — decisão do Ricardo).
// As imagens já trazem preço e benefícios embutidos na arte.
export const tickets: Ticket[] = [
  {
    name: "Classic",
    price: "39€",
    seats: "30 vagas",
    image: "/images/ticket-classic.png",
    href: siteConfig.ticketLinks.classic,
    cta: "Garanta a minha vaga",
  },
  {
    name: "Classic Duo",
    price: "69€",
    seats: "65 vagas",
    image: "/images/ticket-duo.png",
    href: siteConfig.ticketLinks.duo,
    cta: "Garanta a nossa vaga",
  },
  {
    name: "VIP",
    price: "149€",
    seats: "10 vagas",
    image: "/images/ticket-vip.png",
    href: siteConfig.ticketLinks.vip,
    cta: "Quero ser VIP",
    featured: true,
  },
  {
    name: "VIP + Acompanhante",
    price: "279€",
    seats: "10 vagas",
    // TODO: substituir por ticket-vip-duo.png (arte 279€). Placeholder atual = arte do VIP 149€.
    image: "/images/ticket-vip-duo.png",
    href: siteConfig.ticketLinks.vipDuo,
    cta: "Queremos ser VIP",
    featured: true,
  },
];
