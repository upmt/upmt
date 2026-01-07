<template>
  <q-card>
    <div v-if="interview">
      <q-card-section class="bg-secondary text-white text-h5">
        Editing {{ interview.name }}
      </q-card-section>
      <p>Mandatory information is marked with *</p>
    </div>
    <div v-else>
      <q-card-section class="bg-secondary text-white text-h5">
        Create a new interview
      </q-card-section>
      <p>Please provide the following information to create a new interview. Mandatory information is marked with *</p>
    </div>

    <q-form
      name="interviewForm"
      @submit="onSubmit"
      class="q-gutter-md"
      >

      <div>
        <q-btn :label="!interview ? 'Create':'Validate'"
               type="submit"
               :disabled="!canValidate"
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
          v-model="name"
          label="Interview name/id *"
          lazy-rules
          class="col-4"
          :rules="[ (val: string) => val && val.length > 0 || 'It  must be filled']"
          />

        <q-input
          filled
          v-model="participant"
          label="Participant name"
          lazy-rules
          class="col-4 q-px-md"
          />

        <q-input
          filled
          type="date"
          v-model="date"
          label="Interview date"
          lazy-rules
          class="col-4 q-px-md"
          />

      </div>

      <q-input
        filled
        autogrow
        type="text"
        v-model="note"
        label="Note"
        />

      <q-input
        filled
        label-slot
        autogrow
        counter
        :input-style="{ minHeight: '4em', maxHeight: '30em' }"
        hint="Please provide the interview text by pasting it here, uploading a file with the upload button or by dragging it here."
        type="textarea"
        v-model="text"
        label="Interview text *"
        >
        <template v-slot:label>
          <div class="row items-center all-pointer-events">
            Paste interview text here or
            <q-file label="drag an existing text file here"
                    v-model="interviewFilename"
                    ref="filepicker"
                    outlined
                    hide-bottom-space
                    square
                    dense
                    item-aligned
                    @update:model-value="uploadInterviewFile">
              <template v-slot:prepend>
                <q-icon name="mdi-upload-circle-outline" @click.stop.prevent />
              </template>
            </q-file>
          </div>
        </template>
      </q-input>
    </q-form>
  </q-card>
</template>

<script setup lang="ts">
  import { useQuasar, QFile } from 'quasar'
  import { computed, ref, Ref } from 'vue'

  export type InterviewInfo = {
      name: string
      participantName: string
      note: string
      date: string
      text: string
  }

  const props = defineProps<{
      interview?: InterviewInfo
  }>()

  const emit = defineEmits([ 'validate', 'cancel' ])

  const $q = useQuasar()

  const filepicker: Ref<QFile | null> = ref(null)
  const interviewFilename = ref(null)

  const name = ref(props.interview?.name ?? "")
  const participant = ref(props.interview?.participantName ?? "")
  const date = ref(props.interview?.date ?? "")
  const note = ref(props.interview?.note ?? "")
  const text = ref(props.interview?.text ?? "")

  const canValidate = computed(() => name.value && text.value)

  function onSubmit (event: Event) {
      if (event.target) {
          emit('validate', {
              name: name.value,
              participantName: participant.value,
              note: note.value,
              date: date.value,
              // If we are editing an existing interview, the text cannot be modified (and the text ref will always be "")
              text: props.interview ? props.interview.text : text.value
          } as InterviewInfo)
      }
  }

  function onCancel () {
      // Reset all form values
      participant.value = ""
      name.value = ""
      date.value = ""
      text.value = ""
      note.value = ""
      interviewFilename.value = null

      emit("cancel")
  }

  function uploadInterviewFile (sourceFile: File) {
      const reader = new FileReader()
      reader.onload = () => {
          // Parse file and extract data
          text.value = reader.result as string
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
