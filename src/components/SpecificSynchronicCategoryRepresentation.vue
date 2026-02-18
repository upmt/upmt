<template>
  <div ref="container"
       :class="[
               'specificsynchroniccategory-container',
               `specificsynchroniccategory-${categoryId}`,
               layout
               ]"
       :data-specificsynchroniccategory="categoryId">

    <div :class="[ 'specificsynchroniccategory' ]"
         :style="{ backgroundColor: category.color || 'transparent' }"
         v-if="category"
         :data-specificsynchroniccategory="categoryId">

      <div :class="[ 'specificsynchroniccategory-children' ]"
           v-if="withChildren">
        <SpecificSynchronicCategoryRepresentation
          v-for="c in category.children"
          :key="c.id"
          :isGeneric="isGeneric"
          :genericGraphs="genericGraphs"
          :layout="layout"
          :withChildren="withChildren"
          :hideJustifications="hideJustifications"
          :categoryId="c.id">
        </SpecificSynchronicCategoryRepresentation>
      </div>

      <DropZone data="add"
                types="upmt/descriptem upmt/annotation upmt/selection"
                class="row justify-center"
                @annotation="droppedAnnotation"
                @selection="droppedSelection"
                @descriptem="droppedDescriptem">

        <div class="specificsynchroniccategory-justification"
             v-if="isJustificationVisible">
          <ul v-if="isGeneric"
              class="justification-descriptems">
            <li v-for="descriptem in categoryDescriptems" :key="descriptem.id">
              <DescriptemRepresentation
                :descriptemId="descriptem.id"
                :withMenu="false"
                :isReadonly="true">
              </DescriptemRepresentation>
            </li>
          </ul>
          <JustificationRepresentation
            v-else
            :justificationId="category.justification?.id ?? ''">
          </JustificationRepresentation>
        </div>

      </DropZone>

      <div class="specificsynchroniccategory-relation">
        <SpecificSynchronicCategoryRelation
          :type="category.abstractionType"
          :direction="layout"
          :childrenCount="isLeaf ? 0 : category.children.length" />
        <div class="specificsynchroniccategory-relationinfo">
          <div class="specificsynchroniccategory-criterion">
            {{ criterion }}
            <q-tooltip
              flat
              dense>
              <div v-if="criterion"
                   class="criterion-tooltip">{{ criterion }}</div>
              Criterion
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
          <q-btn
            class="print-removed"
            size="xs"
            flat
            round
            dense
            title="Create a new child category"
            icon="mdi-plus">
            <q-menu
              touch-position>
              <q-list dense style="min-width: 100px">
                <q-item
                  v-for="([label, name], i) in proposedChildrenNames"
                  clickable
                  :key="i"
                  @click.stop="createChildCategory(name)"
                  v-close-popup>
                  {{ label }}
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
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
              :name="categoryIcon">
            </q-icon>
            <span class="specificsynchroniccategory-name">{{ categoryName }}
              <q-popup-edit v-model="categoryName"
                            v-slot="scope"
                            auto-save>
                <CategoryNameInput @change="scope.cancel"
                                   :genericGraphs="genericGraphs"
                                   :category="category" />
              </q-popup-edit>
            </span>
            <q-tooltip  class="bg-red-5" anchor="top right" self="top left" v-if="genericElement.errors?.length">
              {{ categoryName }}
              <div v-for="error, key in genericElement.errors"
                   :key="key">
                {{ error }}
              </div>
            </q-tooltip>
            <q-tooltip v-else>
              {{ categoryName }} ({{ isGeneric ? 'Generic Synchronic Category' : 'Specific Synchronic Category' }}
            </q-tooltip>
          </DragElement>
          <div class="element-toolbar">
            <q-badge
              @click="displayJustification = !displayJustification"
              class="descriptems-badge"
              color="grey-6"
              :title="`${categoryDescriptemCount} descriptems`"
              rounded>{{ categoryDescriptemCount }}</q-badge>
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

      <DropZone :data="`before:${categoryId}`"
                v-if="category.specificsynchronicmodelId"
                types="upmt/specificsynchroniccategory upmt/genericsynchroniccategory upmt/selection upmt/descriptem upmt/annotation"
                class="empty-padding newssc-dropzone"
                @specificsynchroniccategory="droppedSpecificSynchronicCategory"
                @genericsynchroniccategory="droppedGenericSynchronicCategory"
                @annotation="droppedCreatingAnnotation"
                @selection="droppedCreatingSelection"
                @descriptem="droppedCreatingDescriptem">
        <q-btn
          @click="createSpecificSynchronicCategory(`before:${categoryId}`)"
          dense
          class="newssc-button print-hidden"
          :icon="isVertical ? 'mdi-menu-up' : 'mdi-menu-right'">
          <q-tooltip>Create a parent category</q-tooltip>
        </q-btn>
      </DropZone>

      <div
        v-if="category.parentId && withChildren"
        class="specificsynchroniccategory-filler"
        >
        <SpecificSynchronicCategoryRelation :direction="layout"
                                            :childrenCount="1" />
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useQuasar } from 'quasar'
  import DescriptemRepresentation from './DescriptemRepresentation.vue'
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

  const $q = useQuasar()

  const istore = useInterfaceStore()

  const store = useProjectStore()

  const { currentProjectId } = storeToRefs(istore)

  const props = defineProps({
      categoryId: { type: String, default: "" },
      genericGraphs: { type: Object, default: null },
      layout: { type: String, default: "horizontal" }, // horizontal or vertical
      hideJustifications: { type: Boolean, default: false },
      isGeneric: { type: Boolean, default: false },
      withChildren: { type: Boolean, default: true }
  })

  const category = computed(() => store.getSpecificSynchronicCategory(props.categoryId))

  const categoryName = computed({
      get () {
          return category.value ? category.value.name : ""
      },
      set (value: string) {
          /* If the new name is from an existing category that has an abstractionType, then also update its abstractionType */
          const genericSource = props.genericGraphs ? props.genericGraphs.byName[value] : {}
          const abstractionType = genericSource?.abstractionType || ''
          store.updateSpecificSynchronicCategory(props.categoryId, { name: value, abstractionType: abstractionType })
      }
  })

  const categoryColor = computed({
      get () {
          return category.value ? category.value.color : ""
      },
      set (color: string) {
          if (color == '#ffffff') {
              color = ''
          }
          store.updateSynchronicCategoryColor(category.value?.projectId, category.value?.name, color)
      }
  })

  const categoryIcon = computed(() => props.isGeneric ?  "mdi-alpha-s-box" : "mdi-alpha-s-box-outline")

  const criterion = computed({
      get: () => category.value?.criterion ?? '',
      set: (value) => {
          store.updateSpecificSynchronicCategory(props.categoryId, { criterion: value })
      }
  })

  const isLeaf = computed(() => {
      return !category.value?.children.length
  })

  const isVertical = computed(() => props.layout == 'vertical')

  // Initial state for displayJustification
  // Hide by default
  const displayJustification = ref(false)

  const isJustificationVisible = computed(() => {
      return category.value?.justification?.descriptems?.length && displayJustification.value
  })

  const categoryDescriptems = computed(() => {
      if (! category.value || ! currentProjectId.value) {
          return []
      }
      if (props.isGeneric) {
          // Query for all descriptems for all categories
          const categories = store.getSpecificSynchronicCategoriesByName (currentProjectId.value, category.value.name)
          return categories.map(cat => cat.justification?.descriptems || []).flat()
      } else {
          return category.value?.justification?.descriptems || []
      }
  })

  const categoryDescriptemCount = computed(() => {
      return categoryDescriptems.value.length
  })

  if (isLeaf.value) {
      displayJustification.value = ! props.hideJustifications || categoryDescriptemCount.value > 0
  }

  const genericElement = computed(() => props.genericGraphs ? props.genericGraphs.byName[categoryName.value] : {})

  const proposedChildrenNames = computed(() => {
      const currentChildren = new Set((category.value?.children || []).map(child => child.name))
      const childrenNames = [ ...genericElement.value.childrenNames.difference(currentChildren) ].toSorted()
      return [ ["New child category", ""],
               ...childrenNames.map((name: string) => [ name, name ]) ]
  })

  function debug () {
      (window as any).category = category.value;
      console.log("SpecificSynchronicCategory", { category: category.value })
  }

  function showContent () {
      // Make sure the content is expanded and visible
      console.log("Should expand SSC")
  }

  function createSpecificSynchronicCategory (where: string, name: string = "") {
      if (category.value) {
          if (! name) {
              name = istore.newSSCId()
          }
          const genericSource = props.genericGraphs ? props.genericGraphs.byName[name] : {}
          const abstractionType = genericSource?.abstractionType || ''
          store.addSpecificSynchronicCategory(name,
                                              category.value.specificsynchronicmodelId,
                                              where,
                                              null,
                                              abstractionType)
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
          const specificsynchronicmodelId = source.specificsynchronicmodelId
          if (specificsynchronicmodelId) {
              // It was a root category - move all its children as root categories
              source.children.forEach(child => store.updateSpecificSynchronicCategory(child.id, { specificsynchronicmodelId,
                                                                                                  parentId: null }))
          }
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
          const genericSource = props.genericGraphs ? props.genericGraphs.byName[categoryName] : {}
          const abstractionType = genericSource?.abstractionType || ''

          store.addSpecificSynchronicCategory(categoryName,
                                              category.value.specificsynchronicmodelId,
                                              where,
                                              null,
                                              abstractionType)
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
      store.updateSynchronicCategoryColor(category.value?.projectId, category.value?.name, color)
  }

  // Dropped selections to create a SSCategory. data is before or after
  function droppedCreatingDescriptem (descriptemId: string, where: string) {
      const descriptem = store.getDescriptem(descriptemId)
      if (descriptem && category.value) {
          store.addSpecificSynchronicCategory(istore.newSSCId(),
                                              category.value.specificsynchronicmodelId,
                                              where,
                                              descriptem.toJSON())
          showContent()
      }
  }

  function droppedCreatingAnnotation (annotationId: string, where: string) {
      const annotation = store.getAnnotation(annotationId)
      if (annotation && category.value) {
          store.addSpecificSynchronicCategory(istore.newSSCId(),
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
              store.addSpecificSynchronicCategory(istore.newSSCId(),
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

  function createChildCategory (name: string = "") {
      createSpecificSynchronicCategory(`in:${props.categoryId}`, name)
  }

  function criterionPopup () {
      const criterion = category.value?.criterion || ""
      $q.dialog({
          title: 'Enter a criterion for this relation',
          html: true,
          message: 'You can specify a criterion for this relation or the associated category.',
          prompt: {
              model: criterion,
              type: 'text' // optional
          },
          cancel: true,
          persistent: true
      }).onOk(newValue => {
          if (newValue) {
              store.updateSpecificSynchronicCategory(props.categoryId, { criterion: newValue })
          }
      })
  }

  import type { NamedAction } from 'components/util.ts'

  const menuActions: NamedAction[] = [
      [ "Delete this category only", () => store.deleteSpecificSynchronicCategory(props.categoryId, false) ],
      [ "Delete this category and its children", () => store.deleteSpecificSynchronicCategory(props.categoryId, true) ],
  ]

  const relationActions: NamedAction[] = [
      [ "Create a new child category", () => createChildCategory() ],
      [ "Set as generic abstraction", () => updateAbstractionType('') ],
      [ "Set as aggregation abstraction ⋄", () => updateAbstractionType('aggregation') ],
      [ "Set as specialization abstraction ⧍", () => updateAbstractionType('specialization') ],
      [ "Define a criterion for this abstraction relation", () => criterionPopup() ]
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
  .vertical .specificsynchroniccategory-children {
      flex-direction: row;
      margin: 0 1em;
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
  .vertical .specificsynchroniccategory {
      flex-direction: column-reverse;
      align-items: center;
  }
  .highlighted .specificsynchroniccategory {
      border: 2px solid yellow;
  }
  .highlighted .specificsynchroniccategory-header {
      background-color: yellow;
  }
  .specificsynchroniccategory-justification {
      width: calc(var(--synchronic-category-descriptem-width) + 50px);
  }
  .vertical .specificsynchroniccategory-justification {
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
      display: inline-flex;
      width: calc(100% - 18px);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      /* Since we display a border on hover, match the space in non-hover state */
      border: 1px solid transparent;
  }
  .specificsynchroniccategory-name:hover {
      border: 1px dashed #ccccccee;
  }
  .specificsynchroniccategory-justification {
      align-self: center;
      min-height: 16px;
      opacity: 1.0;
      transition: opacity 1.5s ease;
      overflow: hidden;
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
      height: 100%;
      display: flex;
      justify-content: center;
      position: relative;
  }
  .vertical .specificsynchroniccategory-relation {
      height: var(--synchronic-category-relation-width);
      width: 100%;
  }
  .specificsynchroniccategory-relationinfo {
      position: absolute;
      bottom: calc(50% + 10px);
      width: var(--synchronic-category-relation-width);
      left: 0;
      opacity: 0.2;
  }
  .vertical .specificsynchroniccategory-relationinfo {
      position: absolute;
      top: 0;
      width: var(--synchronic-category-relation-width);
      left: calc(50% - 40px);
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
  .vertical .specificsynchroniccategory-filler {
      flex-direction: column;
      width: 24px;
      height: 24px;
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
  .vertical .newssc-button {
      height: 8px;
      width: 48px;
  }
  .criterion-tooltip {
      white-space: pre-line;
  }
  .justification-descriptems {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding-left: 8px;
  }
  .specificsynchroniccategory-criterion {
      cursor: text;
  }
</style>
