<template>
	<main class="projects">
		<h1>{{ page.title }}</h1>

		<section v-if="page.projects" class="projects__grid">
			<ul>
				<li
					v-for="project in page.projects"
					:key="project.id"
					class="projects__item"
				>
					<ElementsTextLink
						link-type="internal"
						route="projects-slug"
						:slug="project.slug.current"
					>
						{{ project.title }}
					</ElementsTextLink>
				</li>
			</ul>
		</section>
	</main>
</template>

<script>
import { projectsQuery } from '@/queries/contentQueries'
import seo from '~/mixins/seo.js'

export default {
	mixins: [seo],

	data() {
		return {
			page: {},
		}
	},

	async fetch() {
		try {
			const result = await this.$sanity.fetch(projectsQuery)
			this.page = result
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
