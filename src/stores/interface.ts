import { defineStore } from 'pinia'
import { computed, ref, Ref } from 'vue'
import Interview from 'stores/models/interview'
import Project from 'stores/models/project'

export const useInterfaceStore = defineStore('interface', () => {
  const _username = ref("")
  const highlightedMomentId = ref("")
  const highlightedDescriptemId = ref("")
  const newMomentIndex = ref(1)
  const newSSCIndex = ref(1)

  const currentProject: Ref<Project | null> = ref(null)
  const currentInterview: Ref<Interview | null> = ref(null)
  const editedSynchronicspecificmodelId: Ref<string | null> = ref(null)

  function newMomentIndexIncrement () {
    return newMomentIndex.value++
  }

  function newSSCIndexIncrement () {
    return newSSCIndex.value++
  }

  function setCurrentProject (project: Project | null) {
    console.log("project = ", project);
    (window as any).project = project
    currentProject.value = project
  }

  function setCurrentInterview (interview: Interview | null) {
    (window as any).interview = interview
    currentInterview.value = interview
  }

  function setEditedSynchronicspecificmodelId (ssmId: string | null) {
    editedSynchronicspecificmodelId.value = ssmId
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
    return currentProject?.value?.id ?? ""
  }

  return {
    currentInterview,
    currentProject,
    getUsername,
    getProjectId,
    editedSynchronicspecificmodelId,
    highlightedMomentId,
    highlightedDescriptemId,
    newMomentIndexIncrement,
    newSSCIndexIncrement,
    setCurrentInterview,
    setCurrentProject,
    setEditedSynchronicspecificmodelId,
    setUsername,
    username
    }
})
