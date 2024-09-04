<template>
  <AnnotatedText
    v-if="interview"
    :text="interview.text"
    :annotations="annotations"
    :getSpanClasses="getSpanClasses"
    @click-annotation="onClick"
    />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import AnnotatedText from './AnnotatedText.vue'
  import Annotation from 'stores/models/annotation'
  import Interview from 'stores/models/interview'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const props = defineProps({
      interview: { type: Interview, default: null }
  })

  const onClick = (annotation: Annotation) => {
      console.log(annotation)
  }

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
      const interviewAnnotations = props.interview.annotations.map(a => {
          return {
              id: a.id,
              start: a.startIndex,
              length: a.endIndex - a.startIndex,
              color: a.color,
              class: annotation2class(a),
              item: a
          }
      })
      const interviewDescriptems = store.getInterviewDescriptems(props.interview.id).map(d => {
          return {
              id: d.id,
              start: d.startIndex,
              length: d.endIndex - d.startIndex,
              color: null,
              class: 'descriptem',
              item: d
          }
      })
      console.log(`Annotation: ${interviewAnnotations.length} annotations - ${interviewDescriptems.length} descriptems}`)
      return [ ...interviewAnnotations, ...interviewDescriptems ]
  })

  function getSpanClasses (span: any) {
      const classes = [ ...new Set(span.annotations.map((a: any) => a.class)) ]
      return classes.join(" ")
  }
</script>

<style>
  .annotated-text {
      display: flex;
      flex-direction: column;
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
  /* For undefined categories */
  .category9 {
      background-color: yellow;
  }
</style>
