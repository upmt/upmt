<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :items="projects.all()"
      :meta="meta"
      ></example-component>
    <project-card>
    </project-card>
    <pre>
    </pre>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Meta, projects } from 'components/models'
import ExampleComponent from 'components/ExampleComponent.vue'
import ProjectCard from 'components/ProjectCard.vue'

defineOptions({
  name: 'IndexPage'
})

const meta = ref<Meta>({
  totalCount: 1200
})
</script>
