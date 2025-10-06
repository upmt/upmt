<template>
  <div ref="container"
       class="tree-box"
       :style="{ width: '100%', height: '100%', position: 'relative' }">
    <svg
      v-if="childrenCount"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">
      <g :class="direction">
        <line
          v-if="direction == 'horizontal'"
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
          :d="`M${parentPosition.x} ${parentPosition.y} l -${symbolHalfWidth} -${symbolHalfHeight} l -${symbolHalfWidth} ${symbolHalfHeight} l ${symbolHalfWidth} ${symbolHalfHeight} Z`"
          fill="white"
          stroke="black"
          :stroke-width="strokeWidth" />
        <path
          v-if="isSpecialization"
          :d="`M${parentPosition.x} ${parentPosition.y} l -${ 2 * symbolHalfWidth } -${2 * symbolHalfHeight} l 0 ${4 * symbolHalfHeight} Z`"
          fill="white"
          stroke="black"
          :stroke-width="strokeWidth" />
        <path
          v-if="isProperty"
          :d="`M${parentPosition.x - symbolHalfWidth} ${parentPosition.y - symbolHalfHeight} l ${symbolHalfWidth} ${symbolHalfHeight} l -${symbolHalfWidth} ${symbolHalfHeight}`"
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
      direction: { type: String, default: 'horizontal' },
      type: { type: String, default: "" }
  })

  const container = ref(null)
  const dimensions = reactive({
      width: 100,
      height: 100
  })

  const strokeWidth = ref(1)

  const symbolHalfWidth = computed(() => {
      return 20
  })

  const symbolHalfHeight = computed(() => {
      const count = props.childrenCount
      return 6 / (1.05 ** count)
  })

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
  g.vertical {
      transform: rotate(-90deg);
      transform-origin: center center;
      transform-box: fill-box;
  }
</style>
