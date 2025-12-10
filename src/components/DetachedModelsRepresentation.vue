<template>
  <div class="detachedmodels-container"
       :key="projectId"
       :data-project="projectId">

    <div class="header">
      <span class="title text-bold">{{ title }}</span>
      <q-btn
        flat
        dense
        size="xs"
        icon="info"
        no-caps>
        <q-tooltip>Detached models are synchronic models (trees) that are not linked to an interview. <br>They are used to propose the category names/children when editing.<br> Since they are also taken into account in the dynamic model generation, they also are used to detect inconsistencies.
        </q-tooltip>
      </q-btn>
      <q-btn
        flat
        dense
        size="xs"
        title="Add detached model"
        @click="addDetachedModel()"
        icon="mdi-plus"
        no-caps>
      </q-btn>
    </div>

    <div class="detachedmodels-list flex column"
         v-if="project"
         >
      <div class="detached-model-item"
           v-for="model in project.detachedmodels"
           :key="model.id">
        <q-btn
          class="detached-model-name"
          align="left"
          flat
          dense
          no-caps
          @click="editDetachedModel(model.proxy.id)"
          >
          {{ model.proxy.name }}
        </q-btn>
        <ElementMenu
          :actions="menuActions"
          :parameter="model" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'

  import type { GraphInfo } from 'stores/projectStore'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  import ElementMenu from './ElementMenu.vue'

  const store = useProjectStore()

  const istore = useInterfaceStore()

  const props = defineProps<{
      projectId: string,
      genericGraphs: GraphInfo,
      currentInterviewId: string,
      title?: string
  }>()

  const project = computed(() => {
      const p = store.getFullProject(props.projectId)
      return p
  })

  function editDetachedModel (proxyModelId: string) {
      istore.setEditedSpecificSynchronicModelId(proxyModelId)
  }

  function addDetachedModel () {
      // FIXME: should add new one not just get the default
      const detachedModel = store.createDetachedModel(props.projectId, "Detached model")
      if (detachedModel) {
          editDetachedModel(detachedModel.proxy.id)
      }
      return detachedModel
  }

  import type { NamedAction } from 'components/util.ts'

  const menuActions: NamedAction[] = [
      [ "Delete", (model) => store.deleteDetachedModel(model.id) ],
  ]
</script>

<style scoped>
</style>
