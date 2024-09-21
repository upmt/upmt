<template>
  <q-btn
    class="menu-icon"
    size="xs"
    @click.stop
    flat
    round
    dense
    icon="more_vert">
    <q-menu
      touch-position>
      <q-list dense style="min-width: 100px">
        <q-item
          v-for="[label, action] in actions"
          clickable
          :key="label"
          @click="action"
          v-close-popup>
          {{ label }}
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup lang="ts">

  // type NamedActions = [ name: string, action: (element: any) => any][]

  defineProps([
      "actions"
  ])
</script>

<style scoped>
</style>
