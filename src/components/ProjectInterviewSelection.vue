<template>
  <div
    row
    v-if="project">

    <q-splitter
      v-model="splitterModel"
      :limits="[10,90]">

      <template v-slot:before>
        <div class="fit fullwindow-height">
          <div class="text-bold">Interviews</div>
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
          <div class="text-bold"></div>
          <DetachedModelsRepresentation
            title="Detached models"
            :projectId="projectId"
            :genericGraphs="genericGraphs"
            :currentInterviewId="currentInterviewId">
          </DetachedModelsRepresentation>
          <q-separator />
          <GenericCategoriesRepresentation
            title="Dynamic generic model"
            :projectId="projectId"
            :genericGraphs="genericGraphs"
            :currentInterviewId="currentInterviewId" />
          <q-expansion-item
            dense
            dense-toggle
            switch-toggle-side
            :duration="0"
            expand-icon="mdi-eye-outline"
            expanded-icon="mdi-eye-off-outline"
            label="Overview">

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
              :limits="[2,98]">

              <template v-slot:before>
                <q-splitter
                  class="fit fullwindow-height flex"
                  beforeClass="flex overflow-hidden"
                  afterClass="flex overflow-hidden"
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
                      <q-toolbar class="row toolbar">
                        <div>
                          <q-btn
                            icon="mdi-close"
                              flat
                            round
                            dense
                              size="md"
                            class="float-right"
                            @click="closeEditedModel">
                          </q-btn>
                          </div>

                        <q-toolbar-title class="row">
                          <div>Editing&nbsp;</div>
                          <div v-if="editedSpecificSynchronicModel.moment">
                            synchronic description of
                            <q-icon
                              size="xs"
                              name="mdi-alpha-m-box-outline">
                            </q-icon>
                            <strong>{{ editedSpecificSynchronicModel.moment.name }}
                              <q-popup-edit v-model="editedSpecificSynchronicModelName" auto-save v-slot="scope">
                                <MomentNameInput @change="scope.cancel"
                                                 :moment="editedSpecificSynchronicModel.moment" />
                              </q-popup-edit>
                            </strong>
                          </div>
                          <div v-else>
                            <strong>
                              <ElementNameInput
                                :element="editedSpecificSynchronicModel"
                                label="Name">
                              </ElementNameInput>
                            </strong>
                          </div>
                          <span v-if="isEditedModelGeneric">
                            <q-btn
                              @click="updateGenericModel(editedSpecificSynchronicModel)">
                              Generate from dynamic model
                            </q-btn>
                          </span>
                          <q-btn-toggle
                            size="xs"
                            v-model="editViewMode"
                            :options="[ { icon: 'mdi-pan-horizontal', value: 'horizontal' },
                                      { icon: 'mdi-pan-vertical', value: 'vertical' } ]">
                          </q-btn-toggle>
                        </q-toolbar-title>
                      </q-toolbar>
                      <div v-if="editedSpecificSynchronicModelId"
                           class="model-representation"
                           >
                        <SpecificSynchronicModelRepresentation
                          v-if="editViewMode == 'horizontal'"
                          :isGeneric="isEditedModelGeneric"
                          :modelId="editedSpecificSynchronicModelId" />
                        <SpecificSynchronicModelVerticalRepresentation
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

    <q-drawer
      v-model="infoPanelDisplay"
      side="right"
      overlay
      bordered
      >
      <InfoPanel
        :projectId="projectId"
        :genericGraphs="genericGraphs"
        :currentInterviewId="currentInterviewId">
      </InfoPanel>
      <q-btn
        class="absolute-top-right"
        flat
        square
        @click="infoPanelDisplay = !infoPanelDisplay"
        size="md"
        icon="mdi-chevron-double-right"
        >
      </q-btn>
    </q-drawer>
    <q-page-sticky position="top-right">
      <q-btn
        flat
        square
        @click="infoPanelDisplay = !infoPanelDisplay"
        size="md"
        icon="mdi-chevron-double-left"
        >
      </q-btn>
    </q-page-sticky>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { computed, ref, watch, onUnmounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import DetachedModelsRepresentation from './DetachedModelsRepresentation.vue'
  import ElementNameInput from './ElementNameInput.vue'
  import GenericCategoriesOverview from 'components/GenericCategoriesOverview.vue'
  import GenericCategoriesRepresentation from 'components/GenericCategoriesRepresentation.vue'
  import InfoPanel from './InfoPanel.vue'
  import InterviewRepresentation from 'components/InterviewRepresentation.vue'
  import MomentNameInput from './MomentNameInput.vue'
//  import ModelFolderRepresentation from './ModelFolderRepresentation.vue'
  import TextAnnotation from 'components/TextAnnotation.vue'
  import SpecificSynchronicModelVerticalRepresentation from 'components/SpecificSynchronicModelVerticalRepresentation.vue'
  import InterviewMetadataForm from 'components/InterviewMetadataForm.vue'
  import type { InterviewInfo } from 'components/InterviewMetadataForm.vue'
  import SpecificSynchronicModelRepresentation from './SpecificSynchronicModelRepresentation.vue'

  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import SpecificSynchronicModel from 'stores/models/specificsynchronicmodel'

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

  const infoPanelDisplay = ref(false)

  const editedSpecificSynchronicModel = computed(() => {
      return store.getSpecificSynchronicModel(editedSpecificSynchronicModelId.value)
  })

  const isEditedModelGeneric = computed(() => {
      return !!editedSpecificSynchronicModel.value && !!editedSpecificSynchronicModel.value.genericModelId
  })

  const editViewMode = ref('horizontal')

  const genericGraphs = computed(() => store.getGenericSynchronicGraphs(props.projectId))

  const editedSpecificSynchronicModelName = computed({
      get () {
          if (editedSpecificSynchronicModel.value?.moment) {
              return editedSpecificSynchronicModel.value.moment.name
          } else {
              return editedSpecificSynchronicModel.value?.name ?? ""
          }
      },
      set (value: string) {
          if (editedSpecificSynchronicModel.value?.moment) {
              store.updateMoment(editedSpecificSynchronicModel.value.moment.id, { name:value })
          } else if (editedSpecificSynchronicModel.value) {
              store.updateElement(editedSpecificSynchronicModel.value, { name:value })
          }
      }
  })


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

  function updateGenericModel (model: SpecificSynchronicModel) {
      store.buildSynchronicModelFromGraphs (model, genericGraphs.value)
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
      flex-grow: 1;
  }

  .model-representation {
      flex-grow: 1;
      display: flex;
  }

  .toolbar {
      flex-grow: 0;
      max-width: 80vw;
  }

  .interview-splitter {
  }
</style>
