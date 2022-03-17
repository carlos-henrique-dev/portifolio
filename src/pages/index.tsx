import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import BaseLayout from "../components/BaseLayout";
import Card from "../components/Card";


import { SocialLinks, SocialLink } from '../common/SocialLinks'
import { Skills, Skill } from '../common/Skills'
import { Projects, Project } from '../common/Projects'



const HomePage = () => {
	const { t } = useTranslation(['common', 'header']);

	const [activeTab, setActiveTab] = useState<number>(0)
	const [projectFilter, setProjectFilter] = useState<string>('all')
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const [submitted, setSubmitted] = useState<boolean>(false)
	const [submitting, setSubmitting] = useState<boolean>(false)

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const filterProjects = (filter: string, tabIndex: number) => {
		setActiveTab(tabIndex)
		setProjectFilter(filter)
	}

	const getFilteredSkills = (category: String) => (
		<ul className="skill-items">
			{Skills
				.filter(item => item.category === category)
				.map((skill: Skill) => (
					<li key={skill.name}><skill.icon /><span>{skill.name}</span></li>
				))
			}
		</ul>
	)


	const getProjects = () => {
		let projectsList = Projects

		if (projectFilter !== 'all') {
			projectsList = Projects.filter((proj: Project) => proj.type === projectFilter)
		}

		return projectsList.map((project: Project) => <Card data={project} t={t} key={project.name} />)
	}

	return (
		<BaseLayout>
			<section id="home" className="home">
				<div className="col-left">
					<h1>{t('home-hello')}</h1>
					<h2>{t('home-description')}</h2>
					<div className="contact-btn">
						<Link href="#contact">{t('contact-me')}</Link>
					</div>
				</div>
				<div className="col-right">
					<Image src="/images/home.svg" alt="Home Illustration" width="450" height="450" />
				</div>

				<div className="scroll-animation">
					<div className="scroll-indicator">
						<div className="dots"></div>
					</div>
				</div>
			</section>

			<section id="aboutme" className="about-me">
				<h3 className="home-section-title">{t('header:aboutme')}</h3>
				<p className="content">{t('about-content')}</p>

				<div className="follow-me">
					<h5 className="section-sub-title">{t('follow-me')}</h5>
					<ul>
						{
							SocialLinks.map((link: SocialLink) => {
								return (
									<li key={link.name}>
										<a href={link.url} target="_blank" rel="norefferer">
											<link.icon />
											<span>{link.name}</span>
										</a>
									</li>
								)
							})
						}
					</ul>
				</div>
			</section>

			<section id="skills" className="skills">
				<h3 className="home-section-title">{t('header:skills')}</h3>
				<p className="home-section-description">{t('skills-description')}</p>
				<div className='my-skills'>
					<h5 className="section-sub-title">{t('frontend')}</h5>
					{getFilteredSkills('frontend')}
					<h5 className="section-sub-title">{t('backend')}</h5>
					{getFilteredSkills('backend')}
					<h5 className="section-sub-title">{t('others')}</h5>
					{getFilteredSkills('others')}
				</div>
			</section>

			<section id="projects" className="projects">
				<h3 className="home-section-title">{t('header:projects')}</h3>
				<p className="home-section-description">{t('projects-description')}</p>
				<div className="my-projects">
					<div className="tabs">
						<span onClick={() => filterProjects('all', 0)} className={`tab ${activeTab === 0 ? 'active' : ''}`} >{t('projects-all')}</span>
						<span onClick={() => filterProjects('real', 1)} className={`tab ${activeTab === 1 ? 'active' : ''}`} >{t('projects-real')}</span>
						<span onClick={() => filterProjects('study', 2)} className={`tab ${activeTab === 2 ? 'active' : ''}`} >{t('projects-study')}</span>
					</div>
					<div className="items">
						{getProjects()}
					</div>
				</div>
			</section>

			<section id="contact" className="contact">
				<h3 className="home-section-title">{t('header:contact')}</h3>
				<p className="home-section-description">{t('contact-description')}</p>

				<div className="contact-image-wrapper">
					<Image src="/images/contact.svg" alt="Contact Me" width="800" height="800" />
				</div>
				<div className="form-wrapper">
					{
						!submitted ?
							<form className="contact-form" id="contact-form">
								<div className="row">
									<label htmlFor='name'>{t('name')}</label>
									<input type='text' name='name' className="field"
										onChange={(e) => { setName(e.target.value) }} />
								</div>
								< div className="row" >
									<label htmlFor='email'>{t('email')}</label>
									<input type='email' name='email' className="field"
										onChange={(e) => { setEmail(e.target.value) }} />
								</div>
								<div className="row" >
									<label htmlFor='message'>{t('message')}</label>
									<textarea name="Text1" className="field message"
										onChange={(e) => { setMessage(e.target.value) }} />
								</div>
								<div className="row submit">
									<input type='submit'
										value={`${submitting ? t('submitting') : t('send')}`}
										disabled={submitting}
										onClick={(e) => { handleSubmit(e) }} />
								</div>
							</form >
							:
							<div className="message-submitted">
								<span>{t('submitted')}</span>
							</div>
					}
				</div>
			</section>
		</BaseLayout>
	);
};

export const getStaticProps = async ({ locale }) => {

	return {

		props: {
			...await serverSideTranslations(locale, ['common', 'header']),
		},
	}
}


export default HomePage