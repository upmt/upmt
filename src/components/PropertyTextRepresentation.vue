<template>
  <div class="property" :data-property="property.id" :title="property.label">
    <q-icon size="xs" name="mdi-note-text-outline"></q-icon>
    <span class="property-name">{{ property.name }}</span>
    <span class="property-value">{{ property.value }}</span>
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
    height: 1.2em;
  }
  .property-value {
      flex: 1 1 0;
      text-align: right;
  }
</style>
