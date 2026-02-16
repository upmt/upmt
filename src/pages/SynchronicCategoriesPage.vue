<template>
  <q-page padding>
    <SpecificSynchronicCategoryTable
      :projectId="projectId" />
  </q-page>
</template>

<script setup lang="ts">
  import SpecificSynchronicCategoryTable from 'components/SpecificSynchronicCategoryTable.vue'

  defineOptions({
      name: 'SynchronicCategoriesPage'
  })

  defineProps({
      projectId: {
          type: String,
          default: ""
      }
  })
</script>
