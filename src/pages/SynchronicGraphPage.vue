<template>
  <q-page padding>
    <SynchronicGraph
      :projectId="projectId" />
  </q-page>
</template>

<script setup lang="ts">
  import SynchronicGraph from 'components/SynchronicGraph.vue'

  defineOptions({
      name: 'SynchronicGraphPage'
  })

  defineProps<{
      projectId: string
  }>()
</script>
