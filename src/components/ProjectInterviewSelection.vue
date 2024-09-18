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
            <q-route-tab :to="{ query: { tab: newInterview } }"
                         :name="newInterview"
                         :key="newInterview"
                         icon="add">
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

          <q-tab-panel :name="newInterview"
                       :key="newInterview">
            <h5>Create a new interview</h5>
            <p>Please provide the following information to create a new interview. Mandatory information is marked with *</p>

            <q-form
              name="creating"
              @submit="onSubmit"
              class="q-gutter-md"
              >

              <div>
                <q-btn label="Submit"
                       type="submit"
                       color="primary"/>
                <q-btn label="Cancel"
                       color="primary"
                       flat
                       class="q-ml-sm"
                       @click="onCancel" />
              </div>

              <q-input
                filled
                v-model="creatingName"
                label="Interview name/id *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'It  must be filled']"
                />
              <q-input
                filled
                type="date"
                v-model="creatingDate"
                label="Interview date"
                lazy-rules
                />
              <q-input
                filled
                v-model="creatingParticipant"
                label="Participant name *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'It  must be filled']"
                />

              <q-input
                filled
                autogrow
                type="text"
                v-model="creatingComment"
                label="Comment"
                />

              <q-input
                filled
                label-slot
                autogrow
                counter
                :input-style="{ minHeight: '4em', maxHeight: '30em' }"
                hint="Please provide the interview text by pasting it below, uploading a file with the upload button or by dragging it here."
                type="textarea"
                v-model="creatingText"
                label="Interview text *"
                >
                 <template v-slot:label>
                   <div class="row items-center all-pointer-events">
                     Interview text
                     <q-btn flat
                            @click="uploadCreatingText"
                            icon="upload">
                       <q-tooltip class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">You can upload an existing text file</q-tooltip>
                     </q-btn>
                     <q-tooltip class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">Interview text</q-tooltip>
                   </div>
                 </template>
              </q-input>
              <q-file label="Upload interview file"
                      ref="filepicker"
                      class="hidden"
                      v-model="interviewFilename"
                      accept=".txt"
                      filled
                      @input="uploadInterviewFile"/>
            </q-form>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>

  </div>
</template>

<script setup lang="ts">
  import { useQuasar, QFile } from 'quasar'
  import { useRouter } from 'vue-router'
  import { computed, ref, Ref, watch } from 'vue'
  import InterviewTextRepresentation from 'components/InterviewTextRepresentation.vue'
  import FolderTree from 'components/FolderTree.vue'
  import TextAnnotation from 'components/TextAnnotation.vue'
  import { useProjectStore } from 'stores/projectStore'

  const router = useRouter()

  const $q = useQuasar()

  const store = useProjectStore()

  const props = defineProps({
      projectId: { type: String, required: true }
  })

  const project = computed(() => store.getProject(props.projectId))

  const newInterview = "New interview"

  const tab = ref("")
  const splitterModel = ref(10)
  const splitterTranscript = ref(90)

  const filepicker: Ref<QFile | null> = ref(null)
  const interviewFilename = ref(null)

  const creatingName = ref("")
  const creatingParticipant = ref("")
  const creatingDate = ref("")
  const creatingComment = ref("")
  const creatingText = ref("")

  watch(() => props.projectId, () => {
      // There are interviews. Select the first one
      if (project.value && project.value.interviews) {
          tab.value = project.value.interviews[0].id
      } else {
          tab.value = newInterview
      }
  })

  function onSubmit (event: Event) {
      if (event.target) {
          const i = store.getRepo().Interview.save({
              name: creatingName.value,
              participantName: creatingParticipant.value,
              comment: creatingComment.value,
              date: creatingDate.value,
              text: creatingText.value,
              projectId: props.projectId,
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
                              name: "Moment 1"
                          }
                      ]
                  }
              }
          })
          // Switch to tab of new interview
          setTimeout(() => {
              router.push({
                  query: {
                      tab: i.name
                  }
              })
          }, 300)
      }
  }

  function onCancel () {
      // Reset all form values
      creatingParticipant.value = ""
      creatingName.value = ""
      creatingDate.value = ""
      creatingText.value = ""
      creatingComment.value = ""

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

  // Show load interview text file dialog
  function uploadCreatingText () {
      if (filepicker.value) {
          filepicker.value.pickFiles()
      }
  }

  function uploadInterviewFile (event: Event) {
    try {
        // `event.target.files[0]` is the desired file object
        const files = (event.target as HTMLInputElement).files
        if (!files || files.length === 0) {
            return
        }
        const sourceFile = files[0]
        const reader = new FileReader()

        reader.onload = () => {
            // Parse file and extract data
            creatingText.value = reader.result as string
        }
        reader.onerror = () => {
            console.error('Error reading file:', reader.error)
            $q.notify({
                type: 'error',
                message: `Error reading file: ${reader.error}`
            })
        }
        // Load data from file - the readAsText will
        // trigger the load event that is handled just
        // above.
        reader.readAsText(sourceFile)
    } catch (e) {
        console.log(e)
        $q.notify({
            type: 'error',
            message: `General exception: ${e}`
        })
    }
  }
</script>

<style scoped>
  .fullwindow-height {
    min-height: calc(100vh - var(--header-height));
    max-height: calc(100vh - var(--header-height));
    overflow: auto;
  }
</style>
