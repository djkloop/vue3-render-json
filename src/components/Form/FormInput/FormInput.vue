<script setup lang="ts">
import { ref } from 'vue'
import { FormInputProps } from './FormInput.props';

const { id } =  defineProps<FormInputProps>()

defineOptions({
  name: 'FormInput',
})

const input = ref('')
</script>

<template>
  <div>
    <h1>Form Input - {{ id }}</h1>
    <input class="border" v-model="input" type="text">
  </div>
</template>

<style scoped>

</style>
