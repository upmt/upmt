<template>
  <router-view />
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  defineOptions({
      name: 'App'
  })

  onMounted(() => {
      store.loadProject('./examples/example.upmt');
      (window as any).store = store;
      console.log("Debugging store", store);
  })
</script>

<style>
  :root {
    --transitional-color: #bbb;
    --transitional-bar-width: 12%;
    --header-height: 82px;
    --chart-zoom: 1;
  }
</style>
