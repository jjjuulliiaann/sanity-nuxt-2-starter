<template>
	<main class="project">
		<article>
			<h1>{{ page.title }}</h1>

			<section
				v-if="page.content"
				class="project__text blockcontent text-01"
			>
				<ElementsTextBlock :blocks="page.content" />
			</section>

			<section class="project__images">
				<ul v-if="page.images">
					<li v-for="image in page.images" :key="image._key">
						<ElementsMediaSanityImage
							v-if="image && image.asset"
							:image="image"
							:alt="image.alt"
						/>
					</li>
				</ul>
			</section>
		</article>
	</main>
</template>

<script>
import groq from 'groq'
import { contentBlockQuery } from '~/plugins/sanity'
import seo from '~/mixins/seo.js'

const query = groq`
	*[_type == 'project' && slug.current == $slug] | order(_updatedAt desc) [0]{
		...,
		content[] {
			${contentBlockQuery}
		},
		images[]{
			...,
			asset->
		},
	}
`

export default {
	mixins: [seo],

	validate({ params, store, query }) {
		// check if slug exists or preview is active
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

	mounted() {
		console.log('Mounted!')
		console.log(this.page)
	},
}
</script>

<style scoped>
@import '~/styles/variables';

.project {
	position: relative;
	min-height: 90vh;
	padding: 1rem;
}

.project__text {
	padding: 2rem 0;
}

.project__images {
	position: relative;
	max-width: 60rem;
	padding: 4rem 0;
}

.project__images li {
	line-height: 0;
	margin-bottom: 2rem;
}

.project__images >>> img {
	width: 100%;
	height: auto;
}
</style>
