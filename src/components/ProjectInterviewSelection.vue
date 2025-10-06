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
            active-class="active-interview-label"
            align="left"
            no-caps
            :inlineLabel="true"
            v-model="currentInterviewId"
            vertical
            >
            <q-route-tab v-for="interview in project.interviews"
                         :to="{ query: { tab: interview.label } }"
                         icon="mdi-comment-text-outline"
                         :name="interview.id"
                         :key="interview.id"
                         :title="interview.note"
                         :label="interview.label">
            </q-route-tab>
            <q-route-tab :to="{ query: { tab: newInterview } }"
                         :label="newInterviewLabel"
                         class="new-interview"
                         :name="newInterview"
                         :key="newInterview"
                         icon="add">
            </q-route-tab>
          </q-tabs>

          <q-separator />
          <GenericCategoriesRepresentation
            :projectId="projectId"
            :genericGraphs="genericGraphs"
            :currentInterviewId="currentInterviewId" />
          <q-expansion-item
            dense
            dense-toggle
            :duration="0"
            expand-icon-toggle
            label="Generic model overview">

            <GenericCategoriesOverview
              :projectId="projectId"
              :currentInterviewId="currentInterviewId"
              :categories="genericGraphs.categories" />

          </q-expansion-item>

          <!-- <ModelFolderRepresentation
            :modelfolderId="project.modelfolder.id"
            :currentInterviewId="currentInterviewId">
          </ModelFolderRepresentation> -->
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
              class="fit fullwindow-height"
              v-model="splitterTranscript"
              :limits="[5,95]">

              <template v-slot:before>
                <q-splitter
                  class="fit fullwindow-height flex"
                  beforeClass="flex"
                  unit="px"
                  horizontal
                  separator-class="bg-grey-4"
                  separator-style="height: 3px"
                  v-model="splitterInterview"
                  >

                  <template v-slot:before>
                    <InterviewRepresentation
                      :interviewId="interview.id">
                    </InterviewRepresentation>
                  </template>

                  <template v-slot:after>
                    <div class="edited-model-container flex column"
                         v-if="editedSpecificSynchronicModel">
                      <q-toolbar class="row">
                        <q-toolbar-title>
                          Editing
                          <strong>{{ editedSpecificSynchronicModel.moment?.descriptionLabel || editedSpecificSynchronicModel.name }}</strong>
                          <span v-if="isEditedModelGeneric">
                            <q-btn
                              @click="updateGenericModel">Update template model
                            </q-btn>
                          </span>
                          <q-radio v-model="editViewMode" val="horizontal" label="Horizontal" />
                          <q-radio v-model="editViewMode" val="vertical" label="Vertical" />
                        </q-toolbar-title>
                        <q-btn
                          icon="mdi-close"
                          flat
                          round
                          dense
                          size="md"
                          class="float-right"
                          @click="closeEditedModel">
                        </q-btn>
                      </q-toolbar>
                      <div v-if="editedSpecificSynchronicModelId">
                        <SpecificSynchronicModelRepresentation
                          v-if="editViewMode == 'horizontal'"
                          :isGeneric="isEditedModelGeneric"
                          :modelId="editedSpecificSynchronicModelId" />
                        <VerticalGraph
                          v-else
                          :modelId="editedSpecificSynchronicModelId" />
                      </div>
                    </div>
                  </template>
                </q-splitter>
              </template>

              <template v-slot:after>
                <TextAnnotation
                  class="fit fullwindow-height"
                  :interviewId="interview.id">
                </TextAnnotation>
              </template>
            </q-splitter>

          </q-tab-panel>

          <q-tab-panel :name="newInterview"
                       :key="newInterview">
            <InterviewMetadataForm
              @validate="onInterviewCreate"
              @cancel="onInterviewCancel">
            </InterviewMetadataForm>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>

  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { computed, ref, watch, onUnmounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import GenericCategoriesOverview from 'components/GenericCategoriesOverview.vue'
  import GenericCategoriesRepresentation from 'components/GenericCategoriesRepresentation.vue'
  import InterviewRepresentation from 'components/InterviewRepresentation.vue'
//  import ModelFolderRepresentation from './ModelFolderRepresentation.vue'
  import TextAnnotation from 'components/TextAnnotation.vue'
  import VerticalGraph from 'components/VerticalGraph.vue'
  import InterviewMetadataForm from 'components/InterviewMetadataForm.vue'
  import type { InterviewInfo } from 'components/InterviewMetadataForm.vue'
  import SpecificSynchronicModelRepresentation from './SpecificSynchronicModelRepresentation.vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  const istore = useInterfaceStore()

  const router = useRouter()

  const store = useProjectStore()

  const props = defineProps({
      projectId: { type: String, required: true }
  })

  const project = computed(() => {
      const p = store.getProject(props.projectId)
      return p
  })

  const newInterview = "New interview"

  const newInterviewLabel = computed(() => project.value && project.value.interviews.length ? "" : "Add a first interview")

  const {
      editedSpecificSynchronicModelId
  } = storeToRefs(istore)

  const currentInterviewId = ref(project?.value?.interviews[0]?.id ?? "")
  const splitterModel = ref(20)
  const splitterTranscript = ref(90)
  const splitterInterview = ref(500)

  const editedSpecificSynchronicModel = computed(() => {
      return store.getSpecificSynchronicModel(editedSpecificSynchronicModelId.value)
  })

  const isEditedModelGeneric = computed(() => {
      return !!editedSpecificSynchronicModel.value && !!editedSpecificSynchronicModel.value.genericModelId
  })

  const editViewMode = ref('horizontal')

  const genericGraphs = computed(() => store.getGenericSynchronicGraphs(props.projectId))

  watch(() => props.projectId, () => {
      // There are interviews. Select the first one
      if (project.value && project.value.interviews[0]) {
          currentInterviewId.value = project.value.interviews[0].id || ""
      } else {
          currentInterviewId.value = newInterview
      }
      // We changed project - reset newSSC/newMoment indexes
      istore.resetIndexes (store.getSpecificSynchronicCategoryNamesByPrefix(props.projectId, istore.SSCPrefix),
                           store.getMomentsByProject(props.projectId).map(moment => moment.name))
  },
        // Trigger function at init time too
        { immediate: true })

  watch(currentInterviewId, () => {
      istore.setCurrentInterview(store.getInterview(currentInterviewId.value))
      istore.setEditedSpecificSynchronicModelId("")
  })

  function onInterviewCreate (info: InterviewInfo) {
      // Create the interview
      const i = store.getRepo().Interview.save({
          // This should be ...info
          // but then TypeScript has trouble determining output type
          name: info.name,
          participantName: info.participantName,
          note: info.note,
          date: info.date,
          text: info.text,
          parentId: props.projectId,
          annotations: [
          ],
          analysis: {
              name: "",
              rootMoment: {
                      // Root moment is not visible per-se, it serves
                  // as a placeholder for its children
                  name: "Root moment",
                  children: [
                      {
                          name: "Moment 1",
                          specificsynchronicmodel: {
                              name: "Initial",
                              categories: []
                          },
                          justification: {
                              name: "",
                              descriptems: []
                          }
                      }
                  ]
              }
          }
      })

      const rootMoment = i.analysis?.rootMoment
      if (rootMoment) {
          // Fix interviewId for new moments
          store.updateMoment(rootMoment.id, { interviewId: i.id })
          if (rootMoment.children.length && rootMoment.children[0]) {
              store.updateMoment(rootMoment.children[0].id, { interviewId: i.id })
          }
      }

      // Switch to tab of new interview
      setTimeout(() => {
          router.push({
              query: {
                  tab: info.name
              }
          }).catch(e => {
             console.log(`Error when switching view: ${e}`)
          })
      }, 300)
  }

  function onInterviewCancel () {
      // If there is at least 1 interview, activate it
      if (project.value && project.value.interviews[0]) {
          router.push({
              query: {
                  tab: project.value.interviews[0].name
              }
          }).catch(e => {
             console.log(`Error when switching view: ${e}`)
          })
      }
  }

  function updateGenericModel () {
      store.buildGenericSynchronicModelFromGraphs (props.projectId, genericGraphs.value)
  }

  function closeEditedModel () {
      istore.setEditedSpecificSynchronicModelId("")
  }

  onUnmounted(() => {
      istore.setCurrentInterview(null)
      istore.setEditedSpecificSynchronicModelId("")
      // istore.setCurrentProject(null)
  })
</script>

<style scoped>
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

  .active-interview-label {
      background-color: #ccc;
      font-weight: bold;
  }
  .q-tab {
      justify-content: flex-start;
  }

  .new-interview {
      justify-content: flex-end;
  }

  div.edited-model-container {
      display: flex;
  }

  .interview-splitter {
  }
</style>
