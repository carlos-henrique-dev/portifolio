
const Presentation = () => {
  return (
    <div className="presentation_container">
      <div className="greetings">
        <div>
          <h2>Olá, sou o</h2>
          <h1>Carlos Henrique</h1>
          <h2>Tudo bom?</h2>
        </div>
        <img src="/profile.png" alt="eu" />
      </div>
      <div className="description">
        <span>
          Sou desenvolvedor front-end júnior, tenho estudado e desenvolvido
          alguns projetos de estudos nos ultimos 2 anos. Tenho experiência com
          JavaScript, NodeJS, HTML, CSS e algumas bicliotecas como ExpressJS,
          React, e Next.js. <br />
          <br />
          Confira abaixo alguns projetos de estudo que desenvolvi e, caso goste,
          não deixe de entrar em contato. :)
        </span>
      </div>
    </div>
  );
};

export default Presentation;
