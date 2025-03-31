<template>
  <q-input v-model="name"
           @focus="($event.target as HTMLInputElement).select()"
           dense
           @keyup.enter="validate"
           autofocus />
  <div class="context"
       v-if="context.original">
    <em>Nom original</em>
  </div>
  <div class="context"
       v-else>
    <div class="children">
      <div class="category"
           v-for="c in context.children"
           :key="c.id">
        {{c.name}}
      </div>
    </div>
    <div class="relation">
      <SpecificSynchronicCategoryRelation
        v-if="context.reference"
        :type="context.reference.abstractionType"
        :childrenCount="context.children.length">
      </SpecificSynchronicCategoryRelation>
    </div>
    <div class="category reference"
         v-if="context.reference">
      {{context.reference.name}}
    </div>
    <div class="parents">
      <div class="category parent"
           v-for="parent in context.parents"
           :key="parent?.id ?? ''">
        {{parent?.name ?? ''}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import SpecificSynchronicCategory from 'stores/models/specificsynchroniccategory'
  import SpecificSynchronicCategoryRelation from './SpecificSynchronicCategoryRelation.vue'

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

  const context = computed(() => {
      const categories = store.getSpecificSynchronicCategoriesByName(name.value)
      // FIXME: add names starting with
      if (!categories.length) {
          return { original: true }
      } else {
          const children = Object.fromEntries(categories.map(c => c.children.map(child => [ child.name, child ])).flat())
          const parents = Object.fromEntries(categories.filter(c => c.parent).map(c => [c.parent?.name, c.parent ]))
          return {
              reference: categories[0],
              children: [ ...Object.values(children) ] as SpecificSynchronicCategory[],
              parents: [ ...Object.values(parents) ] as SpecificSynchronicCategory[]
          }
      }
  })
</script>

  <style scoped>
  .category {
      border: 1px solid black;
      margin: 2px;
      overflow: hidden;
      font-size: 8px;
      width: var(--overview-width) !important;
      height: var(--overview-height) !important;
      align-self: center;
  }
  .context {
      display: flex;
      flex-direction: row;
      flex: 0;
      align-items: center;
  }
  .children, .parents {
      display: flex;
      flex-direction: column;
      flex: 0;
  }
  .reference {
      font-weight: bold;
  }
  .relation {
      margin: 0;
      padding: 0;
      width: 10px;
      min-height: var(--overview-height);
      line-height: 14px;
  }

</style>
