<template>
	<footer class="footer">
		<p>
			{{ siteOptions.name }}, ©
			<a href="https:julianschmidt.me" target="_blank">Julian Schmidt</a>
		</p>
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
	padding: 1rem;
}

.footer a {
	color: inherit;
	text-decoration: inherit;
}
</style>
