<template>
	<nav>
		<ul v-if="siteNavigation" class="navigation">
			<li
				v-for="link in siteNavigation.navMain"
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
