<template>
	<nuxt-link v-if="linkType === 'internal'" :to="internalRoute" class="link">
		<slot></slot>
	</nuxt-link>

	<a
		v-else
		:href="href"
		:target="blank ? '_blank' : '_self'"
		:rel="blank ? 'noopener' : ''"
		class="link"
	>
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: {
		linkType: {
			type: String,
			default: () => 'external',
		},
		href: {
			type: String,
			default: () => '',
		},
		blank: {
			type: Boolean,
			default: () => false,
		},
		route: {
			type: String,
			default: () => '',
		},
		slug: {
			type: String,
			default: () => '',
		},
	},

	computed: {
		internalRoute() {
			return {
				name: this.route ?? 'index',
				params: this.slug ? { slug: this.slug } : {},
			}
		},
	},
}
</script>
