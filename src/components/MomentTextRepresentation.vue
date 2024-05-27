<template>
  <div class="moment"
       v-if="moment"
       :data-moment="moment.id">

    <div :style="backgroundStyle" class="moment-metadata">
      <span class="moment-name">{{ moment.name }}</span>
      <span class="moment-comment">{{ moment.comment }}</span>
      <span class="moment-isCollapsed">{{ moment.isCollapsed }}</span>
    </div>

    <div class="moment-justification">
      <JustificationTextRepresentation :justification="moment.justification">
      </JustificationTextRepresentation>
    </div>

    <div class="moment-children">
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
    moment: { type: Moment, default: null }
  });

const backgroundStyle = computed(() => {
    return `background-color: ${props.moment.color}`
})
</script>

<style>
  .moment-children {
    list-style: none;
  }
  .moment {
      display: flex;
      flex-direction: row;
      border: 1px solid grey
  }
</style>
