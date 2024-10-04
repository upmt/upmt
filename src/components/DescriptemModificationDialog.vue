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
      if (model.value && props.initial) {
          const interviewId = model.value.interviewId
          const maxIndex = interview.value?.text.length ?? 0
          const length = model.value.endIndex - model.value.startIndex
          const extractStart = clamp(props.initial.startIndex - initialLength.value - 1,
                                     0, maxIndex)
          const extractEnd = clamp(props.initial.endIndex + initialLength.value + 1,
                                   0, maxIndex)
          return [
              {
                  interviewId,
                  id: 'hidden_start',
                  start: 0,
                  length: extractStart,
                  class: 'hidden extractStart'
              },
              {
                  interviewId,
                  id: 'current_extract',
                  start: model.value.startIndex,
                  length,
                  class: 'extractHighlight'
              },
              {
                  interviewId,
                  id: 'hidden_end',
                  start: props.initial.endIndex,
                  length: maxIndex - extractEnd,
                  class: 'hidden extractEnd'
              }
          ]
      } else {
          return []
      }
  })

  function textSelection (data: any) {
      console.log("textselection", data)
      if (model.value) {
          model.value.startIndex = data.begin
          model.value.endIndex = data.end
      }
  }

</script>

<style scoped>
</style>
