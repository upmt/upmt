<template>
  <div ref="container"
       class="tree-box"
       :style="{ width: '100%', height: '100%', position: 'relative' }">
    <svg
      v-if="childrenCount"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">
      <line
        v-for="index in childrenArray"
        :key="index"
        :x1="nodePositions[index].x"
        :y1="nodePositions[index].y"
        :x2="barPosition.x"
        :y2="nodePositions[index].y"
        stroke="black"
        :stroke-width="strokeWidth"
        />
      <line
        :x1="barPosition.x"
        :y1="barPosition.y"
        :x2="barPosition.x"
        :y2="dimensions.height - barPosition.y"
        stroke="black"
        :stroke-width="strokeWidth"
        />
      <line
        :x1="barPosition.x"
        :y1="parentPosition.y"
        :x2="parentPosition.x"
        :y2="parentPosition.y"
        stroke="black"
        :stroke-width="strokeWidth"
        />
    </svg>
  </div>
</template>

<script setup lang="ts">

  import { ref, reactive, computed } from 'vue'

  const props = defineProps({
      childrenCount: { type: Number, default: 1 }
  })

  const container = ref(null)
  const dimensions = reactive({
      width: 100,
      height: 100
  })

  const strokeWidth = ref(0.5)

  const childrenArray = computed(() => {
      return [ ...Array(props.childrenCount).keys()]
  })

  const nodePositions = computed(() => {
      const gap = dimensions.height / props.childrenCount
      return childrenArray.value.map((index) => ({
          x: 0,
          y: gap * index + gap / 2
      }))
  })

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
