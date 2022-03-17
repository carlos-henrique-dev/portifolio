import React from "react";
import { useTranslation } from "next-i18next";

import BaseLayout from "../../components/BaseLayout";
import Card from "../../components/Card";

function ProjectTemplate() {
	const { t } = useTranslation(['common', 'header']);

	const data = {
		name: 'Website ACA',
		img: '/images/aca/home_large.png',
		projectUrl: 'https://www.aca-amambai.com/',
		type: 'real',
		route: 'https://www.aca-amambai.com/',
	}

	return (
		<BaseLayout>
			<section>
				<h1>Project Name</h1>
				<Card data={data} t={t} hasOverlay={false} large isExternalLink />
			</section>
		</BaseLayout>
	)
}

export default ProjectTemplate;
