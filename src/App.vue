<template>
  <router-view />
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import { getStoredProjectInfo, importProjectFromUrl } from 'stores/storage'
  import BaseModel from 'stores/models/basemodel'

  const store = useProjectStore()

  const istore = useInterfaceStore()

  defineOptions({
      name: 'App'
  })

  function onBeforeUnload (event: Event) {
      if (istore.isModified) {
          event.preventDefault()
          event.returnValue = true
          return "There are unsaved changes. Really quit?" as string
      }
  }

  onMounted(() => {
      BaseModel.context = {
          getUsername: istore.getUsername,
          getProjectId: istore.getProjectId,
          setModified: istore.setModified
      }
      window.addEventListener('beforeunload', onBeforeUnload)
      // Load username
      istore.setUsername(localStorage.getItem('upmtUsername') ?? "anonymous")

      // Load sample projects if they were not stored
      for (const id of [ 'example' ]) {
          if (! getStoredProjectInfo(id)) {
              try {
                  void importProjectFromUrl(`./examples/${id}.upmt`, id)
              } catch (error) {
                  console.log(`Cannot load example ${id}:`, error)
              }
          }
      }
      const id = istore.currentProjectId
      if (id) {
          // Load currentProjectId
          try {
              store.loadStoredProject(id)
          } catch (error) {
              console.log("Cannot load project", id, error)
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
    --project-width: 250px;
    --moment-minimum-width: 200px;
    --synchronic-category-header-width: var(--moment-minimum-width);
    --synchronic-category-descriptem-width: var(--moment-minimum-width);
    --synchronic-category-relation-width: 60px;
    --overview-height: 12px;
    --overview-width: 50px;
    --overview-font-size: 8px;
    }

@media print {
    .print-hidden {
        visibility: hidden;
    }
    .print-removed {
        display: none;
    }
    .print-nobreak {
        break-inside: avoid-page;
    }
    /* Remove VueZoomable controls */
    .controll__buttons {
        display: none;
    }
}
</style>
