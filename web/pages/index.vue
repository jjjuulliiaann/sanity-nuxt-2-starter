<template>
	<main class="home">
		<h1>{{ page.title }}</h1>
		<div class="test">Preview: {{ $nuxt.isPreview }}</div>
		<!-- <div class="blockcontent text-01">
			<ElementsTextBlock :blocks="page.content" />
		</div> -->
	</main>
</template>

<script>
import groq from 'groq'
import { contentBlockQuery } from '~/plugins/sanity'

const query = groq`*[(
	_id == "templateHome")] | order(_updatedAt desc)[0]{
		...,
		content[] {
			${contentBlockQuery}
		},
}`

export default {
	data() {
		return {
			page: {},
		}
	},

	async fetch() {
		try {
			console.log('🎈 async fetch: called')
			const result = await this.$sanity.fetch(query)
			this.page = result
			console.log(result)
		} catch (error) {
			console.error(error)
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables';

.home {
	position: relative;
	min-height: 90vh;
	padding: 1rem;
}

.blockcontent {
	padding: 2rem 0;
}

.blockcontent >>> img {
	max-width: 10rem;
	height: auto;
}
</style>
