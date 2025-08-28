<template>
  <div class="genericcategories-container"
       :key="projectId"
       :data-project="projectId">

    <GenericSynchronicCategoryOverview
      v-for="category in categories"
      :key="category.name"
      :projectId="projectId"
      :currentInterviewId="currentInterviewId"
      :category="category">
    </GenericSynchronicCategoryOverview>

  </div>
</template>

<script setup lang="ts">

  import GenericSynchronicCategoryOverview from './GenericSynchronicCategoryOverview.vue'

  import type { GenericCategory } from 'stores/projectStore'

  defineProps<{
      projectId: string,
      categories:  GenericCategory[],
      currentInterviewId: string | null
  }>()

</script>

<style scoped>
  .genericcategories-container div {
    margin: 8px;
  }
</style>
