<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="increment">
      Increment
    </button>
  </div>
</template>

<style scoped>

</style>
