<template>
  <div class="genericcategories-container"
       :key="projectId"
       :data-project="projectId">

    <div class="text-title2 text-bold">Generic model
      <q-btn
        flat
        dense
        size="xs"
        title="Edit generic model"
        @click="editGenericModel()"
        icon="edit"
        no-caps>
      </q-btn>
      <ElementMenu
        :actions="menuActions" />
    </div>

    <GenericCategoryRepresentation
      v-for="category in genericGraphs.categories"
      :key="category.name"
      :genericGraphs="genericGraphs"
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
      genericGraphs: GraphInfo,
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
      const model = store.buildGenericSynchronicModelFromGraphs (props.projectId, props.genericGraphs)
      if (model) {
          $q.notify({
              type: 'info',
              message: `Stored as ${model.name}`
          })
      }
  }

  import type { NamedAction } from 'components/util.ts'
  const menuActions: NamedAction[] = [
      [ "Edit generic model", () => editGenericModel() ],
      [ "Store as model", () => storeAsModel() ],
      [ "Dump", () => console.log({graphs: props.genericGraphs}) ]
  ]
</script>

<style scoped>
</style>
