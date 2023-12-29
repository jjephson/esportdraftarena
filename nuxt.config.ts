// https://nuxt.com/docs/api/configuration/nuxt-config

import { type NuxtConfig } from '@nuxt/types/config'

const config: NuxtConfig = {
  // Your Nuxt.js configuration...
  buildModules: ['@nuxt/typescript-build'],
  devtools: {
    enabled: true
  },
}

export default config