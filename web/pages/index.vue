<template>
	<main class="Home">
		<h1>{{ page ? page.title : 'Untitled' }}</h1>
		<div class="Home_Content blockcontent text-base">
			<ElementsTextBlock v-if="page.content" :blocks="page.content" />
		</div>
	</main>
</template>

<script>
import { homeQuery } from '@/queries/contentQueries'

export default {
	data() {
		return {
			page: {},
		}
	},

	async fetch() {
		try {
			const result = await this.$sanity.fetch(homeQuery)
			this.page = result
		} catch (error) {
			console.error(error)
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables';

.Home {
	position: relative;
	min-height: 90vh;
	padding: 1rem;

	@media (--w-desktop-1) {
	}
}

.Home_Content {
	padding: 1rem 0;
}

.Home_Content >>> img {
	max-width: 20rem;
	height: auto;
}
</style>
