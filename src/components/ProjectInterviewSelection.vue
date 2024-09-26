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
            active-class="active"
            align="left"
            no-caps
            :inlineLabel="true"
            v-model="currentInterviewId"
            vertical
            >
            <q-route-tab v-for="interview in project.interviews"
                         :to="{ query: { tab: interview.label } }"
                         icon="mdi-chat-outline"
                         :name="interview.id"
                         :key="interview.id"
                         :title="interview.comment"
                         :label="interview.label">
            </q-route-tab>
            <q-route-tab :to="{ query: { tab: newInterview } }"
                         class="new-interview"
                         :name="newInterview"
                         :key="newInterview"
                         icon="add">
            </q-route-tab>
          </q-tabs>

          <q-separator />
          <ModelFolderRepresentation
            :modelfolderId="project.modelfolder.id"
            :currentInterviewId="currentInterviewId">
          </ModelFolderRepresentation>
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="currentInterviewId"
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
                <InterviewRepresentation
                  class="fit fullwindow-height"
                  :highlighted="highlighted"
                  :interviewId="interview.id">
                </InterviewRepresentation>
              </template>

              <template v-slot:after>
                <!-- Replace with https://github.com/cyclecycle/vue-annotated-text -->
                <TextAnnotation
                  class="fit fullwindow-height"
                  :interviewId="interview.id">
                </TextAnnotation>
              </template>
            </q-splitter>

          </q-tab-panel>

          <q-tab-panel :name="newInterview"
                       :key="newInterview">
            <CreateInterviewForm :projectId="projectId"
                                 @created="onInterviewCreated"
                                 @cancel="onInterviewCancel">
            </CreateInterviewForm>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>

  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { computed, ref, watch, onUnmounted } from 'vue'
  import Interview from 'stores/models/interview'
  import InterviewRepresentation from 'components/InterviewRepresentation.vue'
  import ModelFolderRepresentation from './ModelFolderRepresentation.vue'
  import TextAnnotation from 'components/TextAnnotation.vue'
  import CreateInterviewForm from 'components/CreateInterviewForm.vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  const istore = useInterfaceStore()

  const { highlighted } = storeToRefs(istore)

  const router = useRouter()

  const store = useProjectStore()

  const props = defineProps({
      projectId: { type: String, required: true }
  })

  const project = computed(() => {
      const p = store.getProject(props.projectId)
      istore.setCurrentProject(p)
      return p
  })

  const newInterview = "New interview"

  const currentInterviewId = ref("")
  const splitterModel = ref(20)
  const splitterTranscript = ref(90)

  watch(() => props.projectId, () => {
      // There are interviews. Select the first one
      if (project.value && project.value.interviews) {
          currentInterviewId.value = project.value.interviews[0].id
      } else {
          currentInterviewId.value = newInterview
      }
  })

  watch(currentInterviewId, () => {
      console.log("Update interview", currentInterviewId)
      istore.setCurrentInterview(store.getInterview(currentInterviewId.value))
  })

  function onInterviewCreated (interview: Interview) {
      // Switch to tab of new interview
      setTimeout(() => {
          router.push({
              query: {
                  currentInterviewId: interview.id
              }
          })
      }, 300)
  }

  function onInterviewCancel () {
      // If there is at least 1 interview, activate it
      console.log("project ", project.value, project.value?.interviews)
      if (project.value && project.value.interviews) {
          router.push({
              query: {
                  tab: project.value.interviews[0].name
              }
          })
      }
  }

  onUnmounted(() => {
      istore.setCurrentInterview(null)
      istore.setCurrentProject(null)
  })
</script>

<style>
  .fullwindow-height {
    min-height: calc(100vh - var(--header-height));
    max-height: calc(100vh - var(--header-height));
    overflow: auto;
  }

  .tab-label {
      display: flex;
      flex-direction: row !important;
  }

  .q-tab__label {
      font-weight: 200;
  }

  .active .q-tab__label {
      background-color: #eeeeee;
      font-weight: bold;
  }
  .q-tab {
      justify-content: flex-start;
  }

  .new-interview {
      justify-content: flex-end;
  }
</style>
