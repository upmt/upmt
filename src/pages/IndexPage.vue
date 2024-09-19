<template>
  <q-page class="col fit">
    <q-card>
      <q-card-section>
        <div class="text-h3">μ<span style="font-weight: 400">PMT</span> - micro Phenomenology Modelling Tool</div>
      </q-card-section>
        <q-card-section class="bg-primary text-white">
        <div class="text-h4">Current projects</div>
      </q-card-section>
    </q-card>

    <div class="q-pa-md row items-end q-gutter-md">

      <q-card
        v-for="project in projects"
        :key="project.id"
        class="project-card">
        <q-card-section class="bg-secondary text-white">
          <div class="text-h6">{{ project.name }}</div>
          <div class="text-subtitle2">{{ project.interviews.length }} interviews</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn :to="{ name: 'project', params: { id: project.id } }" flat>View</q-btn>
          <q-btn @click="exportProject(project)" flat>Export</q-btn>
        </q-card-actions>
      </q-card>

      <q-fab color="secondary" push icon="add" direction="right">

        <q-fab-action color="primary" @click="newProject" icon="mdi-book-open-blank-variant-outline">
          <q-tooltip>
            Create a new blank project
          </q-tooltip>
        </q-fab-action>

        <q-fab-action color="primary" @click="loadProject" icon="mdi-upload-circle-outline">
          <q-tooltip>
            Load a local .upmt file
          </q-tooltip>
        </q-fab-action>

      </q-fab>

      <q-file label="Load File"
              ref="filepicker"
              class="hidden"
              v-model="filename"
              accept=".upmt"
              filled
              @input="uploadFile"/>

    </div>

    <div class="q-pa-sm row q-gutter-sm">

      <q-card class="col-md-4 col-12">
        <q-card-section class="bg-primary text-white">
          <div class="text-h4">News</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="col-md-4 col-12">
        <q-card-section class="bg-primary text-white">
          <div class="text-h4">Help</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          See the <a href="https://github.com/upmt/upmt/wiki">documentation wiki</a>
        </q-card-section>
      </q-card>

      <q-card class="col-md-4 col-12">
        <q-card-section class="bg-primary text-white">
          <div class="text-h4">Contact</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="col-md-4 col-12">
        <q-card-section class="bg-primary text-white">
          <div class="text-h4">Forum</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          Ask questions and make suggestions on the <a href="https://github.com/upmt/upmt/discussions">discussions forum</a>.
        </q-card-section>
      </q-card>

    </div>

  </q-page>
</template>

<script setup lang="ts">
import { useQuasar, exportFile, QFile } from 'quasar'
import { computed, ref, Ref, onMounted } from 'vue'
import { useProjectStore } from 'stores/projectStore'
import Project from 'stores/models/project'
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'

defineOptions({
  name: 'IndexPage'
})

const $q = useQuasar()

const store = useProjectStore()

interface SelectItem {
    label: string
    value: string
  }

const filepicker: Ref<QFile | null> = ref(null)

const filename = ref(null)

const selected = ref<SelectItem | null>(null)

const selectedProject = computed(() => {
    if (selected.value) {
        return store.getProject(selected.value.value)
    } else {
        return undefined
    }
  })

const projects = computed(() => store.getAllProjects())

const projectList = computed((): SelectItem[] => projects.value.map(p => ({
    label: p.label,
    value: p.id
    })))

function loadSample (filename = './examples/example.upmt') {
    $q.loading.show()
    axios.get(filename).then((response) => {
        const p = useProjectStore().importProject(response.data, filename)
        selected.value = { label: p.name, value: p.id }
        $q.loading.hide()
    })
}

function loadProject () {
    console.log("loadProject", filepicker.value)
    if (filepicker.value) {
        filepicker.value.pickFiles()
    }
}

function uploadFile (event: Event) {
    try {
        // `event.target.files[0]` is the desired file object
        const files = (event.target as HTMLInputElement).files
        if (!files || files.length === 0) {
            return
        }
        const sourceFile = files[0]
        const reader = new FileReader()

        reader.onload = () => {
            // Parse file and extract data
            let jsonData = null
            try {
                jsonData = JSON.parse(reader.result as string)
            } catch (error) {
                $q.notify({
                    type: 'error',
                    message: `Error loading file: ${error}`
                })
                jsonData = null
            }
            if (jsonData !== null) {
                store.importProject(jsonData, sourceFile.name)
            }
        }
        reader.onerror = () => {
            console.error('Error reading file:', reader.error)
            $q.notify({
                type: 'error',
                message: `Error reading file: ${reader.error}`
            })
        }
        // Load data from file - the readAsText will
        // trigger the load event that is handled just
        // above.
        reader.readAsText(sourceFile)
    } catch (e) {
        console.log(e)
        $q.notify({
            type: 'error',
            message: `General exception: ${e}`
        })
    }
  }

  function newProject () {
      $q.dialog({
          title: 'Create a new project',
          message: 'What is the project name?',
          prompt: {
              model: '',
              isValid: val => val !== "" && store.getProjectByName(val) === null,
              type: 'text'
          },
          cancel: true,
          persistent: true
      }).onOk(name => {
          store.createProject({
              name,
              interviews: [],
              modelfolder: {
                  name: "Model"
              }
          })
      })
  }

function exportProject (project: Project) {
    const data = useProjectStore().hydrateProject(project.id)

    const status = exportFile(project.filename ?? project.label,
                              JSON.stringify(data, null, 2), {
        encoding: 'utf-8',
        mimeType: 'application/json'
    })

    if (status === true) {
        // browser allowed it
    } else {
        // browser denied it
        console.error('Error: ' + status)
    }
}

onMounted(() => {
    if (!selected.value) {
        loadSample();
        (window as any).store = store;
        (window as any).quasar = $q;
        console.log("Debugging store", store, "quasar", $q);
    }
})

</script>

<style scoped>
.project-card {
    width: 100%;
    max-width: 250px;
}
</style>
