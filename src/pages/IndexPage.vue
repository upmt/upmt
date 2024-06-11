<template>
  <q-page class="col fit">
    <q-card>
      <div class="text-h1">uPMT</div>
    </q-card>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        v-for="project in projects"
        :key="project.id"
        class="project-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{ project.name }}</div>
        <div class="text-subtitle2">{{ project.interviews.length }} interviews</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn :to="{ name: 'project', params: { id: project.id } }" flat>Open</q-btn>
      </q-card-actions>
      </q-card>
    </div>

    <project-card
      :project="selectedProject">
    </project-card>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { computed, ref } from 'vue'
import { useProjectStore } from 'stores/projectStore'
import ProjectCard from 'components/ProjectCard.vue'
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'

defineOptions({
  name: 'IndexPage'
})

const $q = useQuasar()

const projectStore = useProjectStore()

interface SelectItem {
    label: string
    value: string
}
const selected = ref<SelectItem | null>(null)
const selectedProject = computed(() => {
    if (selected.value) {
        return projectStore.getProject(selected.value.value)
    } else {
        return undefined
    }
  })
const projects = computed(() => projectStore.getAllProjects())
const projectList = computed((): SelectItem[] => projects.value.map(p => ({
    label: p.label,
    value: p.id
    })))

function loadSample (filename = './OPEVA-G1.upmt') {
    $q.loading.show()
    axios.get(filename).then((response) => {
        const p = useProjectStore().importProject(response.data)
        selected.value = { label: p.name, value: p.id }
        $q.loading.hide()
    })
}

</script>

<style scoped>
.project-card {
    width: 100%;
    max-width: 250px;
}
</style>
