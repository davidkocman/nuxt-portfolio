export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'David Kocman - frontend developer based in Bratislava',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'David Kocman, front end developer based in Bratislava, Slovakia' },
			{ hid: 'author', name: 'author', content: 'David Kocman' },
			{
				hid: 'og:site_name',
				property: 'og:site_name',
				content: 'David Kocman portfolio'
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content: "David Kocman, front end developer based in Bratislava, Slovakia",
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: '/page.png',
			},
			{
				hid: 'og:url',
				property: 'og:url',
				content: `https://www.davidkocman.sk/`,
			},
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
		],
		loading: { color: '#f26a38' }
	},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
		'@nuxtjs/style-resources',
    '@nuxt/typescript-build',
		'@aceforth/nuxt-optimized-images',
		'@nuxtjs/fontawesome',
  ],

	router: {
		linkExactActiveClass: 'active-link',
	},

	styleResources: {
		scss: [
			'~assets/scss/variables.scss',
			'~assets/scss/mixins/*.scss',
			'~assets/scss/misc/*.scss',
		]
	},

	optimizedImages: {
		optimizeImages: true,
		handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
		pngquant: {
			quality: [0.2, 0.4]
		},
		webp: {
			preset: 'default',
			quality: 85,
		},
	},

	googleAnalytics: {
		id: process.env.GA_CODE,
	},

	webfontloader: {
		custom: {
			families: [
				'Roboto:n5',
				'Roboto Mono:n4,n5,n7'
			],
			urls: [
				// for each Google Fonts add url + options you want
				// here add font-display option
				'https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap',
				'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap'
			]
		}
	},

	fontawesome: {
		component: 'fa',
		icons: {
			solid: true,
			brands: true
		}
	},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
		'nuxt-webfontloader',
	],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
