<template>
  <q-input v-model="name"
           @focus="($event.target as HTMLInputElement).select()"
           dense
           @keyup.enter="validate"
           autofocus />
  {{feedback}}
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import SpecificSynchronicCategory from 'stores/models/specificsynchroniccategory'

  const store = useProjectStore()

  const emit = defineEmits([ 'change' ])

  const props = defineProps({
      category: { type: SpecificSynchronicCategory, default: null }
  })

  const name = ref(props.category.name)

  function validate () {
      if (props.category) {
          store.updateElement(props.category, { name: name.value })
      }
      emit('change', name.value)
  }

  const feedback = computed(() => {
      return `Feedback ${name.value}`
  })
</script>

<style scoped>
</style>
