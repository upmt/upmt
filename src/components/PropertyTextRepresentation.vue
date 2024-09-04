<template>
  <div class="property"
       v-if="property"
       :data-property="property.id"
       :title="property.label">
    <q-icon
      ref="handle"
      class="property-handle"
      size="xs"
      name="mdi-note-text-outline"></q-icon>
    <div class="property-name">{{ property.name }}</div>
    <div class="property-value">{{ propertyValue }}
      <q-popup-edit  style="zoom: var(--chart-zoom)" v-model="propertyValue" auto-save v-slot="scope">
        <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
      </q-popup-edit>
    </div>
    <div class="property-justification">
      <JustificationTextRepresentation :justificationId="property.justification.id">
      </JustificationTextRepresentation>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProjectStore } from 'stores/projectStore'
import JustificationTextRepresentation from './JustificationTextRepresentation.vue'

const store = useProjectStore()

const props = defineProps({
    propertyId: { type: String, default: "" }
})

const property = computed(() => store.getProperty(props.propertyId))
const propertyValue = computed({
    get: () => property.value ? property.value.value : "",
    set: (value) => {
        store.updateProperty(props.propertyId, { value })
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
      margin-left: 1em;
      flex: 1 1 0;
      text-align: right;
      border: 1px;
  }
  .property-value:hover {
      border: 1px dashed grey;
  }
  .property-handle {
      opacity: .5;
      cursor: pointer;
  }
  .property-handle:hover {
      opacity: .7;
  }
</style>
