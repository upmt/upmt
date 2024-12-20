<template>
  <router-view />
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import BaseModel from 'stores/models/basemodel'

  const store = useProjectStore()

  const istore = useInterfaceStore()

  defineOptions({
      name: 'App'
  })

  onMounted(() => {
      BaseModel.context = {
          getUsername: istore.getUsername,
          getProjectId: istore.getProjectId
      }
      // Load username
      istore.setUsername(localStorage.getItem('upmtUsername') ?? "anonymous")
      store.loadProject('./examples/example.upmt');
      store.loadProject('./examples/ruptur-example.upmt');
      (window as any).store = store;
      (window as any).repo = store.getRepo();
      console.log("store = ", store);
      console.log("repo = ");
  })
</script>

<style>
  :root {
    --transitional-color: #bbb;
    --transitional-bar-width: 12%;
    --header-height: 82px;
    --chart-zoom: 1;
    --moment-minimum-width: 200px;
  }
</style>
