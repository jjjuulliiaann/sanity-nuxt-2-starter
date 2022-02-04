<template>
	<ul class="logos">
		<li
			v-for="logo in logos"
			:key="logo._key"
			class="logo"
			:class="{ 'logo--big': logo.big }"
		>
			<a :href="logo.url" target="_blank" rel="noopener">
				<ElementsMediaSanityImage
					v-if="logo.asset"
					:image="logo"
					:alt="logo.alt"
				/>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		logos: {
			type: Array,
			default: () => [],
		},
	},

	computed: {
		styling() {
			return this._sanityProps.node.style
		},
		isListItem() {
			return (
				this._sanityProps.node.listItem === 'bullet' ||
				this._sanityProps.node.listItem === 'number'
			)
		},
	},
}
</script>

<style scoped>
@import '~/styles/variables.css';

.logo a {
	display: block;
}

.logo img {
	position: relative;
	width: 100%;
	height: auto;
}
</style>
