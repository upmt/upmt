<template>
  <div class="interview" :data-interview="interview.id">
    <div class="interview-metadata">
      <span :style="interviewStyle">
        <span class="interview-participantName">{{ interview.participantName }}</span>
        <span class="interview-date">{{ interview.date }}</span>
      </span>
      <span class="interview-comment">{{ interview.comment }}</span>
    </div>
    <div class="interview-text">Text with {{ interview.interviewText.length }} characters
    </div>

    <AnalysisTextRepresentation :analysis="interview.analysis">
    </AnalysisTextRepresentation>

  </div>
</template>

<script setup lang="ts">
import Interview from 'stores/models/interview'
import AnalysisTextRepresentation from './AnalysisTextRepresentation.vue'

const props = defineProps({
    interview: { type: Interview, default: null }
});
const interviewStyle = () => {
      return `background-color: ${props.interview.color}`
}
</script>
