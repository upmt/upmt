<template>
  <div class="specificsynchronicmodel-container"
       :class="layout"
       v-if="model"
       :data-specificsynchronicmodel="modelId">
    <DropZone :data="`inmodel:${modelId}`"
              class="editor-toolbar flex"
              types="upmt/specificsynchroniccategory upmt/genericsynchroniccategory upmt/selection upmt/descriptem upmt/annotation"
              @specificsynchroniccategory="droppedSpecificSynchronicCategory"
              @genericsynchroniccategory="droppedGenericSynchronicCategory"
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
    <VueZoomable
      style="flex-grow: 1;"
      selector=".specificsynchronicmodel-categories"
      :minZoom="0.5"
      :maxZoom="3"
      :wheelZoomStep="0.5"
      >
      <div class="specificsynchronicmodel-categories">
        <SpecificSynchronicCategoryRepresentation
          v-for="c in model.categories"
          :key="c.id"
          :isGeneric="isGeneric"
          :layout="layout"
          :genericGraphs="genericGraphs"
          :hideJustifications="!model.momentId"
          :categoryId="c.id" />
      </div>
    </VueZoomable>
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useInterfaceStore } from 'stores/interface'
  import { useProjectStore } from 'stores/projectStore'

  import VueZoomable from "vue-zoomable"
  import "vue-zoomable/dist/style.css"

  import DragElement from './DragElement.vue'
  import DropZone from './DropZone.vue'
  import SpecificSynchronicCategoryRepresentation from './SpecificSynchronicCategoryRepresentation.vue'

  const istore = useInterfaceStore()
  const store = useProjectStore()

  const props = defineProps({
      modelId: { type: String, default: null },
      isGeneric: { type: Boolean, default: false },
      hideJustifications: { type: Boolean, default: false },
      layout: { type: String, default: 'horizontal' },
      genericGraphs: { type: Object, default: null }
  })

  const model = computed(() => store.getSpecificSynchronicModel(props.modelId))

  function showContent () {
      // Make sure the Model/Category is displayed
      console.log("SSM showContent")
  }

  function debug () {
      (window as any).specificsynchronicmodel = model.value
      console.log("specificsynchronicmodel", model.value)
  }

  // Dropped selection to create a SpecificSynchronicModel. where is before or after or in:
  function droppedGenericSynchronicCategory (categoryName: string, where: string) {
      const genericInfo = props.genericGraphs ? props.genericGraphs.byName[categoryName] : { abstractionType: '' }

      store.addSpecificSynchronicCategory(categoryName,
                                          props.modelId,
                                          where,
                                          null,
                                          genericInfo?.abstractionType || '')
      showContent()
  }

  function droppedSpecificSynchronicCategory (categoryId: string, where: string) {
      // Get the name from the id
      const category = store.getSpecificSynchronicCategory(categoryId)
      if (category) {
          const genericInfo = props.genericGraphs ? props.genericGraphs.byName[category.name] : { abstractionType: '' }

          store.addSpecificSynchronicCategory(category.name,
                                              props.modelId,
                                              where,
                                              null,
                                              genericInfo?.abstractionType || '')
          showContent()
      }
  }

  function droppedCreatingDescriptem (descriptemId: string, where: string) {
      const descriptem = store.getDescriptem(descriptemId)
      if (descriptem && model.value) {
          store.addSpecificSynchronicCategory(istore.newSSCId(),
                                              props.modelId,
                                              where,
                                              descriptem.toJSON())
          showContent()
      }
  }

  function droppedCreatingAnnotation (annotationId: string, where: string) {
      const annotation = store.getAnnotation(annotationId)
      if (annotation && model.value) {
          store.addSpecificSynchronicCategory(istore.newSSCId(),
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
              store.addSpecificSynchronicCategory(istore.newSSCId(),
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
          store.addSpecificSynchronicCategory(istore.newSSCId(),
                                              props.modelId,
                                              where,
                                              null)
          showContent()
      }
  }
</script>

<style scoped>
  .specificsynchronicmodel-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .specificsynchronicmodel-categories {
      display:  flex;
      flex-direction: column;
  }
  .vertical .specificsynchronicmodel-categories {
      flex-direction: row;
  }
  .controll__buttons {
      zoom: .5;
  }
  .controll__item--circle {
      display: none;
  }
</style>
