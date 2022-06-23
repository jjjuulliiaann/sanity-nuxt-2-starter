<template>
	<main class="TextPage">
		<h1>{{ page.title }}</h1>

		<section class="TextPage_Content blockcontent text-base">
			<ElementsTextBlock :blocks="page.content" />
		</section>
	</main>
</template>

<script>
import { pageTextQuery } from '@/queries/contentQueries'
import seo from '~/mixins/seo.js'

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
			const result = await this.$sanity.fetch(pageTextQuery, params)
			this.page = result
		} catch (error) {
			console.error(error)
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables';

.TextPage {
	position: relative;
	min-height: 90vh;
	padding: 1rem;
}

.TextPage_Content {
	padding: 2rem 0;
}
</style>
