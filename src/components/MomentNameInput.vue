<template>
  <div class="context"
       v-if="context.original">
    <em>Nom original</em>
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
  import Moment from 'stores/models/moment'

  const store = useProjectStore()

  const emit = defineEmits([ 'change' ])

  const props = defineProps({
      moment: { type: Moment, default: null }
  })

  const name = ref(props.moment.name)

  const completions = ref([] as string[])

  function validate () {
      // If the select has focus, then use the selected name. Else use the input name value.

      if (props.moment) {
          store.updateElement(props.moment, { name: name.value })
      }
      emit('change', name.value)
  }

  function cancel () {
      emit('change', props.moment.name)
  }

  const context = computed(() => {
      const moments = store.getMomentsByName(props.moment.projectId, name.value)
      const completions = store.getMomentsByPrefix(props.moment.projectId, name.value)
      if (!moments.length) {
          return { original: true,
                   completions }
      } else {
          return {
              reference: moments[0],
              completions
          }
      }
  })

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
  .moment {
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
