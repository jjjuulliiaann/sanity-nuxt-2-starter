<template>
	<header class="header">
		<h1>
			<n-link to="/">{{
				siteOptions ? siteOptions.name : 'Untitled'
			}}</n-link>
		</h1>
		<HeaderNavigation :menu="mainMenu" />
	</header>
</template>

<script>
export default {
	data() {
		return {
			siteOptions: this.$store.state.siteOptions,
			mainMenu: this.$store.getters.getMainMenu,
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables.css';

header {
	padding: 1rem;
}
</style>
