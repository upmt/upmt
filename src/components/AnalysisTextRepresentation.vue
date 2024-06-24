<template>
  <div v-if="analysis"
       class="analysis"
       :data-moment="analysisId">
    <div class="analysis-content moment-children">
      <div v-for="m in analysis.rootMoment.children" :key="m.id">
        <MomentTextRepresentation :momentId="m.id">
        </MomentTextRepresentation>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import MomentTextRepresentation from './MomentTextRepresentation.vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()
  const props = defineProps({
      analysisId: { type: String, default: "" }
  });

  const analysis = computed(() => {
      const result = store.getAnalysis(props.analysisId)
      console.log("Analysis", result)
      return result
  })
</script>

<style scoped>
  .analysis-content {
    display: flex;
    flex-direction: row;
  }
  .analysis {
      zoom: var(--chart-zoom);
  }
</style>
