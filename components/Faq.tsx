import { siteConfig } from "@/data/site";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqItems: FaqItem[] = [
  {
    question: "Em que idioma acontece o evento?",
    answer: (
      <p>
        Todo o evento é em português. Foi pensado para brasileiros e lusófonos que
        vivem na Europa — você vai se sentir em casa do início ao fim.
      </p>
    ),
  },
  {
    question: "Preciso morar em Paris para participar?",
    answer: (
      <p>
        Não. O Dépayser reúne pessoas da comunidade lusófona de toda a Europa. Muitos
        participantes viajam de outras cidades e países para viver o encontro em Paris.
      </p>
    ),
  },
  {
    question: "Qual a diferença entre os ingressos?",
    answer: (
      <>
        <p>
          <strong>Classic (39€):</strong> acesso ao ciclo de palestras e ao momento de
          networking, das 10h às 18h.
        </p>
        <p>
          <strong>Classic Duo (69€):</strong> dois ingressos Classic para você vir com
          quem faz parte da sua jornada — com economia em relação a dois avulsos.
        </p>
        <p>
          <strong>VIP (149€):</strong> assento exclusivo, acesso aos palestrantes,
          brinde exclusivo, coffee break e acesso completo ao evento.
        </p>
        <p>
          <strong>VIP + Acompanhante (279€):</strong> toda a experiência VIP para duas
          pessoas.
        </p>
      </>
    ),
  },
  {
    question: "Como funciona o ingresso com acompanhante?",
    answer: (
      <p>
        Os ingressos Classic Duo e VIP + Acompanhante dão direito a duas pessoas. Você
        faz uma única compra e leva quem quiser viver essa experiência ao seu lado.
      </p>
    ),
  },
  {
    question: "O coffee break está incluído?",
    answer: (
      <p>
        O coffee break é exclusivo dos ingressos VIP (VIP e VIP + Acompanhante). Nesses
        ingressos, é um momento estratégico, pensado para aproximar você dos palestrantes
        e ampliar suas conexões.
      </p>
    ),
  },
  {
    question: "Onde será o evento e como chego lá?",
    answer: (
      <p>
        No {siteConfig.venue} — {siteConfig.address}. É de fácil acesso pelo transporte
        público de Paris. No dia {siteConfig.dateLabel}, das {siteConfig.timeLabel}.{" "}
        <a
          href="https://maps.google.com/?q=20+Espl.+Nathalie+Sarraute+75018+Paris"
          target="_blank"
          rel="noreferrer"
        >
          Abrir a localização no mapa
        </a>
        .
      </p>
    ),
  },
  {
    question: "Como recebo meu ingresso depois da compra?",
    answer: (
      <p>
        O pagamento é processado com segurança pela Stripe. Assim que a compra é
        confirmada, você recebe a confirmação e as instruções de acesso no e-mail
        cadastrado no momento da compra.
      </p>
    ),
  },
  {
    question: "Posso cancelar, ser reembolsado ou transferir meu ingresso?",
    answer: (
      <>
        <p>
          Cancelamento com reembolso até 14 dias antes do evento. A transferência do
          ingresso para outra pessoa é possível apenas mediante confirmação com a
          administração.
        </p>
        <p>
          Após esse prazo, o reembolso ocorre somente em caso de cancelamento do evento.
        </p>
      </>
    ),
  },
  {
    question: "Qual o horário de chegada e credenciamento?",
    answer: (
      <p>
        O credenciamento acontece até as 9h50. O evento começa às 10h em ponto —
        recomendamos chegar com antecedência para aproveitar tudo desde o início.
      </p>
    ),
  },
  {
    question: "Como funciona meu ingresso na entrada?",
    answer: (
      <p>
        Seu ingresso é digital. Na entrada, o seu nome é conferido na lista de presença —
        é só chegar e se identificar.
      </p>
    ),
  },
  {
    question: "Haverá certificado de participação?",
    answer: (
      <p>
        No momento, o evento não emite certificado de participação.
      </p>
    ),
  },
  {
    question: "É a minha primeira vez em um evento assim. Vou me sentir deslocado?",
    answer: (
      <p>
        De jeito nenhum. O Dépayser é construído sobre acolhimento: um ambiente pensado
        para que você se conecte com pessoas que, como você, decidiram crescer. Você
        chega como visitante e sai fazendo parte de uma comunidade.
      </p>
    ),
  },
  {
    question: "Ainda tenho uma dúvida. Como falo com vocês?",
    answer: (
      <p>
        Fale com a nossa equipe pelo WhatsApp{" "}
        <a
          href={`https://wa.me/${siteConfig.whatsappRaw}`}
          target="_blank"
          rel="noreferrer"
        >
          {siteConfig.whatsappDisplay}
        </a>{" "}
        ou pelo e-mail{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Teremos prazer em
        ajudar.
      </p>
    ),
  },
];

export function Faq() {
  return (
    <section className="section light faq-section" id="faq">
      <div className="container">
        <div className="faq-heading">
          <div className="eyebrow">Dúvidas frequentes</div>
          <h2 className="section-title">Tudo o que você precisa saber</h2>
          <div className="divider-losango" aria-hidden="true"><span /></div>
        </div>

        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
