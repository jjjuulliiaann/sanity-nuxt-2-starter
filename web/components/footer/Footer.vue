<template>
	<footer class="footer">
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
@import '~/styles/variables.css';

.footer {
	position: relative;
	display: flex;
	justify-content: space-between;
	padding: 1rem;
}

.footer a {
	color: inherit;
	text-decoration: inherit;
}
</style>
