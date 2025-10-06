<template>
  <div class="context"
       v-if="context.original">
    <em>Nom original</em>
  </div>
  <div class="context"
       v-else>
    <div class="children">
      <div class="category"
           :title="c.name"
           :class="{ 'has-child': isCurrentChild(c.name) }"
           v-for="c in context.children"
           :key="c.id">
        <q-checkbox
          size="10pt"
          v-if="! isCurrentChild(c.name)"
          v-model="newChildren"
          :val="c.name" />
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
         v-if="context.reference"
         :class="{ 'is-current': isCurrentName(context.reference.name) }"
         :title="context.reference.name">
      {{context.reference.name}}
    </div>
    <div class="parents">
      <div class="category parent"
           :title="parent?.name ?? ''"
           :class="{ 'has-parent': isCurrentParent(parent?.name) }"
           v-for="parent in context.parents"
           :key="parent?.id ?? ''">
        {{parent?.name ?? ''}}
      </div>
    </div>
  </div>
  <q-select
    dense
    @focus="($event.target as HTMLInputElement).select()"
    filled
    :model-value="name"
    use-input
    hide-selected
    fill-input
    menu-anchor="top right"
    :input-debounce="0"
    :options="context?.completions ?? []"
    @filter="filterNames"
    @input-value="setName"
    @keyup.enter="validate"
    autofocus
    >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          No results
        </q-item-section>
      </q-item>
    </template>
  </q-select>
  <div class="row wrap justify-between">
    <q-btn
      flat
      size="sm"
      @click="validate">Set</q-btn>
    <q-btn
      flat
      size="sm"
      @click="cancel">Cancel</q-btn>
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

  const newChildren = ref([])

  const completions = ref([] as string[])

  const childrenNames = computed(() => new Set(props.category?.children.map(c => c.name) ?? []))

  function validate () {
      // If the select has focus, then use the selected name. Else use the input name value.

      if (props.category) {
          store.updateElement(props.category, { name: name.value })
      }

      newChildren.value.forEach(n => {
          store.addSpecificSynchronicCategory(n,
                                              props.category.specificsynchronicmodelId,
                                              `in:${props.category.id}`)
      })
      // Since validate may be called twice, reset the newChildren array
      newChildren.value = []

      emit('change', name.value)
  }

  function cancel () {
      emit('change', props.category.name)
  }

  const context = computed(() => {
      const categories = store.getSpecificSynchronicCategoriesByName(props.category.projectId, name.value)
      const completions = store.getSpecificSynchronicCategoryNamesByPrefix(props.category.projectId, name.value)
      if (!categories.length) {
          return { original: true,
                   completions }
      } else {
          const children = Object.fromEntries(categories.map(c => c.children.map(child => [ child.name, child ])).flat())
          const parents = Object.fromEntries(categories.filter(c => c.parent).map(c => [c.parent?.name, c.parent ]))
          return {
              reference: categories[0],
              children: [ ...Object.values(children) ] as SpecificSynchronicCategory[],
              parents: [ ...Object.values(parents) ] as SpecificSynchronicCategory[],
              completions
          }
      }
  })

  function isCurrentChild (name: string) {
      return childrenNames.value.has(name)
  }

  function isCurrentParent (name: string) {
      return props.category.parent?.name == name
  }

  function isCurrentName (name: string) {
      return props.category?.name === name
  }

  function setName (value: string) {
      name.value = value
  }

  function filterNames (val: string, update: (cb: () => void) => void): void {
      // console.log("filterNames", val, context.value?.completions)
      update(() => {
          completions.value = context.value?.completions ?? []
      })
  }
</script>

  <style scoped>
  .category {
      border: 1px solid black;
      display: flex;
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
      border: 2px solid black;
  }
  .relation {
      margin: 0;
      padding: 0;
      width: 10px;
      min-height: var(--overview-height);
      line-height: 14px;
  }
  .completions {
      display: flex;
      flex-direction: column;
      max-height: 5em;
      overflow-x: hidden;
      overflow-y: auto;
  }
  .has-child,
  .has-parent,
  .is-current {
      background-color: lightgreen;
  }
</style>
