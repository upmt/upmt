<template>
  <div class="justification"
       v-if="justificationId"
       :data-justification="justificationId">
    <div class="justification-metadata">
      <span class="justification-name">{{ justification?.name }}</span>
    </div>
    <ul class="justification-descriptems">
      <li v-for="descriptem in justification?.descriptems" :key="descriptem.id">
        <DescriptemTextRepresentation :descriptemId="descriptem.id">
        </DescriptemTextRepresentation>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import DescriptemTextRepresentation from './DescriptemTextRepresentation.vue'
import { computed } from 'vue'
import { useProjectStore } from 'stores/projectStore'

const store = useProjectStore()

const props = defineProps({
    justificationId: { type: String, default: "" }
})
const justification = computed(() => store.getJustification(props.justificationId))
</script>

<style>
  .justification-descriptems {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
</style>
