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
        icon="mdi-arrow-expand-down"
        @click="expandAllMoments">
        <q-tooltip anchor="top middle" :offset="[0,30]">
          Expand all moments
        </q-tooltip>
      </q-btn>

      <q-btn
        icon="mdi-arrow-expand-up"
        @click="closeAllMoments">
        <q-tooltip anchor="top middle" :offset="[0,30]">
          Close all moments
        </q-tooltip>
      </q-btn>

      <q-btn
        icon="mdi-fit-to-page-outline"
        @click="zoomToFit">
      </q-btn>

      <q-slider v-model="zoom"
                label
                markers
                switch-label-side
                class="col-2 q-mx-md"
                :min="0.1"
                :max="4"
                :step=".1"
                >
      </q-slider>

      <q-btn
        icon="mdi-fit-to-screen-outline"
        @click="zoomMoment">
      </q-btn>

      <q-slider v-model="minimumWidth"
                label
                markers
                switch-label-side
                class="col-2 q-mx-md"
                :min="50"
                :max="500"
                :step="10"
                >
      </q-slider>

      <q-space />

      <CommentIcon
        :comment="interview.comment" />

    </q-toolbar>

    <AnalysisRepresentation
      ref="analysis"
      class="scrollable analysis"
      v-if="interview.analysis"
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
      interviewId: { type: String, default: "" }
  })

  const interview = computed(() => store.getInterview(props.interviewId))

  const el = ref(null)

  const zoomVar = useCssVar('--chart-zoom', el) as unknown as Ref<number>

  const momentMinimumWidthVar = useCssVar('--moment-minimum-width', el) as unknown as Ref<string>

  const minimumWidth = computed({
      get: () => parseFloat(momentMinimumWidthVar.value),
      set: (value) => { momentMinimumWidthVar.value = `${value}px` }
  })

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

  function zoomToWidth (width: number) {
      const div = document.querySelector(".analysis")
      if (div && div.parentElement) {
          console.log("Setting zoom", zoom.value, width,
                      'parent', div.parentElement.clientWidth, div.parentElement.scrollWidth,
                      'div', div.clientWidth, div.scrollWidth)

          const parentWidth = div.parentElement.clientWidth - 40
          const newZoom = parentWidth / width
          zoom.value = newZoom
      }
  }

  function zoomToFit () {
      const div = document.querySelector(".analysis")
      if (div) {
          zoomToWidth(div.scrollWidth * zoom.value)
      }
  }

  function zoomMoment () {
      // Use parseFloat to convert '200px' string to 200 number
      zoomToWidth(3 * parseFloat(momentMinimumWidthVar.value))
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
