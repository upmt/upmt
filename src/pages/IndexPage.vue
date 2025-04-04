<template>
  <q-page class="col fit">

    <q-card>
      <q-card-section>
        <div class="text-h3">μ<span style="font-weight: 400">PMT</span> - micro Phenomenology Modelling Tool</div>
        <div>A tool to help researchers analyze micro-phenomenology interviews (<a href="https://github.com/upmt/upmt/wiki/">more info</a>)</div>
      </q-card-section>
      <q-card-section class="bg-primary text-white">
        <div class="text-h4">Loaded projects <q-btn flat no-caps>(Where is my data?)
            <q-tooltip>
              <p>
              No data is stored by the application or exchanged with a
              server. The application runs on your computer, in your
              browser.</p>

              <p>
              No data at all is automatically stored by the
              application. You can open a file from your computer, and
              save/download the modified data as a file. If you close
              your browser without saving/downloading the data, your
              changes will be lost.
              </p>
            </q-tooltip>
          </q-btn></div>
      </q-card-section>
    </q-card>

    <div id="content"
         class="row q-pa-sm row q-gutter-sm">

      <div
        id="project-list"
        class="q-pa-md row q-gutter-md col-7 justify-start content-start">

        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :projectId="project.id" />

        <q-fab class="self-center"
               color="secondary"
               push icon="add"
               direction="right">

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

      <div id="column-right"
           class="col-5 q-pa-sm q-gutter-sm">

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
            <div class="text-h4">Forum</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            Ask questions and make suggestions on the <a href="https://github.com/upmt/upmt/discussions">discussions forum</a>.
          </q-card-section>
        </q-card>

        <q-card class="col-md-3 col-12">
          <q-card-section class="bg-primary text-white">
            <div class="text-h4">Help</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            See the <a href="https://github.com/upmt/upmt/wiki">documentation wiki</a>
          </q-card-section>
        </q-card>

        <q-card class="col-md-3 col-12">
          <q-card-section class="bg-primary text-white">
            <div class="text-h4">Contact</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
          </q-card-section>
        </q-card>

      </div>

    </div>

    <div id="bottom-row"
         class="q-pa-sm row q-gutter-sm">

    </div>

  </q-page>
</template>

<script setup lang="ts">

  import { useQuasar, QFile } from 'quasar'
  import { computed, ref, Ref } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import ProjectCard from 'components/ProjectCard.vue'

  defineOptions({
      name: 'IndexPage'
  })

  const $q = useQuasar()

  const store = useProjectStore()

  const filepicker: Ref<QFile | null> = ref(null)

  const filename = ref(null)

  const projects = computed(() => store.getAllProjects())

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
              if (jsonData !== null && sourceFile?.name) {
                  store.importProject(jsonData, sourceFile.name)
              }
          }
          reader.onerror = () => {
              console.error('Error reading file:', reader.error)
              $q.notify({
                  type: 'error',
                  message: `Error reading file: ${reader.error?.message}`
              })
          }
          // Load data from file - the readAsText will
          // trigger the load event that is handled just
          // above.
          reader.readAsText(sourceFile as Blob)
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

</script>

<style scoped>
  .project-card {
    width: 100%;
    max-width: 250px;
  }
</style>
