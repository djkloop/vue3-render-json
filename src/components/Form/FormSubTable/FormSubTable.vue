<script setup lang="ts">
import type { VxeTableInstance } from 'vxe-table'
import type { FormSubTableProps } from './FormSubTable.props'
import { ref, shallowRef } from 'vue'

defineOptions({
  name: 'FormSubTable',
})

const { id, columns, data } = defineProps<FormSubTableProps>()
const innerTableData = shallowRef(data)

const tableRef = ref<VxeTableInstance>()
</script>

<template>
  <div>
    FormSubTable - {{ id }}
    <vxe-grid
      ref="tableRef"
      :data="innerTableData"
      :columns="columns"
    />
  </div>
</template>

<style scoped>

</style>
