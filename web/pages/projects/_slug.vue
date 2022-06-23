<template>
	<main class="Project">
		<article>
			<h1 v-if="page.title">{{ page.title }}</h1>

			<section
				v-if="page.content"
				class="Project_Text blockcontent text-base"
			>
				<ElementsTextBlock :blocks="page.content" />
			</section>

			<section class="Project_Images">
				<ul v-if="page.images">
					<li v-for="mediaEl in page.images" :key="mediaEl._key">
						<ElementsMediaBaseImage
							v-if="mediaEl.asset"
							:image="mediaEl"
							:alt="mediaEl.alt"
						/>
						<ElementsMediaBaseLoop
							v-if="
								mediaEl._type === 'video' &&
								mediaEl.muxVideo &&
								mediaEl.muxVideo.asset
							"
							:video="mediaEl"
						/>
					</li>
				</ul>
			</section>
		</article>
	</main>
</template>

<script>
import { singleProjectQuery } from '@/queries/contentQueries'
import seo from '~/mixins/seo.js'

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
			const result = await this.$sanity.fetch(singleProjectQuery, params)
			this.page = result
		} catch (error) {
			console.error(error)
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables';

.Project {
	position: relative;
	min-height: 90vh;
	padding: 1rem;
}

.Project_Text {
	padding: 2rem 0;
}

.Project_Images {
	position: relative;
	max-width: 60rem;
	padding: 4rem 0;
}

.Project_Images li {
	line-height: 0;
	margin-bottom: 2rem;
}

.Project_Images >>> img {
	width: 100%;
	height: auto;
}
</style>
