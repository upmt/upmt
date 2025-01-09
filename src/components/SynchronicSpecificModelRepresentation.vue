<template>
  <div class="synchronicspecificmodel-container"
       v-if="model"
       :data-synchronicspecificmodel="modelId">
    <q-icon
      ref="handle"
      class="synchronicspecificmodel-handle"
      size="xs"
      name="mdi-alpha-m-box-outline"></q-icon> {{ model.name }}
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const props = defineProps({
      modelId: { type: String, default: null }
  })

  const model = computed(() => store.getSynchronicSpecificModel(props.modelId))
</script>

<style>
</style>
