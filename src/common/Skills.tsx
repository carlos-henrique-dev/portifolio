import { ReactElement } from 'react'
import { DiReact, DiPostgresql, DiMongodb, DiJavascript1, DiCss3, DiSass } from 'react-icons/di'
import {
	SiTypescript,
	SiNextdotjs,
	SiMaterialui,
	SiRedux,
	SiApollographql,
	SiNuxtdotjs
} from 'react-icons/si'
import { GrNode, GrGraphQl } from 'react-icons/gr'
import { AiOutlineAntDesign, AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import { FaVuejs, FaDocker } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'

export type Skill = {
	icon: () => ReactElement<Element>,
	name: string,
	category: string
}

const Skills: (Skill)[] = [
	{ icon: () => < DiReact size={35} />, name: 'React', category: 'frontend' },
	{ icon: () => < SiTypescript size={35} />, name: 'TypeScript', category: 'others' },
	{ icon: () => < GrNode size={35} />, name: 'Node JS', category: 'others' },
	{ icon: () => < SiNextdotjs size={35} />, name: 'Next Js', category: 'frontend' },
	{ icon: () => < AiOutlineAntDesign size={35} />, name: 'Ant Design', category: 'frontend' },
	{ icon: () => < SiMaterialui size={35} />, name: 'Material UI', category: 'frontend' },
	{ icon: () => < FaVuejs size={35} />, name: 'Vue', category: 'frontend' },
	{ icon: () => < SiRedux size={35} />, name: 'Redux', category: 'frontend' },
	{ icon: () => < DiPostgresql size={35} />, name: 'PostgreSQL', category: 'backend' },
	{ icon: () => < DiMongodb size={35} />, name: 'MongoDB', category: 'backend' },
	{ icon: () => < SiApollographql size={35} />, name: 'Apollo GraphQL', category: 'frontend' },
	{ icon: () => < GrGraphQl size={35} />, name: 'GraphQl', category: 'backend' },
	{ icon: () => < AiFillGithub size={35} />, name: 'GitHub', category: 'others' },
	{ icon: () => < FiFigma size={35} />, name: 'Figma', category: 'others' },
	{ icon: () => < FaDocker size={35} />, name: 'Docker', category: 'backend' },
	{ icon: () => < SiNuxtdotjs size={35} />, name: 'Nuxt JS', category: 'frontend' },
	{ icon: () => < DiJavascript1 size={35} />, name: 'JavaScript', category: 'frontend' },
	{ icon: () => < AiFillHtml5 size={35} />, name: 'HTML', category: 'frontend' },
	{ icon: () => < DiCss3 size={35} />, name: 'CSS', category: 'frontend' },
	{ icon: () => < DiSass size={35} />, name: 'Sass', category: 'frontend' },
]

export { Skills }



