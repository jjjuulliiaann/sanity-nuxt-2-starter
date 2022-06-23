<template>
	<nav>
		<ul class="footer-navigation">
			<li
				v-for="link in siteOptions.footerLinks"
				:key="link.id"
				class="navigation__item"
			>
				<ElementsTextLink
					:link-type="link.linkType"
					:href="link.href"
					:blank="link.blank"
					:route="link.route"
					:slug="link.slug"
				>
					{{ link.title }}
				</ElementsTextLink>
			</li>
		</ul>
	</nav>
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

.footer-navigation {
	display: flex;
	list-style: none;
	margin: 0 -1rem;
}

.navigation__item {
	padding: 0 1rem;
}
</style>
