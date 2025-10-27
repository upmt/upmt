<template>
  <div class="info-panel">
    <q-tabs
      v-model="infoTab"
      dense
      align="justify"
      narrow-indicator
      >
      <q-tab name="notes" label="Notes" />
      <q-tab name="errors" label="Errors" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="infoTab">
      <q-tab-panel name="notes">
        <div v-for="note in notes"
             :key="note.element.id">
          <q-btn
            size="xs"
            :icon="note.icon">
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
                                           name="mdi-source-branch">
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
  // import { useInterfaceStore } from 'stores/interface'

  const store = useProjectStore()

  // const istore = useInterfaceStore()

  import type { GraphInfo } from 'stores/projectStore'

  const props = defineProps<{
      projectId: string,
      genericGraphs: GraphInfo,
      currentInterviewId: string,
      title?: string
  }>()


  const infoTab = ref('notes')

  const notes = computed(() => {
      // FIXME: get into pinia to optimize
      const categories = store.getSpecificSynchronicCategoriesByProject(props.projectId)
      return categories.filter(category => category.note).map((category: any) => {
          return {
              text: category.note,
              element: category,
              icon: 'mdi-source-branch',
              tooltip: `Category ${category.note}`
          }
      })
  })

  const categoriesWithError = computed(() => {
      return Object.values(props.genericGraphs.byName).filter(category => category.errors && category.errors.length > 0)
  })
</script>

<style scoped>
</style>
