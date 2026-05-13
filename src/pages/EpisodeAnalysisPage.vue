<template>
  <q-page padding>
    <EpisodeAnalysis
      v-if="project"
      :projectId="projectId" />
  </q-page>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'

  import EpisodeAnalysis from 'components/EpisodeAnalysis.vue'

  defineOptions({
      name: 'EpisodeAnalysisPage'
  })

  const props = defineProps<{
      projectId: string
  }>()
  const store = useProjectStore()
  const project = computed(() => store.activateProject(props.projectId))
</script>
