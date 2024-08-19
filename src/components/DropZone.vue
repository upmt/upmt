<template>
  <div class="dropzone"
       @drop="onDrop($event)"
       @dragover.prevent
       @dragleave.prevent="onDragLeave($event)"
       @dragenter.prevent="onDragEnter($event)">
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const emit = defineEmits([ 'moment', 'property' ])

  const props = defineProps({
      data: {
          type: String,
          default: ""
      },
      // Data types that are supposed to be valid.
      // Space-separated list of data-types
      types: {
          type: String,
          default: ""
      }
  })

  const validTypes = computed(() => {
      return props.types.split(/ +/)
  })

  function hasValidType (event: DragEvent) {
      if (!validTypes.value) {
          return true
      }
      if (!event.dataTransfer) {
          return false
      }
      const types = [ ...event.dataTransfer.types ]
      for (const t of validTypes.value) {
          if (types.includes(t)) {
              return true
          }
      }
      return false
  }

  function onDragEnter (event: DragEvent) {
      if (hasValidType(event) && event.currentTarget) {
          (event.currentTarget as HTMLElement).classList.add('is_droppable')
      }
  }

  function onDragLeave (event: DragEvent) {
      if (event.currentTarget) {
          (event.currentTarget as HTMLElement).classList.remove('is_droppable')
      }
  }

  function onDrop (event: DragEvent) {
      onDragLeave(event)
      const dt = event.dataTransfer
      if (!dt) {
          return
      }
      // We handle drag types that are in the form upmt/ELEMENT_NAME
      for (const dragType of dt.types) {
          if (dragType.startsWith('upmt/')) {
              const payload = dt.getData(dragType)
              const itemType = dragType.replace('upmt/', '')
              emit((itemType as any), payload, props.data)
          }
      }
  }
</script>
<style>
  .dropzone {
    background-color: #fafafa;
    border: 1px solid transparent;
    margin-bottom: 6px;
    padding: 6px;
  }
  .is_droppable {
      background-color: #eee;
      border: 1px dashed grey;
  }
</style>
