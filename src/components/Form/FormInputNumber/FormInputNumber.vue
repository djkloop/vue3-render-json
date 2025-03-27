<script setup lang="ts">
import { ref } from 'vue'
import { FormInputNumberProps } from './FormInputNumber.props';

const { id } =  defineProps<FormInputNumberProps>()

defineOptions({
  name: 'FormInputNumber',
})

const count = ref(0)
</script>

<template>
  <div>
    <h1>Form Input Number - {{ id }}</h1>
    <input class="border"  v-model="count" type="number">
    <h1>Count: {{ count }}</h1>
  </div>
</template>

<style scoped>

</style>
