import React from 'react'

function ProjectDetail(props) {
	const { data } = props

	return (
		<div className="projects-container">
			<h1>{data?.project_name}</h1>
		</div>
	)
}


export const getStaticProps = async ({ params }) => {
	try {

		const result = await fetch(`http://localhost:3000/api/projects/?project=${params.slug}`, {
			method: 'GET',
		})

		const toJSON = await result.json()

		return { props: { data: JSON.parse(toJSON.data) } }
	}
	catch (error) {
		console.log('error', error)
	}

	return { props: {} }
}

export async function getStaticPaths() {
	// const { props } = await ssrGetBlogPosts.getServerPage({}, null);
	// // pega as rotas que serão pre renderizadas na compilação
	// const paths = props?.data?.getBlogPosts.map((blogPost: BlogPost) => ({ params: { slug: `${blogPost.slug}` } })) || [];
	// // passa as rotas e o fallback: false usa o 404 padrão do next
	return { paths: [], fallback: true };
}

export default ProjectDetail
