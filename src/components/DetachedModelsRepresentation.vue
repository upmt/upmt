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
    </div>

    <div class="detachedmodels-list flex column"
         v-if="project"
         >
      <DetachedModelRepresentation
        v-for="model in project.detachedmodels"
        :projectId="projectId"
        :modelId="model.id"
        :key="model.id">
      </DetachedModelRepresentation>
    </div>

    <q-btn
      flat
      class="detachedmodel-add"
      dense
      size="xs"
      title="Add detached model"
      @click="addDetachedModel()"
      icon="mdi-plus"
      no-caps>
    </q-btn>

  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'

  import type { GraphInfo } from 'stores/projectStore'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  import DetachedModelRepresentation from './DetachedModelRepresentation.vue'

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

  function addDetachedModel () {
      const detachedModel = store.createDetachedModel(props.projectId, istore.newDetachedModelId())
      if (detachedModel) {
          istore.setEditedSpecificSynchronicModelId(detachedModel.proxy.id)
      }
      return detachedModel
  }
</script>

<style scoped>
.detachedmodels-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.detachedmodel-add {
    align-items: end;
    padding-right: 20px;
}
</style>
