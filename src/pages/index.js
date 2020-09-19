import Head from "next/head";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Recent from "../components/Recent";
import styles from "../styles/Home.module.css";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Carlos Henrique Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className="content">
          <div id="home">
            <Presentation />
          </div>

          <div id="projects">
            <Recent title="Ola mundo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
