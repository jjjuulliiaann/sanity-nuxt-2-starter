<template>
	<main class="error">
		<h1>{{ error.statusCode }}</h1>

		<p v-if="error.statusCode === 404" class="text-01">
			Die Seite konnte nicht gefunden werden.
		</p>
		<p v-else class="text-01">Error: {{ error.message }}</p>
	</main>
</template>

<script>
export default {
	props: {
		error: {
			type: Object,
			default: () => {},
		},
	},
}
</script>

<style scoped>
@import '~/styles/variables.css';

.error {
	position: relative;
	min-height: 90vh;
	padding: 1rem;
}
</style>
