<template>
  <q-btn
    size="xs"
    flat
    round
    :class="commentClass"
    icon="mdi-chat-outline">
    <q-popup-edit v-model="comment"
                  auto-save
                  buttons
                  v-slot="scope">
      <q-input
        label="Comment"
        type="textarea"
        v-model="scope.value"
        @keyup.ctrl.enter="scope.set"
        @keyup.esc="scope.cancel"
        dense
        autogrow
        autofocus />
    </q-popup-edit>
    <q-tooltip
      class="bg-blue-grey-2 text-black"
      v-if="comment">
      <pre class="comment-tooltip">{{ comment }}</pre>
    </q-tooltip>
  </q-btn>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import BaseModel from 'stores/models/basemodel'

  const store = useProjectStore()

  const props = defineProps({
      element: { type: BaseModel, default: null },
      elementType: { type: String, default: "" }
  })

  const comment = computed({
      get: () => {
          return props.element ? props.element.comment : ""
      },
      set: (value) => {
          if (props.element) {
              store.updateElement(props.element, { comment: value })
          }
      }
  })

  const commentClass = computed(() => {
      return comment.value ? [ "comment" ] : [ "comment", "comment-is-empty" ]
  })
</script>

<style scoped>
  .comment-is-empty {
      opacity: .3;
  }
  .text-pre-line {
      white-space: pre-line;
  }
  .comment-tooltip {
      font-family: sans;
  }
</style>
