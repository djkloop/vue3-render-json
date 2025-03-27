import { createApp } from 'vue'
import App from './App.vue'
import { setupComponents } from './components/setupComponents'
import { setupPlugins } from './plugins'
import './index.css'

const app = createApp(App)
setupPlugins(app)
setupComponents(app)
app.mount('#root')
