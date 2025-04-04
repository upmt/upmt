<template>
  <div class="transcript"
       ref="transcript"
       @mouseup="emitSelection">
    <span
      v-for="span in spans"
      :key="span.id"
      :data-span-id="span.id"
      :data-annotation-ids="span.annotationIds"
      :data-text-offset="span.start"
      :class="spanClasses[span.id]"
      :style="getSpanStyle(span)"
      v-bind="spanAttributes"
      v-on="preppedSpanEvents"
      >{{ span.text }}</span>
    <slot>
    </slot>
  </div>
</template>

<script lang="ts">
  // @ts-nocheck
  const OVERLAPPING_COLOR = "#deadbabe"

  // Adapted from https://github.com/derhuerst/flatten-overlapping-ranges/
  // ISC License
  // Copyright (c) 2018, Jannis R
  // Permission to use, copy, modify, and/or distribute this software
  // for any purpose with or without fee is hereby granted, provided
  // that the above copyright notice and this permission notice appear
  // in all copies.
  // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL
  // WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
  // WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
  // AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR
  // CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  // LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT,
  // NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
  // CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

  const sortedInsert = (arr, val) => {
      const l = arr.length
      for (let i = 0; i < l; i++) {
          if (val <= arr[i]) {
              arr.splice(i, 0, val)
              return i
          }
      }
      arr.push(val)
      return l
  }

  const flatten = (ranges) => {
      const START = 1
      const STOP = 0

      let l, i

      const indexes = []
      const ids = []
      const types = []

      l = ranges.length
      for (i = 0; i < l; i++) {
          const range = ranges[i]

          const startI = sortedInsert(indexes, range[1])
          ids.splice(startI, 0, range[0])
          types.splice(startI, 0, START)

          const endI = sortedInsert(indexes, range[1] + range[2])
          ids.splice(endI, 0, range[0])
          types.splice(endI, 0, STOP)
      }

      const state = new Map()
      state.set(ids[0], true) // initial state

      l = ids.length
      function* iterator () {
          for (i = 1; i < l; i++) {
              const index = indexes[i]
              const lastIndex = indexes[i - 1]

              if (index > lastIndex) {
                  yield [
                      index - lastIndex,
                      Array.from(state.keys())
                  ]
              }
              if (types[i] === START) {
                  state.set(ids[i], true)
              } else {
                  state.delete(ids[i])
              }
          }
      }

      return { [Symbol.iterator]: iterator }
  }

  // From https://github.com/cyclecycle/vue-annotated-text/
  // MIT License
  // Copyright (c) 2019 Nick Morley

  // Permission is hereby granted, free of charge, to any person
  // obtaining a copy of this software and associated documentation
  // files (the "Software"), to deal in the Software without
  // restriction, including without limitation the rights to use,
  // copy, modify, merge, publish, distribute, sublicense, and/or sell
  // copies of the Software, and to permit persons to whom the
  // Software is furnished to do so, subject to the following
  // conditions:
  // The above copyright notice and this permission notice shall be
  // included in all copies or substantial portions of the Software.
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  // SOFTWARE.
  const buildSpanList = (text, annotations) => {
      // Prepare range list to send to flatten-overlapping-spans.flatten()
      let ranges = []
      const fullRange = ["baseText", 0, text.length]
      ranges.push(fullRange)
      const annotationRanges = annotations.map(annotation => {
          return [annotation.id, annotation.start, annotation.length]
      })
      ranges = ranges.concat(annotationRanges)
      // Flatten
      const sections = Array.from(flatten(ranges))
      // Each section becomes a span
      let sectionTextStart = 0
      let spanId = 0
      const spans = sections.map(section => {
          const length = Number(section[0])
          let annotationIds = section[1]
          annotationIds = annotationIds.filter(annotationId => {
              return annotationId !== 'baseText'
          })
          const start = sectionTextStart
          const end = sectionTextStart + length
          const sectionText = text.slice(start, end)
          const span = {
              id: spanId,
              start,
              length,
              text: sectionText,
              annotationIds,
              get annotations () {
                  return annotations.filter(annotation => {
                      return annotationIds.includes(annotation.id)
                  })
              }
          }
          spanId = spanId + 1
          sectionTextStart = end
          return span
      })
      return spans
  }

  export default {
      name: "AnnotatedText",
      emits: [ "selection" ],
      props: {
          text: String,
          annotations: {
              type: Array,
              default: function () {
                  return []
              }
          },
          clearSelection: {
              type: Boolean,
              deefault: false
          },
          getAnnotationColor: {
              type: Function,
              /* eslint-disable @typescript-eslint/no-unused-vars */
              default: function (annotation) {
                  // Should return a string representation of the color
                  // If null, no style attribute will be generated
                  return null
              }
          },
          getAnnotationInfo: Function,
          spanEvents: {
              type: Object,
              default: function () {
                  return {}
              }
          },
          getSpanClasses: {
              type: Function,
              default: function (span) {
                  return () => {}
              }
          },
          spanAttributes: {
              type: Object,
              default: function () {
                  return {}
              }
          }
      },
      computed: {
          spanClasses: {
              get () {
                  // Generate span classes for each span id using getSpanClasses
                  return Object.fromEntries(this.spans.map(span => [ span.id, this.getSpanClasses(span) ]))
              }
          },
          spans: function () {
              const spans = buildSpanList(this.text, this.annotations)
              return spans
          },
          preppedSpanEvents () {
              // Get annotations and pass to the event callback
              const spanEvents = this.spanEvents
              const preppedSpanEvents = {}
              Object.keys(spanEvents).forEach((eventType) => {
                  const callback = spanEvents[eventType]
                  const newCallback = (e) => {
                      const spanId = this.elementSpanId(e.target)
                      const span = this.spanById(spanId)
                      const annotationIds = span.annotationIds
                      const annotations = this.getAnnotations(annotationIds)
                      callback(e, annotations)
                  }
                  preppedSpanEvents[eventType] = newCallback
              })
              return preppedSpanEvents
          }
      },
      methods: {
          elementSpanId (el) {
              let spanId = el.attributes["data-span-id"].value
              spanId = Number(spanId)
              return spanId
          },
          spanById (spanId) {
              const spans = this.spans.filter((span) => {
                  return span.id === spanId
              })
              const span = spans[0]
              return span
          },
          getAnnotations (annotationIds) {
              const annotations = this.annotations.filter((annotation) => {
                  return annotationIds.includes(annotation.id)
              })
              return annotations
          },
          getSpanStyle: function (span) {
              const color = this.getSpanColor(span)
              if (color) {
                  return {
                      backgroundColor: color
                  }
              } else {
                  return null
              }
          },
          getSpanColor: function (span) {
              let color = null
              const annotationIds = span.annotationIds
              const annotations = this.getAnnotations(annotationIds)
              let colors = annotations.map((annotation) =>
                  this.getAnnotationColor(annotation)
              ).filter(color => color)

              colors = [...new Set(colors)]
              if (colors.length > 1) {
                  // Overlapping spans - use the overlap color
                  color = OVERLAPPING_COLOR
              } else if (colors.length) {
                  color = colors[0]
              }
              // null if none specified
              return color
          },
          getSelection: function () {
              const selection = document.getSelection()
              if (selection) {
                  const range = selection.getRangeAt(0)
                  const container = range.startContainer.parentElement.parentElement
                  if (container === this.$refs.transcript) {
                      // We are in the transcript container.
                      // startContainer/endContainer should be text element whose parent is a span
                      const begin = Number(range.startContainer.parentElement.dataset.textOffset) + range.startOffset
                      const end = Number(range.endContainer.parentElement.dataset.textOffset) + range.endOffset
                      if (this.clearSelection) {
                          selection.removeAllRanges()
                      }
                      return {
                          begin,
                          end,
                          text: this.text.slice(begin, end)
                      }
                  }
              }
              return null
          },
          emitSelection: function () {
              const textSelection = this.getSelection()
              if (textSelection && textSelection.begin !== textSelection.end) {
                  this.$emit("selection", textSelection)
              }
          }
      }
  }
</script>
<style scoped>
  .transcript {
    white-space: pre-wrap;
  }
  .category1 {
      background-color: #ff9797;
  }
  .category2 {
      background-color: #7084b0;
  }
  .category3 {
      background-color: #ffdc97;
  }
  .category4 {
      background-color: #7bcf7b;
  }
  .category1.category2 {
      background-color: orange;
  }
  .category1.category3 {
      background-color: orange;
  }
  .category1.category4 {
      background-color: orange;
  }
  .category2.category3 {
      background-color: orange;
  }
  .category2.category4 {
      background-color: orange;
  }
  .category3.category4 {
      background-color: orange;
  }
  /* For undefined categories */
  .category9 {
      background-color: yellow;
  }
  .descriptem {
      text-decoration: underline;
  }
  .descriptem.descriptems {
      text-decoration-style: double;
  }
  .extractHighlight {
      font-weight: bold;
  }
  .extractOriginal {
      text-decoration: underline;
  }
  .highlighted,
  .descriptem.highlighted,
  .category1.highlighted,
  .category2.highlighted,
  .category3.highlighted,
  .category4.highlighted {
      background-color: yellow !important;
  }
</style>
