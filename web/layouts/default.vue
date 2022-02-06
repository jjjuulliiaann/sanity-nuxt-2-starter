<template>
	<div class="container">
		<HeaderPreviewBanner v-if="$nuxt.isPreview" />
		<Header />
		<Nuxt />
		<Footer />
	</div>
</template>

<script>
export default {
	data() {
		return {
			siteOptions: this.$store.state.siteOptions,
		}
	},

	head() {
		return {
			titleTemplate: (title) =>
				title === '' || title === '…'
					? this.siteOptions.name
					: `${title} – ${this.siteOptions.name}`,
			meta: [
				{
					hid: 'og:title',
					name: 'og:title',
					content: this.siteOptions.name,
				},
				{
					hid: 'og:site_name',
					name: 'og:site_name',
					content: this.siteOptions.name,
				},
				{
					hid: 'description',
					name: 'description',
					content: this.siteOptions.seo.metaDescription,
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: this.siteOptions.seo.metaDescription,
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: this.siteOptions.seo.metaKeywords
						? this.siteOptions.seo.metaKeywords.join(',')
						: '',
				},
				{
					hid: 'og:image',
					name: 'og:image',
					content:
						this.siteOptions.seo.ogImage &&
						this.siteOptions.seo.ogImage.asset
							? this.siteOptions.seo.ogImage.asset.url
							: '',
				},
			],
		}
	},
}
</script>
