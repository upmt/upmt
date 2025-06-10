<template>
  <div class="specificsynchronicmodel-container"
       v-if="model"
       :data-specificsynchronicmodel="modelId">
    <DropZone :data="`inmodel:${modelId}`"
              types="upmt/selection upmt/descriptem upmt/annotation"
              @annotation="droppedCreatingAnnotation"
              @selection="droppedCreatingSelection"
              @descriptem="droppedCreatingDescriptem">
      <DragElement
        type="specificsynchroniccategory"
        data=""
        @click.meta="debug">
        <div class="specificsynchronicmodel-title">
          <q-icon
            ref="handle"
          class="specificsynchronicmodel-handle"
            size="xs"
            @click.meta="debug"
            name="mdi-graph-outline"></q-icon>
          <q-btn
            dense
            flat
            no-caps
            @click="createSpecificSynchronicCategory(`inmodel:${modelId}`)"
            title="Drop a descriptem here to create a new category">
            New category
          </q-btn>
        </div>
      </DragElement>
    </DropZone>
    <div class="specificsynchronicmodel-categories">
      <SpecificSynchronicCategoryRepresentation
        v-for="c in model.categories"
        :key="c.id"
        :genericGraph="genericGraph"
        :hideJustifications="hideJustifications"
        :categoryId="c.id" />
    </div>
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useInterfaceStore } from 'stores/interface'
  import { useProjectStore } from 'stores/projectStore'
  import DragElement from './DragElement.vue'
  import DropZone from './DropZone.vue'
  import SpecificSynchronicCategoryRepresentation from './SpecificSynchronicCategoryRepresentation.vue'

  const istore = useInterfaceStore()
  const store = useProjectStore()

  const props = defineProps({
      modelId: { type: String, default: null },
      hideJustifications: { type: Boolean, default: false }
  })

  const model = computed(() => store.getSpecificSynchronicModel(props.modelId))

  const genericGraph = computed(() => model.value ? store.getGenericSynchronicGraphs(model.value.projectId) : {})

  function showContent () {
      // Make sure the Model/Category is displayed
      console.log("SSM showContent")
  }

  function debug () {
      (window as any).specificsynchronicmodel = model.value
      console.log("specificsynchronicmodel", model.value)
  }

  // Dropped selection to create a SpecificSynchronicModel. where is before or after or in:
  function droppedCreatingDescriptem (descriptemId: string, where: string) {
      const descriptem = store.getDescriptem(descriptemId)
      if (descriptem && model.value) {
          store.addSpecificSynchronicCategory(`SSC${istore.newSSCIndexIncrement()}`,
                                              props.modelId,
                                              where,
                                              descriptem.toJSON())
          showContent()
      }
  }

  function droppedCreatingAnnotation (annotationId: string, where: string) {
      const annotation = store.getAnnotation(annotationId)
      if (annotation && model.value) {
          store.addSpecificSynchronicCategory(`SSC${istore.newSSCIndexIncrement()}`,
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
              store.addSpecificSynchronicCategory(`SSC${istore.newSSCIndexIncrement()}`,
                                                  props.modelId,
                                                  where,
                                                  selection)
              showContent()
          }
      } catch (e) {
          console.log(`Cannot parse ${selectionData}: ${e}`)
      }
  }

  function createSpecificSynchronicCategory (where: string) {
      if (model.value) {
          store.addSpecificSynchronicCategory(`SSC${istore.newSSCIndexIncrement()}`,
                                              props.modelId,
                                              where,
                                              null)
          showContent()
      }
  }
</script>

<style scoped>
</style>
