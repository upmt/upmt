import { defineStore } from 'pinia'
import { useRepo } from 'pinia-orm'
import Project from './models/project'
import Interview from './models/interview'

/* From https://grrr.tech/posts/2021/typescript-partial/
 * This should be put in some common module.
 */
type Subset<K> = {
    [attr in keyof K]?: K[attr] extends object
        ? Subset<K[attr]>
        : K[attr] extends object | null
        ? Subset<K[attr]> | null
        : K[attr] extends object | null | undefined
        ? Subset<K[attr]> | null | undefined
        : K[attr]
}

const repo = useRepo(Project)
const irepo = useRepo(Interview)

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
  }),
  actions: {
    createProject (projectData: Subset<Project>) {
      repo.save(projectData)
    },
    getAllProjects (): Project[] {
      return repo.all()
    },
    getProject (id: string): Project {
      return repo.find(id)
    },
    getInterview (id: string): Interview {
      return irepo.find(id)
    }
  }
})
