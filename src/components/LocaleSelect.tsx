import { useTranslation } from 'next-i18next';
import { NextRouter, useRouter } from 'next/router'
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import Image from 'next/image'

const LocaleSelect = () => {
	const router: NextRouter = useRouter()
	const { t } = useTranslation('header');

	const [showLocaleOptions, setShowLocaleOptions] = useState<Boolean>(false)
	const ref: MutableRefObject<null | HTMLDivElement> = useRef(null)

	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setShowLocaleOptions(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref])

	const getLocaleName = (): string => {
		const name = `lang-${router.locale?.replace('_', '-')}`
		return t(name)
	}

	const getLocaleFlag = (): string => {
		const name = `/icons/flags/${router.locale?.replace('-', '-')}.svg`
		return t(name)
	}

	const toggleLocaleOptions = () => setShowLocaleOptions(!showLocaleOptions)

	const changeLocale = (locale: string) => {
		setShowLocaleOptions(false)
		router.push(router.asPath, router.asPath, { locale })
	}


	return (
		<div className="locale-container">
			<div className="current-locale" onClick={() => toggleLocaleOptions()}>
				<Image src={getLocaleFlag()} alt="country flag" width="20" height="20" />
				<span>{getLocaleName()}</span>
			</div>

			<div className={`locale-options ${showLocaleOptions ? 'visible' : ''}`} ref={ref}>
				<div className="option" onClick={() => changeLocale('pt_br')}>
					<div className="flag-container">
						<Image src="/icons/flags/pt_br.svg" alt="country flag" width="20" height="20" />
					</div>
					<span>{t('lang-pt-br')}</span>
				</div>
				<div className="option" onClick={() => changeLocale('en')}>
					<div className="flag-container">
						<Image src="/icons/flags/en.svg" alt="country flag" width="20" height="20" />
					</div>
					<span>{t('lang-en')}</span>
				</div>
			</div>
		</div>
	)
}

export default LocaleSelect