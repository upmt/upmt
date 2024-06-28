<template>
  <div class="interview"
       v-if="interview"
       :data-interview="interviewId">
    <div class="interview-metadata">
      <span class="interview-title"
            :style="{ backgroundColor: interview.color }">
        <span class="interview-participantName">{{ interview.participantName }}</span>
        &nbsp;(<span class="interview-date">{{ interview.date }}</span>)
      </span>
      <span class="interview-comment">{{ interview.comment }}</span>
      <q-slider v-model="zoom"
                :min="0.1"
                :max="2"
                :step=".1"
                ></q-slider>
    </div>

    <AnalysisTextRepresentation
      class="scrollable"
      v-if="interview.analysis"
      :analysisId="interview.analysis.id">
    </AnalysisTextRepresentation>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import { useCssVar } from '@vueuse/core'
import AnalysisTextRepresentation from './AnalysisTextRepresentation.vue'
import { useProjectStore } from 'stores/projectStore'

const store = useProjectStore()

const props = defineProps({
    interviewId: { type: String, default: "" }
})

const interview = computed(() => store.getInterview(props.interviewId))
const el = ref(null)
const zoomVar = useCssVar('--chart-zoom', el) as unknown as Ref<number>
// useCssVar returns a string, and QSlider expects a number. Convert it.
// Using it directly works but produces a warning.
const zoom = computed({
    get: () => Number(zoomVar.value),
    set: (value) => { zoomVar.value = value }
  })
</script>

  <style>
  .interview {
    display: flex;
    flex-direction: column;
    overflow: hidden !important;
  }
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
  .scrollable {
      overflow: auto;
  }
</style>
