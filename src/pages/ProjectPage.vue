<template>
  <q-page class="row fit">
    <ProjectInterviewSelection
      class="col-grow"
      v-if="project"
      :projectId="projectId">
    </ProjectInterviewSelection>
  </q-page>
</template>

<script setup lang="ts">
    import { useQuasar } from 'quasar'
  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import ProjectInterviewSelection from 'components/ProjectInterviewSelection.vue'
  /* eslint-disable @typescript-eslint/no-unused-vars */
  import axios from 'axios'

  defineOptions({
      name: 'ProjectPage'
  })
  const props = defineProps({
      projectId: {
          type: String,
          default: null
      }
  })

  const $q = useQuasar()

  const store = useProjectStore()
  const istore = useInterfaceStore()

  const project = computed(() => store.activateProject(props.projectId))
</script>
