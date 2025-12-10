<template>
  <div class="textAnnotationContainer"
       v-if="interview">
    <q-toolbar
      class="row justify-end absolute-top bg-white">
      <NoteIcon
        :element="interview" />
      <q-btn
        flat
        size="sm"
        dense
        title="Edit metadata"
        @click="isMetadataVisible = !isMetadataVisible"
        icon="edit"
        >
      </q-btn>
      <q-space></q-space>
      <q-btn
        size="sm"
        icon="mdi-cursor-text"
        @click="selectionColor = ''"
        :flat="selectionColor != ''"
        dense
        />
      <q-btn
        size="sm"
        v-for="color in ANNOTATION_COLORS"
        :key="color"
        icon="mdi-marker"
        @click="selectionColor = color"
        :flat="color != selectionColor"
        dense
        :style="{ color: color }"
        />
    </q-toolbar>
    <InterviewMetadataForm
      v-if="isMetadataVisible"
      :interview="interview"
      @cancel="isMetadataVisible = false"
      @validate="metadataValidate"
      />
    <AnnotatedText
      class="textAnnotationComponent q-pt-lg q-pa-md"
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
            <DescriptemRepresentation
              class="full-width"
              :descriptemId="descriptem.id"
              withContext
              :withMenu="false" />
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
            <q-space />
            <q-btn
              size="xs"
              flat
              dense
              icon="mdi-delete-outline"
              @click="annotationDelete(annotation.id)" />
          </q-item>
        </q-list>
      </q-menu>
    </AnnotatedText>
  </div>
</template>

<script setup lang="ts">

  import { ref, computed, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import AnnotatedText from './AnnotatedText.vue'
  import NoteIcon from './NoteIcon.vue'
  import DescriptemRepresentation from './DescriptemRepresentation.vue'
  import InterviewMetadataForm from './InterviewMetadataForm.vue'
  import Annotation from 'stores/models/annotation'
  import Descriptem from 'stores/models/descriptem'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import { ellipsize } from 'stores/util'
  import DragElement from './DragElement.vue'
  import { ANNOTATION_COLORS } from './util'
  import type { TextSelection } from './util'

  // BaseAnnotation that is used to communicate with
  // AnnotatedText. Not to be confused with model Annotation
  type BaseAnnotation = {
      id: string,
      start: number,
      length: number,
      color: string | null,
      class: string
  }

  const props = defineProps({
      interviewId: { type: String, default: null }
  })

  const store = useProjectStore()

  const istore = useInterfaceStore()

  const contextMenuVisible = ref(false)

  const isMetadataVisible = ref(false)

  const activeAnnotations = ref<Annotation[]>([])
  const activeDescriptems = ref<Descriptem[]>([])
  const currentSelection = ref<TextSelection| null>(null)

  // selectionColor is the marker color. If empty, we just want to
  // select the text.
  const selectionColor = ref("")

  const { highlightedDescriptemId } = storeToRefs(istore)

  const interview = computed(() => store.getInterview(props.interviewId))

  import type { InterviewInfo } from './InterviewMetadataForm.vue'

  function metadataValidate (info: InterviewInfo) {
      isMetadataVisible.value = false
      if (interview.value) {
          store.updateElement(interview.value, {
              name: info.name,
              participantName: info.participantName,
              date: info.date,
              note: info.note
          })
      }
  }

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
      const interviewId = props.interviewId
      const interviewAnnotations: BaseAnnotation[] = store.getInterviewAnnotations(interviewId).map(a => {
          return {
              interviewId: a.interviewId,
              id: a.id,
              start: a.startIndex,
              length: a.endIndex - a.startIndex,
              color: a.color,
              class: annotation2class(a)
          }
      })
      const interviewDescriptems: BaseAnnotation[] = store.getInterviewDescriptems(interviewId).map(d => {
          return {
              interviewId: d.interviewId,
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
          const text = (interview.value?.text ?? "").slice(currentSelection.value.startIndex,
                                                           currentSelection.value.endIndex)
          return ellipsize(text)
      } else {
          return ""
      }
  })

  function getSpanClasses (span: any) {
      const classes = span.annotations.map((a: any) => a.class)
      const descriptemCount = classes.filter((c: string) => c === 'descriptem').length
      if (descriptemCount >= 2) {
          // Multiple descriptems
          classes.push('descriptems')
          classes.push(`descriptems${descriptemCount}`)
      }
      return [ ...new Set(classes) ].join(" ")
  }

  const spanEvents = {
      /*
      click: (event: Event, annotations: BaseAnnotation[]) => {
          // annotations can contain descriptems or annotations
          if (selectedAnnotationInspector.value) {
              const message = annotations.map(a => `${a.start}:${a.start + a.length} ${a.class}`).join(" ")
              selectedAnnotationInspector.value.textContent = message
          }
          },
          */
      // Do not activate mouseover/leave for the moment, it has a small performance cost
      mouseover: (_event: Event, annotations: BaseAnnotation[]) => {
          activeDescriptems.value = (annotations.filter(a => a.class === 'descriptem').map(a => store.getDescriptem(a.id))) as Descriptem[]
          activeAnnotations.value = (annotations.filter(a => a.class !== 'descriptem').map(a => store.getAnnotation(a.id))) as Annotation[]
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
      if (interview.value) {
          currentSelection.value = {
              startIndex: data.begin,
              endIndex: data.end,
              interviewId: props.interviewId,
              text: interview.value.fragment(data.begin, data.end)
          }
          // Create an annotation if a marker color is selected
          if (selectionColor.value) {
              store.addAnnotation(currentSelection.value, selectionColor.value)
          }
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

  function annotationDelete (identifier: string) {
      store.deleteAnnotation(identifier)
  }

  watch(highlightedDescriptemId, () => {
      if (highlightedDescriptemId.value) {
          // Scroll element into view
          document.querySelectorAll('[data-annotation-ids].highlighted').forEach(element => element.classList.remove('highlighted'))
          const elements = document.querySelectorAll(`[data-annotation-ids*="${highlightedDescriptemId.value}"]`)
          elements.forEach(element => element.classList.add('highlighted'))
          if (elements.length && elements[0]) {
              elements[0].scrollIntoView({ block: "center", behavior: "smooth" })
          }
      } else {
          document.querySelectorAll('[data-annotation-ids].highlighted').forEach(element => element.classList.remove('highlighted'))
      }
  })
</script>

<style scoped>
  .textAnnotationContainer {
  }
  .textAnnotationComponent {
      margin-top: 50px;
  }
  .extract {
      font-style: italic;
  }
</style>
