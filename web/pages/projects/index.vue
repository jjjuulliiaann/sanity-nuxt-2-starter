<template>
	<main class="projects">
		<h1>{{ page.title }}</h1>

		<section class="projects__grid">
			<ul>
				<li
					v-for="project in projects"
					:key="project.id"
					class="projects__item"
				>
					<ElementsTextLink
						:slug="project.slug.current"
						link-type="internal"
						template="project"
					>
						{{ project.title }}
					</ElementsTextLink>
				</li>
			</ul>
		</section>
	</main>
</template>

<script>
import groq from 'groq'
import seo from '~/mixins/seo.js'

const query = groq`{
	"page": *[_type == "templateProjects"] | order(_updatedAt desc) [0] {
		...
	},
	"projects": *[(_type == "project") && !(_id in path("drafts.**"))]
	| order(_updatedAt desc){
		...
	}
}`

export default {
	mixins: [seo],

	data() {
		return {
			page: {},
			projects: [],
		}
	},

	async fetch() {
		try {
			const result = await this.$sanity.fetch(query)
			this.page = result.page
			this.projects = result.projects
		} catch (error) {
			console.error(error)
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables';

.projects {
	position: relative;
	min-height: 90vh;
	padding: 1rem;
}

.projects__grid {
	position: relative;
	padding: 2rem 0;
}

.projects__grid ul {
	display: flex;
}

.projects__item {
	position: relative;
	border: 1px solid rgb(var(--clr-black) / 0.1);
	border-radius: 1rem;
}

.projects__item a {
	display: block;
	padding: 1rem;
}
</style>
