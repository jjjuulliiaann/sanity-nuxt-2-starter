<template>
	<footer class="Footer">
		<p>
			© {{ year }},
			<a href="https:julianschmidt.me" target="_blank"
				>Julian Schmidt {{ siteOptions.copyrightText }}</a
			>
		</p>
		<FooterNavigation v-if="siteOptions.footerLinks" />
	</footer>
</template>

<script>
export default {
	data() {
		if (!this.$store.state) {
			return
		}
		return {
			year: new Date().getFullYear(),
			siteOptions: this.$store.state.siteOptions,
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables';

.Footer {
	position: relative;
	padding: 1rem;

	@media (--w-tablet-1) {
		display: flex;
		justify-content: space-between;
	}
}

.Footer a {
	color: inherit;
	text-decoration: inherit;
}
</style>
