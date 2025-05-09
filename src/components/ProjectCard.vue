<template>
  <q-card
    v-if="project"
    class="project-card">
    <q-card-section :class="{
                            'bg-positive': isCurrentProject,
                            'bg-secondary': !isCurrentProject,
                            'text-white': true
                            }">
      <div
        :title="`Loaded from ${project.filename}`"
        class="text-h6">{{ project.name }}</div>
      <div class="text-subtitle2">{{ project.interviews.length }} interviews</div>
    </q-card-section>

    <q-separator />

    <p>{{ project.comment }}</p>

    <q-card-actions align="right">
      <q-btn :to="{ name: 'project', params: { id: projectId } }" flat>Open</q-btn>
      <q-btn title="Save project in browser database"
             @click="doStoreProject(projectId)"
             flat>Save</q-btn>
    </q-card-actions>

    <q-expansion-item
      class="pa-md-xs"
      label="Versions"
      header-class="text-caption"
      dense
      dense-toggle>
      <StorageList
        :dir="storageDir" />
    </q-expansion-item>

  </q-card>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useQuasar } from 'quasar'
  import { storeToRefs } from 'pinia'

  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import { storeProject } from 'stores/storage'
  import StorageList from 'components/StorageList.vue'

  const $q = useQuasar()

  const store = useProjectStore()

  const istore = useInterfaceStore()

  const props = defineProps({
      projectId: { type: String, default: "" }
  })

  const { currentProjectId } = storeToRefs(istore)

  const project = computed(() => {
      if (props.projectId) {
          return store.getProject(props.projectId)
      } else {
          return null
      }
  })

  const storageDir = computed(() => {
      return `/projects/${props.projectId}`
  })

  const isCurrentProject = computed(() => currentProjectId.value == props.projectId)

  function doStoreProject (projectId: string) {
      const basename = storeProject(projectId)
      $q.notify({
          type: 'info',
          message: `Stored as ${basename}`
      })
  }

</script>
