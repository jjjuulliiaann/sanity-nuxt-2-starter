<template>
	<aside class="preview-banner">
		<button class="text-00" @click="$nuxt.refresh"
			><span>Preview: Click to refresh text</span></button
		>
	</aside>
</template>

<script>
export default {}
</script>

<style scoped>
@import '~/styles/variables.css';

.preview-banner {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 3.75rem;
	background: var(--clr-white);
	color: var(--clr-black);
	z-index: 999;
	border-bottom: 1px solid rgba(119, 119, 119, 0.25);
}

.preview-banner button {
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0.2rem 1.2rem 0;
	line-height: 100%;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
		'Helvetica Neue', sans-serif;
	font-weight: 600;
	font-size: 13px;
	text-align: left;
	color: rgb(86, 89, 92);
}

.preview-banner span {
	border-radius: 3px;
	padding: 0.5rem 0.7rem;
}

@media (hover: hover) and (pointer: fine) {
	.preview-banner button:hover span {
		background: rgb(241, 241, 241);
	}
}
</style>
