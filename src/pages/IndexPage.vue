<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Project list"
      active
      :items="projects"
      :meta="meta"
      ></example-component>
    <project-card
      :project="selectedProject">
    </project-card>
    <project-tree
      :project="selectedProject">
    </project-tree>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useProjectStore } from 'stores/projectStore'
import { Meta } from 'components/models'
import ExampleComponent from 'components/ExampleComponent.vue'
import ProjectCard from 'components/ProjectCard.vue'
import ProjectTree from 'components/ProjectTree.vue'

defineOptions({
  name: 'IndexPage'
})

const projectStore = useProjectStore()
const projects = computed(() => projectStore.getAllProjects())
  const selectedProject = computed(() => {
    if (projects.value.length) {
        return projects.value[0]
    } else {
        return undefined
    }
  })
const meta = ref<Meta>({
  totalCount: 1200
})
</script>
