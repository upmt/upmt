<template>
  <div ref="container"
       :class="[ 'moment-container', `moment-${momentId}`, { 'highlighted': momentId === highlightedMomentId } ]"
       :data-moment="momentId">

    <DropZone data="before"
              class="empty_padding"
              types="upmt/moment upmt/selection upmt/descriptem upmt/annotation"
              @moment="droppedMoment"
              @annotation="droppedCreatingAnnotation"
              @selection="droppedCreatingSelection"
              @descriptem="droppedCreatingDescriptem">
      <q-btn
        flat
        dense
        size="xs"
        class="new-moment-button"
        icon="mdi-plus"
        @click="droppedCreatingSelection('{}', 'before')"
        >
        <q-tooltip>Create a new moment here</q-tooltip>
      </q-btn>
    </DropZone>

    <div :class="[ 'moment', { 'transitional': moment.isTransitional } ]"
         :style="{ backgroundColor: moment.color }"
         v-if="moment"
         :data-moment="moment.id">

      <DropZone data="header"
                types="upmt/descriptem upmt/annotation upmt/selection upmt/color upmt/specificsynchroniccategory"
                class="row full-width justify-center moment-header q-pa-xs"
                @annotation="droppedAnnotation"
                @selection="droppedSelection"
                @descriptem="droppedDescriptem"
                @specificsynchroniccategory="droppedSpecificSynchronicCategory"
                @color="droppedColor">
        <q-expansion-item
          class="moment-body pa-md-xs"
          dense
          dense-toggle
          :duration="0"
          expand-icon-toggle
          switch-toggle-side
          v-model="expand"
          header-class="header-class q-pa-xs"
          expand-icon-class="icon-class q-pa-xs"
          :title="moment.note"
          >

          <template v-slot:header>
            <DragElement
              type="moment"
              :data="momentId"
              @click.meta="debug">
              <q-icon
                size="xs"
                @click="highlightToggle"
                name="mdi-alpha-d-box-outline">
              </q-icon>
              <span class="moment-name">{{ momentName }}
                <q-popup-edit v-model="momentName" auto-save v-slot="scope">
                  <MomentNameInput @change="scope.cancel"
                                   :moment="moment" />
                </q-popup-edit>
              </span>
            </DragElement>
            <NoteIcon
              :element="moment" />
            <div class="element-toolbar on-name-hover">
              <ColorizeIcon
                class="on-name-hover"
                v-model="momentColor" />
              <ElementMenu
                :actions="menuActions" />
            </div>
          </template>

          <div class="moment-justification">
            <JustificationRepresentation
              v-if="moment"
              :justificationId="moment.justification?.id ?? ''">
            </JustificationRepresentation>
          </div>

          <div class="moment-synchronic-specific-model flex row"
               :class="{ 'moment-synchronic-specific-model-edited': isEditedModel }">
            <SpecificSynchronicModelOverview
              @click="editModel(moment.specificsynchronicmodel?.id || '')"
              :modelId="moment?.specificsynchronicmodel?.id ?? ''">
            </SpecificSynchronicModelOverview>

            <q-btn
              flat
              dense
              v-if="moment"
              size="xs"
              title="Edit specific synchronic model"
              class="absolute-bottom-right"
              @click="editModel(moment.specificsynchronicmodel?.id || '')"
              icon="mdi-graph-outline"
              no-caps>
            </q-btn>

          </div>

        </q-expansion-item>
      </DropZone>

      <div :class="[ 'moment-children', 'horizontal' ]">
        <div v-for="m in moment.children" :key="m.id">
          <MomentRepresentation
            :momentId="m.id">
          </MomentRepresentation>
        </div>
      </div>

      <DropZone :data="`in:${momentId}`"
                class="empty_padding"
                types="upmt/moment upmt/selection upmt/descriptem upmt/annotation"
                @moment="droppedMoment"
                @annotation="droppedCreatingAnnotation"
                @selection="droppedCreatingSelection"
                @descriptem="droppedCreatingDescriptem">
      </DropZone>
    </div>

    <DropZone data="after"
              class="empty_padding"
              types="upmt/moment upmt/selection upmt/descriptem upmt/annotation"
              @moment="droppedMoment"
              @annotation="droppedCreatingAnnotation"
              @selection="droppedCreatingSelection"
              @descriptem="droppedCreatingDescriptem">
      <q-btn
        flat
        dense
        size="xs"
        class="new-moment-button"
        icon="mdi-plus"
        @click="droppedCreatingSelection('{}', 'after')"
        >
        <q-tooltip>Create a new moment here</q-tooltip>
      </q-btn>
    </DropZone>

  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'

  import ColorizeIcon from './ColorizeIcon.vue'
  import DragElement from './DragElement.vue'
  import DropZone from './DropZone.vue'
  import ElementMenu from './ElementMenu.vue'
  import JustificationRepresentation from './JustificationRepresentation.vue'
  import MomentRepresentation from './MomentRepresentation.vue'
  import MomentNameInput from './MomentNameInput.vue'
  import NoteIcon from './NoteIcon.vue'
  import SpecificSynchronicModelOverview from './SpecificSynchronicModelOverview.vue'

  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  const istore = useInterfaceStore()

  const store = useProjectStore()

  const props = defineProps({
      momentId: { type: String, default: "" },
      layout: { type: String, default: "vertical" }
  })

  const {
      editedSpecificSynchronicModelId,
      highlightedMomentId
  } = storeToRefs(istore)

  const moment = computed(() => store.getMoment(props.momentId))

  const isEditedModel = computed(() => moment.value?.specificsynchronicmodel?.id === editedSpecificSynchronicModelId.value)

  function debug () {
      (window as any).moment = moment.value
      console.log("Moment", moment.value)
      console.log("Children:\n", moment.value?.children.map(c => `${c.childIndex}: ${c.name}`).join("\n  "))
  }

  function highlightToggle () {
      if (highlightedMomentId.value == props.momentId) {
          istore.setHighlightedMomentId("")
      } else {
          istore.setHighlightedMomentId(props.momentId)
      }
  }

  function showContent () {
      if (moment.value && !moment.value.isExpanded) {
          store.updateMoment(props.momentId, { isExpanded: true })
      }
  }

  function droppedDescriptem (descriptemId: string) {
      const descriptem = store.getDescriptem(descriptemId)
      if (descriptem) {
          store.addTextSelectionToMoment(descriptem.toJSON(), props.momentId)
          store.deleteDescriptem(descriptemId)
          showContent()
      }
  }

  function droppedAnnotation (annotationId: string) {
      const annotation = store.getAnnotation(annotationId)
      if (annotation) {
          store.addTextSelectionToMoment(annotation.toJSON(), props.momentId)
          showContent()
      }
  }

  function droppedSelection (selectionData: string) {
      try {
          const selection = JSON.parse(selectionData)
          // addTextSelectionToMoment will do the necessary key checks
          store.addTextSelectionToMoment(selection, props.momentId)
          showContent()
      } catch (e) {
          console.log(`Cannot parse ${selectionData}: ${e}`)
      }
  }

  function droppedMoment (momentId: string, where: string) {
      console.log("Dropped Moment", momentId, "where", where)
      if (!momentId) {
          store.addMoment(istore.newMomentId(),
                          props.momentId,
                          where)
          showContent()
      } else {
          store.moveMoment(momentId, props.momentId, where)
          showContent()
      }
  }

  function droppedColor (color: string) {
      store.updateMoment(props.momentId, { color: color })
  }

  function droppedSpecificSynchronicCategory (sscId: string) {
      // A SSC was dropped - add it and its children to the model
      const modelId = moment.value?.specificsynchronicmodel?.id
      if (modelId) {
          store.copySpecificSynchronicCategoryToModel(sscId, modelId, true)
      }
  }

  // Dropped selections to create a moment. data is before or after
  function droppedCreatingDescriptem (descriptemId: string, where: string) {
      const descriptem = store.getDescriptem(descriptemId)
      if (descriptem && moment.value) {
          store.addMoment(istore.newMomentId(),
                          props.momentId,
                          where,
                          descriptem.toJSON())
          showContent()
      }
  }

  function droppedCreatingAnnotation (annotationId: string, where: string) {
      const annotation = store.getAnnotation(annotationId)
      if (annotation && moment.value) {
          store.addMoment(istore.newMomentId(),
                          props.momentId,
                          where,
                          annotation.toJSON())
          showContent()
      }
  }

  function droppedCreatingSelection (selectionData: string, where: string) {
      try {
          const selection = JSON.parse(selectionData)
          if (moment.value) {
              store.addMoment(istore.newMomentId(),
                              props.momentId,
                              where,
                              selection)
              showContent()
          }
      } catch (e) {
          console.log(`Cannot parse ${selectionData}: ${e}`)
      }
  }

  const expand = computed({
      get () {
          return moment.value ? moment.value.isExpanded : true
      },
      set (value: boolean) {
          store.updateMoment(props.momentId, { isExpanded: value })
      }
  })

  const momentName = computed({
      get () {
          return moment.value ? moment.value.name : ""
      },
      set (value: string) {
          store.updateMoment(props.momentId, { name:value })
      }
  })

  const momentColor = computed({
      get () {
          return moment.value ? moment.value.color : ""
      },
      set (color: string) {
          store.updateMoment(props.momentId, { color })
      }
  })

  function toggleTransitional () {
      if (moment.value) {
          store.updateMoment(props.momentId, { isTransitional: !moment.value.isTransitional })
      }
  }

  function editModel (ssmId: string) {
      if (!ssmId) {
          // The SpecificSynchronicModel does not exist (old data) - create it
          const specificsynchronicmodel = store.getRepo().SpecificSynchronicModel.make({
              name: "Initial",
              categories: []
          })
          store.updateMoment(props.momentId, { specificsynchronicmodel })
          ssmId = specificsynchronicmodel.id
      }
      istore.setEditedSpecificSynchronicModelId(ssmId)
  }

  import type { NamedAction } from 'components/util.ts'
  const menuActions: NamedAction[] = [
      [ "Toggle transitional", toggleTransitional ],
      [ "Delete", () => store.deleteMoment(props.momentId) ]
  ]
</script>

<style scoped>
  .header-class {
      font-weight: bold;
      text-align: center;
  }
  .icon-class {
      height: 24px;
  }
  .element-toolbar {
      display: flex;
      flex-direction: row;
  }
  .moment-children {
      list-style: none;
      display: flex;
      flex-direction: column;
  }
  .moment-children.horizontal {
      flex-direction: row;
  }
  .moment-container {
      display: flex;
      flex-direction: row;
      position: relative;
  }
  .moment {
      min-width: var(--moment-minimum-width);
      min-height: 40px;
      margin: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      border: 1px solid transparent;
      position: relative;
  }
  .highlighted .moment {
      border: 2px solid yellow;
  }
  .highlighted .moment-header {
      background-color: yellow;
  }
  .moment-body {
      border: 1px solid grey;
      display: flex;
      justify-content: center;
      flex-grow: 1;
  }
  .moment-body .q-item {
      padding: 0;
  }
  .q-item__section--avatar {
      min-width: 2px;
  }
  .transitional {
      background-color: var(--transitional-color);
  }
  .transitional::after {
      content: ' ';
      position: absolute;
      left: calc( 50% - var(--transitional-bar-width) / 2 );
      top: 100%;
      height: 80vh;
      width: var(--transitional-bar-width);
      background-color: var(--transitional-color);
  }
  .moment-handle {
      opacity: .5;
      cursor: pointer;
  }
  .moment-handle:hover {
      opacity: .8;
  }
  .on-name-hover {
      opacity: 0;
  }
  .moment-header:hover .on-name-hover {
      opacity: 1;
  }
  .new-moment-button {
      width: 8px;
      opacity: 0;
  }
  .new-moment-button:hover {
      opacity: .8;
  }
  .moment-synchronic-specific-model {
      min-height: 1em;
  }
  .moment-synchronic-specific-model-edited {
      border: 3px dotted blue;
      min-height: 1em;
  }
</style>
