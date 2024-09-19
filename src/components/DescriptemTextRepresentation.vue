<template>
  <div class="descriptem"
       v-if="descriptem"
       :data-descriptem="descriptem.id"
       :title="descriptem.text">
    <DragElement
      type="descriptem"
      :data="descriptemId">
      <q-icon
        ref="handle"
        class="descriptem-handle"
        size="xs"
        @click.meta="debug"
        name="mdi-format-quote-close-outline"></q-icon>
      <span class="descriptem-header">{{ descriptem.shorttext }}</span>

      <div v-if="withContext" class="descriptem-context">
        <span class="context-item"
              v-if="context.property">
          <q-icon
            size="xs"
            name="mdi-note-text-outline"></q-icon>
          <div class="property-name">{{ context.property.name }}</div>
          <div class="property-value">{{ context.property.value }}
          </div>
        </span>
        <span
          class="context-item"
          v-if="context.categoryinstance">
          <q-icon
            size="xs"
            name="mdi-tag-outline"></q-icon>
          <span class="categoryinstance-name">{{ context.categoryinstance.name }}</span>
        </span>
        <span
          class="context-item"
          v-if="context.moment">
          <q-icon
            size="xs"
            name="mdi-note-outline"></q-icon>
          <span class="moment-name">{{ context.moment.name }}</span>
        </span>
      </div>

      <div v-else
           class="descriptem-menu">
        <q-space />
        <q-btn
          class="menu-icon"
          size="xs"
          @click.stop
          flat
          round
          dense
          icon="more_vert">
          <q-menu
            touch-position>
            <q-list dense style="min-width: 100px">
              <q-item
                v-for="[label, action] in menuActions"
                clickable
                :key="label"
                @click="action"
                v-close-popup>
                {{ label }}
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>

    </DragElement>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProjectStore } from 'stores/projectStore'
import DragElement from './DragElement.vue'
import Moment from 'stores/models/moment'
import Property from 'stores/models/property'
import CategoryInstance from 'stores/models/categoryinstance'

const store = useProjectStore()

const props = defineProps({
    descriptemId: { type: String, default: "" },
    withContext: { type: Boolean, default: false }
  })

const descriptem = computed(() => store.getDescriptem(props.descriptemId))

function debug () {
    (window as any).descriptem = descriptem.value
    console.log("Descriptem", descriptem.value?.toJSON())
}

type Context = {
    moment?: Moment,
    categoryinstance?: CategoryInstance,
    property?: Property
}

// context is an object with optional moment / categoryinstance / property values
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

type NamedActions = [ name: string, action: (element: any) => void][]
const menuActions: NamedActions = [
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
  }
  .descriptem-header {
    display: inline-block;
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
</style>
