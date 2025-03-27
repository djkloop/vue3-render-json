import { defineConfig } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx'
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin'
import { UnoCSSRspackPlugin } from '@unocss/webpack/rspack'
// import CompressionPlugin from 'compression-webpack-plugin'

const isOpenRsDoctor = import.meta.env.PUBLIC_RSDOCTOR === 'true'

export default defineConfig({
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginVue(),
    pluginVueJsx(),
  ],
  tools: {
    rspack(_, { appendPlugins }) {
      appendPlugins([
        // 如果有这个插件 RsdoctorRspackPlugin 没效果
        UnoCSSRspackPlugin(),
        isOpenRsDoctor && new RsdoctorRspackPlugin(),
      ])
    },
  },

})
