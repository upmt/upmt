<template>
  <router-view />
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import { listStoredProjects } from 'stores/storage'
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
      // Load stored projects
      for (const id of listStoredProjects()) {
          try {
              store.loadStoredProject(id)
          } catch (error) {
              console.log("Cannot load project", id, error)
          }
      }
      // Load sample projects if they were not stored
      for (const id of [ 'example', 'ruptur-example', 'ruptur2-example' ]) {
          if (! store.getProject(id)) {
              void store.loadProject(`./examples/${id}.upmt`)
          }
      }
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
    --synchronic-category-header-width: var(--moment-minimum-width);
    --synchronic-category-descriptem-width: calc(var(--moment-minimum-width) + 50px);
  }
</style>
