<template>
  <div class="genericdiachroniccategories-container"
       v-if="project"
       :key="projectId"
       :data-project="projectId">

    <div class="text-bold">{{ title }}</div>

    <ModelFolderRepresentation
      :modelfolderId="project.modelfolder.id"
      :currentInterviewId="currentInterviewId" />

    <q-btn
      flat
      class="genericdiachroniccategories-add"
      dense
      size="xs"
      title="Add generic diachronic category"
      @click="addGenericDiachronicCategory()"
      icon="mdi-plus"
      no-caps>
    </q-btn>

  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  import ModelFolderRepresentation from './ModelFolderRepresentation.vue'

  const props = defineProps<{
      projectId: string,
      currentInterviewId: string,
      title?: string
  }>()

  const store = useProjectStore()
  const istore = useInterfaceStore()

  const project = computed(() => store.activateProject(props.projectId))

  function addGenericDiachronicCategory () {
      if (project.value) {
          const category = store.addGenericDiachronicCategory(istore.newGDCId(),
                                                              project.value.modelfolder)
          console.log("New GenericDiachronicCategory", category)
      }
  }
</script>

<style scoped>
.genericdiachroniccategories-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.genericdiachroniccategories-add {
    align-items: end;
    padding-right: 20px;
}
</style>
