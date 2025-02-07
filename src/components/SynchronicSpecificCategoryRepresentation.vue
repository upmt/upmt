<template>
  <div ref="container"
       :class="[ 'synchronicspecificcategory-container', `synchronicspecificcategory-${categoryId}` ]"
       :data-synchronicspecificcategory="categoryId">

    <div :class="[ 'synchronicspecificcategory' ]"
         :style="{ backgroundColor: category.color }"
         v-if="category"
         :data-synchronicspecificcategory="categoryId">

      <div :class="[ 'synchronicspecificcategory-children' ]">
        <div v-for="c in category.children" :key="c.id">
          <SynchronicSpecificCategoryRepresentation
            :categoryId="c.id">
          </SynchronicSpecificCategoryRepresentation>
        </div>
      </div>

      <DropZone :data="`in:${categoryId}`"
                types="upmt/synchronicspecificcategory upmt/selection upmt/descriptem upmt/annotation"
                class="empty_padding newssc-dropzone"
                @synchronicspecificcategory="droppedSynchronicSpecificCategory"
                @annotation="droppedCreatingAnnotation"
                @selection="droppedCreatingSelection"
                @descriptem="droppedCreatingDescriptem">
        <q-btn
          @click="createSynchronicSpecificCategory(`in:${categoryId}`)"
          dense
          class="newssc-button"
          icon="mdi-plus">
        </q-btn>
      </DropZone>

      <DropZone data="add"
                types="upmt/descriptem upmt/annotation upmt/selection"
                class="row justify-center"
                @annotation="droppedAnnotation"
                @selection="droppedSelection"
                @descriptem="droppedDescriptem">
        <div class="synchronicspecificcategory-justification"
             v-if="isJustificationVisible">
          <JustificationRepresentation :justificationId="category.justification?.id">
          </JustificationRepresentation>
        </div>
      </DropZone>

      <div class="synchronicspecificcategory-relation"
           v-if="!isJustificationVisible">
        <SynchronicSpecificCategoryRelation
          :childrenCount="category.children.length" />
      </div>

      <DropZone data="add"
                types="upmt/descriptem upmt/annotation upmt/selection"
                class="row justify-center"
                @annotation="droppedAnnotation"
                @selection="droppedSelection"
                @descriptem="droppedDescriptem">
        <div class="synchronicspecificcategory-header">
          <DragElement
            type="synchronicspecificcategory"
            :data="categoryId"
            @click.meta="debug">
            <q-icon
              size="xs"
              name="mdi-source-fork">
            </q-icon>
            <span class="synchronicspecificcategory-name">{{ categoryName }}
              <q-popup-edit style="zoom: var(--chart-zoom)" v-model="categoryName" auto-save v-slot="scope">
                <q-input v-model="scope.value"
                         @focus="($event.target as HTMLInputElement).select()"
                         dense
                         autofocus
                         counter
                         @keyup.enter="scope.set" />
              </q-popup-edit>
            </span>
            <q-badge
              @click="displayJustification = !displayJustification"
              class="descriptems-badge"
              color="grey-6"
              :title="`${descriptemCount} descriptems`"
              rounded>{{ descriptemCount }}</q-badge>
          </DragElement>
          <div class="element-toolbar on-name-hover">
          <ColorizeIcon
            v-model="categoryColor" />
          <CommentIcon
            :element="category" />
          <ElementMenu
            :actions="menuActions" />
          </div>
        </div>
      </DropZone>

      <div
        v-if="category.parentId"
        class="synchronicspecificcategory-filler"
        >
      <SynchronicSpecificCategoryRelation :childrenCount="1" />
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
  import SynchronicSpecificCategoryRelation from './SynchronicSpecificCategoryRelation.vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  const istore = useInterfaceStore()

  const store = useProjectStore()

  const props = defineProps({
      categoryId: { type: String, default: "" },
      layout: { type: String, default: "vertical" }
  })

  const category = computed(() => store.getSynchronicSpecificCategory(props.categoryId))

  const displayJustification = ref(false)

  const isLeaf = computed(() => {
      return !category.value?.children.length
  })

  const isJustificationVisible = computed(() => {
      return isLeaf.value || displayJustification.value
  })

  const descriptemCount = computed(() => category.value?.justification?.descriptems.length || 0)

  function debug () {
      (window as any).category = category.value;
      console.log("SynchronicSpecificCategory", { category: category.value })
  }

  function showContent () {
      // Make sure the content is expanded and visible
      console.log("Should expand SSC")
  }

  function droppedSynchronicSpecificCategory (categoryId: string) {
      console.log("droppedSynchronicSpecificCategory", categoryId)
  }

  function droppedDescriptem (descriptemId: string) {
      const descriptem = store.getDescriptem(descriptemId)
      if (descriptem) {
          store.addTextSelectionToSynchronicSpecificCategory(descriptem.toJSON(), props.categoryId)
          store.deleteDescriptem(descriptemId)
      }
  }

  function droppedAnnotation (annotationId: string) {
      const annotation = store.getAnnotation(annotationId)
      if (annotation) {
          store.addTextSelectionToSynchronicSpecificCategory(annotation.toJSON(), props.categoryId)
      }
  }

  function droppedSelection (selectionData: string) {
      try {
          const selection = JSON.parse(selectionData)
          store.addTextSelectionToSynchronicSpecificCategory(selection, props.categoryId)
      } catch (e) {
          console.log(`Cannot parse ${selectionData}`)
      }
  }

  // Dropped selections to create a SSCategory. data is before or after
  function droppedCreatingDescriptem (descriptemId: string, where: string) {
      const descriptem = store.getDescriptem(descriptemId)
      if (descriptem && category.value) {
          store.addSynchronicSpecificCategory(`SSC${istore.newSSCIndexIncrement()}`,
                                              category.value.synchronicspecificmodelId,
                                              where,
                                              descriptem.toJSON())
          showContent()
      }
  }

  function droppedCreatingAnnotation (annotationId: string, where: string) {
      const annotation = store.getAnnotation(annotationId)
      if (annotation && category.value) {
          store.addSynchronicSpecificCategory(`SSC${istore.newSSCIndexIncrement()}`,
                                              category.value.synchronicspecificmodelId,
                                              where,
                                              annotation.toJSON())
          showContent()
      }
  }

  function droppedCreatingSelection (selectionData: string, where: string) {
      try {
          const selection = JSON.parse(selectionData)
          if (selection && category.value) {
              store.addSynchronicSpecificCategory(`SSC${istore.newSSCIndexIncrement()}`,
                                                  category.value.synchronicspecificmodelId,
                                                  where,
                                                  selection)
              showContent()
          }
      } catch (e) {
          console.log(`Cannot parse ${selectionData}: ${e}`)
      }
  }

  function createSynchronicSpecificCategory (where: string) {
      if (category.value) {
          store.addSynchronicSpecificCategory(`SSC${istore.newSSCIndexIncrement()}`,
                                              category.value.synchronicspecificmodelId,
                                              where,
                                              null)
          showContent()
      }
  }

  const categoryName = computed({
      get () {
          return category.value ? category.value.name : ""
      },
      set (value: string) {
          store.updateSynchronicSpecificCategory(props.categoryId, { name:value })
      }
  })

  const categoryColor = computed({
      get () {
          return category.value ? category.value.color : ""
      },
      set (color: string) {
          store.updateSynchronicSpecificCategory(props.categoryId, { color })
      }
  })

  const menuActions = [
      [ "Delete", () => store.deleteSynchronicSpecificCategory(props.categoryId) ]
  ]
</script>

<style>
  .header-class {
      font-weight: bold;
      text-align: center;
  }
  .synchronicspecificcategory-children {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-self: center;
  }
  .synchronicspecificcategory-children.horizontal {
      flex-direction: row;
  }
  .synchronicspecificcategory-container {
      display: flex;
      flex-direction: row;
      position: relative;
  }
  .synchronicspecificcategory {
      min-width: var(--moment-minimum-width);
      min-height: 40px;
      margin: 0;
      display: flex;
      flex-direction: row;
      border: 1px solid transparent;
      flex: 1;
  }
  .highlighted .synchronicspecificcategory {
      border: 2px solid yellow;
  }
  .highlighted .synchronicspecificcategory-header {
      background-color: yellow;
  }
  .synchronicspecificcategory-justification {
      width: var(--synchronic-category-descriptem-width);
  }
  .synchronicspecificcategory-header {
      width: var(--synchronic-category-header-width);
  }
  .synchronicspecificcategory-justification {
      border: 1px dashed grey;
  }

  .synchronicspecificcategory-header {
      border: 1px solid grey;
  }
  .synchronicspecificcategory-body {
      border: 1px solid grey;
      display: flex;
      flex-grow: 1;
  }
  .synchronicspecificcategory-body .q-item {
      padding: 0;
  }
  .q-item__section--avatar {
      min-width: 2px;
  }
  .synchronicspecificcategory-handle {
      opacity: .5;
      cursor: pointer;
  }
  .synchronicspecificcategory-handle:hover {
      opacity: .8;
  }
  .on-name-hover {
      opacity: 0;
  }
  .synchronicspecificcategory-justification {
      align-self: center;
      min-height: 16px;
  }
  .synchronicspecificcategory-header {
      align-self: center;
      overflow: hidden;
  }
  .synchronicspecificcategory-relation {
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .synchronicspecificcategory-header:hover .on-name-hover {
      opacity: 1;
  }
  .element-toolbar {
      height: 24px;
  }
  .synchronicspecificcategory-filler {
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
