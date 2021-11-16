import React from "react";
import Head from "next/head";
import Header from "./Header";

const defaultMetaInfo = {
	description: 'Welcome to my portifólio.\nHere you can see my latest projects and get in touch with me',
	websiteUrl: 'https://carloshenrique.dev/',
	name: 'Carlos Henrique DEV',
	logoUrl: 'https://drive.google.com/file/d/13aTRUoC_drU8H_KnBsGdg9tOxfpmQLV_/view?usp=sharing',
	tags: 'Carlos, Henrique, Carlos Henrique, Carlos Henrique Programação, Carlos Henrique ReactJS, ReactJS, NextJS, Portifólio, Portifólio Carlos Henrique, Amambai, MS, Carlos Henrique Machado dos Santos Amambai MS'
}

function BaseLayout({ children }) {
	return (
		<div className="base-container">
			<Head>
				<title>Carlos Henrique DEV</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
				<link rel="icon" href="/icons/favicon.ico" />
				<link rel="manifest" href="/site.webmanifest" />

				<meta name="title" content={defaultMetaInfo.name} />
				<meta name="description" content={defaultMetaInfo.description} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={defaultMetaInfo.websiteUrl} />
				<meta property="og:title" content={defaultMetaInfo.name} />
				<meta property="og:description" content={defaultMetaInfo.description} />
				<meta property="og:image" content={defaultMetaInfo.logoUrl} />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={defaultMetaInfo.websiteUrl} />
				<meta property="twitter:title" content={defaultMetaInfo.name} />
				<meta property="twitter:description" content={defaultMetaInfo.description} />
				<meta property="twitter:image" content={defaultMetaInfo.logoUrl} />
				<meta name="keywords" content={defaultMetaInfo.tags} />

				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="Portuguese" />
				<meta name="revisit-after" content="30 days" />
				<meta name="author" content="Carlos Henrique " />
			</Head>

			<main className="content-container">
				<Header />
				{children}
			</main>

			<footer>
				<span>Made with <span className="heart">&#10084;</span> by Me</span>
				<span>Built with Next Js</span>
				<span>Copyright © 2021 - Carlos Henrique</span>
			</footer>
		</div>
	);
}

export default BaseLayout;
