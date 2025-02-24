<template>
  <div class="specificsynchronicmodel-overview"
       v-if="model"
       :data-specificsynchronicmodel="modelId">
    <div class="specificsynchronicmodel-categories">
      <SpecificSynchronicCategoryOverview
        v-for="c in model.categories"
        :key="c.id"
        :categoryId="c.id">
      </SpecificSynchronicCategoryOverview>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import SpecificSynchronicCategoryOverview from './SpecificSynchronicCategoryOverview.vue'

  const store = useProjectStore()

  const props = defineProps({
      modelId: { type: String, default: null }
  })

  const model = computed(() => store.getSpecificSynchronicModel(props.modelId))

</script>

<style scoped>
</style>
