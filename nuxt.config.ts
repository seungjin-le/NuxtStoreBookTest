export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  alias: {
    '@': '/src',
    components: '/components',
    assets: '/assets',
    styles: '/assets/styles'
  }
})
