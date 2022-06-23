<template>
	<nav>
		<ul class="Navigation">
			<li
				v-for="link in siteOptions.footerLinks"
				:key="link.id"
				class="Navigation_Item"
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

.Navigation {
	display: flex;
	list-style: none;
	margin: 0 -1rem;
}

.Navigation_Item {
	padding: 0 1rem;
}
</style>
