<template>
  <div class="genericcategories-container"
       :key="projectId"
       :data-project="projectId">

    <div class="text-title2 text-bold">Generic model
      <ElementMenu
        :actions="menuActions" />
    </div>

    <GenericCategoryRepresentation
      v-for="category in graph.categories"
      :key="category.name"
      :graphInfo="graph"
      :genericcategory="category"
      :currentInterviewId="currentInterviewId" />

  </div>
</template>

<script setup lang="ts">

  import { useQuasar } from 'quasar'
  import GenericCategoryRepresentation from './GenericCategoryRepresentation.vue'

  import type { GraphInfo } from 'stores/projectStore'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  import ElementMenu from './ElementMenu.vue'

  const store = useProjectStore()

  const istore = useInterfaceStore()

  const $q = useQuasar()

  const props = defineProps<{
      projectId: string,
      graph: GraphInfo,
      currentInterviewId: string
  }>()

  function editGenericModel () {
      const genericmodel = store.getGenericSynchronicModel(props.projectId)
      if (genericmodel) {
          istore.setEditedSpecificSynchronicModelId(genericmodel.proxy.id)
      }
  }

  function storeAsModel () {
      // Store the whole graph as a generic model
      const model = store.buildGenericSynchronicModelFromGraphs (props.projectId, props.graph)
      if (model) {
          $q.notify({
              type: 'info',
              message: `Stored as ${model.name}`
          })
      }
  }

  const menuActions = [
      [ "Edit generic model", () => editGenericModel() ],
      [ "Store as model", () => storeAsModel() ]
  ]
</script>

<style scoped>
</style>
