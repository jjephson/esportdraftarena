// https://nuxt.com/docs/api/configuration/nuxt-config

import { type NuxtConfig } from '@nuxt/types/config'

const config: NuxtConfig = {
  ssr: true,
  css: ['/assets/global.css'],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
  ],
  devtools: {
    enabled: true
  },
  modules: [
  ],
  plugins: [
  ],
  typescript: {
    strict: true
  },
}

export default config