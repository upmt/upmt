<template>
  <div class="property" :data-property="property.id" :title="property.label">
    <q-icon size="xs" name="mdi-note-text-outline"></q-icon>
    <div class="property-name">{{ property.name }}</div>
    <div class="property-value">{{ property.value }}</div>
  </div>
</template>

<script setup lang="ts">
import Property from 'stores/models/property'

defineProps({
    property: { type: Property, default: null }
})
</script>

  <style>
  .property {
    display: flex;
    flex-direction: row;
    min-height: 1.2em;
  }
  .property-value {
      flex: 1 1 0;
      text-align: right;
  }
</style>
