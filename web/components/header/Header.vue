<template>
	<header class="header">
		<n-link to="/"
			>{{ siteOptions ? siteOptions.name : 'Untitled' }}
			{{ siteOptions.headerTitle }}</n-link
		>
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
@import '~/styles/variables';

header {
	justify-content: space-between;
	padding: 1rem;
	border-bottom: 1px solid rgb(var(--clr-black) / 0.1);

	@media (--width-tablet-01) {
		display: flex;
	}
}
</style>
