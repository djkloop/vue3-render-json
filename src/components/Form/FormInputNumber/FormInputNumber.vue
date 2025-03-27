<script setup lang="ts">
import { ref } from 'vue'
import { FormInputNumberProps } from './FormInputNumber.props';
import Counter from '../../Counter/Counter.vue';

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
    <Counter :key="id"/>
  </div>
</template>

<style scoped>

</style>
