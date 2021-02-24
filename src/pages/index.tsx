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
    </BaseLayout>
  );
};

export default Index;
