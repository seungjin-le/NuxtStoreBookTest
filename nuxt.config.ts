export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/storybook'],
  alias: {
    '@': '/src'
  },
  storybook: {
    port: 3010
  }
})
