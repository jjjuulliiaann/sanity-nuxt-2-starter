<template>
	<nav>
		<ul v-if="siteNavigation" class="navigation">
			<li
				v-for="link in siteNavigation.navMain"
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
			siteNavigation: this.$store.state.siteNavigation,
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables';

.navigation {
	list-style: none;
	margin: 0 -1rem;

	@media (--width-mobile-03) {
		display: flex;
	}
}

.navigation__item {
	padding: 0 1rem;
}
</style>
