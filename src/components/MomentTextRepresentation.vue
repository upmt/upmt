<template>
  <div :class="[ 'moment', { 'transitional': moment.isTransitional } ]"
       v-if="moment"
       :data-moment="moment.id">

    <div :style="{ backgroundColor: moment.color }" class="moment-metadata">
      <span class="moment-name">{{ moment.name }}</span>
      <span class="moment-comment">{{ moment.comment }}</span>
    </div>

    <q-expansion-item
      dense
      dense-toggle
      expand-icon-toggle
      expand-separator
      v-model="expand"
      :label="summary"
      >

      <div class="moment-justification">
        <JustificationTextRepresentation :justification="moment.justification">
        </JustificationTextRepresentation>
      </div>

      <div :class="[ 'moment-children', layout ]">
        <li v-for="m in moment.children" :key="m.id">
          <MomentTextRepresentation :moment="m">
          </MomentTextRepresentation>
        </li>
      </div>

    </q-expansion-item>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Moment from 'stores/models/moment'
import JustificationTextRepresentation from './JustificationTextRepresentation.vue'
import MomentTextRepresentation from './MomentTextRepresentation.vue'

const props = defineProps({
    moment: { type: Moment, default: null },
    layout: { type: String, default: "vertical" }
  });

const expand = ref(!props.moment.isCollapsed)

const summary = computed(() => {
    const count = props.moment.children.length;
    let message = `${props.moment.children.length} sous-moments`
    if (count === 0) {
        message = "0 sous-moment"
    } else if (count === 1) {
        message = "1 sous-moment"
    }
    return message
})
</script>

  <style>
  .moment-name {
    font-weight: bold;
  }
  .moment-metadata {
    text-align: center;
  }
  .moment-children {
    list-style: none;
    min-width: 200px;
    display: flex;
    flex-direction: column;
  }
  .moment-children.horizontal {
      flex-direction: row;
  }
  .moment {
      min-width: 200px;
      min-height: 120px;
      margin: 1em;
      display: flex;
      flex-direction: column;
      border: 1px solid grey;
  }
  .transitional {
      background-color: var(--transitional-color);
  }
</style>
