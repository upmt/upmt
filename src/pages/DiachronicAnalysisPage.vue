<template>
  <q-page padding>
    <DiachronicAnalysis
      :projectId="projectId" />
  </q-page>
</template>

<script setup lang="ts">
  import DiachronicAnalysis from 'components/DiachronicAnalysis.vue'

  defineOptions({
      name: 'DiachronicAnalysisPage'
  })

  defineProps<{
      projectId: string
  }>()
</script>
