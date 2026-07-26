import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Journey() {
  const contactMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a Dépayser Conference Paris 2026.");
  return (
    <section className="section journey-section">
      <div className="container grid-2">
        <div>
          <div className="eyebrow">Conheça nossos projetos</div>
          <h2 className="section-title">O Dépayser não termina quando a conferência acaba</h2>
          <p className="lead">A Conferência Dépayser é apenas o primeiro passo de uma comunidade criada para quem deseja continuar evoluindo. Após o evento, você poderá fazer parte dos nossos projetos de desenvolvimento, ampliar sua rede de contatos e continuar aprendendo por meio da Comunidade Dépayser e da Livraria Page.Paris, com conteúdos, recomendações e oportunidades pensadas para brasileiros e lusófonos que vivem na Europa. Porque acreditamos que grandes transformações acontecem com conhecimento, conexões e coragem.</p>
          <div className="hero-actions">
            <a className="cta" href="#academy">Entrar na lista de espera</a>
            <a className="cta outline" href={siteConfig.pageParis} target="_blank" rel="noreferrer">Visitar Page Paris</a>
            <a className="cta outline" href={`https://wa.me/${siteConfig.whatsappRaw}?text=${contactMessage}`} target="_blank" rel="noreferrer">Entrar na comunidade</a>
          </div>
        </div>
        <div className="image-card journey-watson-image">
          <Image src="/images/watson-speaker.jpg" alt="Watson Sartor, fundador da Dépayser" fill sizes="(max-width: 920px) 100vw, 460px" />
        </div>
      </div>
    </section>
  );
}
