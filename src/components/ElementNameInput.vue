<template>
  <div>
    {{ element.name }}
    <q-popup-edit v-model="elementName"
                  auto-save
                  buttons
                  v-slot="scope">
      <q-input
        :label="label"
        type="textarea"
        v-model="scope.value"
        @keyup.ctrl.enter="validate"
        @keyup.esc="cancel"
        dense
        autogrow
        autofocus />
    </q-popup-edit>
  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import BaseModel from 'stores/models/basemodel'

  const store = useProjectStore()

  const emit = defineEmits([ 'change' ])

  const props = defineProps({
      element: { type: BaseModel, default: null },
      label: { type: String, default: "Name" }
  })

  const name = ref(props.element.name)

  const elementName = computed({
      get () {
          return props.element ? props.element.name : ""
      },
      set (value: string) {
          store.updateElement(props.element, { name: value })
      }
  })

  function validate () {
      // If the select has focus, then use the selected name. Else use the input name value.

      if (props.element) {
          store.updateElement(props.element, { name: name.value })
      }
      emit('change', name.value)
  }

  function cancel () {
      emit('change', props.element.name)
  }

</script>

<style scoped>
</style>
