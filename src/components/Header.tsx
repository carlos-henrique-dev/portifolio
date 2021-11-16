import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link'

import LocaleSelect from './LocaleSelect'

const Header = () => {
	const { t } = useTranslation('header');
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => setShowMenu(!showMenu)

	return (
		<header className="header">
			<div className="logo-wrapper">
				<a href="/" className="logo">
					<span className="first-name">CARLOS</span>
					<span className="last-name">HENRIQUE</span>
				</a>
			</div>
			<nav className="navbar">
				<ul className={`navlinks ${showMenu && 'active'}`} >
					<li className="link" onClick={() => setShowMenu(false)}>
						<Link href="#home">{t('home')}</Link>
					</li>
					<li className="link" onClick={() => setShowMenu(false)}>
						<Link href="#aboutme">{t('aboutme')}</Link>
					</li>
					<li className="link" onClick={() => setShowMenu(false)}>
						<Link href="#projects">{t('projects')}</Link>
					</li>
					<li className="link" onClick={() => setShowMenu(false)}>
						<Link href="/blog">{t('blog')}</Link>
					</li>
					<li className="link" onClick={() => setShowMenu(false)}>
						<Link href="#contact">{t('contact')}</Link>
					</li>
					<li className="link">
						<LocaleSelect />
					</li>
				</ul>

				<div className={`hamburger ${showMenu && 'active'}`} onClick={toggleMenu}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</div>
			</nav>

		</header>
	);
};

export default Header;
