import type { App } from 'vue'
// vue-scan | vxe-table
import type { VueScanOptions } from 'z-vue-scan'
import VxeUIAll from 'vxe-pc-ui'
import VxeUITable from 'vxe-table'
import VueScan from 'z-vue-scan'
import 'vxe-pc-ui/lib/style.css'
import 'vxe-table/lib/style.css'

function setupVxeUI(app: App) {
  app.use(VxeUIAll)
  app.use(VxeUITable)
}

function setupVueScan(app: App) {
  app.use<VueScanOptions>(VueScan, {
    enable: true,
  })
}

export function setupPlugins(app: App) {
  setupVueScan(app)
  setupVxeUI(app)
}
