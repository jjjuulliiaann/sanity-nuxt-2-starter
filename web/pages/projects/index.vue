<template>
	<main class="Projects">
		<h1>{{ page.title }}</h1>

		<section v-if="page.projects" class="Projects_Grid">
			<ul>
				<li
					v-for="project in page.projects"
					:key="project.id"
					class="Projects_Item"
				>
					<ElementsTextLink
						link-type="internalLink"
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

.Projects {
	position: relative;
	min-height: 90vh;
	padding: 1rem;
}

.Projects_Grid {
	position: relative;

	padding: 2rem 0;
}

.Projects_Grid ul {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	gap: 1rem;
}

.Projects_Item {
	position: relative;
	border: 1px solid rgb(var(--clr-black) / 0.1);
	border-radius: 1rem;
	overflow: hidden;
}

.Projects_Item a {
	display: block;
	padding: 1rem;
}

@media (hover: hover) and (pointer: fine) {
	.Projects_Item a:hover {
		color: var(--rgb-white);
		background: var(--rgb-accent);
	}
}
</style>
