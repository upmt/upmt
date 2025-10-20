<template>
  <div class="descriptem"
       v-if="descriptem"
       :data-descriptem="descriptem.id"
       :title="descriptem.text">
    <DragElement
      type="descriptem"
      class="descriptem-header"
      :data="descriptemId">
      <q-icon
        ref="handle"
        class="descriptem-handle"
        size="xs"
        @click.meta="debug"
        @click="setHighlighted"
        name="mdi-format-quote-close-outline"></q-icon>
      <span>
        <span class="descriptem-label">{{ descriptem.text }}</span>
        <q-popup-edit title="Select the appropriate text fragment"
                      buttons
                      v-model="descriptemJson"
                      v-slot="scope">
          <DescriptemModificationDialog
            v-model="scope.value"
            :initial="scope.initialValue"
            />
        </q-popup-edit>
      </span>
      <q-space />
      <div v-if="withContext"
           class="descriptem-context">
        <span class="context-item"
              v-if="context.specificsynchroniccategory">
          <q-icon
            size="xs"
            name="mdi-source-branch"></q-icon>
          <div class="property-name">{{ context.specificsynchroniccategory.name }}</div>
        </span>
        <span
          class="context-item"
          @click.stop="jumpToMoment(context.moment.id)"
          v-if="context.moment">
          <q-icon
            size="xs"
            name="mdi-alpha-m-box-outline"></q-icon>
          <span class="moment-name">{{ context.moment.name }}</span>
        </span>
      </div>

      <div v-if="withMenu"
           class="descriptem-menu">
        <q-space />
        <ElementMenu
          :actions="menuActions" />
      </div>

    </DragElement>
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import DescriptemModificationDialog from './DescriptemModificationDialog.vue'
  import DragElement from './DragElement.vue'
  import ElementMenu from './ElementMenu.vue'
  import Moment from 'stores/models/moment'
  import SpecificSynchronicCategory from 'stores/models/specificsynchroniccategory'

  const store = useProjectStore()
  const istore = useInterfaceStore()

  const props = defineProps({
      descriptemId: { type: String, default: "" },
      withContext: { type: Boolean, default: false },
      withMenu: { type: Boolean, default: true }
  })

  const descriptem = computed(() => store.getDescriptem(props.descriptemId))

  const {
      highlightedDescriptemId,
      highlightedMomentId
  } = storeToRefs(istore)

  function debug () {
      (window as any).descriptem = descriptem.value
      console.log("Descriptem", descriptem.value?.toJSON())
  }

  function setHighlighted () {
      if (highlightedDescriptemId.value === props.descriptemId) {
          highlightedDescriptemId.value = ""
      } else {
          highlightedDescriptemId.value = props.descriptemId
      }
  }

  type Context = {
      moment?: Moment,
      specificsynchroniccategory?: SpecificSynchronicCategory,

  }

  // context is an object with optional moment / specificsynchroniccategory values
  const context = computed((): Context => {
      if (descriptem.value && descriptem.value.justification) {
          const parent = store.getJustificationParent(descriptem.value.justification.parentId)
          // Moment: ${moment.name}
          // Category: ${category.moment.name} | ${category.name}
          // Property: ${property.categoryinstance.moment.name} | ${property.categoryinstance.name} | ${property.name}: ${property.value}
          if (parent) {
              console.log("Context", parent, parent.asContext)
              return parent.asContext
          } else {
              return { }
          }
      } else {
          return { }
      }
  })

  const descriptemJson = computed({
      get: () => descriptem.value?.toJSON() ?? {},
      set: (value) => {
          store.updateDescriptem(props.descriptemId, {
              startIndex: value.startIndex,
              endIndex: value.endIndex
          })
      }
  })

  function jumpToMoment (identifier: string) {
      highlightedMomentId.value = identifier
  }

  import type { NamedAction } from 'components/util.ts'

  const menuActions: NamedAction[] = [
      [ "Modify", () => alert("Not implemented yet") ],
      [ "Duplicate", () => store.duplicateDescriptem(props.descriptemId) ],
      [ "Delete", () => store.deleteDescriptem(props.descriptemId) ]
  ]
</script>

<style scoped>
  .descriptem {
      display: flex;
      flex-direction: row;
      height: 1.2em;
      overflow: hidden;
  }
  .descriptem-header {
      width: 100%;
      display: flex;
      align-content: space-between;
  }
  .descriptem-label {
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      height: 1.2em;
      font-style: italic;
  }
  .descriptem-handle {
      opacity: .5;
      cursor: pointer;
  }
  .descriptem-handle:hover {
      opacity: .7;
  }
  .descriptem-context {
      display: flex;
      flex-direction: row;
  }
  .context-item {
      display: flex;
      flex-direction: row;
      font-size: x-small;
  }
  .context-item + .context-item {
      border-left: 1px solid black;
      padding: 0 4px;
  }
  .descriptem-menu {
      opacity: 0;
  }
  .descriptem-header:hover .descriptem-menu {
      opacity: 1;
  }
</style>
