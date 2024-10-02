<template>
  <q-btn
    size="xs"
    dense flat round
    icon="colorize">
    <q-popup-proxy>
      <q-color
        no-header
        no-footer
        default-view="palette"
        v-model="color"
        />
    </q-popup-proxy>
  </q-btn>
</template>

<script setup lang="ts">

  const color = defineModel<string | null>()
</script>

<style scoped>
</style>
