<template>
  <div class="dropzone"
       @drop="onDrop($event)"
       @dragover.prevent="onDragOver($event)"
       @dragleave.prevent="onDragLeave($event)"
       @dragenter.prevent>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const emit = defineEmits([ 'annotation', 'descriptem', 'selection',
                             'color',
                             'moment',
                             'project',
                             'specificsynchroniccategory', 'genericsynchroniccategory',
                           ])

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

  function onDragOver (event: DragEvent) {
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
              emit((itemType as any), payload, props.data, event)
          }
      }
  }
</script>
<style>
  .dropzone {
    background-color: transparent;
    border: 1px solid transparent;
    display: flex;
    flex-direction: row;
  }
  .dropzone.empty-padding {
      margin-bottom: 4px;
      padding: 4px;
  }
  .dropzone.default-height {
      min-height: var(--header-height);
  }
  .is_droppable {
      background-color: #eee;
      border: 1px dashed grey;
  }
</style>
