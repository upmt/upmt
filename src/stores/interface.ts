import { defineStore } from 'pinia'
import { computed, ref, Ref } from 'vue'
import Interview from 'stores/models/interview'

export const useInterfaceStore = defineStore('interface', () => {
  const _username = ref("")
  const highlightedMomentId = ref("")
  const highlightedDescriptemId = ref("")
  const newMomentIndex = ref(1)
  const newSSCIndex = ref(1)

  const currentProjectId: Ref<string | null> = ref(null)
  const currentInterview: Ref<Interview | null> = ref(null)
  const editedSpecificSynchronicModelId: Ref<string | null> = ref(null)

  function newMomentIndexIncrement () {
    return newMomentIndex.value++
  }

  function newSSCIndexIncrement () {
    return newSSCIndex.value++
  }

  function setCurrentProjectId (projectId: string | null) {
    console.log("projectId = ", projectId);
    (window as any).projectId = projectId
    currentProjectId.value = projectId
  }

  function setCurrentInterview (interview: Interview | null) {
    (window as any).interview = interview
    currentInterview.value = interview
  }

  function setEditedSpecificSynchronicModelId (ssmId: string | null) {
    editedSpecificSynchronicModelId.value = ssmId
  }

  // To make the store act as ContextProvider
  function setUsername (value: string) {
    _username.value = value
    localStorage.setItem('upmtUsername', value)
  }

  // To make the store act as ContextProvider
  function getUsername () {
    return _username.value
  }

  const username = computed({
    get: getUsername,
    set: setUsername
  })

  function getProjectId () {
    return currentProjectId.value ?? ""
  }

  return {
    currentInterview,
    currentProjectId,
    getUsername,
    getProjectId,
    editedSpecificSynchronicModelId,
    highlightedMomentId,
    highlightedDescriptemId,
    newMomentIndexIncrement,
    newSSCIndexIncrement,
    setCurrentInterview,
    setCurrentProjectId,
    setEditedSpecificSynchronicModelId,
    setUsername,
    username
    }
})
