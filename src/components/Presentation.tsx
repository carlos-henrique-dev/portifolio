import React from "react";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="greetings">
        <h1>
          Olá,me chamo
          <span>Carlos Henrique</span>
        </h1>
        <h2>e sou desenvolvedor Web</h2>
      </div>

      <div className="history">
        <p>
          Sou desenvolvedor front end há 2 anos. Possuo experiência com HTML5, JS, CSS3 e bibliotecas e frameworks como
          React, Next.js, GraphQl, entre outras.
        </p>
        <p>Também tenho experiência com tecnologias back end como NodeJS, PostgreSQL, GraphQL Server e Express</p>
        <p>Atualmente trabalho em projetos freelancer.</p>
        <p>Abaixo você pode conferir meus projetos mais recentes.</p>
      </div>
    </div>
  );
};

export default Presentation;
