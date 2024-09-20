<template>
  <div class="moment-container">

    <DropZone data="before"
              class="empty_padding"
              types="upmt/moment upmt/selection upmt/descriptem upmt/annotation"
              @moment="droppedMoment"
              @annotation="droppedCreatingAnnotation"
              @selection="droppedCreatingSelection"
              @descriptem="droppedCreatingDescriptem">
    </DropZone>

    <div :class="[ 'moment', { 'transitional': moment.isTransitional } ]"
         :style="{ backgroundColor: moment.color }"
         v-if="moment"
         :data-moment="moment.id">

        <q-expansion-item
          class="moment-body"
          dense
          dense-toggle
          expand-icon-toggle
          switch-toggle-side
          v-model="expand"
          header-class="header-class"
          :title="moment.comment"
          >

          <template v-slot:header>
            <DropZone data="header"
                      class="empty_padding"
                      types="upmt/categorymodel upmt/categoryinstance upmt/descriptem upmt/annotation upmt/selection"
                      @categoryinstance="droppedCategoryInstance"
                      @categorymodel="droppedCategoryModel"
                      @annotation="droppedAnnotation"
                      @selection="droppedSelection"
                      @descriptem="droppedDescriptem">
              <DragElement
                type="moment"
                :data="momentId"
                @click.meta="debug">
                <q-icon
                  size="xs"
                  name="mdi-note-outline"></q-icon>
              </DragElement>
              <span class="moment-name">{{ momentName }}
                <q-popup-edit style="zoom: var(--chart-zoom)" v-model="momentName" auto-save v-slot="scope">
                  <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
              </q-popup-edit>
              </span>
            </DropZone>
          </template>

          <div class="moment-justification">
            <JustificationRepresentation :justificationId="moment.justification?.id">
            </JustificationRepresentation>
          </div>

          <div :class="[ 'moment-categoryinstances', layout ]">
            <div v-for="c in moment.categoryinstances" :key="c.id">
              <CategoryInstanceRepresentation :categoryinstanceId="c.id" />
            </div>
          </div>

        </q-expansion-item>

      <div :class="[ 'moment-children', 'horizontal' ]">
        <div v-for="(m, index) in moment.children" :key="m.id">
          <MomentRepresentation :momentId="m.id">
          </MomentRepresentation>
        <DropZone :data="index.toString()"
                  class="empty_padding"
                  types="upmt/moment"
                  @moment="droppedMoment">
        </DropZone>
        </div>
      </div>

    </div>

    <DropZone data="after"
              class="empty_padding"
              types="upmt/moment upmt/selection upmt/descriptem upmt/annotation"
              @moment="droppedMoment"
              @annotation="droppedCreatingAnnotation"
              @selection="droppedCreatingSelection"
              @descriptem="droppedCreatingDescriptem">
    </DropZone>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import JustificationRepresentation from './JustificationRepresentation.vue'
import CategoryInstanceRepresentation from './CategoryInstanceRepresentation.vue'
import MomentRepresentation from './MomentRepresentation.vue'
import DropZone from './DropZone.vue'
import DragElement from './DragElement.vue'
import { useProjectStore } from 'stores/projectStore'

const store = useProjectStore()

const props = defineProps({
    momentId: { type: String, default: "" },
    layout: { type: String, default: "vertical" }
  })

const moment = computed(() => store.getMoment(props.momentId))

function debug () {
    (window as any).moment = moment.value
    console.log("Moment", moment.value)
}

function droppedCategoryInstance (categoryinstanceId: string, data: string) {
    console.log("droppedCategoryInstance", categoryinstanceId, props.momentId, data)
    const ci = store.getCategoryInstance(categoryinstanceId)
    if (ci) {
        store.momentAddCategoryModel(ci.model.id, props.momentId)
    }
}

function droppedCategoryModel (cmId: string) {
    store.momentAddCategoryModel(cmId, props.momentId)
}

function droppedDescriptem (descriptemId: string) {
    const descriptem = store.getDescriptem(descriptemId)
    if (descriptem) {
        store.addTextSelectionToMoment(descriptem.toJSON(), props.momentId)
    }
}

function droppedAnnotation (annotationId: string) {
    const annotation = store.getAnnotation(annotationId)
    if (annotation) {
        store.addTextSelectionToMoment(annotation.toJSON(), props.momentId)
    }
}

function droppedSelection (selectionData: string) {
    try {
        const selection = JSON.parse(selectionData)
        // addTextSelectionToMoment will do the necessary key checks
        store.addTextSelectionToMoment(selection, props.momentId)
    } catch (e) {
        console.log(`Cannot parse ${selectionData}`)
    }
}

// Dropped selections to create a moment. data is before or after
function droppedCreatingDescriptem (descriptemId: string, data: string) {
    const descriptem = store.getDescriptem(descriptemId)
    if (descriptem) {
        store.addMoment("NEW",
                        props.momentId,
                        data === 'before' ? 0 : 1,
                        descriptem.toJSON())
    }
}

function droppedCreatingAnnotation (annotationId: string, data: string) {
    const annotation = store.getAnnotation(annotationId)
    if (annotation) {
        store.addMoment("NEW",
                        props.momentId,
                        data === 'before' ? 0 : 1,
                        annotation.toJSON())
    }
}

function droppedCreatingSelection (selectionData: string, data: string) {
    try {
        const selection = JSON.parse(selectionData)
        store.addMoment("NEW",
                        props.momentId,
                        data === 'before' ? 0 : 1,
                        selection)
    } catch (e) {
        console.log(`Cannot parse ${selectionData}: ${e}`)
    }
}

function droppedMoment (momentId: string, data: string) {
    console.log("Dropped Moment", momentId, "data", data)
    store.moveMoment(momentId, props.momentId, Number(data))
}

const expand = computed({
    get () {
        return moment.value ? !moment.value.isCollapsed : true
    },
    set (value: boolean) {
        store.updateMoment(props.momentId, { isCollapsed:!value })
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
</script>

<style>
  .header-class {
    font-weight: bold;
    text-align: center;
  }
  .moment-children {
    list-style: none;
    min-width: 200px;
    display: flex;
    flex-direction: column;
  }
  .moment-children.horizontal {
      flex-direction: row;
  }
  .moment-container {
      display: flex;
      flex-direction: row;
  }
  .moment {
      min-width: 200px;
      min-height: 40px;
      margin: 0;
      display: flex;
      flex-direction: column;
      border: 1px solid transparent;
  }
  .moment-body {
      border: 1px solid grey;
      display: flex;
      flex-grow: 1;
  }
  .transitional {
      background-color: var(--transitional-color);
  }
  .moment-handle {
      opacity: .5;
      cursor: pointer;
  }
  .moment-handle:hover {
      opacity: .8;
  }
</style>
