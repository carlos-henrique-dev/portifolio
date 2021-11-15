
import { ReactElement } from 'react'
import {
	AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillMediumCircle
} from 'react-icons/ai'
import { SiHashnode } from 'react-icons/si'

export type SocialLink = {
	icon: () =>  ReactElement<Element>,
	name: string,
	url: string
}

const SocialLinks: (SocialLink)[] = [
	{
		icon: () => < AiFillLinkedin size={25} />,
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/carlos-henrique-dev/'
	},
	{
		icon: () => < AiFillGithub size={25} />,
		name: 'GitHub',
		url: 'https://github.com/carlos-henrique-dev'
	},
	{
		icon: () => < AiFillInstagram size={25} />,
		name: 'Instagram',
		url: 'https://www.instagram.com/carlos_henrique.dev/'
	},
	{
		icon: () => < AiFillTwitterCircle size={25} />,
		name: 'Twitter',
		url: 'https://twitter.com/chenrique_dev'
	},
	{
		icon: () => < SiHashnode size={25} />,
		name: 'Hashnode',
		url: 'https://carloshenrique-dev.hashnode.dev/'
	},
	{
		icon: () => < AiFillMediumCircle size={25} />,
		name: 'Medium',
		url: 'https://medium.com/@carloshenrique-dev'
	},
]

export { SocialLinks }