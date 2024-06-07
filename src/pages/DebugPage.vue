<template>
  <q-page padding>
    <VObjectInspector :data="projects" />
  </q-page>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'

  import { VObjectInspector } from 'v-object-inspector'
  import 'v-object-inspector/dist/style.css'

  defineOptions({
      name: 'DebugPage'
  })

  const pstore = useProjectStore()
  const projects = computed(() => { return pstore.getAllProjects() })
</script>
