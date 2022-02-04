<template>
	<main class="project">
		<h1>{{ page.title }}</h1>

		<div v-if="page.content" class="blockcontent text-01">
			<ElementsTextBlock :blocks="page.content" />
		</div>
	</main>
</template>

<script>
import groq from 'groq'
import { contentBlockQuery } from '~/plugins/sanity'

const query = groq`
	*[_type == 'project' && slug.current == $slug] | order(date desc, _updatedAt desc) [0]{
		...,
		content[] {
			${contentBlockQuery}
		},
	}
`

export default {
	validate({ params, store, query }) {
		// check info slugs
		return (
			store.state.projectsSlugs.includes(params.slug) ||
			query.preview === 'true'
		)
	},

	data() {
		return {
			page: {},
		}
	},

	async fetch() {
		const params = this.$route.params

		try {
			const result = await this.$sanity.fetch(query, params)
			this.page = result
		} catch (error) {
			console.error(error)
		}
	},

	head() {
		return {
			title: this.title,
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables.css';

.project {
	position: relative;
	min-height: 80vh;
	padding: 1rem;
}

.blockcontent {
	padding: 2rem 0;
}
</style>
