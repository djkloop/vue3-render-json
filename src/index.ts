/* eslint-disable perfectionist/sort-imports */
// 如果不加在unocss插件的同时也必须要把这行代码去掉，要不然也会报错
import 'uno.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupComponents } from './components/setupComponents'
import { setupPlugins } from './plugins'
import './index.css'

const app = createApp(App)
setupPlugins(app)
setupComponents(app)
app.mount('#root')
