<template>
  <div v-if="project">
    <span class="text-h5">{{ project.name }}</span>

    <div v-for="interview in project.interviews"
         :key="interview.id">
      <q-btn :to="{ name: 'project', params: { id: interview.parentId },  query: { tab: interview.label } }">{{ interview.label }}</q-btn>
      <div v-for="moment in interview?.analysis?.rootMoment?.children"
           class="row"
           :key="moment.id">
        <MomentShortRepresentation
          :maximumDepth="1"
          :momentId="moment.id">
        </MomentShortRepresentation>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  // import { computed, ref } from 'vue'
  // import { useProjectStore } from 'stores/projectStore'
  // import { useInterfaceStore } from 'stores/interface'
  import MomentShortRepresentation from './MomentShortRepresentation.vue'
  import Project from 'stores/models/project'

  // const store = useProjectStore()
  // const istore = useInterfaceStore()

  defineProps({
      project: {
          type: Project,
          default: null
      }
  })

</script>

<style scoped>
</style>
