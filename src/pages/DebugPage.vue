// @ts-nocheck
<template>
  <q-page padding>
    <VObjectInspector :data="projects" />
    <VObjectInspector :expandLevel="2" :expandPaths="['$.*.children']" :data="genericgraphs" />
    <VObjectInspector :data="history.undoStack" />
    <VObjectInspector :data="historyDiffs" />
    <div>
      <pre v-for="message, index in istore.logMessages"
           :key="index">
        {{ message }}
      </pre>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import { useHistory } from 'stores/plugins/piniaHistory'

  import { VObjectInspector } from 'v-object-inspector'
  import 'v-object-inspector/dist/style.css'

  defineOptions({
      name: 'DebugPage'
  })

  const store = useProjectStore()
  const istore = useInterfaceStore()
  const history = useHistory()

  const projects = computed(() => { return store.getAllProjects() })
  const genericgraphs = computed(() => store.getGenericSynchronicGraphs(istore.getProjectId()))

  const historyDiffs = computed(() => history.undoStack.map(entry => entry.diff))
</script>
