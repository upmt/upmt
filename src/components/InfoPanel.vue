<template>
  <div class="info-panel">
    <q-tabs
      v-model="infoTab"
      dense
      align="justify"
      narrow-indicator
      >
      <q-tab name="notes" size="xs" icon="mdi-chat-outline" label="Notes" />
      <q-tab name="errors" icon="mdi-alert-outline" label="Errors" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="infoTab">
      <q-tab-panel name="notes">
        <q-input
          filled
          v-model="notes_filter"
          label="Filter..."
          stack-label
          dense />
        <div v-for="note in notes"
             :key="note.element.id">
          <q-btn
            size="xs"
            :icon="note.icon"
            @click="onNoteClick(note)">
            <q-tooltip>{{ note.tooltip }}</q-tooltip>
          </q-btn>
          {{ note.text }}
        </div>
      </q-tab-panel>

      <q-tab-panel name="errors">
        <div class="categories-with-error">
          <div v-for="category in categoriesWithError"
              :key="category.name">
            <span class="category-title">
              <q-icon
                size="xs"
                name="mdi-alpha-s-box-outline">
              </q-icon>
              {{ category.name }}
            </span>
            <div class="errors">
              <span v-for="error, i in category.errors"
                    :key="i">
                {{ error }}
              </span>
            </div>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import BaseModel from 'stores/models/basemodel'

  const store = useProjectStore()

  const istore = useInterfaceStore()

  import type { GraphInfo } from 'stores/projectStore'

  const props = defineProps<{
      projectId: string,
      genericGraphs: GraphInfo,
      currentInterviewId: string,
      title?: string
  }>()

  type Note = {
      text: string,
      element: BaseModel,
      icon: string,
      tooltip: string
  }

  const infoTab = ref('notes')

  const notes_filter = ref('')

  const notes = computed(() => {
      // FIXME: get into pinia to optimize
      const categories = store.getSpecificSynchronicCategoriesByProject(props.projectId)
      const category_notes = categories.filter(category => category.note).map((category: any) => {
          return {
              text: category.note,
              element: category,
              icon: 'mdi-alpha-s-box-outline',
              tooltip: `Category ${category.name}`
          } as Note
      })
      const moments = store.getMomentsByProject(props.projectId)
      const momentId2interview = Object.fromEntries(moments.map(moment => [ moment.id, store.getInterviewByMoment(moment.id)]))
      const moment_notes = moments.filter(moment => moment.note).map((moment: any) => {
          const interview = momentId2interview[moment.id]
          return {
              text: moment.note,
              element: moment,
              icon: 'mdi-alpha-d-box-outline',
              tooltip: `Moment ${moment.name} - Interview ${interview?.name}`
          } as Note
      })
      const output = [ ...category_notes, ...moment_notes ]
      if (notes_filter.value) {
          return output.filter(note => note.text.includes(notes_filter.value))
      } else {
          return output
      }
  })

  const categoriesWithError = computed(() => {
      return Object.values(props.genericGraphs.byName).filter(category => category.errors && category.errors.length > 0)
  })

  function onNoteClick (note: Note) {
      if (note.icon == 'mdi-alpha-d-box-outline') {
          istore.setHighlightedMomentId(note.element.id)
      } else if (note.icon == 'mdi-alpha-s-box-outline') {
          // We have a SSC, we have to find the root category, get its model and use its id
          const info = props.genericGraphs.instanceIdToContainerInfo[note.element.id]
          if (info) {
              istore.setEditedSpecificSynchronicModelId(info.specificSynchronicModelId)
          }
      }
  }

</script>

<style scoped>
</style>
