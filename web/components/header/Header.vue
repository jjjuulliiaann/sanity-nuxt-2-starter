<template>
	<header class="Header">
		<HeaderThePreviewBanner v-show="$nuxt.isPreview" />
		<div class="Header_Bar">
			<n-link to="/"
				>{{ siteOptions ? siteOptions.name : 'Untitled' }}
				{{ siteOptions ? siteOptions.headerTitle : 'Untitled' }}</n-link
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

.Header {
	position: sticky;
	top: 0;
	background: var(--rgb-white);
	border-bottom: 1px solid rgb(var(--clr-black) / 0.1);
	z-index: 999;
}

.Header_Bar {
	position: relative;
	width: 100%;
	padding: 1rem;

	@media (--w-tablet-1) {
		display: flex;
		justify-content: space-between;
	}
}
</style>
