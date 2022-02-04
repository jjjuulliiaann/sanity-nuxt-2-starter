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
				title === '' || title === 'sanity-nuxt-template'
					? this.siteOptions.name
					: `${this.siteOptions.name} – ${title}`,
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
					content: this.siteOptions.metaDescription,
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: this.siteOptions.metaDescription,
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: this.siteOptions.metaKeywords
						? this.siteOptions.metaKeywords.join(',')
						: '',
				},
				{
					hid: 'og:image',
					name: 'og:image',
					content:
						this.siteOptions.image && this.siteOptions.image.asset
							? this.siteOptions.image.asset.url
							: '',
				},
			],
		}
	},
}
</script>
