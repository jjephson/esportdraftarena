// https://nuxt.com/docs/api/configuration/nuxt-config

import { type NuxtConfig } from '@nuxt/types/config'

const config: NuxtConfig = {
	ssr: true,
	css: ['~/assets/global.css'],
	alias: {
		assets: "/<rootDir>/assets",
	},
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/eslint-module',
	],
	devtools: {
		enabled: true
	},
	modules: [
		'@nuxt/image',
	],
	plugins: [
	],
	typescript: {
		strict: true
	},
	image: {
		dir: '~/assets/images',
		quality: 80,
		format: ['webp'],
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		}
	},
	routeRules: {
		// Homepage pre-rendered at build time
		'/': { prerender: true },
		// Add cors headers on API routes
		'/api/**': { cors: true },
	},
}

export default config