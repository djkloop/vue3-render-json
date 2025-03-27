import { defineConfig } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx'
import { UnoCSSRspackPlugin } from '@unocss/webpack/rspack'
import CompressionPlugin from 'compression-webpack-plugin'

export default defineConfig({
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginVue(),
    pluginVueJsx(),
  ],
  tools: {
    rspack: {
      plugins: [
        UnoCSSRspackPlugin(),
        new CompressionPlugin(),
      ],
    },
  },

})
