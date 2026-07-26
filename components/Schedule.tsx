const schedule = [
  { time: "10h–14h", title: "Ciclo de palestras", text: "Histórias, estratégias e aprendizados sobre comunicação, mentalidade, carreira e empreendedorismo." },
  { time: "14h–15h", title: "Coffee break e networking", text: "Um ambiente acolhedor para criar conexões, compartilhar experiências e ampliar sua rede." },
  { time: "15h–18h", title: "Ciclo final de palestras", text: "Conteúdos de maior profundidade, apresentação da próxima turma da mentoria e encerramento." },
];

export function Schedule() {
  return (
    <section className="section light" id="programacao">
      <div className="container">
        <div className="eyebrow">Programação</div>
        <h2 className="section-title">Um dia para transformar visão em movimento</h2>
        <div className="schedule-grid">
          {schedule.map((item) => (
            <article className="schedule-card" key={item.time}>
              <div className="eyebrow">{item.time}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
