import React from 'react'
import { IoIosArrowBack, IoIosArrowForward, IoMdRefresh, IoMdSearch } from 'react-icons/io'
import Image from 'next/image'
import Link from "next/link";


const Card = ({ data, t, hasOverlay = true, isExternalLink = false, large = false }) => {
	const { name, img, projectUrl, route } = data

	return (
		<div className="browser">
			<div className="wrapper">
				<div className="title-bar">
					<div className="title-btn red" />
					<div className="title-btn yellow" />
					<div className="title-btn green" />
				</div>
				<div className={`action-bar ${large ? 'large' : ''}`}>
					<div className="action-btn">< IoIosArrowBack /></div>
					<div className="action-btn">< IoIosArrowForward /></div>
					<div className="action-btn">< IoMdRefresh /></div>
					<div className="search-bar"><span>{projectUrl}</span></div>
					<div className="action-btn">< IoMdSearch /></div>
				</div>
				<div className={`screenshot ${large ? 'large' : ''}`}>
					<Image src={img} alt={name}
						layout="fill"
					// width="400" height="300"  
					/>
				</div>

				{
					hasOverlay && (
						<div className="overlay">
							<div className="content">
								<span className="project-name">{name}</span>
								{
									isExternalLink ? (
										<a target="_blank" href={projectUrl} rel="noopener noreferrer">
											<span className="open-details">{t('more-details')}</span>
										</a>
									) : (
										<Link href={route}>
											<span className="open-details">{t('more-details')}</span>
										</Link>
									)
								}
							</div>
						</div>
					)
				}
			</div>
		</div>
	)
}

export default Card