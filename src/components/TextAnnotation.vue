<template>
  <AnnotatedText
    v-if="interview"
    text="interview.text"
    :annotations="annotations"
    :lines="textLines"
    :debug="false"
    :show-labels="false"
    render="nested"
    @click-annotation="onClick"
    />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import {
      type Annotation as ViewAnnotation,
      type Line,
//      type AnnotationTarget,
      AnnotatedText
  } from '@ghentcdh/vue-component-annotated-text'
  import "@ghentcdh/vue-component-annotated-text/style.css"
  import Annotation from 'stores/models/annotation'
  import Interview from 'stores/models/interview'

  const props = defineProps({
      interview: { type: Interview, default: null }
  })

  const textToLines = (text: string): Line[] => {
      const regLineNumber = /^([0-9/]+[a-z]?)\./g
      let lineStart = 0
      let lineEnd = 0
      let gutter = ""

      // split text into lines
      const lines = text.split("\n")
      const lineObjects: Line[] = []

      // split lines into line number, text, start and end
      for (let i = 0; i < lines.length; i++) {
          lineEnd = lineStart + (lines[i].length - 1)
          const match = lines[i].match(regLineNumber)
          gutter = match?.length ? match[0] : ""
          lineObjects[i] = {
              gutter,
              text: lines[i].replace(regLineNumber, ""),
              start: lineStart + gutter.length,
              end: lineEnd
          }
          lineStart = lineEnd + 2

          // empty lines:
          lineObjects[i].end = Math.max(lineObjects[i].end || 0, lineObjects[i].start || 0)
      }

      return lineObjects;
  }

  const textLines = computed(() => textToLines(props.interview.text))

  const onClick = (annotation: Annotation) => {
      console.log(annotation)
  }

  /*
    export const annotationsTest = [
  {
    start: 5,
    end: 9,
    class: "annotation annotation--color-1",
    target: "span",
    metadata: { id: 1 },
    label: "typo",
    },
  */
  const annotation2class = (a: Annotation) => {
      const mapping: Record<string, string> = {
          '#7084b0': '2',
          '#7bcf7b': '4',
          '#ff9797': '1',
          '#ffdc97': '3'
      }
      return `annotation--color-${mapping[a.color] ?? '9'}`
  }

  const annotations = computed((): ViewAnnotation[] => {
      console.log(`converting ${props.interview.annotations.length} annotations`)
      return props.interview.annotations.map(a => {
          return {
              start: a.startIndex,
              end: a.endIndex,
              target: "span",
              label: a.color,
              class: `annotation ${annotation2class(a)}`
          }
      })
  })
</script>

<style scoped>
</style>
