<template>
	<header class="header">
		<HeaderPreviewBanner v-if="$nuxt.isPreview" />
		<HeaderCookies />
		<div class="header__bar">
			<n-link to="/"
				>{{ siteOptions ? siteOptions.name : 'Untitled' }}
				{{ siteOptions.headerTitle }}</n-link
			>
			<HeaderNavigation />
		</div>
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
	position: sticky;
	top: 0;
	background: rgb(var(--clr-white));
	border-bottom: 1px solid rgb(var(--clr-black) / 0.1);
	z-index: 999;
}

.header__bar {
	position: relative;
	width: 100%;
	padding: 1rem;

	@media (--width-tablet-01) {
		display: flex;
		justify-content: space-between;
	}
}
</style>
