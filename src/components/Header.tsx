import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link'

import LocaleSelect from './LocaleSelect'

const Header = () => {
	const { t } = useTranslation('header');

	return (
		<header className="header">
			<a href="/" className="logo">
				<span className="first-name">CARLOS</span>
				<span className="last-name">HENRIQUE</span>
			</a>
			<nav className="navbar">
				<ul className="navlinks">
					<li className="link">
						<Link href="#home">{t('home')}</Link>
					</li>
					<li className="link">
						<Link href="#aboutme">{t('aboutme')}</Link>
					</li>
					<li className="link">
						<Link href="#projects">{t('projects')}</Link>
					</li>
					<li className="link">
						<Link href="/blog">{t('blog')}</Link>
					</li>
					<li className="link">
						<Link href="#contact">{t('contact')}</Link>
					</li>
					<li className="link">
						<LocaleSelect />
					</li>
				</ul>
			</nav>

		</header>
	);
};

export default Header;
