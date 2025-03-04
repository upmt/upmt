<template>
  <q-card>
    <q-card-section class="bg-secondary text-white text-h5">
      Create a new interview
    </q-card-section>
    <p>Please provide the following information to create a new interview. Mandatory information is marked with *</p>

    <q-form
      name="creating"
      @submit="onSubmit"
      class="q-gutter-md"
      >

      <div>
        <q-btn label="Create"
               type="submit"
               :disabled="!canCreate"
               color="primary"/>
        <q-btn label="Cancel"
               color="primary"
               flat
               class="q-ml-sm"
               @click="onCancel" />
      </div>

      <div class="row">

        <q-input
          filled
          v-model="creatingParticipant"
          label="Participant name *"
          lazy-rules
          class="col-4"
          :rules="[ (val: string) => val && val.length > 0 || 'It  must be filled']"
          />

        <q-input
          filled
          type="date"
          v-model="creatingDate"
          label="Interview date"
          lazy-rules
          class="col-4 q-px-md"
          />

        <q-input
          filled
          v-model="creatingName"
          label="Interview name/id *"
          lazy-rules
          class="col-4"
          :rules="[ (val: string) => val && val.length > 0 || 'It  must be filled']"
          />

      </div>

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
        hint="Please provide the interview text by pasting it here, uploading a file with the upload button or by dragging it here."
        type="textarea"
        v-model="creatingText"
        label="Interview text *"
        >
        <template v-slot:label>
          <div class="row items-center all-pointer-events">
            Paste interview text here or
            <q-file label="drag an existing text file here"
                    v-model="interviewFilename"
                    ref="filepicker"
                    filled
                    @update:model-value="uploadInterviewFile"/>
          </div>
        </template>
      </q-input>
    </q-form>
  </q-card>
</template>

<script setup lang="ts">
  import { useQuasar, QFile } from 'quasar'
  import { computed, ref, Ref } from 'vue'
  import { useProjectStore } from 'stores/projectStore'

  const props = defineProps({
      projectId: { type: String, required: true }
  })

  const emit = defineEmits([ 'created', 'cancel' ])

  const $q = useQuasar()

  const store = useProjectStore()

  const filepicker: Ref<QFile | null> = ref(null)
  const interviewFilename = ref(null)

  const creatingName = ref("")
  const creatingParticipant = ref("")
  const creatingDate = ref("")
  const creatingComment = ref("")
  const creatingText = ref("")

  const canCreate = computed(() => creatingName.value && creatingParticipant.value && creatingText.value)

  function onSubmit (event: Event) {
      if (event.target) {
          const i = store.getRepo().Interview.save({
              name: creatingName.value,
              participantName: creatingParticipant.value,
              comment: creatingComment.value,
              date: creatingDate.value,
              text: creatingText.value,
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
          emit("created", i)
      }
  }

  function onCancel () {
      // Reset all form values
      creatingParticipant.value = ""
      creatingName.value = ""
      creatingDate.value = ""
      creatingText.value = ""
      creatingComment.value = ""
      interviewFilename.value = null

      emit("cancel")
  }

  function uploadInterviewFile (sourceFile: File) {
      const reader = new FileReader()
      reader.onload = () => {
          // Parse file and extract data
          creatingText.value = reader.result as string
      }
      reader.onerror = () => {
          console.error('Error reading file:', reader.error)
          $q.notify({
              type: 'error',
              message: `Error reading file: ${reader.error?.message}`
          })
      }

      // Load data from file - the readAsText will
      // trigger the load event that is handled just
      // above.
      reader.readAsText(sourceFile)
  }
</script>

<style scoped>
</style>
