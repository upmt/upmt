<template>
  <q-btn
    size="xs"
    flat
    round
    :class="commentClass"
    icon="mdi-chat-outline">
    <q-tooltip
      class="bg-blue text-body2"
      v-if="comment">
      <span class="moment-comment">{{ comment }}</span>
    </q-tooltip>
  </q-btn>
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
