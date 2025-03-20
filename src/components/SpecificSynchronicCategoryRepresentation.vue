<template>
  <div ref="container"
       :class="[ 'specificsynchroniccategory-container', `specificsynchroniccategory-${categoryId}` ]"
       :data-specificsynchroniccategory="categoryId">

    <div :class="[ 'specificsynchroniccategory' ]"
         :style="{ backgroundColor: category.color }"
         v-if="category"
         :data-specificsynchroniccategory="categoryId">

      <div :class="[ 'specificsynchroniccategory-children' ]">
        <div v-for="c in category.children" :key="c.id">
          <SpecificSynchronicCategoryRepresentation
            :categoryId="c.id">
          </SpecificSynchronicCategoryRepresentation>
        </div>
      </div>

      <DropZone data="add"
                types="upmt/descriptem upmt/annotation upmt/selection"
                class="row justify-center"
                @annotation="droppedAnnotation"
                @selection="droppedSelection"
                @descriptem="droppedDescriptem">
        <div class="specificsynchroniccategory-justification"
             v-if="isJustificationVisible">
          <JustificationRepresentation :justificationId="category.justification?.id ?? ''">
          </JustificationRepresentation>
        </div>

      </DropZone>

      <div class="specificsynchroniccategory-criterion"
           v-if="isCriterionVisible">
        {{ criterion }}
      </div>

      <div class="specificsynchroniccategory-relation"
           v-if="!isJustificationVisible">
        <SpecificSynchronicCategoryRelation
          :type="category.abstractionType"
          :childrenCount="category.children.length" />
      </div>

      <DropZone data="add"
                types="upmt/specificsynchroniccategory upmt/selection upmt/descriptem upmt/annotation upmt/color"
                class="row justify-center"
                @specificsynchroniccategory="droppedSpecificSynchronicCategory"
                @annotation="droppedAnnotation"
                @selection="droppedSelection"
                @descriptem="droppedDescriptem"
                @color="droppedColor">
        <div class="specificsynchroniccategory-header">
          <DragElement
            type="specificsynchroniccategory"
            :data="categoryId"
            @click.meta="debug">
            <q-icon
              size="xs"
              name="mdi-source-fork">
            </q-icon>
            <span class="specificsynchroniccategory-name">{{ categoryName }}
              <q-popup-edit style="zoom: var(--chart-zoom)" v-model="categoryName" auto-save v-slot="scope">
                <q-input v-model="scope.value"
                         @focus="($event.target as HTMLInputElement).select()"
                         dense
                         autofocus
                         counter
                         @keyup.enter="scope.set" />
              </q-popup-edit>
            </span>
          </DragElement>
          <div class="element-toolbar">
            <q-badge
              @click="displayJustification = !displayJustification"
              class="descriptems-badge"
              color="grey-6"
              :title="`${descriptemCount} descriptems`"
              rounded>{{ descriptemCount }}</q-badge>
            <CommentIcon
              :element="category" />
            <div class="element-toolbar-secondary on-name-hover">
              <ColorizeIcon
                v-model="categoryColor" />
              <ElementMenu
                :actions="menuActions" />
            </div>
          </div>
        </div>
      </DropZone>

      <DropZone :data="`in:${categoryId}`"
                v-if="category.specificsynchronicmodelId"
                types="upmt/specificsynchroniccategory upmt/selection upmt/descriptem upmt/annotation"
                class="empty_padding newssc-dropzone"
                @specificsynchroniccategory="droppedSpecificSynchronicCategory"
                @annotation="droppedCreatingAnnotation"
                @selection="droppedCreatingSelection"
                @descriptem="droppedCreatingDescriptem">
        <q-btn
          @click="createSpecificSynchronicCategory(`before:${categoryId}`)"
          dense
          class="newssc-button"
          icon="mdi-menu-right">
        </q-btn>
      </DropZone>

      <div
        v-if="category.parentId"
        class="specificsynchroniccategory-filler"
        >
      <SpecificSynchronicCategoryRelation :childrenCount="1" />
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
//  import { storeToRefs } from 'pinia'
  import JustificationRepresentation from './JustificationRepresentation.vue'
  import DropZone from './DropZone.vue'
  import DragElement from './DragElement.vue'
  import ColorizeIcon from './ColorizeIcon.vue'
  import CommentIcon from './CommentIcon.vue'
  import ElementMenu from './ElementMenu.vue'
  import SpecificSynchronicCategoryRelation from './SpecificSynchronicCategoryRelation.vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  const istore = useInterfaceStore()

  const store = useProjectStore()

  const props = defineProps({
      categoryId: { type: String, default: "" },
      layout: { type: String, default: "vertical" }
  })

  const category = computed(() => store.getSpecificSynchronicCategory(props.categoryId))

  const displayJustification = ref(false)

  const isLeaf = computed(() => {
      return !category.value?.children.length
  })

  const isJustificationVisible = computed(() => {
      return isLeaf.value || displayJustification.value
  })

  const isCriterionVisible = computed(() => {
      return isLeaf.value || displayJustification.value
  })

  const descriptemCount = computed(() => category.value?.justification?.descriptems.length || 0)

  const criterion = computed(() => {
      return category.value?.comment ?? ""
  })
  function debug () {
      (window as any).category = category.value;
      console.log("SpecificSynchronicCategory", { category: category.value })
  }

  function showContent () {
      // Make sure the content is expanded and visible
      console.log("Should expand SSC")
  }

  function droppedSpecificSynchronicCategory (categoryId: string) {
      // DND on a category to reparent
      const source = store.getSpecificSynchronicCategory(categoryId)
      if (categoryId !== props.categoryId && source) {
          // It was maybe a root category. Remove it from the root
          // categories and reparent.
          store.updateSpecificSynchronicCategory(categoryId, {
              specificsynchronicmodelId: null,
              parentId: props.categoryId
          })
      }
  }

  function droppedDescriptem (descriptemId: string) {
      const descriptem = store.getDescriptem(descriptemId)
      if (descriptem) {
          store.addTextSelectionToSpecificSynchronicCategory(descriptem.toJSON(), props.categoryId)
          store.deleteDescriptem(descriptemId)
      }
  }

  function droppedAnnotation (annotationId: string) {
      const annotation = store.getAnnotation(annotationId)
      if (annotation) {
          store.addTextSelectionToSpecificSynchronicCategory(annotation.toJSON(), props.categoryId)
      }
  }

  function droppedSelection (selectionData: string) {
      try {
          const selection = JSON.parse(selectionData)
          store.addTextSelectionToSpecificSynchronicCategory(selection, props.categoryId)
      } catch (e) {
          console.log(`Cannot parse ${selectionData}: ${e}`)
      }
  }

  function droppedColor (color: string) {
      store.updateSpecificSynchronicCategory(props.categoryId, { color: color })
  }

  // Dropped selections to create a SSCategory. data is before or after
  function droppedCreatingDescriptem (descriptemId: string, where: string) {
      const descriptem = store.getDescriptem(descriptemId)
      if (descriptem && category.value) {
          store.addSpecificSynchronicCategory(`SSC${istore.newSSCIndexIncrement()}`,
                                              category.value.specificsynchronicmodelId,
                                              where,
                                              descriptem.toJSON())
          showContent()
      }
  }

  function droppedCreatingAnnotation (annotationId: string, where: string) {
      const annotation = store.getAnnotation(annotationId)
      if (annotation && category.value) {
          store.addSpecificSynchronicCategory(`SSC${istore.newSSCIndexIncrement()}`,
                                              category.value.specificsynchronicmodelId,
                                              where,
                                              annotation.toJSON())
          showContent()
      }
  }

  function droppedCreatingSelection (selectionData: string, where: string) {
      try {
          const selection = JSON.parse(selectionData)
          if (selection && category.value) {
              store.addSpecificSynchronicCategory(`SSC${istore.newSSCIndexIncrement()}`,
                                                  category.value.specificsynchronicmodelId,
                                                  where,
                                                  selection)
              showContent()
          }
      } catch (e) {
          console.log(`Cannot parse ${selectionData}: ${e}`)
      }
  }

  function createSpecificSynchronicCategory (where: string) {
      if (category.value) {
          store.addSpecificSynchronicCategory(`SSC${istore.newSSCIndexIncrement()}`,
                                              category.value.specificsynchronicmodelId,
                                              where,
                                              null)
          showContent()
      }
  }

  function updateAbstractionType (value: string) {
      store.updateSpecificSynchronicCategory(props.categoryId, { abstractionType: value })
  }


  const categoryName = computed({
      get () {
          return category.value ? category.value.name : ""
      },
      set (value: string) {
          store.updateSpecificSynchronicCategory(props.categoryId, { name:value })
      }
  })

  const categoryColor = computed({
      get () {
          return category.value ? category.value.color : ""
      },
      set (color: string) {
          store.updateSpecificSynchronicCategory(props.categoryId, { color })
      }
  })

  const menuActions = [
      [ "Delete", () => store.deleteSpecificSynchronicCategory(props.categoryId) ],
      [ "Set as generic abstraction", () => updateAbstractionType('') ],
      [ "Set as aggregation abstraction", () => updateAbstractionType('aggregation') ],
      [ "Set as specialization abstraction", () => updateAbstractionType('specialization') ],
      [ "Create a new child category", () => createSpecificSynchronicCategory(`in:${props.categoryId}`) ]
  ]
</script>

<style scoped>
  .header-class {
      font-weight: bold;
      text-align: center;
  }
  .element-toolbar, .element-toolbar-secondary {
      display: flex;
      flex-direction: row;
  }
  .specificsynchroniccategory-children {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-self: center;
  }
  .specificsynchroniccategory-children.horizontal {
      flex-direction: row;
  }
  .specificsynchroniccategory-container {
      display: flex;
      flex-direction: row;
      position: relative;
  }
  .specificsynchroniccategory {
      min-width: var(--moment-minimum-width);
      min-height: 40px;
      margin: 0;
      display: flex;
      flex-direction: row;
      border: 1px solid transparent;
      flex: 1;
  }
  .highlighted .specificsynchroniccategory {
      border: 2px solid yellow;
  }
  .highlighted .specificsynchroniccategory-header {
      background-color: yellow;
  }
  .specificsynchroniccategory-justification {
      width: var(--synchronic-category-descriptem-width);
  }
  .specificsynchroniccategory-header {
      width: var(--synchronic-category-header-width);
  }
  .specificsynchroniccategory-justification {
      border: 1px dashed grey;
  }
  .specificsynchroniccategory-criterion {
      color: #444;
      font-size: 9px;
      width: calc(var(--moment-minimum-width) / 2);
      opacity: .9;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .specificsynchroniccategory-header {
      border: 1px solid grey;
  }
  .specificsynchroniccategory-body {
      border: 1px solid grey;
      display: flex;
      flex-grow: 1;
  }
  .specificsynchroniccategory-body .q-item {
      padding: 0;
  }
  .q-item__section--avatar {
      min-width: 2px;
  }
  .specificsynchroniccategory-handle {
      opacity: .5;
      cursor: pointer;
  }
  .specificsynchroniccategory-handle:hover {
      opacity: .8;
  }
  .on-name-hover {
      opacity: 0;
  }
  .specificsynchroniccategory-justification {
      align-self: center;
      min-height: 16px;
      opacity: 1.0;
      transition: opacity 1.5s ease;
  }
  @starting-style {
      .specificsynchroniccategory-justification {
          opacity: 0;
      }
  }
  .specificsynchroniccategory-header {
      align-self: center;
      overflow: hidden;
  }
  .specificsynchroniccategory-relation {
      width: 20px;
      display: flex;
      align-items: left;
      justify-content: center;
  }
  .relation-menu {
      flex: 0;
  }
  .specificsynchroniccategory-header:hover .on-name-hover {
      opacity: 1;
  }
  .element-toolbar {
      height: 24px;
      display: flex;
      flex-direction: row;
  }
  .specificsynchroniccategory-filler {
      margin: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 24px;
      flex: 1;
  }
  .descriptems-badge {
      opacity: .6;
  }
  .descriptems-badge:hover {
      opacity: 1;
  }
  .newssc-button {
      width: 8px;
      opacity: .5;
  }
</style>
