<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :items="projects"
      :meta="meta"
      ></example-component>
    <project-card>
    </project-card>
    <pre>
      {{ JSON.stringify(projectStore) }}
    </pre>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProjectStore } from 'stores/projectStore'
import { Meta } from 'components/models'
import ExampleComponent from 'components/ExampleComponent.vue'
import ProjectCard from 'components/ProjectCard.vue'

defineOptions({
  name: 'IndexPage'
})

const projectStore = useProjectStore()
const projects = projectStore.getAllProjects()

const meta = ref<Meta>({
  totalCount: 1200
})
</script>
