import type { App } from 'vue'
import FormInput from './Form/FormInput/FormInput.vue'
import FormInputNumber from './Form/FormInputNumber/FormInputNumber.vue'
import FormSubTable from './Form/FormSubTable/FormSubTable.vue'
import { setupVxeUIRenderer } from './SubTableRenderItem/setupSubTableRenderer'

export function setupComponents(app: App) {
  app.component(FormInput.name as string, FormInput)
  app.component(FormInputNumber.name as string, FormInputNumber)
  app.component(FormSubTable.name as string, FormSubTable)

  //
  setupVxeUIRenderer()
}
