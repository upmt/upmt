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
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from 'pinia-orm'
import Project from 'stores/models/project'
import { useProjectStore } from 'stores/projectStore'

const repo = useRepo(Project)

interface Props {
    project?: Project | null
}
const props = withDefaults(defineProps<Props>(), {
  project: null
})

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
</script>
