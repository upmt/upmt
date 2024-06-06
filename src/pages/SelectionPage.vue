<template>
  <q-page class="row items-center justify-evenly">
    <q-select
      v-model="selected"
      :options="projectList">
    </q-select>
    <project-card
      :project="selectedProject">
    </project-card>
    <ProjectTextRepresentation
      :project="selectedProject">
    </ProjectTextRepresentation>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useProjectStore } from 'stores/projectStore'
import ProjectCard from 'components/ProjectCard.vue'
import ProjectTextRepresentation from 'components/ProjectTextRepresentation.vue'

defineOptions({
  name: 'IndexPage'
})

const projectStore = useProjectStore()
const projects = computed(() => projectStore.getAllProjects())

interface SelectItem {
    label: string
    value: string
}
const selected = ref<SelectItem | null>(null)
const projectList = computed((): SelectItem[] => projects.value.map(p => ({
    label: p.name,
    value: p.id
  })))
const selectedProject = computed(() => {
    if (selected.value) {
        return projectStore.getProject(selected.value.value)
    } else {
        return undefined
    }
  })

</script>
