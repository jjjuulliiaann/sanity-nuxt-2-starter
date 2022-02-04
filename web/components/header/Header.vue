<template>
	<header class="header">
		<h1>
			<n-link to="/"
				>{{ siteOptions ? siteOptions.name : 'Untitled' }}
				{{ siteOptions.headerTitle }}</n-link
			>
		</h1>
		<HeaderNavigation />
	</header>
</template>

<script>
export default {
	data() {
		return {
			siteOptions: this.$store.state.siteOptions,
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables.css';

header {
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	border-bottom: 1px solid var(--clr-light);
}
</style>
