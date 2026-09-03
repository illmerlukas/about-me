// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
        {
          charset: 'utf-8',
        },
      ],
    },
  },
  routeRules: {
    '/': {
      prerender: true,
    },
  },
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
