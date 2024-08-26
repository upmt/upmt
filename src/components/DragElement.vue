<template>
  <div class="dragelement"
       draggable="true"
       @dragstart="onDragStart($event)">
    <slot>
    </slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
      // Data type that is sent (moment, property, etc)
      type: {
          type: String,
          default: ""
      },
      // Data to send (most commonly an element id)
      data: {
          type: String,
          default: ""
      }
  })

  function onDragStart (event: DragEvent) {
      if (event.dataTransfer) {
          event.dataTransfer.setData(`upmt/${props.type}`, props.data)
      }
  }
</script>
<style>
  .dragelement {
    cursor: pointer;
    display: flex;
    flex-direction: row;
  }
</style>
