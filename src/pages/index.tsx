import React from "react";
import BaseLayout from "../components/BaseLayout";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import RecentProjects from "../components/RecentProjects";

const Index = () => {
  return (
    <BaseLayout>
      <Header />
      <div id="home">
        <Presentation />
      </div>

      <div id="projects">
        <RecentProjects title="Ola mundo" />
      </div>

      <div className="cv-button">
        <a href="/curriculo_carlos_henrique.pdf" target="_blank">
          Baixar currículo
        </a>
      </div>
    </BaseLayout>
  );
};

export default Index;
