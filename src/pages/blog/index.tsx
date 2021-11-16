import React from "react";
import BaseLayout from '../../components/BaseLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "react-i18next";

function Blog() {
	const { t } = useTranslation('common');

	return (
		<BaseLayout>
		<section className="blog">
			<h1>{t('under-construction')}</h1>
		</section>
		</BaseLayout>
	);
}

export const getStaticProps = async ({ locale }) => {

	return {

		props: {
			...await serverSideTranslations(locale, ['common', 'header']),
		},
	}
}


export default Blog;
