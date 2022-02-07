<template>
	<main class="textpage">
		<h1>{{ page.title }}</h1>

		<section class="blockcontent text-01">
			<ElementsTextBlock :blocks="page.content" />
		</section>
	</main>
</template>

<script>
import groq from 'groq'
import { contentBlockQuery, seoQuery } from '~/plugins/sanity'
import seo from '~/mixins/seo.js'

const query = groq`
	*[_type == 'templateText' && slug.current == $slug] | order(date desc, _updatedAt desc) [0]{
		...,
		content[] {
			${contentBlockQuery}
		},
		${seoQuery}
	}
`

export default {
	mixins: [seo],

	validate({ params, store, query }) {
		// check if slug exists or preview is active
		return (
			store.state.pagesSlugs.includes(params.slug) ||
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
}
</script>

<style scoped>
@import '~/styles/variables';

.textpage {
	position: relative;
	min-height: 90vh;
	padding: 1rem;
}

.blockcontent {
	padding: 2rem 0;
}
</style>
