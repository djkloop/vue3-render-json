import { VxeUI } from 'vxe-pc-ui'
import FormInput from '../Form/FormInput/FormInput.vue'

export function rendererFormInput() {
  VxeUI.renderer.add(FormInput.name as string, {
    renderTableDefault(_, params) {
      return (
        <FormInput
          id={params.rowIndex}
          key={`form_input${params.columnIndex}`}
        />
      )
    },
  })
}
