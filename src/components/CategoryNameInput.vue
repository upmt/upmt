<template>
  <q-input v-model="name"
           @focus="($event.target as HTMLInputElement).select()"
           dense
           @keyup.enter="validate"
           autofocus />
  <div class="feedback"
       v-if="feedback.original">
    <em>Nom original</em>
  </div>
  <div class="feedback"
       v-else>
    <div class="children">
      <div class="category"
           v-for="c in feedback.children"
           :key="c.id">
        {{c.name}}
      </div>
    </div>
    <div class="category reference"
         v-if="feedback.reference">
      {{feedback.reference.name}}
    </div>
    <div class="category parent"
         v-if="feedback.parent">
      {{feedback.parent.name}}
    </div>
  </div>
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
      const category = store.getSpecificSynchronicCategoryByName(name.value)
      if (!category) {
          return { original: true }
      } else {
          return {
              reference: category,
              children: category.children,
              parent: category.parent
          }
      }
  })
</script>

  <style scoped>
  .category {
      border: 1px solid black;
      margin: 2px;
  }
  .feedback {
      display: flex;
      flex-direction: row;
      flex: 0;
      align-items: center;
  }
  .children {
      display: flex;
      flex-direction: column;
      flex: 0;
  }
  .reference {
      font-weight: bold;
  }
</style>
