<template>
  <div class="genericcategories-container"
       :key="projectId"
       :data-project="projectId">

    <div class="text-bold">{{ title }}
      <q-btn
        flat
        dense
        size="xs"
        icon="info"
        @click="debug"
        no-caps>
        <q-tooltip>This is the dynamically generated model resulting from the combination of all synchronic models from interviews and all detached synchronic models.
        </q-tooltip>
      </q-btn>
    </div>
    <GenericCategoryRepresentation
      v-for="category in genericGraphs.categories"
      :key="category.name"
      :genericGraphs="genericGraphs"
      :genericcategory="category"
      :currentInterviewId="currentInterviewId" />

  </div>
</template>

<script setup lang="ts">

  import GenericCategoryRepresentation from './GenericCategoryRepresentation.vue'

  import type { GraphInfo } from 'stores/projectStore'

  const props = defineProps<{
      projectId: string,
      genericGraphs: GraphInfo,
      currentInterviewId: string,
      title?: string
  }>()

  function debug () {
      console.log("currentInterviewId", props.currentInterviewId)
      console.log("genericGraphs", props.genericGraphs)
  }
</script>

<style scoped>
</style>
