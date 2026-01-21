<template>
  <div
    row
    v-if="project">

    <q-splitter
      v-model="splitterModel"
      beforeClass="print-removed"
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
              <template v-slot:default>
                <ElementMenu
                  :actions="menuActions"
                  :parameter="interview">
                </ElementMenu>
              </template>
            </q-route-tab>
            <q-route-tab :to="{ query: { tab: newInterviewId } }"
                         :label="newInterviewLabel"
                         class="new-interview"
                         :name="newInterviewId"
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
            title="Merged global generic model"
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

          <q-tab-panel :name="newInterviewId">
            <InterviewMetadataForm
              :interview="newInterviewTemplate"
              @validate="onInterviewCreate"
              @cancel="onInterviewCancel">
            </InterviewMetadataForm>
          </q-tab-panel>

          <q-tab-panel v-for="interview in project.interviews"
                       :name="interview.id"
                       :key="interview.id">

            <q-splitter
              class="fit fullwindow-height"
              afterClass="print-removed"
              v-model="splitterTranscript"
              :limits="[2,98]">

              <template v-slot:before>
                <q-splitter
                  class="fit fullwindow-height flex"
                  beforeClass="flex column no-scroll no-wrap"
                  afterClass="flex column no-scroll no-wrap"
                  unit="px"
                  horizontal
                  separator-class="bg-grey-4"
                  separator-style="height: 3px"
                  v-model="splitterInterview"
                  >

                  <template v-slot:before>
                    <InterviewRepresentation
                      class="flex col-grow"
                      :genericGraphs="genericGraphs"
                      :interviewId="interview.id">
                    </InterviewRepresentation>
                  </template>

                  <template v-slot:after>
                    <SpecificSynchronicModelEditor
                      class="flex col-grow"
                      v-if="editedSpecificSynchronicModelId"
                      :modelId="editedSpecificSynchronicModelId"
                      :genericGraphs="genericGraphs"
                      />
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
        class="print-removed"
        square
        @click="infoPanelDisplay = !infoPanelDisplay"
        size="md"
        icon="mdi-chevron-double-left"
        icon-right="mdi-chat-outline"
        >
      </q-btn>
    </q-page-sticky>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { computed, ref, watch, onUnmounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useQuasar } from 'quasar'

  import DetachedModelsRepresentation from './DetachedModelsRepresentation.vue'
  import ElementMenu from './ElementMenu.vue'
  import GenericCategoriesOverview from 'components/GenericCategoriesOverview.vue'
  import GenericCategoriesRepresentation from 'components/GenericCategoriesRepresentation.vue'
  import InfoPanel from './InfoPanel.vue'
  import InterviewRepresentation from 'components/InterviewRepresentation.vue'
  //  import ModelFolderRepresentation from './ModelFolderRepresentation.vue'
  import SpecificSynchronicModelEditor from './SpecificSynchronicModelEditor.vue'
  import TextAnnotation from 'components/TextAnnotation.vue'
  import InterviewMetadataForm from 'components/InterviewMetadataForm.vue'
  import type { InterviewInfo } from 'components/InterviewMetadataForm.vue'

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

  const $q = useQuasar()

  const newInterviewId = "New_interview"

  const newInterviewLabel = computed(() => project.value && project.value.interviews.length ? "" : "Add a first interview")

  const newInterviewTemplate = {
      name: "",
      participantName: "",
      note: "",
      date: "",
      text: ""
  }

  const {
      editedSpecificSynchronicModelId,
      highlightedMomentId
  } = storeToRefs(istore)

  const splitterModel = ref(20)
  const splitterTranscript = ref(90)
  const splitterInterview = ref(500)

  const infoPanelDisplay = ref(false)

  const _currentInterviewId = ref("")

  const currentInterviewId = computed({
      get () {
          return _currentInterviewId.value || ""
      },
      set (value: string) {
          const current = _currentInterviewId.value
          _currentInterviewId.value = value
          if (value !== current && value !== newInterviewId) {
              istore.setCurrentInterview(store.getInterview(value))
              // Do not reset editedSpecificSynchronicModelId - it may be a generic model that we want to keep
              // istore.setEditedSpecificSynchronicModelId("")
              istore.setHighlightedMomentId("")
          }
      }
  })

  const genericGraphs = computed(() => store.getGenericSynchronicGraphs(props.projectId))

  const editedSpecificSynchronicModel = computed(() => {
      return store.getSpecificSynchronicModel(editedSpecificSynchronicModelId.value)
  })

  watch(editedSpecificSynchronicModelId, () => {
      // Make sure a tab is active
      if (editedSpecificSynchronicModel.value?.moment) {
          currentInterviewId.value = editedSpecificSynchronicModel.value.moment.interviewId
      } else {
          // Generic model - if there is no current interview, activate the first one
          if (!currentInterviewId.value) {
              currentInterviewId.value = project.value?.interviews[0]?.id ?? ""
          }
      }
  })

  watch(highlightedMomentId, () => {
      // Make sure the right interview is selected
      // If no highlight, do not change anything
      if (highlightedMomentId.value) {
          const interview  = store.getInterviewByMoment(highlightedMomentId.value)
          if (interview && interview.id != currentInterviewId.value) {
              currentInterviewId.value = interview.id
          }
      }
  })

  watch(() => props.projectId, () => {
      // There are interviews. Select the first one
      if (project.value && project.value.interviews[0]) {
          currentInterviewId.value = project.value.interviews[0].id || ""
      } else {
          currentInterviewId.value = newInterviewId || ""
      }
      // We changed project - reset newSSC/newMoment indexes
      istore.resetIndexes (store.getSpecificSynchronicCategoryNamesByPrefix(props.projectId, istore.SSCPrefix),
                           store.getMomentsByProject(props.projectId).map(moment => moment.name))
  },
        // Trigger function at init time too
        { immediate: true })

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
                          isExpanded: true,
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

  onUnmounted(() => {
      istore.setCurrentInterview(null)
      istore.setEditedSpecificSynchronicModelId("")
      // istore.setCurrentProject(null)
  })


  import type { NamedAction } from 'components/util.ts'

  const menuActions: NamedAction[] = [
        [ "Delete", (interview) => {
           $q.dialog({
             title: 'Confirm interview deletion',
             html: true,
             message: `Do you confirm the deletion of  <strong>${interview.label}</strong>?`,
             cancel: true,
             persistent: true
           }).onOk(() => {
             const name = interview.name
             currentInterviewId.value = ""
             store.deleteInterview(interview.id)
             $q.notify({
                  type: 'info',
                  message: `Deleted interview ${name}`
             })
           })
        }
      ],
      [ "Debug", (interview) => console.log("Debug", { interview }) ]
  ]
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
