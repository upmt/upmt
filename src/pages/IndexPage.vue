<template>
  <q-page class="row fit">
    <ProjectInterviewSelection
      class="col-grow"
      :project="selectedProject">
    </ProjectInterviewSelection>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { computed, onMounted, ref, watch } from 'vue'
import { useProjectStore } from 'stores/projectStore'
import ProjectInterviewSelection from 'components/ProjectInterviewSelection.vue'
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'

defineOptions({
  name: 'IndexPage'
})
const props = defineProps({
    source: {
        type: String,
        default: null
    }
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

function loadSample (filename = './OPEVA-G1.upmt') {
    $q.loading.show()
    axios.get(filename).then((response) => {
        const p = useProjectStore().importProject(response.data)
        selected.value = { label: p.name, value: p.id }
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
    if (document.location.hash.includes('init')) {
        loadSample()
        console.log("Debugging pstore", projectStore)
    }
})

</script>
