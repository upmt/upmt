<template>
  <div class="genericcategories-container"
       :class="layout"
       :key="projectId"
       :data-project="projectId">

    <GenericSynchronicCategoryOverview
      v-for="category in categories"
      :key="category.name"
      :projectId="projectId"
      :layout="layout"
      :currentInterviewId="currentInterviewId"
      :category="category">
    </GenericSynchronicCategoryOverview>

  </div>
</template>

<script setup lang="ts">

  import GenericSynchronicCategoryOverview from './GenericSynchronicCategoryOverview.vue'

  import type { GenericCategory } from 'stores/projectStore'

  interface Props {
      projectId: string,
      categories: GenericCategory[],
      currentInterviewId: string,
      layout: string
  }

  withDefaults(defineProps<Props>(), {
      projectId: "",
      currentInterviewId: "",
      layout: 'horizontal'
  })

</script>

<style scoped>
  .genericcategories-container div {
    margin: 8px;
  }
</style>
