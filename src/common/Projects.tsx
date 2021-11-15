export type Project = {
	name: string,
	img: string,
	type: string,
	projectUrl: string,
	route: string
}

const Projects: (Project)[] = [
	{
		name: 'Website ACA',
		img: '/images/aca_screenshot.png',
		projectUrl: 'https://www.aca-amambai.com/',
		type: 'real',
		route: '/website-aca-amambai'
	},
	{
		name: 'Mr Robot',
		img: '/images/mr_robot_screenshot.png',
		projectUrl: 'https://mr-robot-spa.vercel.app/',
		type: 'study',
		route: 'project-mr-robot'
	},
	{
		name: 'DOT Movies',
		img: '/images/dot_movies_screenshot.png',
		projectUrl: 'https://wonderful-meitner-b75607.netlify.app/',
		type: 'study',
		route: 'dot-movies'
	},
]

export { Projects }



