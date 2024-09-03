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
      return props.interview.annotations.map(a => {
          return {
              id: a.id,
              start: a.startIndex,
              length: a.endIndex - a.startIndex,
              color: a.color,
              class: annotation2class(a),
              item: a
          }
      })
  })

  function getSpanClasses (span: any) {
      const classes = [ ...new Set(span.annotations.map((a: Annotation) => annotation2class(a))) ]
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
