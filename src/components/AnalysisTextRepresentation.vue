<template>
  <div class="analysis" :data-moment="analysis.id">
    <div class="analysis-content">
      <MomentTextRepresentation :moment="analysis.rootMoment"
                                layout="horizontal">
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
