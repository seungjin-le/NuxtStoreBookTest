const { mergeConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
/** @type { import('storybook-vue').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chromatic-com/storybook'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vue()],
      resolve: {
        alias: {
          '#build': '/.nuxt',
          'virtual:nuxt-runtime-config': '/.nuxt/nuxt.config.mjs'
        }
      }
    })
  },
  docs: {
    autodocs: true
  }
}

export default config
