/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue',
    './stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)',
    './components/**/*.story.{vue,js,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
