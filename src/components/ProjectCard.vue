<template>
  <q-card
    v-if="project"
    class="project-card">
    <q-card-section class="bg-secondary text-white">
      <div class="text-h6">{{ project.name }}</div>
      <div class="text-subtitle2">{{ project.interviews.length }} interviews</div>
    </q-card-section>

    <q-separator />

    <p>{{ project.comment }}</p>

    <q-card-actions align="right">
      <q-btn :to="{ name: 'project', params: { id: project.id } }" flat>Open</q-btn>
      <q-btn :to="{ name: 'spreadsheet', params: { id: project.id } }" flat>Compare</q-btn>
      <q-btn @click="exportProject(project)" flat>Save</q-btn>
      <q-btn @click="storeProject(project)" flat>Store</q-btn>
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
  import { fs } from '@zenfs/core'
  import { exportFile } from 'quasar'

  import { timestampAdd } from 'stores/util'
  import { useProjectStore } from 'stores/projectStore'
  import StorageList from 'components/StorageList.vue'

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

  function storeProject (project: Project) {
      const baseDir = '/projects'
      const projectDir = `${baseDir}/${project.id}`

      const data = useProjectStore().hydrateProject(project.id)

      const basename = timestampAdd(project.id ?? project.label)

      // Structure: /projects/{project.id}/{timestamp}-{project.id}.upmt
      if (!fs.existsSync(baseDir)) {
          fs.mkdirSync(baseDir)
      }
      if (!fs.existsSync(projectDir)) {
          fs.mkdirSync(projectDir)
      }

      fs.writeFileSync(`${projectDir}/${basename}.upmt`, JSON.stringify(data, null, 2))
  }

</script>
