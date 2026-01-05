<template>
  <q-btn
    size="xs"
    flat
    round
    :class="noteClass"
    :icon="noteIcon">
    <q-popup-edit v-model="note"
                  auto-save
                  buttons
                  v-slot="scope">
      <q-input
        label="Note"
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
      v-if="note">
      <pre class="note-tooltip">{{ note }}</pre>
    </q-tooltip>
  </q-btn>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import BaseModel from 'stores/models/basemodel'

  const store = useProjectStore()

  const props = defineProps({
      element: { type: Object, default: null },
      elementType: { type: String, default: "" }
  })

  const note = computed({
      get: () => {
          return props.element ? props.element.note : ""
      },
      set: (value) => {
          if (props.element) {
              store.updateElement(props.element as BaseModel, { note: value })
          }
      }
  })

  const noteClass = computed(() => {
      return note.value ? [ "note" ] : [ "note", "note-is-empty" ]
  })

  const noteIcon = computed(() => note.value ? 'mdi-chat' : 'mdi-chat-outline')
</script>

<style scoped>
  .note-is-empty {
      opacity: .3;
  }
  .text-pre-line {
      /* Preserve all white-space characters, including line breaks */
      white-space-collapse: preserve;
  }
  .note-tooltip {
      font-family: sans;
  }
</style>
