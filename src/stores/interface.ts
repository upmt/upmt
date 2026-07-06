import { defineStore } from 'pinia'
import { computed, reactive, ref, Ref, watch } from 'vue'
import Interview from 'stores/models/interview'

const SSCPrefix = "SSC"
const MomentPrefix = "Moment "
const DetachedModelPrefix = "Detached Model "

export const useInterfaceStore = defineStore('interface', () => {
  const highlightedMomentId = ref("")
  const highlightedDescriptemId = ref("")
  const newMomentIndex = ref(1)
  const newSSCIndex = ref(1)
  const newDetachedModelIndex = ref(1)
  // Is the data modified?
  const isModified = ref(false)
  // expert mode
  const isExpertMode = ref(false)
  const settings = reactive({
    zoomWheelLock: false,
    zoomTouchLock: false,
    zoomStep: 0.5,
    username: "anonymous"
  })

  const currentProjectId: Ref<string | null> = ref(null)
  const currentInterview: Ref<Interview | null> = ref(null)
  const editedSpecificSynchronicModelId: Ref<string | null> = ref(null)

  function newMomentIndexIncrement () {
    return newMomentIndex.value++
  }

  function newSSCIndexIncrement () {
    return newSSCIndex.value++
  }

  function newDetachedModelIndexIncrement () {
    return newDetachedModelIndex.value++
  }

  function newSSCId (prefix: string = SSCPrefix) {
    // FIXME: could have either generic "context" info or
    // descriptem/annotation/selection data to generate a unique name
    // based on the characteristics of the contextual element
    // (e.g. extracting name from textual content)
    // See https://github.com/retextjs/retext-keywords
    return `${prefix}${newSSCIndexIncrement()}`
  }

  function newMomentId (prefix: string = MomentPrefix) {
    return `${prefix}${newMomentIndexIncrement()}`
  }

  function newDetachedModelId (prefix: string = DetachedModelPrefix) {
    return `${prefix}${newDetachedModelIndexIncrement()}`
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
    editedSpecificSynchronicModelId.value = ssmId || ""
  }

  function setHighlightedMomentId (momentId: string | null) {
    if (highlightedMomentId.value == momentId) {
      highlightedMomentId.value = ""
    } else {
      highlightedMomentId.value = momentId || ""
    }
  }

  // To make the store act as ContextProvider
  function setUsername (value: string) {
    settings.username = value
  }

  // To make the store act as ContextProvider
  function getUsername () {
    return settings.username
  }

  const username = computed({
    get: getUsername,
    set: setUsername
  })

  function getProjectId () {
    return currentProjectId.value ?? ""
  }

  function setModified (value: boolean): boolean {
    isModified.value = value
    return value
  }

  // Serialize settings to localStorage on modification
  watch(settings, () => {
    window.localStorage['settings'] = JSON.stringify(settings);
  })

  // Load settings from localStorage
  function loadSettings () {
    const data = window.localStorage['settings']
    if (data) {
      const loaded = JSON.parse(data)
      Object.assign(settings, loaded)
    }
    return settings
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
    newDetachedModelId,
    resetIndexes,
    setCurrentInterview,
    setCurrentProjectId,
    isExpertMode,
    isModified,
    setModified,
    setEditedSpecificSynchronicModelId,
    setHighlightedMomentId,
    setUsername,
    settings,
    loadSettings,
    username
    }
})
