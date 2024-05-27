<template>
  <div class="descriptem" :data-descriptem="descriptem.id">
    Descriptem {{ descriptem.id }}
  </div>
</template>

<script setup lang="ts">
import Descriptem from 'stores/models/descriptem'

defineProps({
    descriptem: { type: Descriptem, default: null }
});
</script>
