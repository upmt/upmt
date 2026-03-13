<template>
  <div>
    <q-toolbar class="row toolbar">

      <q-btn-toggle
        size="xs"
        v-model="editViewMode"
        :options="[ { icon: 'mdi-pan-horizontal', value: 'horizontal' },
                  { icon: 'mdi-pan-vertical', value: 'vertical' } ]">
      </q-btn-toggle>

      <span class="q-px-md text-bold">Profondeur&nbsp;:</span>
      <q-slider v-model="maximumDepth"
                class="col-4"
                snap
                markers
                :min="0"
                :max="4"
                :step="1"
                >
      </q-slider>

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
          no-caps>{{ episode.moment.name }}
        </q-btn>
        <div class="episode-children"
             :class="editViewMode">
          <MomentShortRepresentation
            v-for="moment in episode.moment.children"
            :key="moment.id"
            :maximumDepth="maximumDepth"
            :momentId="moment.id"
            :layout="editViewMode">
          </MomentShortRepresentation>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import MomentShortRepresentation from './MomentShortRepresentation.vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const editViewMode = ref('horizontal')

  const maximumDepth = ref(1)

  const props = defineProps<{
      projectId: string
  }>()

  store.activateProject(props.projectId)

  // getMomentsByPrefix returns raw Moments with no children
  // information. We fetch children info through the getMoment map and
  // the default value is just here to please TSC checker
  const episodes = computed(() => store.getMomentsByPrefix(props.projectId, '%')
      .map(moment => ({
          id: moment.id,
          moment: store.getMoment(moment.id) || { name: "None", children: [] },
          interview: store.getInterviewByMoment(moment.id) || { label: "None" }
      })))

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
