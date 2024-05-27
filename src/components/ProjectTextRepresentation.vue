<template>
  <q-card v-if="project">
    <strong>Project {{ project?.name }}</strong>

    <h2>{{ project.interviews.length }} interviews</h2>
    <ul>
      <li v-for="interview in project.interviews" :key="interview.id">
        <InterviewTextRepresentation :interview="interview">
        </InterviewTextRepresentation>
      </li>
    </ul>

  </q-card>
</template>

<script setup lang="ts">
import Project from 'stores/models/project'
import InterviewTextRepresentation from 'components/InterviewTextRepresentation.vue'

defineProps({
    project: { type: Project, default: null }
});
</script>
