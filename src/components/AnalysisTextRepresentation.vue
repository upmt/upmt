<template>
  <div class="analysis" :data-moment="analysis.id">
    <div class="analysis-metadata">
      <span class="analysis-name">Analysis {{ analysis.name }}</span>
    </div>
    <div class="analysis-content">
      <MomentTextRepresentation :moment="analysis.rootMoment">
      </MomentTextRepresentation>
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
