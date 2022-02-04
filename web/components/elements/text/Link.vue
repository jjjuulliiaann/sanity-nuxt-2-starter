<template>
	<nuxt-link
		v-if="linkType === 'internal'"
		:to="slug ? { path: `/${subPath}${slug}` } : '/'"
		class="nav-link"
	>
		<slot></slot>
	</nuxt-link>

	<a
		v-else
		:href="href"
		:target="blank ? '_blank' : '_self'"
		:rel="blank ? 'noopener' : ''"
		class="nav-link"
	>
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: () => '',
		},
		target: {
			type: String,
			default: () => '',
		},
		slug: {
			type: String,
			default: () => '',
		},
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
		template: {
			type: String,
			default: () => '',
		},
	},

	data() {
		return {
			linkPaths: {
				templateText: '',
				project: 'projects/',
				templateTest: 'blubb/',
			},
		}
	},

	computed: {
		subPath() {
			return this.linkPaths[this.template]
				? this.linkPaths[this.template]
				: ''
		},
	},
}
</script>
