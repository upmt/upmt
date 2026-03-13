<template>
  <q-page padding>
    <EpisodeAnalysis
      :projectId="projectId" />
  </q-page>
</template>

<script setup lang="ts">
  import EpisodeAnalysis from 'components/EpisodeAnalysis.vue'

  defineOptions({
      name: 'EpisodeAnalysisPage'
  })

  defineProps<{
      projectId: string
  }>()
</script>
