<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="project in items" :key="project.id" @click="increment">
        {{ project.id }} - {{ project.name }}
      </li>
    </ul>
    <p>Count: {{ itemCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Project from 'stores/models/project'
import { Meta } from './models'

interface Props {
  title: string;
  items?: Project[];
  meta: Meta;
  active: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => []
})

const clickCount = ref(0)
function increment () {
  clickCount.value += 1
  return clickCount.value
}

const itemCount = computed(() => props.items.length)
</script>
