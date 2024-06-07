<template>
  <div
    row
    v-if="project">

    <q-splitter
      v-model="splitterModel"
      :limits="[10,90]">

      <template v-slot:before>
          <q-tabs
            v-model="tab"
            vertical
            >
            <strong>{{ project.label }}</strong>
            <q-tab v-for="interview in project.interviews"
                   :name="interview.id"
                   :key="interview.id"
                   :title="interview.comment"
                   :label="interview.label">
            </q-tab>
          </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel v-for="interview in project.interviews"
                       col
                       :name="interview.id"
                       :key="interview.id">

            <q-splitter
              v-model="splitterTranscript"
              :limits="[5,95]">

              <template v-slot:before>
                <InterviewTextRepresentation :interview="interview">
                </InterviewTextRepresentation>
              </template>

              <template v-slot:after>
                <TextAnnotation :interview="interview">
                </TextAnnotation>
              </template>
            </q-splitter>

          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>

  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import Project from 'stores/models/project'
  import InterviewTextRepresentation from 'components/InterviewTextRepresentation.vue'
  import TextAnnotation from 'components/TextAnnotation.vue'

  const props = defineProps({
      project: { type: Project, default: null }
  })

  const tab = ref("")
  const splitterModel = ref(10)
  const splitterTranscript = ref(90)

  watch(() => props.project, (newValue) => {
      tab.value = newValue.interviews[0].id
  })
</script>

<style>
</style>
