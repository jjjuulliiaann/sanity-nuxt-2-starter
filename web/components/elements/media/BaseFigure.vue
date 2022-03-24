<template>
	<figure :class="customClass">
		<ElementsMediaBaseImage
			v-if="image"
			:image="image"
			:svg-placeholder="svgPlaceholder"
			:lqip-placeholder="lqipPlaceholder"
			:alt="alt"
			:auto="auto"
			:fit="fit"
			:preload="preload"
			:use-object-position="useObjectPosition"
			:data-sizes="dataSizes"
			:data-parent-fit="dataParentFit"
			@lazyloaded="$emit('lazyloaded')"
		/>
		<figcaption v-if="figcaption">{{ figcaption }}</figcaption>
	</figure>
</template>

<script>
export default {
	props: {
		image: {
			type: Object,
			default: () => undefined,
		},
		svgPlaceholder: {
			type: Boolean,
			default: () => true,
		},
		lqipPlaceholder: {
			type: Boolean,
			default: () => false,
		},
		dataSizes: {
			type: String,
			default: () => 'auto',
		},
		dataParentFit: {
			type: String,
			default: () => '',
		},
		alt: {
			type: String,
			default: 'Missing alternative text',
		},
		auto: {
			default: 'format',
			type: String,
		},
		fit: {
			default: 'max',
			type: String,
		},
		preload: {
			type: Boolean,
			default: () => false,
		},
		useObjectPosition: {
			type: Boolean,
			default: () => false,
		},
		customClass: {
			type: String,
			default: () => '',
		},
		figcaption: {
			type: String,
			default: () => '',
		},
	},
}
</script>
