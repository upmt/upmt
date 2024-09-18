<template>
  <div class="textAnnotationContainer">
    <div class="inspector">
      <strong>Interview {{ interview.name }}</strong>
      <q-expansion-item
        dense
        dense-toggle
        expand-icon-toggle
        label="Debug"
          >
        <div>
          <strong>Active annotations </strong>
          <span ref="activeAnnotationInspector"></span>
        </div>
        <div>
          <strong>Selected annotations </strong>
          <span ref="selectedAnnotationInspector"></span>
        </div>
        <div>
          <strong>Selected text </strong>
          <span>{{ selectionShorttext }}</span>
        </div>
      </q-expansion-item>
    </div>
    <AnnotatedText
      class="textAnnotationComponent"
      v-if="interview"
      :text="interview.text"
      :annotations="annotations"
      :getSpanClasses="getSpanClasses"
      :spanEvents="spanEvents"
      @dragstart="onDragStart($event)"
      @selection="textSelection"
      >
      <q-menu
        touch-position
        context-menu
        v-model="contextMenuVisible"
        >
        <q-list dense style="min-width: 100px">
          <q-item
            v-if="selectionShorttext"
            key="current"
            clickable
            v-close-popup>
            <DragElement
              type="selection"
              :data="currentSelectionDataAsString">
              <q-icon
                size="xs"
                name="mdi-select"></q-icon>
              <span class="extract">{{ selectionShorttext }}</span>
            </DragElement>
          </q-item>

          <q-item
            v-for="descriptem in activeDescriptems"
            :key="descriptem.id"
            clickable
            row
            v-close-popup>
            <DescriptemTextRepresentation
              :descriptemId="descriptem.id"
              withContext />
          </q-item>
          <q-separator />
          <q-item
            v-for="annotation in activeAnnotations"
            :key="annotation.id"
            clickable
            v-close-popup>
            <DragElement
              type="annotation"
              :data="annotation.id">
              <q-icon
                size="xs"
                :style="{ backgroundColor: annotation.color }"
                name="mdi-comment-quote-outline"></q-icon>
              <span class="extract">{{ annotation.shorttext }}</span>
            </DragElement>
          </q-item>
        </q-list>
      </q-menu>
    </AnnotatedText>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import AnnotatedText from './AnnotatedText.vue'
  import DescriptemTextRepresentation from './DescriptemTextRepresentation.vue'
  import Annotation from 'stores/models/annotation'
  import Descriptem from 'stores/models/descriptem'
  import Interview from 'stores/models/interview'
  import { useProjectStore } from 'stores/projectStore'
  import { ellipsize } from 'stores/util'
  import DragElement from './DragElement.vue'

  // BaseAnnotation that is used to communicate with
  // AnnotatedText. Not to be confused with model Annotation
  type BaseAnnotation = {
      id: string,
      start: number,
      length: number,
      color: string | null,
      class: string
  }

  type TextSelection = {
      startIndex: number,
      endIndex: number,
      interviewId: string
  }

  const contextMenuVisible = ref(false)

  const store = useProjectStore()

  const activeAnnotationInspector = ref<HTMLDivElement | null>(null)
  const selectedAnnotationInspector = ref<HTMLDivElement | null>(null)

  const activeAnnotations = ref<Annotation[]>([])
  const activeDescriptems = ref<Descriptem[]>([])
  const currentSelection = ref<TextSelection| null>(null)

  const props = defineProps({
      interview: { type: Interview, default: null }
  })

  /*
    export const annotationsTest = [
{
    start: 0,
    length: 7,
    id: 1,
    class: "process"
}
  */
  const annotation2class = (a: Annotation) => {
      const mapping: Record<string, string> = {
          '#7084b0': '2',
          '#7bcf7b': '4',
          '#ff9797': '1',
          '#ffdc97': '3'
      }
      return `category${mapping[a.color] ?? '9'}`
  }

  const annotations = computed(() => {
      const interviewAnnotations: BaseAnnotation[] = (props.interview.annotations ?? []).map(a => {
          return {
              id: a.id,
              start: a.startIndex,
              length: a.endIndex - a.startIndex,
              color: a.color,
              class: annotation2class(a)
          }
      })
      const interviewDescriptems: BaseAnnotation[] = store.getInterviewDescriptems(props.interview.id).map(d => {
          return {
              id: d.id,
              start: d.startIndex,
              length: d.endIndex - d.startIndex,
              color: null,
              class: 'descriptem'
          }
      })
      return [ ...interviewAnnotations, ...interviewDescriptems ]
  })

  const selectionShorttext = computed(() => {
      if (currentSelection.value) {
          const text = props.interview.text.slice(currentSelection.value.startIndex,
                                                  currentSelection.value.endIndex)
          return ellipsize(text)
      } else {
          return ""
      }
  })

  function getSpanClasses (span: any) {
      const classes = [ ...new Set(span.annotations.map((a: any) => a.class)) ]
      return classes.join(" ")
  }

  const spanEvents = {
      click: (event: Event, annotations: BaseAnnotation[]) => {
          // annotations can contain descriptems or annotations
          if (selectedAnnotationInspector.value) {
              const message = annotations.map(a => `${a.start}:${a.start + a.length} ${a.class}`).join(" ")
              selectedAnnotationInspector.value.textContent = message
          }
      },
      // Do not activate mouseover/leave for the moment, it has a small performance cost
      mouseover: (event: Event, annotations: BaseAnnotation[]) => {
          activeDescriptems.value = (annotations.filter(a => a.class === 'descriptem').map(a => store.getDescriptem(a.id))) as Descriptem[]
          activeAnnotations.value = (annotations.filter(a => a.class !== 'descriptem').map(a => store.getAnnotation(a.id))) as Annotation[]
          if (activeAnnotationInspector.value) {
              let message = "No annotations or descriptems"
              if (activeDescriptems.value.length || activeAnnotations.value.length) {
                  message = `${activeAnnotations.value.length} annotations - ${activeDescriptems.value.length} descriptems`
              }
              activeAnnotationInspector.value.textContent = message
          }
      }
      // mouseleave: (event: Event, annotations: Array<unknown>) => console.log("Mouseleave", event, annotations)
  }

  const currentSelectionDataAsString = computed(() => {
      if (currentSelection.value) {
          return JSON.stringify(currentSelection.value)
      } else {
          return '{}'
      }
  })

  function textSelection (data: any) {
      currentSelection.value = {
          startIndex: data.begin,
          endIndex: data.end,
          interviewId: props.interview.id
      }
  }

  /*
   * Add app-specific information when dragging text directly
   */
  function onDragStart (event: DragEvent) {
      if (event.dataTransfer) {
          event.dataTransfer.setData(`upmt/selection`, currentSelectionDataAsString.value)
      }
  }
</script>

<style scoped>
  .textAnnotationContainer {
  }
  .inspector {
  }
  .textAnnotationComponent {
  }
  .extract {
      font-style: italic;
  }
</style>
