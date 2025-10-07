<template>
  <div class="interview flex column"
       v-if="interview"
       :data-interview="interviewId">

    <q-toolbar class="interview-toolbar row">

      <DragElement
        type="moment"
        data="">
        <q-btn
          size="sm"
          @click="createMoment">
          New moment
          <q-tooltip anchor="top middle"
                     :offset="[0,30]">Drag this button to create a new moment></q-tooltip>
        </q-btn>
      </DragElement>

      <q-btn
        icon="mdi-arrow-expand-down"
        size="sm"
        @click="expandAllMoments">
        <q-tooltip anchor="top middle" :offset="[0,30]">
          Expand all moments
        </q-tooltip>
      </q-btn>

      <q-btn
        icon="mdi-arrow-expand-up"
        size="sm"
        @click="closeAllMoments">
        <q-tooltip anchor="top middle" :offset="[0,30]">
          Close all moments
        </q-tooltip>
      </q-btn>

      <div class="col-2 q-mx-md q-pa-no">
        <q-badge color="info">
          Moment width: {{ minimumWidth }}
        </q-badge>

        <q-slider v-model="minimumWidth"
                  :min="50"
                  :max="500"
                  :step="10"
                  >
        </q-slider>
      </div>

      <q-space />

    </q-toolbar>

    <VueZoomable
      selector=".analysis"
      v-model:zoom="zoomLevel"
      :minZoom="0.5"
      :maxZoom="3"
      >
      <AnalysisRepresentation
        ref="analysis"
        class="scrollable analysis"
        v-if="interview.analysis"
        :analysisId="interview.analysis.id">
      </AnalysisRepresentation>
    </VueZoomable>
  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import type { Ref } from 'vue'
  import { useCssVar } from '@vueuse/core'

  import VueZoomable from "vue-zoomable"
  import "vue-zoomable/dist/style.css"

  import DragElement from './DragElement.vue'
  import AnalysisRepresentation from './AnalysisRepresentation.vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  const istore = useInterfaceStore()

  const store = useProjectStore()

  const props = defineProps({
      interviewId: { type: String, default: "" }
  })

  const interview = computed(() => store.getInterview(props.interviewId))

  const el = ref(null)

  const zoomLevel = ref(1.0)

  const momentMinimumWidthVar = useCssVar('--moment-minimum-width', el) as unknown as Ref<string>

  const minimumWidth = computed({
      get: () => parseFloat(momentMinimumWidthVar.value),
      set: (value) => { momentMinimumWidthVar.value = `${value}px` }
  })

  function expandAllMoments () {
      store.getRepo().Moment.where('interviewId', props.interviewId).update({ isExpanded: true })
  }

  function closeAllMoments () {
      store.getRepo().Moment.where('interviewId', props.interviewId).update({ isExpanded: false })
  }

  /**
   * Create a new moment at the end
   */
  function createMoment () {
      // Get the analysis and the first level of rootMoment children
      if (interview.value) {
          const analysis = store.getAnalysis(interview.value.analysis.id)
          if (analysis) {
              const moments = analysis.rootMoment.children
              if (moments.length) {
                  const lastMoment = moments[moments.length - 1]
                  if (lastMoment) {
                      store.addMoment(istore.newMomentId(),
                                      lastMoment.id,
                                      "after")
                  }
              }
          }
      }
  }

</script>

<style>
  .interview {
    display: flex;
    flex-direction: column;
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
      flex-grow: 1;
  }
</style>
