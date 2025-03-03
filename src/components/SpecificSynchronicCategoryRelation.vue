<template>
  <div ref="container"
       class="tree-box"
       :style="{ width: '100%', height: '100%', position: 'relative' }">
    <svg
      v-if="childrenCount"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <line
          vector-effect="non-scaling-stroke"
          :x1="0"
          :y1="barPosition.y"
          :x2="0"
          :y2="dimensions.height - barPosition.y"
          stroke="black"
          :stroke-width="strokeWidth"
          />
        <line
          vector-effect="non-scaling-stroke"
          :x1="0"
          :y1="parentPosition.y"
          :x2="parentPosition.x"
          :y2="parentPosition.y"
          stroke="black"
          :stroke-width="strokeWidth"
          />
        <path
          vector-effect="non-scaling-stroke"
          v-if="isAggregation"
          :d="`M${parentPosition.x} ${parentPosition.y} l -8 -2 l -8 2 l 8 2 Z`"
          fill="white"
          stroke="black"
          :stroke-width="strokeWidth" />
        <path
          v-if="isSpecialization"
          :d="`M${parentPosition.x} ${parentPosition.y} l -8 -3 l 0 6 Z`"
          fill="white"
          stroke="black"
          :stroke-width="strokeWidth" />
        <path
          v-if="isProperty"
          :d="`M${parentPosition.x - 6} ${parentPosition.y - 3} l 6 3 l -6 3`"
          fill="none"
          stroke="black"
          :stroke-width="strokeWidth" />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">

  import { ref, reactive, computed } from 'vue'

  const props = defineProps({
      childrenCount: { type: Number, default: 1 },
      type: { type: String, default: "" }
  })

  const container = ref(null)
  const dimensions = reactive({
      width: 100,
      height: 100
  })

  const strokeWidth = ref(1.5)

  const isAggregation = computed(() => props.type === 'aggregation')
  const isSpecialization = computed(() => props.type === 'specialization')
  const isProperty = computed(() => props.childrenCount === 0)

  const parentPosition = computed(() => ({
      x: dimensions.width,
      y: dimensions.height / 2
  }))

  const barPosition = computed(() => ({
      x: dimensions.width / 2,
      y: dimensions.height / props.childrenCount / 2
  }))
</script>

<style scoped>
  .tree-box svg {
      width: 100%;
      height: 100%;
  }
</style>
