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

      <q-expansion-item
        class="moment-body"
        dense
        dense-toggle
        :duration="0"
        expand-icon-toggle
        switch-toggle-side
        v-model="expand"
        header-class="header-class"
        :title="moment.comment"
        >

        <template v-slot:header>
          <DropZone data="header"
                    types="upmt/categorymodel upmt/categoryinstance upmt/descriptem upmt/annotation upmt/selection upmt/color"
                    class="row full-width justify-center moment-header"
                    @categoryinstance="droppedCategoryInstance"
                    @categorymodel="droppedCategoryModel"
                    @annotation="droppedAnnotation"
                    @selection="droppedSelection"
                    @descriptem="droppedDescriptem"
                    @color="droppedColor">
            <DragElement
              type="moment"
              :data="momentId"
              @click.meta="debug">
              <q-icon
                size="xs"
                @click="unhighlight"
                name="mdi-alpha-m-box-outline">
              </q-icon>
              <span class="moment-name">{{ momentName }}
                <q-popup-edit style="zoom: var(--chart-zoom)" v-model="momentName" auto-save v-slot="scope">
                  <q-input v-model="scope.value"
                           @focus="($event.target as HTMLInputElement).select()"
                           dense
                           autofocus
                           counter
                           @keyup.enter="scope.set" />
                </q-popup-edit>
              </span>
            </DragElement>
            <div class="element-toolbar on-name-hover">
              <ColorizeIcon
                class="on-name-hover"
                v-model="momentColor" />
              <CommentIcon
                :element="moment" />
              <ElementMenu
                :actions="menuActions" />
            </div>
          </DropZone>
        </template>

        <div class="moment-justification">
          <JustificationRepresentation :justificationId="moment.justification?.id ?? ''">
          </JustificationRepresentation>
        </div>

        <div class="moment-synchronic-specific-model flex row">
          <SpecificSynchronicModelOverview
            :modelId="moment?.specificsynchronicmodel?.id ?? ''">
          </SpecificSynchronicModelOverview>
          <q-btn
            flat
            dense
            size="xs"
            class="absolute-bottom-right"
            @click="editModel(moment.specificsynchronicmodel?.id || '')"
            icon="edit"
            no-caps>
          </q-btn>
        </div>

        <div :class="[ 'moment-categoryinstances', layout ]">
          <div v-for="c in moment.categoryinstances" :key="c.id">
            <CategoryInstanceRepresentation :categoryinstanceId="c.id" />
          </div>
        </div>

      </q-expansion-item>

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
  import JustificationRepresentation from './JustificationRepresentation.vue'
  import CategoryInstanceRepresentation from './CategoryInstanceRepresentation.vue'
  import MomentRepresentation from './MomentRepresentation.vue'
  import SpecificSynchronicModelOverview from './SpecificSynchronicModelOverview.vue'
  import DropZone from './DropZone.vue'
  import DragElement from './DragElement.vue'
  import ColorizeIcon from './ColorizeIcon.vue'
  import CommentIcon from './CommentIcon.vue'
  import ElementMenu from './ElementMenu.vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  const istore = useInterfaceStore()

  const store = useProjectStore()

  const props = defineProps({
      momentId: { type: String, default: "" },
      layout: { type: String, default: "vertical" }
  })

  const { highlightedMomentId } = storeToRefs(istore)

  const moment = computed(() => store.getMoment(props.momentId))

  function debug () {
      (window as any).moment = moment.value
      console.log("Moment", moment.value)
  }

  function unhighlight () {
      if (highlightedMomentId.value) {
          highlightedMomentId.value = ""
      }
  }

  function showContent () {
      if (moment.value && !moment.value.isExpanded) {
          store.updateMoment(props.momentId, { isExpanded: true })
      }
  }

  function droppedCategoryInstance (categoryinstanceId: string, data: string) {
      console.log("droppedCategoryInstance", categoryinstanceId, props.momentId, data)
      const ci = store.getCategoryInstance(categoryinstanceId)
      if (ci) {
          // store.momentAddCategoryModel(ci.model.id, props.momentId)
          // store.deleteCategoryInstance(categoryinstanceId)
          store.momentMoveCategoryInstance(categoryinstanceId, props.momentId)
          showContent()
      }
  }

  function droppedCategoryModel (cmId: string) {
      store.momentAddCategoryModel(cmId, props.momentId)
      showContent()
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
          store.addMoment(`New moment ${istore.newMomentIndexIncrement()}`,
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

  // Dropped selections to create a moment. data is before or after
  function droppedCreatingDescriptem (descriptemId: string, where: string) {
      const descriptem = store.getDescriptem(descriptemId)
      if (descriptem && moment.value) {
          store.addMoment(`New moment ${istore.newMomentIndexIncrement()}`,
                          props.momentId,
                          where,
                          descriptem.toJSON())
          showContent()
      }
  }

  function droppedCreatingAnnotation (annotationId: string, where: string) {
      const annotation = store.getAnnotation(annotationId)
      if (annotation && moment.value) {
          store.addMoment(`New moment ${istore.newMomentIndexIncrement()}`,
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
              store.addMoment(`New moment ${istore.newMomentIndexIncrement()}`,
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
      istore.setEditedSpecificSynchronicModelId(ssmId)
  }

  const menuActions = [
      [ "Toggle transitional", toggleTransitional ],
      [ "Delete", () => store.deleteMoment(props.momentId) ]
  ]
</script>

<style scoped>
  .header-class {
      font-weight: bold;
      text-align: center;
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
      border: 1px solid transparent;
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
</style>
