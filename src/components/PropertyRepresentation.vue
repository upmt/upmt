<template>
  <div class="property"
       v-if="property"
       :data-property="property.id"
       :title="property.label">
    <DropZone types="upmt/descriptem upmt/annotation upmt/selection"
              @annotation="droppedAnnotation"
              @selection="droppedSelection"
              @descriptem="droppedDescriptem">
      <div class="property-content" row>
        <q-icon
          ref="handle"
          class="property-handle"
          size="xs"
          @click.meta="debug"
          name="mdi-note-text-outline"></q-icon>
        <div class="property-name">{{ property.name }}</div>
        <div class="property-value">{{ propertyValue }}
          <q-popup-edit  style="zoom: var(--chart-zoom)" v-model="propertyValue" auto-save v-slot="scope">
            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
          </q-popup-edit>
        </div>
      </div>
    </DropZone>
    <div class="property-justification">
      <JustificationRepresentation :justificationId="property.justification.id">
      </JustificationRepresentation>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProjectStore } from 'stores/projectStore'
import JustificationRepresentation from './JustificationRepresentation.vue'
import DropZone from './DropZone.vue'

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

function debug () {
    (window as any).property = property.value
    console.log("Property", property.value?.toJSON())
}

function droppedDescriptem (descriptemId: string) {
    const descriptem = store.getDescriptem(descriptemId)
    if (descriptem) {
        store.addTextSelectionToProperty(descriptem.toJSON(), props.propertyId)
    }
}

function droppedAnnotation (annotationId: string) {
    const annotation = store.getAnnotation(annotationId)
    if (annotation) {
        store.addTextSelectionToProperty(annotation.toJSON(), props.propertyId)
    }
}

function droppedSelection (selectionData: string) {
    try {
        const selection = JSON.parse(selectionData)
        // addTextSelectionToMoment will do the necessary key checks
        store.addTextSelectionToProperty(selection, props.propertyId)
    } catch (e) {
        console.log(`Cannot parse ${selectionData}`)
    }
}

</script>

<style>
  .property {
    display: flex;
    flex-direction: column;
    min-height: 1.2em;
  }
  .property-content {
    display: flex;
    flex-direction: row;
    width: 90%;
    padding-left: 5%;
  }
  .property-justification {
    width: 90%;
    padding-left: 8%;
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
