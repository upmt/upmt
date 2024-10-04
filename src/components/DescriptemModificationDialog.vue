<template>
  <div class="descriptem-modification"
       v-if="model">
    <AnnotatedText
      class="textAnnotationComponent"
      :text="contextText"
      :annotations="annotations"
      :getSpanClasses="getSpanClasses"
      clearSelection
      @selection="textSelection"
      />
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import AnnotatedText from './AnnotatedText.vue'
  import type { TextSelection } from './util'
  import { clamp } from './util'

  const store = useProjectStore()

  const model = defineModel<TextSelection>()

  const props = defineProps({
      initial: { type: Object }
  })

  const interview = computed(() => model.value ? store.getInterview(model.value.interviewId) : null)

  const contextText = computed(() => {
      if (interview.value) {
          return interview.value.text
      } else {
          return ""
      }
  })

  function getSpanClasses (span: any) {
      const classes = span.annotations.map((a: any) => a.class)
      return [ ...new Set(classes) ].join(" ")
  }

  const initialLength = computed(() => {
      if (props.initial) {
          return props.initial.endIndex - props.initial.startIndex
      } else {
          return 0
      }
  })

  const annotations = computed(() => {
      // Return 3 annotations:
      // - highlighted one (descriptem)
      // - hidden start
      // - hidden end
      const out = []
      if (model.value && props.initial) {
          const interviewId = model.value.interviewId
          const maxIndex = interview.value?.text.length ?? 0
          const length = model.value.endIndex - model.value.startIndex
          const extractStart = clamp(props.initial.startIndex - initialLength.value - 1,
                                     0, maxIndex)
          const extractEnd = clamp(props.initial.endIndex + initialLength.value + 1,
                                   0, maxIndex)
          console.log({
              extractStart,
              extractEnd,
              initialLength: initialLength.value,
              startIndex: model.value.startIndex,
              length
          })
          if (extractStart) {
              out.push({
                  interviewId,
                  id: 'hidden_start',
                  start: 0,
                  length: extractStart,
                  class: 'hidden extractStart'
              })
          }
          out.push({
              interviewId,
              id: 'current_extract',
              start: model.value.startIndex,
              length,
              class: 'extractHighlight'
          })
          if (extractEnd < maxIndex) {
              out.push({
                  interviewId,
                  id: 'hidden_end',
                  start: extractEnd,
                  length: maxIndex - extractEnd,
                  class: 'hidden extractEnd'
              })
          }
      }
      return out
  })

  function textSelection (data: any) {
      if (model.value) {
          model.value.startIndex = data.begin
          model.value.endIndex = data.end
      }
  }

</script>

<style scoped>
</style>
