<template>
  <div class="synchronicspecificmodel-container"
       v-if="model"
       :data-synchronicspecificmodel="modelId">
    <DropZone :data="`inmodel:${modelId}`"
              types="upmt/selection upmt/descriptem upmt/annotation"
              @annotation="droppedCreatingAnnotation"
              @selection="droppedCreatingSelection"
              @descriptem="droppedCreatingDescriptem">
      <div class="synchronicspecificmodel-title">
        <q-icon
          ref="handle"
          class="synchronicspecificmodel-handle"
          size="xs"
          @click.meta="debug"
          name="mdi-graph-outline"></q-icon> {{ model.name }}
      </div>
    </DropZone>
    <div class="synchronicspecificmodel-categories">
      <SynchronicSpecificCategoryRepresentation
        v-for="c in model.categories"
        :key="c.id"
        :categoryId="c.id" />
    </div>
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useInterfaceStore } from 'stores/interface'
  import { useProjectStore } from 'stores/projectStore'
  import DropZone from './DropZone.vue'
  import SynchronicSpecificCategoryRepresentation from './SynchronicSpecificCategoryRepresentation.vue'

  const istore = useInterfaceStore()
  const store = useProjectStore()

  const props = defineProps({
      modelId: { type: String, default: null }
  })

  const model = computed(() => store.getSynchronicSpecificModel(props.modelId))

  function showContent () {
      // Make sure the Model/Category is displayed
      console.log("SSM showContent")
  }

  function debug () {
      (window as any).synchronicspecificmodel = model.value
      console.log("synchronicspecificmodel", model.value)
  }

  // Dropped selection to create a SynchronicSpecificModel. where is before or after or in:
  function droppedCreatingDescriptem (descriptemId: string, where: string) {
      const descriptem = store.getDescriptem(descriptemId)
      if (descriptem && model.value) {
          store.addSynchronicSpecificCategory(`New category ${istore.newSSCIndexIncrement()}`,
                                              props.modelId,
                                              where,
                                              descriptem.toJSON())
          showContent()
      }
  }

  function droppedCreatingAnnotation (annotationId: string, where: string) {
      const annotation = store.getAnnotation(annotationId)
      if (annotation && model.value) {
          store.addSynchronicSpecificCategory(`New category ${istore.newSSCIndexIncrement()}`,
                                              props.modelId,
                                              where,
                                              annotation.toJSON())
          showContent()
      }
  }

  function droppedCreatingSelection (selectionData: string, where: string) {
      try {
          const selection = JSON.parse(selectionData)
          if (model.value) {
              store.addSynchronicSpecificCategory(`New category ${istore.newSSCIndexIncrement()}`,
                                                  props.modelId,
                                                  where,
                                                  selection)
              showContent()
          }
      } catch (e) {
          console.log(`Cannot parse ${selectionData}: ${e}`)
      }
  }

</script>

<style>
</style>
