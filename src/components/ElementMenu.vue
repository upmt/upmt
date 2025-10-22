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
          @click="action(parameter)"
          v-close-popup>
          {{ label }}
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup lang="ts">

  import type { NamedAction } from 'components/util.ts'

  defineProps<{
      actions: NamedAction[],
      parameter?: any
  }>()

</script>

<style scoped>
</style>
