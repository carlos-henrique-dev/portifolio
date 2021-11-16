import React from 'react'

function ProjectDetail() {
	return (
		<div>
			
		</div>
	)
}


export const getStaticProps = async ({ params }) => {
	console.log(params)	
	return {props: {}}
}

export async function getStaticPaths() {
	// const { props } = await ssrGetBlogPosts.getServerPage({}, null);
	// // pega as rotas que serão pre renderizadas na compilação
	// const paths = props?.data?.getBlogPosts.map((blogPost: BlogPost) => ({ params: { slug: `${blogPost.slug}` } })) || [];
	// // passa as rotas e o fallback: false usa o 404 padrão do next
	return { paths: [], fallback: true };
}

export default ProjectDetail
