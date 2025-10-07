<template>
  <div v-if="analysis"
       class="analysis"
       :data-moment="analysisId">
    <div class="analysis-content moment-children">
      <div v-for="m in analysis.rootMoment.children" :key="m.id">
        <MomentRepresentation
          :momentId="m.id">
        </MomentRepresentation>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { computed, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import MomentRepresentation from './MomentRepresentation.vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  const store = useProjectStore()

  const istore = useInterfaceStore()

  const props = defineProps({
      analysisId: { type: String, default: "" }
  })

  const { highlightedMomentId } = storeToRefs(istore)

  const analysis = computed(() => {
      const result = store.getAnalysis(props.analysisId)
      return result
  })

  watch(highlightedMomentId, () => {
      if (highlightedMomentId.value) {
          // Scroll element into view
          const element = document.querySelector(`[data-moment="${highlightedMomentId.value}"]`)
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
</style>
