<template>
  <div class="categoryinstance"
       :style="{ backgroundColor: categoryinstance.color }"
       v-if="categoryinstance"
       :data-categoryinstance="categoryinstance.id">

    <div class="categoryinstance-metadata">
      <DropZone types="upmt/descriptem upmt/annotation upmt/selection"
                @annotation="droppedAnnotation"
                @selection="droppedSelection"
                @descriptem="droppedDescriptem">
        <DragElement
          class="categoryinstance-header"
          type="categoryinstance"
          :data="categoryinstanceId">
          <q-icon
            ref="handle"
            class="categoryinstance-handle"
            size="xs"
            @click.meta="debug"
            name="mdi-tag-outline"></q-icon>
          <span class="categoryinstance-name">{{ categoryinstance.name }}</span>
          <q-space />
          <ElementMenu
            :actions="menuActions" />
        </DragElement>
      </DropZone>
    </div>

    <div class="categoryinstance-justification">
      <JustificationRepresentation :justificationId="categoryinstance.justification.id">
      </JustificationRepresentation>
    </div>

    <div class="categoryinstance-properties">
      <div v-for="p in categoryinstance.properties" :key="p.id">
        <PropertyRepresentation :propertyId="p.id">
        </PropertyRepresentation>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import JustificationRepresentation from './JustificationRepresentation.vue'
import PropertyRepresentation from './PropertyRepresentation.vue'
import { computed } from 'vue'
import { useProjectStore } from 'stores/projectStore'
import DragElement from './DragElement.vue'
import DropZone from './DropZone.vue'
import ElementMenu from './ElementMenu.vue'
const store = useProjectStore()

const props = defineProps({
    categoryinstanceId: { type: String, default: "" }
})
const categoryinstance = computed(() => store.getCategoryInstance(props.categoryinstanceId))

function debug () {
    (window as any).categoryinstance = categoryinstance.value
    console.log("Category instance", categoryinstance.value?.toJSON())
}

function droppedDescriptem (descriptemId: string) {
    console.log("Dropped descriptem", descriptemId)
    const descriptem = store.getDescriptem(descriptemId)
    if (descriptem) {
        store.addTextSelectionToCategoryInstance(descriptem.toJSON(), props.categoryinstanceId)
    }
}

function droppedAnnotation (annotationId: string) {
    const annotation = store.getAnnotation(annotationId)
    if (annotation) {
        store.addTextSelectionToCategoryInstance(annotation.toJSON(), props.categoryinstanceId)
    }
}

function droppedSelection (selectionData: string) {
    try {
        const selection = JSON.parse(selectionData)
        // addTextSelectionToMoment will do the necessary key checks
        store.addTextSelectionToCategoryInstance(selection, props.categoryinstanceId)
    } catch (e) {
        console.log(`Cannot parse ${selectionData}`)
    }
  }

type NamedActions = [ name: string, action: (element: any) => any][]
const menuActions: NamedActions = [
    [ "Duplicate", () => store.duplicateCategoryInstance(props.categoryinstanceId) ],
    [ "Delete", () => store.deleteCategoryInstance(props.categoryinstanceId) ]
  ]
</script>

<style scoped>
  .categoryinstance-name {
    font-weight: bold;
  }
  .categoryinstance-metadata {
    text-align: center;
  }
  .categoryinstance-header {
      width: 100%;
  }
  .categoryinstance-children {
    list-style: none;
    min-width: 200px;
    display: flex;
    flex-direction: column;
  }
  .categoryinstance-children.horizontal {
      flex-direction: row;
  }
  .categoryinstance {
      min-width: 200px;
      min-height: 40px;
      margin: 2px;
      display: flex;
      flex-direction: column;
      border: 1px solid grey;
  }
  .categoryinstance-handle {
      opacity: .5;
      cursor: pointer;
  }
  .categoryinstance-handle:hover {
      opacity: .7;
  }
</style>
