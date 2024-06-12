<template>
  <div class="property" :data-property="property.id" :title="property.label">
    <q-icon size="xs" name="mdi-note-text-outline"></q-icon>
    <div class="property-name">{{ property.name }}</div>
    <div class="property-value">{{ property.value }}
      <q-popup-edit  style="zoom: var(--chart-zoom)" v-model="propertyValue" auto-save v-slot="scope">
        <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
      </q-popup-edit>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Property from 'stores/models/property'

const props = defineProps({
    property: { type: Property, default: null }
})

const propertyValue = computed({
    get () {
        return props.property?.value
    },
    set (value: string) {
        const property = props.property
        if (property) {
            property.value = value
        }
    }
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
