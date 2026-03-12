<template>
  <q-card
    v-if="projectInfo"
    class="project-card">
    <q-card-section :class="{
                            'bg-positive': isCurrentProject,
                            'bg-secondary': !isCurrentProject,
                            'text-white': true
                            }">
      <router-link
        style="text-decoration: none; color: inherit;"
        :to="{ name: 'project', params: { projectId: projectId } }">
        <div
          :title="`Loaded from ${projectInfo.filename}`"
          class="text-h6">
          <q-icon
            size="xs"
            name="mdi-semantic-web" />
          {{ projectInfo.name }}
          </div>
      </router-link>
      <div class="text-subtitle2">{{ projectInfo.interview_count }} interviews</div>
      <div class="text-subtitle2" v-if="last_saved_date">Last saved {{ last_saved_date }}</div>
    </q-card-section>

    <q-separator />

    <p class="q-pa-sm">{{ projectInfo.note }}</p>

    <q-card-actions align="right">
      <q-btn :to="{ name: 'project', params: { projectId: projectId } }" flat>Edit</q-btn>
      <q-btn title="Save project in browser database"
             @click="doStoreProject(projectId)"
             v-if="isCurrentProject"
             :disable="!isModified"
             flat>{{ isModified ? "Save" : "Saved" }} </q-btn>
      <ElementMenu
        :actions="menuActions" />
    </q-card-actions>

    <q-expansion-item
      class="pa-md-xs"
      :label="`${projectInfo.version_count} stored versions`"
      header-class="text-caption"
      dense
      dense-toggle>
      <StorageList
        :projectId="projectId" />
    </q-expansion-item>

    </q-card>
</template>

<script setup lang="ts">

  import moment from 'moment'
  import { computed } from 'vue'
  import { useQuasar, exportFile } from 'quasar'
  import { storeToRefs } from 'pinia'

  import SpecificSynchronicCategory from 'stores/models/specificsynchroniccategory'

  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import { storeProject, getStoredProjectInfo, deleteStoredProject } from 'stores/storage'
  import { timestampAdd } from 'stores/util'

  import ElementMenu from './ElementMenu.vue'
  import StorageList from './StorageList.vue'

  const $q = useQuasar()

  const store = useProjectStore()

  const istore = useInterfaceStore()

  const props = defineProps({
      projectId: { type: String, default: "" }
  })

  const { currentProjectId, isModified } = storeToRefs(istore)

  const projectInfo = computed(() => getStoredProjectInfo(props.projectId))

  const isCurrentProject = computed(() => currentProjectId.value == props.projectId)

  const last_saved_date = computed(() => {
      return projectInfo.value ? moment(projectInfo.value.date).fromNow() : null
  })

  function doStoreProject (projectId: string) {
      const basename = storeProject(projectId)
      istore.setModified(false)
      $q.notify({
          type: 'info',
          message: `Stored as ${basename}`
      })
  }

  function doUpmtExport (projectId: string) {
      const data = store.hydrateProject(projectId)
      exportFile(timestampAdd(`${projectId}.upmt`), JSON.stringify(data, null, 2))
  }

  function doStrippedExport (projectId: string) {
      const data = store.hydrateAndStripProject(projectId)
      exportFile(timestampAdd(`${projectId}-stripped.json`), JSON.stringify(data, null, 2))
  }

  /* Ask for confirmation then delete project */
  function doDeleteProject (projectId: string) {
      $q.dialog({
          title: `Confirm project deletion`,
          html: true,
          message: `<p>Do you confirm the deletion of project <strong>${projectId}</strong>?</p><p>Note that it will download the latest version on your computer, so that you have a last trace.</p>`,
          cancel: true,
          persistent: true
      }).onOk(() => {
          // Make a last copy for safety
          doUpmtExport(projectId)
          deleteStoredProject(projectId)
          store.deleteProject(projectId)
          $q.notify({
              type: 'info',
              message: `Deleted project ${projectId}`
          })
      })
  }

  function doCsvExport (projectId: string) {
      const categories = store.getSpecificSynchronicCategoriesByProject(projectId)
      console.log("CSV", { categories })
      const categoryDict = Object.fromEntries(categories.map(category => [ category.id, category ]))

      const categoryName = (category: SpecificSynchronicCategory | undefined): string => {
      if (! category) {
          return "??"
          } else if (! category.parentId) {
              // Root category - single label
              return category.name
          } else {
              const parent = categoryDict[category.parentId]
              return `${categoryName(parent)} / ${category.name}`
          }
      }
      const data = categories.map(category => {
          const catName = categoryName(category)
          const interviews = Object.fromEntries(store.getInterviewsByProject(projectId).map(interview => [ interview.id, interview ]))

          if (category.justification?.descriptems) {
              return category.justification.descriptems.map(descriptem =>
                  [ catName,
                    interviews[category.interviewId]?.name ?? "",
                    descriptem.text,
                    descriptem.startIndex,
                    descriptem.endIndex ])
          } else {
              return []
          }
      }).flat()
      // Define CSV columns
      data.unshift([ "Category", "Interview", "Descriptem", "Start", "End" ])

      exportFile(timestampAdd(`${projectId}.csv`),
                 data.map(line => line.map(v => `"${v.toString().replace(/\n/g, ' ').replace(/"/g, '\'')}"`).join(",")).join("\n"))
  }

  import type { NamedAction } from 'components/util.ts'
  const menuActions: NamedAction[] = [
      [ "Download project file", () => doUpmtExport(props.projectId) ],
      [ "Download stripped file (dev)", () => doStrippedExport(props.projectId) ],
      [ "Export as CSV", () => doCsvExport(props.projectId) ],
      [ "Delete project", () => doDeleteProject(props.projectId) ]
  ]
</script>
<style scoped>
.project-card {
    width: var(--project-width);
}
</style>
