<template>
  <div class="moment rootmoment"
       v-if="moment"
       :data-moment="moment.id">

    <div :style="{ backgroundColor: moment.color }" class="moment-metadata">
      <span class="moment-name">{{ moment.name }}</span>
      <span class="moment-comment">{{ moment.comment }}</span>
<!--      <span class="moment-isCollapsed">{{ moment.isCollapsed }}</span> -->
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
import Moment from 'stores/models/moment'
import JustificationTextRepresentation from './JustificationTextRepresentation.vue'
import MomentTextRepresentation from './MomentTextRepresentation.vue'

defineProps({
    moment: { type: Moment, default: null }
  });
</script>

<style>
  .moment-children {
    list-style: none;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    border: 1px solid grey
  }
  .moment {
      min-width: 200px;
      min-height: 120px;
      display: flex;
      flex-direction: column;
      border: 1px solid grey
  }
</style>
