<template>
  <q-card
    v-if="project"
    class="project-card">
    <q-card-section class="bg-secondary text-white">
      <div class="text-h6">{{ project.name }}</div>
      <div class="text-subtitle2">{{ project.interviews.length }} interviews</div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn :to="{ name: 'project', params: { id: project.id } }" flat>Open</q-btn>
      <q-btn :to="{ name: 'spreadsheet', params: { id: project.id } }" flat>Compare</q-btn>
      <q-btn @click="exportProject(project)" flat>Save</q-btn>
      <q-btn @click="storeProject(project)" flat>Store</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { fs } from '@zenfs/core'
  import { exportFile } from 'quasar'

  import { timestampAdd } from 'stores/util'
  import { useProjectStore } from 'stores/projectStore'

  import Project from 'stores/models/project'

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

  function storeProject (project: Project) {
      const data = useProjectStore().hydrateProject(project.id)

      const base = timestampAdd(project.filename.replace('.upmt', '') ?? project.label)
      const filename = `/projects/${base}.upmt`
      if (!fs.existsSync('/projects')) {
          fs.mkdirSync('/projects')
      }
      fs.writeFileSync(filename, JSON.stringify(data))
  }

</script>
