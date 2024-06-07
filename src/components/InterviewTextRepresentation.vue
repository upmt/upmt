<template>
  <div class="interview" :data-interview="interview.id">
    <div class="interview-metadata">
      <span class="interview-title"
            :style="{ backgroundColor: interview.color }">
        <span class="interview-participantName">{{ interview.participantName }}</span>
        &nbsp;(<span class="interview-date">{{ interview.date }}</span>)
      </span>
      <span class="interview-comment">{{ interview.comment }}</span>
      <q-slider v-model="zoom" :min="0.1" :max="2" :step=".1"></q-slider>
    </div>

    <AnalysisTextRepresentation :analysis="interview.analysis">
    </AnalysisTextRepresentation>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useCssVar } from '@vueuse/core'
import Interview from 'stores/models/interview'
import AnalysisTextRepresentation from './AnalysisTextRepresentation.vue'

defineProps({
    interview: { type: Interview, default: null }
})

const el = ref(null)
const zoom = useCssVar('--chart-zoom', el) as unknown as Ref<number>
</script>

  <style>
  .interview::-webkit-scrollbar:horizontal{} {
    background-color: red;
    width: 32px;
  }
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
