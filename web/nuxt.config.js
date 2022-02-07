export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: '…',
		htmlAttrs: {
			lang: 'de',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
			{
				hid: 'msapplication-TileColor',
				name: 'msapplication-TileColor',
				content: '#ffffff',
			},
			{
				hid: 'msapplication-config',
				name: 'msapplication-config',
				content: '/favicons/browserconfig.xml',
			},
			{
				hid: 'theme-color',
				name: 'theme-color',
				content: '#ffffff',
			},
		],
		link: [
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/favicons/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicons/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicons/favicon-16x16.png',
			},
			{
				rel: 'mask-icon',
				href: '/favicons/safari-pinned-tab.svg',
				color: '#000000',
			},
			{
				rel: 'shortcut icon',
				href: '/favicons/favicon.ico',
			},
		],
	},

	router: {
		trailingSlash: false,
	},

	sitemap: {
		trailingSlash: false,
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [{ src: '~/styles/reset' }, { src: '~/styles/global' }],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/sanity.js',
		'~/plugins/preview.client.js',
		'~/plugins/lazysizes.client.js',
		'~/plugins/resize.client.js',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/sanity/module',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['cookie-universal-nuxt'],

	generate: {
		fallback: true,
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				'postcss-import': {},
				'postcss-preset-env': {
					stage: 3,
					features: {
						'color-mod-function': { unresolved: 'warn' },
						'nesting-rules': true,
						'custom-media-queries': {
							preserve: false,
						},
						'custom-properties': {
							preserve: false,
						},
					},
				},
			},
		},

		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx, { isClient, loaders: { vue } }) {
			// Handle data-src for lazysizes
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src']
				vue.transformAssetUrls.source = ['data-srcset', 'srcset']
			}
		},

		extend(config, { isDev, isClient, loaders: { vue } }) {
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src']
				vue.transformAssetUrls.source = ['data-srcset', 'srcset']
			}
		},
	},

	sanity: {
		projectId: process.env.SANITY_PROJECT_ID,
		dataset: process.env.SANITY_DATASET,
		apiVersion: '2022-02-02',
		useCdn: true,
		additionalClients: {
			preview: {
				projectId: process.env.SANITY_PROJECT_ID,
				dataset: process.env.SANITY_DATASET,
				apiVersion: '2022-02-02',
				useCdn: false,
				withCredentials: true, // necessary for iframe preview
			},
		},
	},
}
