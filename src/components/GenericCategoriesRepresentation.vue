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

  defineProps<{
      projectId: string,
      genericGraphs: GraphInfo,
      currentInterviewId: string,
      title?: string
  }>()

</script>

<style scoped>
</style>
