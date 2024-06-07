<template>
  <q-page class="row fit">
    <!--
    <q-select
      v-model="selected"
      :options="projectList">
    </q-select>
    <project-card
      :project="selectedProject">
    </project-card>
    -->
    <!--
    <ProjectTextRepresentation
      :project="selectedProject">
    </ProjectTextRepresentation>
    -->
    <ProjectInterviewSelection
      class="col-grow"
      :project="selectedProject">
    </ProjectInterviewSelection>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useProjectStore } from 'stores/projectStore'
// import ProjectCard from 'components/ProjectCard.vue'
// import ProjectTextRepresentation from 'components/ProjectTextRepresentation.vue'
import ProjectInterviewSelection from 'components/ProjectInterviewSelection.vue'
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

function loadSample () {
    axios.get('./OPEVA-G1.upmt').then((response) => {
    $q.loading.show()
        const p = useProjectStore().importProject(response.data)
        selected.value = { label: p.name, value: p.id }
        $q.loading.hide()
    })
}

onMounted(() => {
    if (document.location.hash.includes('init')) {
        loadSample()
        console.log("Debugging pstore", projectStore)
    }
})

</script>
