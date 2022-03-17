import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link'

import LocaleSelect from './LocaleSelect'
import { useRouter } from 'next/router';

const Header = () => {
	const router = useRouter()
	const { t } = useTranslation('header');

	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => setShowMenu(!showMenu)

	const getAnchor = (anchor) => {
		return router.pathname === '/' ? anchor : `/${anchor}`
	}

	return (
		<header className="header">
			<div className="logo-wrapper">
				<Link href={getAnchor('')}  passHref>
					<a href="" className="logo">
					<span className="first-name">CARLOS</span>
					<span className="last-name">HENRIQUE</span>
					</a>
				</Link>
			</div>
			<nav className="navbar">
				<ul className={`navlinks ${showMenu && 'active'}`} >
					<li className="link" onClick={() => setShowMenu(false)}>
						<Link href={getAnchor("#home")}>{t('home')}</Link>
					</li>
					<li className="link" onClick={() => setShowMenu(false)}>
						<Link href={getAnchor("#aboutme")}>{t('aboutme')}</Link>
					</li>
					<li className="link" onClick={() => setShowMenu(false)}>
						<Link href={getAnchor("#projects")}>{t('projects')}</Link>
					</li>
					<li className="link" onClick={() => setShowMenu(false)}>
						<Link href={getAnchor("blog")}>{t('blog')}</Link>
					</li>
					<li className="link" onClick={() => setShowMenu(false)}>
						<Link href={getAnchor("#contact")}>{t('contact')}</Link>
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
