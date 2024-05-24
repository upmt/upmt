<template>
  <q-card>
    <strong>Project {{ project?.name }}</strong>
    <p>Interview count: {{ interviewCount }}</p>
    <ul>
      <li v-for="interview in project?.interviews" :key="interview.id">
        {{ interview.id }} - {{ interview.name }}
      </li>
    </ul>
    <pre>{{ JSON.stringify(repo.all()) }}</pre>
    <pre>{{ JSON.stringify(projects) }}</pre>

    <p>Project count: {{ repo.all().length }}</p>
    <q-btn @click="addProject">Add project</q-btn>
    <q-file label="Load File" v-model="filename" filled @input="uploadFile"/>
  </q-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRepo } from 'pinia-orm'
import Project from 'stores/models/project'
import { useProjectStore } from 'stores/projectStore'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const filename = ref(null)
const repo = useRepo(Project)

const props = defineProps({
    project: { type: Project, default: null }
  });

const interviewCount = computed(() => {
  if (props.project) {
    return props.project.interviews.length
  } else {
    return 0
  }
})

const pstore = useProjectStore()
const projects = computed(() => pstore.getAllProjects())

let counter = 1
const addProject = () => {
    pstore.createProject({
        name: `Test project${counter++}`,
        interviews: [
            {
                name: `interview${counter++}`,
                color: "black",
                comment: "",
                interviewText: `Bla bla bli ${counter}`,
                participantName: "she",
                rootMoment: null
            },
            {
                name: `interview${counter++}`,
                color: "red",
                comment: "comm",
                interviewText: `Bla bla bli ${counter}`,
                participantName: "she",
                rootMoment: null
            }
        ]
    })
}

const importProject = (data: Project) => {
    pstore.createProject(data)
}

async function uploadFile (event: Event) {
    try {
        // `event.target.files[0]` is the desired file object
        const files = (event.target as HTMLInputElement).files
        if (!files || files.length === 0) {
            return;
        }
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
            console.log("Read data", jsonData)
            if (jsonData !== null) {
                importProject(jsonData);
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
        reader.readAsText(files[0])
    } catch (e) {
        console.log(e)
        $q.notify({
            type: 'error',
            message: `General exception: ${e}`
        })
    }
  }

</script>
