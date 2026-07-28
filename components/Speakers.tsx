"use client";

import Image from "next/image";
import { useRef } from "react";

type Speaker = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  objectPosition?: string;
};

const speakers: Speaker[] = [
  {
    name: "Watson Sartor",
    role: "Fundador · Mestre de cerimônias",
    photo: "/images/watson-speaker.jpg",
    bio: "Fundador e mestre de cerimônias da Dépayser. Coach de comunicação e oratória baseado em Paris, une técnica e sensibilidade — herança de sua trajetória nas artes do movimento — para desenvolver voz, presença e protagonismo.",
    objectPosition: "center 20%",
  },
  {
    name: "Giovanni Begossi",
    role: "Comunicação & Oratória",
    photo: "/images/giovanni-speaker.jpg",
    bio: "Mais conhecido como “El Professor da Oratória”, é bicampeão brasileiro de oratória, autor dos best-sellers “Como Falar Bem e Ficar Rico” e “Como Fazer Amigos e Influenciar Pessoas — Versão Comentada”, e criador do maior perfil de oratória da América Latina, com mais de 5 milhões de seguidores. Já treinou de famosos e multinacionais à SWAT de São Paulo (GATE), ao BOPE e ao Exército Brasileiro (EsAO).",
  },
  {
    name: "Amanda Girotto",
    role: "Comportamento & Posicionamento",
    photo: "/images/amanda-speaker.jpg",
    bio: "Cirurgiã-dentista, Miss e referência nacional em comportamento humano e posicionamento estratégico. Com mais de 1 milhão de seguidores e dezenas de milhões de visualizações mensais, construiu autoridade falando o que as pessoas sentem mas não têm coragem de dizer — sobre relacionamentos, valor próprio e dinâmicas humanas. Palestrante e mentora, ajuda homens e mulheres a se posicionarem com inteligência e presença.",
  },
  {
    name: "Mikaela Gomes",
    role: "Negócios Digitais & Vendas",
    photo: "/images/mikaela.png",
    bio: "Empresária, palestrante e mentora de negócios digitais, reconhecida por ensinar vendas e posicionamento para mulheres empreendedoras. Criadora do Método Mulher Milionária, já impactou milhares de alunas em dezenas de países, com foco em crescimento pelo marketing orgânico. Mãe da Melina, mostra na prática como conciliar maternidade e empreendedorismo — inspirando mulheres a construir negócios lucrativos sem abrir mão da vida pessoal.",
  },
  {
    name: "Bruno Rissi",
    role: "Marketing & Funis de Vendas",
    photo: "/images/bruno.png",
    bio: "Estrategista de marketing digital e especialista em funis de vendas, reconhecido por métodos que ajudam empreendedores a escalar resultados com aquisição e conversão. Especialista em funis low ticket, ensina a estruturar processos de vendas previsíveis e altamente lucrativos. Tornou-se referência em performance, posicionamento e expansão de negócios no mercado digital.",
  },
  {
    name: "Juliana Coelho",
    role: "Liderança & Indústria",
    photo: "/images/juliana.png",
    bio: "Engenheira química e executiva da Stellantis, é uma das principais referências femininas da indústria automotiva global. Começou no setor de petróleo e migrou para o automotivo, integrando a equipe que implantou a fábrica da Jeep em Pernambuco. Da área técnica à gestão industrial, tornou-se a primeira mulher a comandar uma fábrica da Stellantis na América Latina e assumiu uma liderança global no grupo. Eleita uma das Mulheres de Sucesso da Forbes, é referência em inovação, gestão industrial e liderança feminina.",
  },
  {
    name: "Ricardo Carvalho",
    role: "Superação & Recomeço",
    photo: "/images/ricardo.png",
    bio: "Uma vida feita de recomeços: do Exército Brasileiro à Legião Estrangeira Francesa, da Petrobras às cozinhas da França, até se reinventar como empresário na Europa à frente da Seeds Marketing Digital. Fala com autoridade sobre superação, coragem e resiliência — para quem decidiu construir uma nova vida longe de casa.",
    objectPosition: "center 8%",
  },
];

export function Speakers() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(".speaker-slide");
    const amount = slide ? slide.offsetWidth + 20 : el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="section speakers-dark" id="palestrantes">
      <div className="container">
        <div className="speakers-heading">
          <div className="eyebrow">Palestrantes</div>
          <h2 className="section-title">Ideias, histórias reais e pessoas em movimento</h2>
          <div className="divider-losango" aria-hidden="true"><span /></div>
          <p className="lead">
            Trajetórias diferentes, uma mesma direção: mostrar que é possível viver à altura
            do próprio potencial. Deslize para conhecer quem sobe ao palco.
          </p>
        </div>

        <div className="speakers-gallery">
          <button
            type="button"
            className="gallery-arrow prev"
            aria-label="Anterior"
            onClick={() => scroll(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="gallery-arrow next"
            aria-label="Próximo"
            onClick={() => scroll(1)}
          >
            ›
          </button>

          <div className="speakers-track" ref={trackRef}>
            {speakers.map((speaker) => (
              <article className="speaker-slide" key={speaker.name}>
                <div className="speaker-photo">
                  <Image
                    src={speaker.photo}
                    alt={speaker.name}
                    fill
                    sizes="(max-width: 760px) 100vw, 320px"
                    style={
                      speaker.objectPosition
                        ? { objectPosition: speaker.objectPosition }
                        : undefined
                    }
                  />
                </div>
                <div className="speaker-info">
                  <div className="eyebrow">{speaker.role}</div>
                  <h3>{speaker.name}</h3>
                  <p>{speaker.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
