<template>
  <div class="descriptem" :data-descriptem="descriptem.id">
    <q-icon size="xs" name="mdi-format-quote-close-outline"></q-icon> {{ descriptem.text }}
  </div>
</template>

<script setup lang="ts">
import Descriptem from 'stores/models/descriptem'

defineProps({
    descriptem: { type: Descriptem, default: null }
});
</script>
