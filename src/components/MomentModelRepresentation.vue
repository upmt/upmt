<template>
  <div class="momentmodel-container" :data-momentmodel="momentmodel.id">
    <q-icon
      ref="handle"
      class="momentmodel-handle"
      size="xs"
      name="mdi-alpha-m-box-outline"></q-icon> {{ momentmodel.name }}
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const props = defineProps({
      momentmodelId: { type: String, default: null },
      currentInterviewId: { type: String, default: "" }
  })

  const momentmodel = computed(() => store.getMomentModel(props.momentmodelId))
</script>

<style scoped>
  .momentmodel-handle {
      opacity: .5;
      cursor: pointer;
  }
  .momentmodel-handle:hover {
      opacity: .7;
  }
</style>
