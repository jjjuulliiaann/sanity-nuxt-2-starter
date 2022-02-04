<template>
	<nav>
		<ul class="footer-navigation">
			<li
				v-for="link in siteOptions.footerLinks"
				:key="link.id"
				class="navigation__item"
			>
				<ElementsTextLink
					:target="link.target"
					:slug="link.slug"
					:link-type="link.linkType"
					:href="link.href"
					:blank="link.blank"
					:template="link.template"
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
@import '~/styles/variables.css';

.footer-navigation {
	display: flex;
	list-style: none;
	margin: 0 -1rem;
}

.navigation__item {
	padding: 0 1rem;
}
</style>
