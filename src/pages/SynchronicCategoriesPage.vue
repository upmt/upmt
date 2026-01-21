<template>
  <q-page padding>
    <SpecificSynchronicCategoryTable
      :projectId="currentProjectId" />
  </q-page>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useInterfaceStore } from 'stores/interface'

  import SpecificSynchronicCategoryTable from 'components/SpecificSynchronicCategoryTable.vue'

  defineOptions({
      name: 'SynchronicCategoriesPage'
  })

  const istore = useInterfaceStore()

  const { currentProjectId } = storeToRefs(istore)

</script>
