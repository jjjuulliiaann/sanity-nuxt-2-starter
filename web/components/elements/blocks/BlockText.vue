<template>
	<h2 v-if="styling === 'headline'"><slot /></h2>
	<h3 v-else-if="styling === 'headline2'"><slot /></h3>
	<h4 v-else-if="styling === 'headline3'"><slot /></h4>
	<p v-else-if="styling === 'small'" class="text--small"><slot /></p>
	<p v-else><slot /></p>
</template>

<script>
export default {
	// Define the block object properties this component receives as props
	props: {
		_sanityProps: {
			type: Object,
			required: true,
		},
		default: {
			type: Object,
			default: () => {},
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
