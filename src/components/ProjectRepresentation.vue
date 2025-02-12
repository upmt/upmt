<template>
  <q-card v-if="project">
    <strong>Project {{ project?.name }}</strong>

    <h2>{{ project.interviews.length }} interviews</h2>
    <ul class="interview-list">
      <li v-for="interview in project.interviews" :key="interview.id">
        <InterviewRepresentation :interview="interview">
        </InterviewRepresentation>
      </li>
    </ul>

  </q-card>
</template>

<script setup lang="ts">

  import Project from 'stores/models/project'
  import InterviewRepresentation from 'components/InterviewRepresentation.vue'

  defineProps({
      project: {
          type: Project,
          default: null
      }
  })
</script>

<style scoped>
  .interview-list {
    list-style: none;
  }
</style>
