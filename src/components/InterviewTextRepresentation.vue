<template>
  <div class="interview" :data-interview="interview.id">
    <div class="interview-metadata">
      <span class="interview-title"
            :style="{ backgroundColor: interview.color }">
        <span class="interview-participantName">{{ interview.participantName }}</span>
        &nbsp;(<span class="interview-date">{{ interview.date }}</span>)
      </span>
      <span class="interview-comment">{{ interview.comment }}</span>
    </div>

    <AnalysisTextRepresentation :analysis="interview.analysis">
    </AnalysisTextRepresentation>

  </div>
</template>

<script setup lang="ts">
import Interview from 'stores/models/interview'
import AnalysisTextRepresentation from './AnalysisTextRepresentation.vue'

defineProps({
    interview: { type: Interview, default: null }
});
</script>

<style>
  .interview-metadata {
    display: flex;
    flex-direction: row;
  }
  .interview-metadata > span {
      margin: 0 1em;
  }
  .interview-title {
      font-weight: bold;
  }
</style>
