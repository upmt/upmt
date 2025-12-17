<template>
  <q-page padding>
    <DescriptemTable
      :projectId="currentProjectId" />
  </q-page>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useInterfaceStore } from 'stores/interface'

  import DescriptemTable from 'components/DescriptemTable.vue'

  defineOptions({
      name: 'DescriptemPage'
  })

  const istore = useInterfaceStore()

  const { currentProjectId } = storeToRefs(istore)

</script>
