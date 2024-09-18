<template>
  <q-page class="row fit">
    <ProjectInterviewSelection
      class="col-grow"
      v-if="project"
      :projectId="project.id">
    </ProjectInterviewSelection>
    <p v-else>
      No project loaded.
    </p>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { onMounted, ref, watch } from 'vue'
import Project from 'stores/models/project'
import { useProjectStore } from 'stores/projectStore'
import ProjectInterviewSelection from 'components/ProjectInterviewSelection.vue'
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'

defineOptions({
  name: 'InitPage'
})
const props = defineProps({
    source: {
        type: String,
        default: null
    }
})

const $q = useQuasar()

const store = useProjectStore()

const project = ref<Project>()

function loadSample (filename = './examples/example.upmt') {
    $q.loading.show()
    axios.get(filename).then((response) => {
        const p = useProjectStore().importProject(response.data, filename)
        project.value = p
        $q.loading.hide()
    })
}

watch(() => props.source,
      () => {
          if (props.source) {
              loadSample(props.source)
          }
        },
      { once: true })

onMounted(() => {
    if (!project.value) {
        loadSample();
        (window as any).store = store;
        (window as any).quasar = $q;
        console.log("Debugging store", store, "quasar", $q);
    }
})
</script>
