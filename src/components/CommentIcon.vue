<template>
  <q-icon
    size="xs"
    flat
    round
    :class="commentClass"
    name="mdi-chat-outline">
    <q-tooltip
      v-if="comment">
      <span class="moment-comment">{{ comment }}</span>
    </q-tooltip>
  </q-icon>
</template>

<script setup lang="ts">

  import { computed } from 'vue'

  const props = defineProps({
      comment: { type: String, default: "" }
  })

  const commentClass = computed(() => {
      return props.comment ? [ "comment" ] : [ "comment", "comment-is-empty" ]
  })
</script>

<style scoped>
  .comment-is-empty {
      opacity: .3;
  }
</style>
