<template>
  <div>
    <q-splitter
      v-model="splitterModel"
      :limits="[5,50]">

      <template v-slot:before>
        <GenericDiachronicCategoriesRepresentation
          title="Generic Diachronic Categories"
          class="generic-diachronic-categories"
          :projectId="projectId"
          currentInterviewId="">
        </GenericDiachronicCategoriesRepresentation>
      </template>

      <template v-slot:after>
        <q-toolbar class="row toolbar">

          <q-btn-toggle
            size="xs"
            v-model="editViewMode"
            :options="[ { icon: 'mdi-pan-horizontal', value: 'horizontal' },
                      { icon: 'mdi-pan-vertical', value: 'vertical' } ]">
          </q-btn-toggle>

          <span class="q-px-md text-bold">Mode</span>
          <q-btn-toggle
            size="xs"
            v-model="genericDiachronicMode"
            :options="[ { icon: 'mdi-alpha-d-box-outline', value: '' },
                      { icon: 'mdi-alpha-d-box', value: 'replace' } ]">
          </q-btn-toggle>

          <span class="q-px-md text-bold">Depth&nbsp;:</span>
          <q-slider v-model="maximumDepth"
                    class="col-4"
                    snap
                    markers
                    marker-labels
                    :min="0"
                    :max="4"
                    :step="1"
                    >
          </q-slider>

          <q-checkbox v-model="splitByEpisode"
                      left-label
                      label="Split by marked Episode"
                      />

          <q-space />

        </q-toolbar>

        <div class="episodes"
             :class="editViewMode">
          <div v-for="episode in episodes"
               class="episode"
               :key="episode.id">
            <q-btn
              dense
              flat
              :to="{ name: 'project', query: { tab: episode.interview.label } }"
              no-caps>
              {{ episode.moment.name }} ({{ episode.interview.label }})
            </q-btn>
            <div class="episode-children"
                 :class="editViewMode">
              <MomentShortRepresentation
                v-for="moment in episode.moment.children"
                :key="moment.id"
                :genericGraphs="genericGraphs"
                :maximumDepth="maximumDepth"
                :momentId="moment.id"
                :genericDiachronicMode="genericDiachronicMode"
                :layout="editViewMode">
              </MomentShortRepresentation>
            </div>
          </div>
        </div>
      </template>
    </q-splitter>
  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import GenericDiachronicCategoriesRepresentation from 'components/GenericDiachronicCategoriesRepresentation.vue'
  import MomentShortRepresentation from './MomentShortRepresentation.vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const editViewMode = ref('horizontal')

  const genericDiachronicMode = ref('')

  const maximumDepth = ref(1)

  const splitByEpisode = ref(false)

  const props = defineProps<{
      projectId: string
  }>()

  store.activateProject(props.projectId)

  const splitterModel = ref(20)

  const genericGraphs = computed(() => store.getGenericSynchronicGraphs(props.projectId))

  // getMomentsByPrefix returns raw Moments with no children
  // information. We fetch children info through the getMoment map and
  // the default value is just here to please TSC checker
  const episodes = computed(() => {
      if (splitByEpisode.value) {
          return store.getMomentsByPrefix(props.projectId, '%')
              .map(moment => ({
                  id: moment.id,
                  moment: store.getMoment(moment.id) || { name: "None", children: [] },
                  interview: store.getInterviewByMoment(moment.id) || { label: "None" }
              }))
      } else {
          // Return root moments
          const rawRootMoments = store.getMomentsByProject(props.projectId).filter(moment => !moment.parentId)

          return rawRootMoments
          // Fetch full root moment (with children)
              .map(moment => store.getMoment(moment.id))
              .filter(moment => moment !== null)
              .map(moment => ({
                  id: moment.id,
                  moment: moment,
                  interview: store.getInterviewByMoment(moment.id) || { label: "None" }
              }))
      }
  })

</script>

<style scoped>
.horizontal {
    display: flex;
    flex-direction: row;
}

.vertical {
    display: flex;
    flex-direction: column;
}

.episodes.vertical {
    flex-direction: row;
}

.episodes.horizontal {
    flex-direction: column;
}
</style>
