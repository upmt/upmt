<template>
  <div :class="itemClass">
    <div class="expansion-header row items-center">
      <q-icon
        class="expansion-icon"
        :class="expandIconClass"
        @click.stop="isExpanded = !isExpanded"
        :name="isExpanded ? expandedIcon : expandIcon" />
      <slot name="header"></slot>
    </div>
    <div class="expansion-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
      expandIcon?: string,
      expandedIcon?: string,
      expandIconClass?: object | string
  }
  withDefaults(defineProps<Props>(), {
      expandIcon: "mdi-plus",
      expandedIcon: "mdi-minus",
      expandIconClass: ""
  })

  const isExpanded = defineModel({ default: true })

  const itemClass = computed(() => {
      return isExpanded.value ? "expansion-item column expanded" : "expansion-item column collapsed"
  })
</script>
<style scoped>
.collapsed .expansion-body {
    display: none;
}
.expansion-body {
    margin-left: 10px;
}
.expansion-header {
    border: 1px solid transparent;
}
.expansion-header:hover {
    border: 1px dashed #ccc;
}
.expansion-icon {
    cursor: pointer;
}
</style>
