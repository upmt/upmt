<template>
  <q-page padding>
    <VObjectInspector :data="projects" />
    <VObjectInspector :expandLevel="2" :expandPaths="['$.*.children']" :data="genericmodels" />
  </q-page>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  import { VObjectInspector } from 'v-object-inspector'
  import 'v-object-inspector/dist/style.css'

  defineOptions({
      name: 'DebugPage'
  })

  const store = useProjectStore()
  const istore = useInterfaceStore()
  const projects = computed(() => { return store.getAllProjects() })
  const genericmodels = computed(() => store.getGenericSynchronicModels(istore.getProjectId()))
</script>
