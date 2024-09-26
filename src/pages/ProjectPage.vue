<template>
  <q-page class="row fit">
    <ProjectInterviewSelection
      class="col-grow"
      v-if="project"
      :projectId="project.id">
    </ProjectInterviewSelection>
  </q-page>
</template>

<script setup lang="ts">
    import { useQuasar } from 'quasar'
  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import ProjectInterviewSelection from 'components/ProjectInterviewSelection.vue'
  /* eslint-disable @typescript-eslint/no-unused-vars */
  import axios from 'axios'

  defineOptions({
      name: 'ProjectPage'
  })
  const props = defineProps({
      id: {
          type: String,
          default: null
      }
  })

  const $q = useQuasar()

  const projectStore = useProjectStore()
  const project = computed(() => {
      if (props.id) {
          return projectStore.getProject(props.id)
      } else {
          return null
      }
  })
</script>
