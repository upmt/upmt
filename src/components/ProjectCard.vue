<template>
  <DropZone data="add"
            class="flex column"
            types="upmt/project"
            v-if="project"
            @project="droppedProject">
    <q-card
      v-if="project"
      class="project-card">
      <q-card-section :class="{
                              'bg-positive': isCurrentProject,
                              'bg-secondary': !isCurrentProject,
                              'text-white': true
                              }">
        <DragElement
          type="project"
          class="project-header flex column"
          :data="projectId">
          <router-link
            style="text-decoration: none; color: inherit;"
            :to="{ name: 'project', params: { id: projectId } }">
            <div
              :title="`Loaded from ${project.filename}`"
              class="text-h6">
              <q-icon
                size="xs"
                name="mdi-semantic-web" />
              {{ project.name }}
            </div>
          </router-link>
        </DragElement>
        <div class="text-subtitle2">{{ project.interviews.length }} interviews</div>
        <div class="text-subtitle2" v-if="last_saved_date">Last saved {{ last_saved_date }}</div>
      </q-card-section>

      <q-separator />

      <p>{{ project.note }}</p>

      <q-card-actions align="right">
        <q-btn :to="{ name: 'project', params: { id: projectId } }" flat>Edit</q-btn>
        <q-btn title="Save project in browser database"
               @click="doStoreProject(projectId)"
               v-if="isCurrentProject"
               :disable="!isModified"
               flat>Save</q-btn>
        <ElementMenu
          :actions="menuActions" />
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
  </DropZone>
</template>

<script setup lang="ts">

  import moment from 'moment'
  import { computed } from 'vue'
  import { useQuasar, exportFile } from 'quasar'
  import { storeToRefs } from 'pinia'

  import SpecificSynchronicCategory from 'stores/models/specificsynchroniccategory'

  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import { storeProject, getProjectInfo } from 'stores/storage'
  import { timestampAdd } from 'stores/util'

  import ElementMenu from './ElementMenu.vue'
  import StorageList from './StorageList.vue'
  import DropZone from './DropZone.vue'
  import DragElement from './DragElement.vue'

  const $q = useQuasar()

  const store = useProjectStore()

  const istore = useInterfaceStore()

  const props = defineProps({
      projectId: { type: String, default: "" }
  })

  const { currentProjectId, isModified } = storeToRefs(istore)

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

  const info = computed(() => getProjectInfo(props.projectId))

  const last_saved_date = computed(() => {
      return info.value ? moment(info.value.date).fromNow() : null
  })

  function doStoreProject (projectId: string) {
      const basename = storeProject(projectId)
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

  function droppedProject (sourceProjectId: string) {
      // Import another project into this project
      const source = store.hydrateAndStripProject(sourceProjectId)

      // Build an importable subset that will not overwrite the main
      // project metadata

      // We can directly reference the "original" items since they
      // were deep cloned by the hydrateProject function, and we removed all ids.
      // Clone data is thus  decoupled from the original instances.

      // Add a suffix to interview name if they conflict
      for (const interview of source.interviews) {
          const basename = interview.name
          let name = basename
          let suffix = 1
          while (project.value?.interviews[name]) {
              name = `${basename} - ${suffix}`
              suffix += 1
          }
          interview.name = name
      }
      const sourceSubset = {
          // Set the project id to the destination project id
          id: props.projectId,
          interviews: source.interviews,
          modelfolder: source.modelfolder,
          detachedmodels: source.detachedmodels ?? []
      }

      store.importProject(sourceSubset, "imported project", false)
      $q.notify({
          type: 'info',
          message: `Imported ${source.interviews.length} interviews from ${sourceProjectId} into ${props.projectId}`
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
          // FIXME: for each category, we would like to have moment + interview
          // But we need to rebuld this info: for each category, get to its root category for which category.model is defined.
          // Then we have access to category.model.moment
          if (category.justification?.descriptems) {
              return category.justification.descriptems.map(descriptem =>
                  [ catName, descriptem.text, descriptem.startIndex, descriptem.endIndex ])
          } else {
              return []
          }
      }).flat()
      // Define CSV columns
      data.unshift([ "Category", "Descriptem", "Start", "End" ])

      exportFile(timestampAdd(`${projectId}.csv`),
                 data.map(line => line.map(v => `"${v.toString().replace(/\n/g, ' ').replace(/"/g, '\'')}"`).join(",")).join("\n"))
  }

  import type { NamedAction } from 'components/util.ts'
  const menuActions: NamedAction[] = [
      [ "Download project file", () => doUpmtExport(props.projectId) ],
      [ "Download stripped file", () => doStrippedExport(props.projectId) ],
      [ "Export as CSV", () => doCsvExport(props.projectId) ],
      [ "Delete", () =>  $q.notify({
          type: 'error',
          message: `Not implemented yet`
          }) ]
  ]
</script>
