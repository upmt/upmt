<template>
  <div
    row
    v-if="project">

    <q-splitter
      v-model="splitterModel"
      :limits="[10,90]">

      <template v-slot:before>
        <div class="fit fullwindow-height">
          <q-tabs
            dense
            v-model="tab"
            vertical
            >
            <strong>{{ project.label }}</strong>
            <q-route-tab v-for="interview in project.interviews"
                         :to="{ query: { tab: interview.label } }"
                         :name="interview.id"
                         :key="interview.id"
                         :title="interview.comment"
                         :label="interview.label">
            </q-route-tab>
          </q-tabs>
          <q-separator />
          <folder-tree
            :folder="project.modelfolder">
          </folder-tree>
        </div>
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
                       :name="interview.id"
                       :key="interview.id">

            <q-splitter
              v-model="splitterTranscript"
              :limits="[5,95]">

              <template v-slot:before>
                <InterviewTextRepresentation
                  class="fit fullwindow-height"
                  :interviewId="interview.id">
                </InterviewTextRepresentation>
              </template>

              <template v-slot:after>
                <!-- Replace with https://github.com/cyclecycle/vue-annotated-text -->
                <TextAnnotation
                  class="fit fullwindow-height"
                  :interview="interview">
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
  import FolderTree from 'components/FolderTree.vue'
import TextAnnotation from 'components/TextAnnotation.vue'

  const props = defineProps({
      project: { type: Project, required: true }
  })

  const tab = ref("")
  const splitterModel = ref(10)
  const splitterTranscript = ref(90)

  watch(() => props.project, (newValue) => {
      tab.value = newValue.interviews[0].id
  })
</script>

<style>
  .fullwindow-height {
    min-height: calc(100vh - var(--header-height));
    max-height: calc(100vh - var(--header-height));
    overflow: auto;
}
</style>
