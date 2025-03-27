<script setup lang="ts">
import { shallowRef } from 'vue';
import { useRenderFakeJson } from './hooks/useRenderFakeJson';

const { data } = useRenderFakeJson(50, 100)
const renderJson = shallowRef(data);

</script>

<template>
  <div class="grid grid-cols-3 gap-4 m-2">
    <template v-for="item in renderJson" :key="item.id">
      <component 
        class="border p-2" 
        :is="item.type" 
        :id="item.id"
        :columns="item.columns"
        :data="item.data"
      />
    </template>
  </div>
</template>

<style scoped>

</style>
