<template>
  <div class="descriptem-modification"
       v-if="descriptem">
    <span>{{ descriptem.text }}</span>
    <q-toolbar>
      <q-btn size="sm" icon="mdi-skew-less" @click="offset('begin', -10)">-10</q-btn>
      <q-btn size="sm" icon="mdi-skew-less" @click="offset('begin', -1)">-1</q-btn>
      <q-btn flat no-caps>Begin</q-btn>
      <q-btn size="sm" icon="mdi-skew-more" @click="offset('begin', +1)">+1</q-btn>
      <q-btn size="sm" icon="mdi-skew-more" @click="offset('begin', +10)">+10</q-btn>
      <q-space />
      <q-btn size="sm" icon="mdi-skew-less" @click="offset('end', -1)">-1</q-btn>
      <q-btn size="sm" icon="mdi-skew-less" @click="offset('end', -1)">-1</q-btn>
      <q-btn flat no-caps>End</q-btn>
      <q-btn size="sm" icon="mdi-skew-more" @click="offset('end', +1)">+1</q-btn>
      <q-btn size="sm" icon="mdi-skew-more" @click="offset('end', +1)">+1</q-btn>
    </q-toolbar>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import { clamp } from './util'

  const store = useProjectStore()

  const props = defineProps({
      descriptemId: { type: String, default: "" }
  })

  const descriptem = computed(() => store.getDescriptem(props.descriptemId))

  function offset (side: string, offset: number) {
      if (descriptem.value) {
          if (side === 'begin') {
              store.updateDescriptem(props.descriptemId, {
                  startIndex: clamp(descriptem.value.startIndex + offset, 0, descriptem.value.interview.text.length)
              })
          } else {
              store.updateDescriptem(props.descriptemId, {
                  endIndex: clamp(descriptem.value.endIndex + offset, 0, descriptem.value.interview.text.length)
              })
          }
      }
  }
</script>

<style scoped>
</style>
