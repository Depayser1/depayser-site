import Image from "next/image";

type Speaker = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  objectPosition?: string;
};

const speakers: Speaker[] = [
  {
    name: "Giovanni Begossi",
    role: "Comunicação & Oratória",
    photo: "/images/giovanni-speaker.jpg",
    bio: "O “Professor da Oratória”. Advogado, escritor e bicampeão brasileiro de oratória, hoje é uma das principais referências em comunicação estratégica — com passagem por TEDx e treinamentos de líderes, empreendedores e instituições. Transforma potencial comunicativo em influência e autoconfiança.",
  },
  {
    name: "Amanda Girotto",
    role: "Comportamento & Posicionamento",
    photo: "/images/amanda-speaker.jpg",
    bio: "Criadora de conteúdo apaixonada pelo comportamento humano. Transforma percepção em posicionamento, ajudando pessoas a se comunicarem com mais presença, clareza e autenticidade.",
  },
  {
    name: "Watson Sartor",
    role: "Fundador · Mestre de cerimônias",
    photo: "/images/watson-speaker.jpg",
    bio: "Fundador e mestre de cerimônias da Dépayser. Coach de comunicação e oratória baseado em Paris, une técnica e sensibilidade — herança de sua trajetória nas artes do movimento — para desenvolver voz, presença e protagonismo.",
    objectPosition: "center 20%",
  },
  {
    name: "Ricardo Carvalho",
    role: "Superação & Recomeço",
    photo: "/images/ricardo.png",
    bio: "Do Exército Brasileiro à Legião Estrangeira Francesa, do mundo corporativo à cozinha e ao empreendedorismo na Europa. Hoje à frente da Seeds Marketing Digital, compartilha uma trajetória real de superação, recomeço e resiliência.",
    objectPosition: "center top",
  },
];

export function Speakers() {
  return (
    <section className="section speakers-dark" id="palestrantes">
      <div className="container">
        <div className="speakers-heading">
          <div className="eyebrow">Palestrantes</div>
          <h2 className="section-title">Ideias, histórias reais e pessoas em movimento</h2>
          <div className="divider-losango" aria-hidden="true"><span /></div>
          <p className="lead">
            Trajetórias diferentes, uma mesma direção: mostrar que é possível viver à altura
            do próprio potencial. Conheça quem sobe ao palco da Dépayser Conference.
          </p>
        </div>

        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <article className="speaker-card" key={speaker.name}>
              <div className="speaker-photo">
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  style={speaker.objectPosition ? { objectPosition: speaker.objectPosition } : undefined}
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
    </section>
  );
}
