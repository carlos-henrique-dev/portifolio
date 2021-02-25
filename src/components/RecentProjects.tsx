import React from "react";

const Recent = () => {
  return (
    <div className="recent-projects" id="#recent-projects">
      <hr />

      <div className="title">
        <h1>Projetos recentes</h1>
      </div>

      <div className="projects-list">
        <a href="https://www.aca-amambai.com/">
          {/* <a href="/projects/aca-project"> */}
          <img src="/projeto-aca.jpg" width="880" height="440" />
        </a>
      </div>
    </div>
  );
};

export default Recent;
