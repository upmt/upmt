<template>
  <div class="analysis" :data-moment="analysis.id">
    <div class="analysis-content moment-children">
      <div v-for="m in analysis.rootMoment.children" :key="m.id">
        <MomentTextRepresentation :moment="m">
        </MomentTextRepresentation>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Analysis from 'stores/models/analysis'
import MomentTextRepresentation from './MomentTextRepresentation.vue'

defineProps({
    analysis: { type: Analysis, default: null }
});
</script>

<style scoped>
  .analysis-content {
    display: flex;
    flex-direction: row;
  }
</style>
