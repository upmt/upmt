<template>
  <div v-if="analysis"
       class="analysis"
       :data-moment="analysisId">
    <div class="analysis-content moment-children">
      <div v-for="m in analysis.rootMoment.children" :key="m.id">
        <MomentRepresentation
          :highlighted="highlighted"
          :momentId="m.id">
        </MomentRepresentation>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { computed, watch } from 'vue'
  import MomentRepresentation from './MomentRepresentation.vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()
  const props = defineProps({
      analysisId: { type: String, default: "" },
      highlighted: { type: String, default: "" }
  })

  const analysis = computed(() => {
      const result = store.getAnalysis(props.analysisId)
      return result
  })

  watch(() => props.highlighted, () => {
      if (props.highlighted) {
          // Scroll element into view
          const element = document.querySelector(`[data-moment="${props.highlighted}"]`)
          if (element) {
              element.scrollIntoView()
          }
      }
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
