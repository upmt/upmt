<template>
  <div class="interview"
       v-if="interview"
       :data-interview="interviewId">
    <div class="interview-metadata row">
      <q-icon
        size="md"
        name="mdi-comment-outline">
        <q-tooltip>
          <span class="interview-comment">{{ interview.comment }}</span>
        </q-tooltip>
      </q-icon>
      <DragElement
        type="moment"
        data="">
        <q-btn>
          New moment
          <q-tooltip>Drag this button to create a new moment></q-tooltip>
        </q-btn>
      </DragElement>
      <q-slider v-model="zoom"
                label-value="Zoom"
                class="col-2 q-mx-md"
                :min="0.1"
                :max="2"
                :step=".1"
                >
      </q-slider>
    </div>

    <AnalysisRepresentation
      class="scrollable"
      v-if="interview.analysis"
      :highlighted="highlighted"
      :analysisId="interview.analysis.id">
    </AnalysisRepresentation>

  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import type { Ref } from 'vue'
  import { useCssVar } from '@vueuse/core'
  import DragElement from './DragElement.vue'
  import AnalysisRepresentation from './AnalysisRepresentation.vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const props = defineProps({
      interviewId: { type: String, default: "" },
      highlighted: { type: String, default: "" }
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
  .scrollable {
      overflow: auto;
  }
</style>
