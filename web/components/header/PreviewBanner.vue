<template>
	<aside class="preview-banner">
		<button class="preview-banner__button" @click="$nuxt.refresh">
			Refresh preview page
		</button>
		<a
			class="preview-banner__button"
			:href="`${$nuxt.$route.path}?preview=true`"
			target="_blank"
			rel="noopener"
		>
			Open preview in new tab
		</a>
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
	display: flex;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: var(--preview-banner-height);
	padding: 0 1.2rem;
	background: rgb(var(--clr-white));
	color: rgb(var(--clr-black));
	border-bottom: 1px solid var(--_clr-lightgrey);
	z-index: 1000;
}

.preview-banner .preview-banner__button {
	padding: 0.1rem 0.7rem;
	margin-right: 1rem;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
		'Helvetica Neue', sans-serif;
	font-weight: 500;
	font-size: 13px;
	line-height: 1;
	text-align: left;
	color: var(--_clr-grey);
	border-radius: 3px;
	border: 1px solid var(--_clr-lightgrey);
	transition: none;
}

@media (hover: hover) and (pointer: fine) {
	.preview-banner .preview-banner__button:hover {
		background: var(--_clr-blue);
		color: rgb(var(--clr-white));
		border-color: var(--_clr-blue);
	}
}
</style>
