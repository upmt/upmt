import { defineStore } from 'pinia'
import { computed, ref, Ref } from 'vue'
import Interview from 'stores/models/interview'

const SSCPrefix = "SSC"
const MomentPrefix = "Moment "

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

  function newSSCId (prefix: string = SSCPrefix) {
    return `${prefix}${newSSCIndexIncrement()}`
  }

  function newMomentId (prefix: string = MomentPrefix) {
    return `${prefix}${newMomentIndexIncrement()}`
  }

  function maxIndexValue (names: string[], prefix: string) {
    const regex = new RegExp(`^${prefix}(\\d+)$`)
    const values = names.map(item => {
      const match = item.match(regex)
      return match ? parseInt(match[1] || "0", 10) : null;
    }).filter(num => num !== null)

    if (values.length) {
      return Math.max(...values)
    } else {
      return 0
    }
  }

  /**
   * Reset the values for SSCIndex/MomentIndex after loading a new project
   * so that we do not propose existing indices
   */
  function resetIndexes (categoryNames: string[], momentNames: string[]) {
    newSSCIndex.value = maxIndexValue(categoryNames, SSCPrefix) + 1
    newMomentIndex.value = maxIndexValue(momentNames, MomentPrefix) + 1
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
    // Constants
    SSCPrefix,
    MomentPrefix,
    currentInterview,
    currentProjectId,
    getUsername,
    getProjectId,
    editedSpecificSynchronicModelId,
    highlightedMomentId,
    highlightedDescriptemId,
    newMomentIndexIncrement,
    newSSCIndexIncrement,
    newMomentId,
    newSSCId,
    resetIndexes,
    setCurrentInterview,
    setCurrentProjectId,
    setEditedSpecificSynchronicModelId,
    setUsername,
    username
    }
})
