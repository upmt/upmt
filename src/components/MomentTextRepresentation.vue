<template>
  <div :class="[ 'moment', { 'transitional': moment.isTransitional } ]"
       v-if="moment"
       :data-moment="moment.id">

    <div :style="backgroundStyle" class="moment-metadata">
      <span class="moment-name">{{ moment.name }}</span>
      <span class="moment-comment">{{ moment.comment }}</span>
<!--      <span class="moment-isCollapsed">{{ moment.isCollapsed }}</span> -->
    </div>

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

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Moment from 'stores/models/moment'
import JustificationTextRepresentation from './JustificationTextRepresentation.vue'
import MomentTextRepresentation from './MomentTextRepresentation.vue'

const props = defineProps({
    moment: { type: Moment, default: null },
    layout: { type: String, default: "vertical" }
  });

const backgroundStyle = computed(() => {
    return { backgroundColor: props.moment.color }
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
