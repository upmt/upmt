<template>
  <div class="justification"
       v-if="justification"
       :data-justification="justification.id">
    <div class="justification-metadata">
      <span class="justification-name">{{ justification.name }}</span>
    </div>
    <ul class="justification-descriptems">
      <li v-for="descriptem in justification.descriptems" :key="descriptem.id">
        <DescriptemTextRepresentation :descriptem="descriptem">
        </DescriptemTextRepresentation>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Justification from 'stores/models/justification'
import DescriptemTextRepresentation from './DescriptemTextRepresentation.vue'

defineProps({
    justification: { type: Justification, default: null }
});
</script>
