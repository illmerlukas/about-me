// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 700],
      'Roboto+Flex': [400, 500, 600, 700],
      'Roboto+Mono': [300, 400, 500],
    },
    display: 'swap',
    preload: true,
  },
  typescript: {
    typeCheck: true,
  },
})
