<template>
  <div class="descriptem"
       v-if="descriptem"
       :data-descriptem="descriptem.id"
       :title="descriptem.text">
    <q-icon
      ref="handle"
      class="descriptem-handle"
      size="xs"
      name="mdi-format-quote-close-outline"></q-icon>
    <span class="descriptem-header">{{ descriptem.text }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProjectStore } from 'stores/projectStore'

const store = useProjectStore()

const props = defineProps({
    descriptemId: { type: String, default: "" }
  })
const descriptem = computed(() => store.getDescriptem(props.descriptemId))
</script>

  <style>
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
  }
  .descriptem-handle {
      opacity: .5;
      cursor: pointer;
  }
  .descriptem-handle:hover {
      opacity: .7;
  }
</style>
