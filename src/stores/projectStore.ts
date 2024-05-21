import { defineStore } from 'pinia'
import { useRepo } from 'pinia-orm'
import Project from './models/project'

interface ProjectData {
     name: string
}

export const useProjectStore = defineStore('projectStore', {
  actions: {
    createProject (projectData: ProjectData) {
      const projectRepo = useRepo(Project)
      projectRepo.insert({ data: projectData })
    },
    getAllProjects () {
      const projectRepo = useRepo(Project)
      return projectRepo.all()
    }
  }
})
