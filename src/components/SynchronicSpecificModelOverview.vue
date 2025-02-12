<template>
  <div class="synchronicspecificmodel-overview"
       v-if="model"
       :data-synchronicspecificmodel="modelId">
    <div class="synchronicspecificmodel-categories">
      <SynchronicSpecificCategoryOverview
        v-for="c in model.categories"
        :key="c.id"
        :categoryId="c.id">
      </SynchronicSpecificCategoryOverview>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import SynchronicSpecificCategoryOverview from './SynchronicSpecificCategoryOverview.vue'

  const store = useProjectStore()

  const props = defineProps({
      modelId: { type: String, default: null }
  })

  const model = computed(() => store.getSynchronicSpecificModel(props.modelId))

</script>

<style scoped>
</style>
