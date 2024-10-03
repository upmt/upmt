import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import Interview from 'stores/models/interview'
import Project from 'stores/models/project'

export const useInterfaceStore = defineStore('interface', () => {
  // Highlighted moment id
  const highlighted = ref("")
  const newMomentIndex = ref(1)

  const currentProject: Ref<Project | null> = ref(null)
  const currentInterview: Ref<Interview | null> = ref(null)

  function newMomentIndexIncrement () {
    return newMomentIndex.value++
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

  return {
    currentInterview,
    currentProject,
    highlighted,
    newMomentIndexIncrement,
    setCurrentInterview,
    setCurrentProject
    }
})
