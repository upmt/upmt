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
      <JustificationRepresentation :justification="moment.justification">
      </JustificationRepresentation>
    </div>

    <div class="moment-children">
      <li v-for="m in moment.children" :key="m.id">
        <MomentRepresentation :moment="m">
        </MomentRepresentation>
      </li>
    </div>

  </div>
</template>

<script setup lang="ts">
import Moment from 'stores/models/moment'
import JustificationRepresentation from './JustificationRepresentation.vue'
import MomentRepresentation from './MomentRepresentation.vue'

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
