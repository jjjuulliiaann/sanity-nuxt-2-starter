<template>
	<a :href="url" target="_blank" rel="noopener" download>
		<slot />
	</a>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			default: () => '',
		},
	},
}
</script>
