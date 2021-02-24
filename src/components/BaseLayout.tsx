import React from "react";
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

function BaseLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Carlos Henrique DEV</title>
        <link rel="icon" href="/logo.png" />
        <meta name="title" content="Carlos Henrique DEV" />
        <meta
          name="description"
          content="Welcome to my portifólio.Here you can see my latest projects and get in touch with me"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carloshenrique.dev/" />
        <meta property="og:title" content="Carlos Henrique DEV" />
        <meta
          property="og:description"
          content="Welcome to my portifólio.Here you can see my latest projects and get in touch with me"
        />
        <meta
          property="og:image"
          content="https://drive.google.com/file/d/1oQw0KUtcfQDHnP70c7S7vu1hks1C_VPo/view?usp=sharing"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://carloshenrique.dev/" />
        <meta property="twitter:title" content="Carlos Henrique DEV" />
        <meta
          property="twitter:description"
          content="Welcome to my portifólio.Here you can see my latest projects and get in touch with me"
        />
        <meta
          property="twitter:image"
          content="https://drive.google.com/file/d/1oQw0KUtcfQDHnP70c7S7vu1hks1C_VPo/view?usp=sharing"
        />
        <meta
          name="keywords"
          content="Carlos, Henrique, Carlos Henrique, Carlos Henrique Programação, Carlos Henrique ReactJS, ReactJS, NextJS, Portifólio, Portifólio Carlos Henrique, Amambai, MS, Carlos Henrique Machado dos Santos Amambai MS, "
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Portuguese" />
        <meta name="revisit-after" content="30 days" />
        <meta name="author" content="Carlos Henrique " />
      </Head>
      {children}

      <footer>
        <img src="/icone.png" width="150" />
        <AiFillLinkedin />
        <AiFillGithub />
        <AiFillMail />
      </footer>
    </div>
  );
}

export default BaseLayout;
