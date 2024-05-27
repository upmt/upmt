import { defineStore } from 'pinia'
import { useRepo } from 'pinia-orm'
import Project from './models/project'
import Interview from './models/interview'
import Justification from './models/justification'
import Moment from './models/moment'

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
const interviewrepo = useRepo(Interview)
const momentrepo = useRepo(Moment)

interface OldMoment {
   name: string
   color: string
   comment: string
   isCollapsed: boolean
   isCommentVisible: boolean
   isTransitional: boolean
   justification: Justification
   moment_list: OldMoment[]
}

// Map an imported moment to a Moment
function mapMoment (m: OldMoment): Moment {
  return momentrepo.make({
    name: m.name,
    color: m.color,
    comment: m.comment,
    isCollapsed: m.isCollapsed,
    isCommentVisible: m.isCommentVisible,
    isTransitional: m.isTransitional,
    justification: m.justification,
    children: m.moment_list.map((c: OldMoment) => mapMoment(c))
  })
}

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
  }),
  actions: {
    createProject (projectData: Subset<Project>) {
      repo.save(projectData)
    },
    /* eslint-disable @typescript-eslint/no-explicit-any */
    importProject (data: any) {
      const out = repo.save({
        name: data.name,
        /* eslint-disable @typescript-eslint/no-explicit-any */
        interviews: data.interview_list.map((i: any) => ({
          ...i,
          analysis: {
            rootMoment: mapMoment(i.rootMoment)
          },
          interviewText: i.interviewText.text
        }))
      })
      console.log("Imported", out)
    },
    getAllProjects (): Project[] {
      return repo.all()
    },
    getProject (id: string): Project {
      return repo.find(id)
    },
    getInterview (id: string): Interview {
      return interviewrepo.find(id)
    }
  }
})
