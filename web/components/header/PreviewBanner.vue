<template>
	<aside class="preview-banner">
		<button class="text-00" @click="$nuxt.refresh">
			<span>Preview: Click to refresh page</span>
		</button>
	</aside>
</template>

<style scoped>
@import '~/styles/variables';

.preview-banner {
	--_clr-darkgrey: rgb(102 104 105);
	--_clr-grey: rgb(86 89 92);
	--_clr-lightgrey: rgba(86 89 92 / 0.4);
	--_clr-blue: rgb(34 118 252);
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	height: 4.3rem;
	background: rgb(var(--clr-white));
	color: rgb(var(--clr-black));
	z-index: 1000;
	border-bottom: 1px solid var(--_clr-lightgrey);
}

.preview-banner button {
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding: 0 1.2rem;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
		'Helvetica Neue', sans-serif;
	font-weight: 500;
	font-size: 13px;
	text-align: left;
	color: var(--_clr-grey);
	border-radius: 3px;
}

.preview-banner span {
	display: block;
	border-radius: 3px;
	padding: 0.1rem 0.7rem;
	border: 1px solid var(--_clr-lightgrey);
}

@media (hover: hover) and (pointer: fine) {
	.preview-banner button:hover span {
		background: var(--_clr-blue);
		color: rgb(var(--clr-white));
		border-color: var(--_clr-blue);
	}
}
</style>
