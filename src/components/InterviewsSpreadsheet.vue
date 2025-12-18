<template>
  <div v-if="project">
    <q-toolbar class="row toolbar">

      <span class="text-h5">{{ project.name }}</span>

      <q-btn-toggle
        size="xs"
        v-model="editViewMode"
        :options="[ { icon: 'mdi-pan-horizontal', value: 'horizontal' },
                  { icon: 'mdi-pan-vertical', value: 'vertical' } ]">
      </q-btn-toggle>

      <q-slider v-model="maximumDepth"
                class="col-4"
                snap
                label-always
                markers
                :min="0"
                :max="4"
                :step="1"
                >
      </q-slider>

      <q-space />

    </q-toolbar>


    <div class="interviews"
         :class="editViewMode">
      <div v-for="interview in project.interviews"
           class="interview-moments"
           :key="interview.id">
        <q-btn :to="{ name: 'project', params: { id: interview.parentId },  query: { tab: interview.label } }">{{ interview.label }}</q-btn>
        <div class="interview-children"
             :class="editViewMode">
          <MomentShortRepresentation
            v-for="moment in interview?.analysis?.rootMoment?.children"
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

  import { ref } from 'vue'
  // import { useProjectStore } from 'stores/projectStore'
  // import { useInterfaceStore } from 'stores/interface'
  import MomentShortRepresentation from './MomentShortRepresentation.vue'
  import Project from 'stores/models/project'

  // const store = useProjectStore()
  // const istore = useInterfaceStore()
  const editViewMode = ref('horizontal')

  const maximumDepth = ref(1)

  defineProps({
      project: {
          type: Project,
          default: null
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

.interviews.vertical {
    flex-direction: row;
}

.interviews.horizontal {
    flex-direction: column;
}
</style>
