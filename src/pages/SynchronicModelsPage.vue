<template>
  <q-page
    v-if="project"
    class="column">

    <q-toolbar
      class="print-removed">
      <q-btn-toggle
        size="xs"
        v-model="layout"
        :options="[ { icon: 'mdi-pan-horizontal', value: 'horizontal' },
                  { icon: 'mdi-pan-vertical', value: 'vertical' } ]">
      </q-btn-toggle>
    </q-toolbar>

    <q-card
      class="q-pa-md print-nobreak">

      <q-card-section
        class="bg-secondary">
        <q-btn>Generic model</q-btn>
      </q-card-section>

      <GenericCategoriesOverview
        class="genericmodel"
        :projectId="projectId"
        currentInterviewId=""
        :layout="layout"
        :categories="genericGraphs.categories"
        />

    </q-card>

    <q-card
      v-for="[ interviewLabel, modelInfos ] in definedModels.interviews"
      class="q-pa-md"
      :key="interviewLabel"
      >

      <q-card-section
        class="bg-secondary">
        <q-btn>{{ interviewLabel }}</q-btn>
      </q-card-section>

      <div class="interview-models">
        <q-card class="moment-model q-pa-md q-pt-lg print-nobreak"
                v-for="modelInfo in modelInfos"
                :key="modelInfo.model.id">
          <q-card-section
            class="bg-primary">
            <q-btn icon="mdi-alpha-d-box-outline">{{ modelInfo.moment.name }}</q-btn>
          </q-card-section>
          <div class="specificsynchronicmodel-categories"
               :class="layout"
               >
            <SpecificSynchronicCategoryRepresentation
              v-for="c in modelInfo.model.categories"
              :key="c.id"
              :isGeneric="false"
              :layout="layout"
              :hideJustifications="false"
              :categoryId="c.id" />
          </div>
        </q-card>
      </div>

    </q-card>

    <q-card
      v-if="definedModels.detached.length"
      class="q-pa-md row"
      >

      <q-card-section
        class="bg-secondary">
        <q-btn no-caps>Detached models</q-btn>
      </q-card-section>

      <q-card
        v-for="model in definedModels.detached"
        :key="model.id"
        >
        <q-card-section
          class="bg-primary">
          <q-btn>Detached model <strong>{{ model.name }}</strong></q-btn>
        </q-card-section>
        <div class="detached-model">
          <q-btn icon="mdi-alpha-s-box-outline">{{ model.name }}</q-btn>
          <SpecificSynchronicCategoryRepresentation
            v-for="c in model.categories"
            :key="c.id"
            :isGeneric="false"
            :layout="layout"
            :hideJustifications="false"
            :categoryId="c.id" />
        </div>
      </q-card>
    </q-card>

  </q-page>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  //  import { storeToRefs } from 'pinia'
  import { useProjectStore } from 'stores/projectStore'
  import GenericCategoriesOverview from 'components/GenericCategoriesOverview.vue'
  import SpecificSynchronicCategoryRepresentation from 'components/SpecificSynchronicCategoryRepresentation.vue'
  import SpecificSynchronicModel from 'stores/models/specificsynchronicmodel'
  import Moment from 'stores/models/moment'
  import Interview from 'stores/models/interview'
  import { groupBy } from 'stores/util'

  type ModelInfo = {
      model: SpecificSynchronicModel,
      moment: Moment,
      interview: Interview,
      interviewLabel: string
  }

  defineOptions({
      name: 'SynchronicModelsPage'
  })

  const props = defineProps({
      projectId: {
          type: String,
          default: ""
      }
  })

  const store = useProjectStore()

  const layout = ref('horizontal')

  const project = computed(() => {
      if (props.projectId) {
          const p = store.getFullProject(props.projectId)
          return p
      } else {
          return null
      }
  })

  const genericGraphs = computed(() => store.getGenericSynchronicGraphs(props.projectId))

  /* Return a list of defined models as an object { interviews: [ interviewName: [] ], detached: [ ] }
   */
  const definedModels = computed(() => {
      const models = store.getSpecificSynchronicModels(props.projectId).filter(model => model.categories.length)

      const moments = Object.fromEntries(store.getMomentsByProject(props.projectId).map(moment => [ moment.id, moment ]))

      const detachedModels = models.filter(model => model.detachedModelId)
      const interviewModels = groupBy(models
          .filter(model => model.momentId)
          .map(model => {
              const interview = store.getInterviewByMoment(model.momentId)
              return {
                  model,
                  moment: moments[model.momentId],
                  interview: interview,
                  interviewLabel: interview?.label ?? ""
              } as ModelInfo
          }),
                                      'interviewLabel')
      return {
          interviews: Object.entries(interviewModels),
          detached: detachedModels
      }
  })
</script>
<style scoped>
  .specificsynchronicmodel-categories {
      display:  flex;
      flex-direction: column;
  }
  .vertical .specificsynchronicmodel-categories {
      flex-direction: row;
  }
  .genericmodel {
    --overview-height: 24px;
    --overview-width: 100px;
    --overview-font-size: 12px;
  }
</style>
