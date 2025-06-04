<template>
  <div class="genericcategories-container"
       :key="projectId"
       :data-project="projectId">

    <GenericSynchronicCategoryRepresentation
      v-for="category in genericCategories.categories"
      :key="category.name"
      :category="category">
    </GenericSynchronicCategoryRepresentation>

  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import GenericSynchronicCategoryRepresentation from './GenericSynchronicCategoryRepresentation.vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const props = defineProps({
      projectId: { type: String, default: "" },
  })

  const genericCategories = computed(() => store.getGenericSynchronicGraphs(props.projectId))
</script>

<style scoped>
  .genericcategories-container div {
    margin: 8px;
  }
</style>
