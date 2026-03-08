import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app/',
  css: ['./app/assets/css/main.css'],

  vite: {
	plugins: [
	  tailwindcss(),
	]
  },

  components: {
	dirs: [
	  '~/components',
	  '~/components/ui'
	],
  },

  app: {
	head: {
	  title: "Dowhill — Онлайн магазин снежного оборудования",
	  meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
	  ],
	  link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	  ],
	},
	pageTransition: { name: 'page', mode: 'out-in' },
	layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  experimental: {
	payloadExtraction: false,
	renderJsonPayloads: true,
	typedPages: true,
  },

  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
	families: {
	  'Oswald': {
		wght: [400, 500, 600]
	  },
	  'Inter': {
		wght: [400, 600]
	  }
	}
  }
})