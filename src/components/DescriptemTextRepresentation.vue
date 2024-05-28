<template>
  <div class="descriptem" :data-descriptem="descriptem.id" :title="descriptem.text">
    <q-icon size="xs" name="mdi-format-quote-close-outline"></q-icon>
    <span class="descriptem-header">{{ descriptem.text }}</span>
  </div>
</template>

<script setup lang="ts">
import Descriptem from 'stores/models/descriptem'

defineProps({
    descriptem: { type: Descriptem, default: null }
});
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
</style>
