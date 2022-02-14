export default {
	head() {
		return this.page.seo
			? {
					title: this.page.title ? this.page.title : '',
					meta: [
						{
							hid: 'og:title',
							name: 'og:title',
							content: `${
								this.page.title ? this.page.title : ''
							} – ${this.$store.state.siteOptions.name}`,
						},
						{
							hid: 'description',
							name: 'description',
							content: this.page.seo.metaDescription
								? this.page.seo.metaDescription
								: this.$store.state.siteOptions.seo
										.metaDescription,
						},
						{
							hid: 'og:description',
							name: 'og:description',
							content: this.page.seo.metaDescription
								? this.page.seo.metaDescription
								: this.$store.state.siteOptions.seo
										.metaDescription,
						},
						{
							hid: 'keywords',
							name: 'keywords',
							content: this.page.seo.metaKeywords
								? this.page.seo.metaKeywords.join(',')
								: this.$store.state.siteOptions.seo.metaKeywords
								? this.$store.state.siteOptions.seo.metaKeywords.join(
										','
								  )
								: '',
						},
						{
							hid: 'og:image',
							name: 'og:image',
							content:
								this.page.seo.ogImage &&
								this.page.seo.ogImage.asset
									? this.page.seo.ogImage.asset.url
									: this.$store.state.siteOptions.seo
											.ogImage &&
									  this.$store.state.siteOptions.seo.ogImage
											.asset
									? this.$store.state.siteOptions.seo.ogImage
											.asset.url
									: '',
						},
					],
			  }
			: {
					title: this.page.title ? this.page.title : '',
					meta: [
						{
							hid: 'og:title',
							name: 'og:title',
							content: `${
								this.page.title ? this.page.title : ''
							} – ${this.$store.state.siteOptions.name}`,
						},
					],
			  }
	},
}
