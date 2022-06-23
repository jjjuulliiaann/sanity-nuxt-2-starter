<template>
	<main class="home">
		<h1>{{ page ? page.title : 'Untitled' }}</h1>
		<div class="blockcontent text-01">
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

.home {
	position: relative;
	min-height: 90vh;
	padding: 1rem;
}

.blockcontent {
	padding: 2rem 0;
}

.blockcontent >>> img {
	max-width: 20rem;
	height: auto;
}
</style>
