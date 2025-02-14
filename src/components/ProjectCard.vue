<template>
  <q-card>
    <p>{{ projects.length }} loaded projects.</p>
    <div v-if="isLocalhost()">
      <q-btn @click="addProject">Add project</q-btn>
      <q-btn @click="loadSample">Load sample</q-btn>
    </div>
    <q-file label="Load File"
            v-model="filename"
            accept=".upmt"
            filled @input="uploadFile"/>
  </q-card>
</template>

<script setup lang="ts">

  import { ref, computed } from 'vue'
  import axios from 'axios'
  import { useProjectStore } from 'stores/projectStore'
  import { useQuasar } from 'quasar'

  const $q = useQuasar()
  const filename = ref(null)

  const pstore = useProjectStore()
  const projects = computed(() => pstore.getAllProjects())

  function isLocalhost () {
      return document.location.hostname === 'localhost'
  }

  let counter = 1
  const addProject = () => {
      pstore.createProject({
          name: `Test project${counter++}`,
          interviews: [
              {
                  name: `interview${counter++}`,
                  color: "black",
                  comment: "",
                  text: `Bla bla bli ${counter}`,
                  participantName: "she",
                  analysis: {
                      rootMoment: {
                          name: `Moment ${counter}`,
                          color: "blue",
                          children: [
                              {
                                  name: `Child moment ${counter}`,
                                  color: "red"
                              }
                          ]
                      }
                  }
              },
              {
                  name: `interview${counter++}`,
                  color: "red",
                  comment: "comm",
                  text: `Bla bla bli ${counter}`,
                  participantName: "she"
              }
          ]
      })
  }

  function loadSample () {
      const filename = './OPEVA-G1.upmt'
      axios.get(filename).then((response) => {
          pstore.importProject(response.data, filename)
      }).catch(error => {
          $q.notify({
              type: 'error',
              message: `Error loading file: ${error}`
          })
      })
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
                  pstore.importProject(jsonData, sourceFile.name)
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
          if (sourceFile) {
              reader.readAsText(sourceFile as Blob)
          }
      } catch (e) {
          console.log(e)
          $q.notify({
              type: 'error',
              message: `General exception: ${e}`
          })
      }
  }

</script>
