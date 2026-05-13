<template>
  <q-page padding>
    <DescriptemTable
      v-if="project"
      :projectId="projectId" />
  </q-page>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'

  import DescriptemTable from 'components/DescriptemTable.vue'

  defineOptions({
      name: 'DescriptemPage'
  })
  const props = defineProps({
      projectId: {
          type: String,
          default: null
      }
  })

  const store = useProjectStore()
  const project = computed(() => store.activateProject(props.projectId))
</script>
