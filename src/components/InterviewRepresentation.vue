<template>
  <div class="interview"
       v-if="interview"
       :data-interview="interviewId">

    <q-toolbar class="interview-toolbar row">

      <DragElement
        type="moment"
        data="">
        <q-btn>
          New moment
          <q-tooltip anchor="top middle"
                     :offset="[0,30]">Drag this button to create a new moment></q-tooltip>
        </q-btn>
      </DragElement>

      <q-btn
        icon="mdi-chevron-down"
        @click="expandAllMoments" />

      <q-btn
        icon="mdi-chevron-up"
        @click="closeAllMoments" />

      <q-slider v-model="zoom"
                label-value="Zoom"
                class="col-2 q-mx-md"
                :min="0.1"
                :max="2"
                :step=".1"
                >
      </q-slider>

      <q-space />

      <CommentIcon
        :comment="interview.comment" />

    </q-toolbar>

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
  import CommentIcon from './CommentIcon.vue'
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

  function expandAllMoments () {
      store.getRepo().Moment.where('interviewId', props.interviewId).update({ isExpanded: true })
  }

  function closeAllMoments () {
      store.getRepo().Moment.where('interviewId', props.interviewId).update({ isExpanded: false })
  }

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
  .interview-metadata > span {
      margin: 0 1em;
  }
  .scrollable {
      overflow: auto;
  }
</style>
