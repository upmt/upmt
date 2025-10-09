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
  import { useInterfaceStore } from 'stores/interface'
  import InterviewsSpreadsheet from 'components/InterviewsSpreadsheet.vue'

  defineOptions({
      name: 'GenericVisualisationPage'
  })

  const props = defineProps({
      id: {
          type: String,
          default: null
      }
  })

  const store = useProjectStore()
  const istore = useInterfaceStore()

  const project = computed(() => {
      if (props.id) {
          const p = store.getFullProject(props.id)
          istore.setCurrentProjectId(props.id)
          return p
      } else {
          return null
      }
  })
</script>
