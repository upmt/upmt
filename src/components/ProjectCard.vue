<template>
  <q-card
    v-if="project"
    class="project-card">
    <q-card-section class="bg-secondary text-white">
      <div
        :title="`Loaded from ${project.filename}`"
        class="text-h6">{{ project.name }}</div>
      <div class="text-subtitle2">{{ project.interviews.length }} interviews</div>
    </q-card-section>

    <q-separator />

    <p>{{ project.comment }}</p>

    <q-card-actions align="right">
      <q-btn :to="{ name: 'project', params: { id: projectId } }" flat>Open</q-btn>
      <q-btn :to="{ name: 'spreadsheet', params: { id: projectId } }" flat>Compare</q-btn>
      <q-btn @click="exportProject(project)" flat>Save</q-btn>
      <q-btn @click="doStoreProject(projectId)" flat>Store</q-btn>
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
  import { exportFile, useQuasar } from 'quasar'

  import { useProjectStore } from 'stores/projectStore'
  import { storeProject } from 'stores/storage'
  import StorageList from 'components/StorageList.vue'

  import Project from 'stores/models/project'

  const $q = useQuasar()

  const store = useProjectStore()

  const props = defineProps({
      projectId: { type: String, default: "" }
      })

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

  function exportProject (project: Project) {
      const data = useProjectStore().hydrateProject(project.id)

      const status = exportFile(project.filename ?? project.label,
                                JSON.stringify(data, null, 2), {
                                    encoding: 'utf-8',
                                    mimeType: 'application/json'
                                })

      if (status === true) {
          // browser allowed it
      } else {
          // browser denied it
          console.error(`Error: ${status}`)
      }
  }

  function doStoreProject (projectId: string) {
      const basename = storeProject(projectId)
      $q.notify({
          type: 'info',
          message: `Stored as ${basename}`
      })
  }

</script>
