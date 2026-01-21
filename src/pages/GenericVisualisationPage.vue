<template>
  <q-page
    v-if="project"
    class="row fit">
    <InterviewsSpreadsheet
      :project="project" />
  </q-page>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  //  import { storeToRefs } from 'pinia'
  import { useProjectStore } from 'stores/projectStore'
  import InterviewsSpreadsheet from 'components/InterviewsSpreadsheet.vue'

  defineOptions({
      name: 'GenericVisualisationPage'
  })

  const props = defineProps({
      projectId: {
          type: String,
          default: null
      }
  })

  const store = useProjectStore()

  const project = computed(() => {
      if (props.projectId) {
          const p = store.getFullProject(props.projectId)
          return p
      } else {
          return null
      }
  })
</script>
