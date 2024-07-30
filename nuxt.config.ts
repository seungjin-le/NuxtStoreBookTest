export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/storybook'],
  storybook: {
    url: 'http://localhost:3010',
    port: 3010
  }
})
