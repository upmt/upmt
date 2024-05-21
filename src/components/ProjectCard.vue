<template>
  <q-card>
    <strong>Project {{ project?.name }}</strong>
    <p>Interview count: {{ interviewCount }}</p>
    <ul>
      <li v-for="interview in project?.interviews" :key="interview.id">
        {{ interview.id }} - {{ interview.name }}
      </li>
    </ul>
    <p>Project count: {{ repo.all().length }}</p>
    <q-btn @click="addProject">Add project</q-btn>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from 'pinia-orm'
import Project from 'stores/models/project'

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

const addProject = () => {
    repo.save({
        name: "Test project",
        interviews: [
            {
                name: "interview1",
                color: "black",
                comment: "",
                interviewText: "Bla bla bli",
                participantName: "she"
            },
            {
                name: "interview2",
                color: "red",
                comment: "comm",
                interviewText: "Bla bla bli",
                participantName: "she"
            }
        ]
    })
    console.log("inserted project in", repo.piniaStore())
}
</script>
