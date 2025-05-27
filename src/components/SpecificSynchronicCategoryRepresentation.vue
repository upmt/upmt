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
            :genericModel="genericModel"
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

      <div class="specificsynchroniccategory-relation">
        <SpecificSynchronicCategoryRelation
          :type="category.abstractionType"
          :childrenCount="isLeaf ? 1 : category.children.length" />
        <div class="specificsynchroniccategory-relationinfo">
          <div class="specificsynchroniccategory-criterion">
            {{ criterion }}
            <q-tooltip
              v-if="criterion"
              flat
              dense>
              <div class="criterion-tooltip">{{ criterion }}</div>
            </q-tooltip>
            <q-popup-edit v-model="criterion"
                        auto-save
                          buttons
                          v-slot="scope">
              <q-input
                label="Criterion"
                type="textarea"
                v-model="scope.value"
                @keyup.ctrl.enter="scope.set"
                @keyup.esc="scope.cancel"
                dense
                autogrow
                autofocus />
            </q-popup-edit>
          </div>
          <ElementMenu
            v-if="! isLeaf"
            class="specificsynchroniccategory-relationmenu"
            :actions="relationActions" />
        </div>
      </div>

      <DropZone data="add"
                types="upmt/specificsynchroniccategory upmt/genericsynchroniccategory upmt/selection upmt/descriptem upmt/annotation upmt/color"
                class="row justify-center"
                @specificsynchroniccategory="droppedSpecificSynchronicCategory"
                @genericsynchroniccategory="droppedGenericSynchronicCategory"
                @annotation="droppedAnnotation"
                @selection="droppedSelection"
                @descriptem="droppedDescriptem"
                @color="droppedColor">
        <div class="specificsynchroniccategory-header"
             :class="{ 'has-error': genericElement.errors?.length }">
          <DragElement
            type="specificsynchroniccategory"
            :data="categoryId"
            @click.meta="debug">
            <q-icon
              size="xs"
              name="mdi-source-fork">
            </q-icon>
            <span class="specificsynchroniccategory-name">{{ categoryName }}
              <q-popup-edit style="zoom: var(--chart-zoom)"
                            v-model="categoryName"
                            v-slot="scope"
                            auto-save>
                <CategoryNameInput @change="scope.cancel"
                                   :category="category" />
              </q-popup-edit>
            </span>
            <q-tooltip>{{ categoryName }}
              <div v-if="genericElement.errors">
                <span v-for="error, key in genericElement.errors"
                      :key="key">
                  {{ error }}
                </span>
              </div>
            </q-tooltip>
          </DragElement>
          <div class="element-toolbar">
            <q-badge
              @click="displayJustification = !displayJustification"
              class="descriptems-badge"
              color="grey-6"
              :title="`${descriptemCount} descriptems`"
              rounded>{{ descriptemCount }}</q-badge>
            <NoteIcon
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
                types="upmt/specificsynchroniccategory upmt/genericsynchroniccategory upmt/selection upmt/descriptem upmt/annotation"
                class="empty_padding newssc-dropzone"
                @specificsynchroniccategory="droppedSpecificSynchronicCategory"
                @genericsynchroniccategory="droppedGenericSynchronicCategory"
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
  import CategoryNameInput from './CategoryNameInput.vue'
  import ColorizeIcon from './ColorizeIcon.vue'
  import NoteIcon from './NoteIcon.vue'
  import ElementMenu from './ElementMenu.vue'
  import SpecificSynchronicCategoryRelation from './SpecificSynchronicCategoryRelation.vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  const istore = useInterfaceStore()

  const store = useProjectStore()

  const props = defineProps({
      categoryId: { type: String, default: "" },
      genericModel: { type: Object, default: null },
      layout: { type: String, default: "vertical" }
  })

  const category = computed(() => store.getSpecificSynchronicCategory(props.categoryId))

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

  const criterion = computed({
      get: () => category.value?.criterion ?? '',
      set: (value) => {
          store.updateSpecificSynchronicCategory(props.categoryId, { criterion: value })
      }
  })

  const displayJustification = ref(false)

  const isLeaf = computed(() => {
      return !category.value?.children.length
  })

  const isJustificationVisible = computed(() => {
      return isLeaf.value || displayJustification.value
  })

  const descriptemCount = computed(() => category.value?.justification?.descriptems.length || 0)

  const genericElement = computed(() => props.genericModel ? props.genericModel.byName[categoryName.value] : {})

  function debug () {
      (window as any).category = category.value;
      console.log("SpecificSynchronicCategory", { category: category.value })
  }

  function showContent () {
      // Make sure the content is expanded and visible
      console.log("Should expand SSC")
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

  function droppedSpecificSynchronicCategory (categoryId: string) {
      // DND on a category to reparent
      if (!categoryId) {
          // Empty categoryId: create a new child
          createSpecificSynchronicCategory(`in:${props.categoryId}`)
      }
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

  function droppedGenericSynchronicCategory (categoryName: string, where: string) {
      if (where === 'add') {
          // There is no "add" for now
          where = `in:${props.categoryId}`
      }
      if (category.value) {
          store.addSpecificSynchronicCategory(categoryName,
                                              category.value.specificsynchronicmodelId,
                                              where,
                                              null)
          showContent()
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

  function updateAbstractionType (value: string) {
      store.updateSpecificSynchronicCategory(props.categoryId, { abstractionType: value })
  }


  const menuActions = [
      [ "Delete", () => store.deleteSpecificSynchronicCategory(props.categoryId) ],
  ]

  const relationActions = [
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
  .specificsynchroniccategory-header {
      border: 1px solid grey;
  }
  .specificsynchroniccategory-header.has-error {
      border: 1px solid red;
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
  .specificsynchroniccategory-name {
      min-width: 6em;
  }
  .specificsynchroniccategory-name:hover {
      border: 1px dashed #ccccccee;
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
      width: var(--synchronic-category-relation-width);
      display: flex;
      align-items: left;
      justify-content: center;
      position: relative;
  }
  .specificsynchroniccategory-relationinfo {
      position: absolute;
      bottom: calc(50% + 10px);
      width: var(--synchronic-category-relation-width);
      left: 0;
      opacity: 0.1;
  }

  .specificsynchroniccategory-relation:hover   .specificsynchroniccategory-relationinfo {
      opacity: 1;
  }
  .specificsynchroniccategory-criterion {
      border: 1px dashed lightgrey;
      width: var(--synchronic-category-relation-width);
      min-height: 1em;
      max-height: 24px;

      color: #444;
      font-size: 9px;
      display: flex;
      overflow: hidden;
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
  .criterion-tooltip {
      white-space: pre-line;
  }
</style>
