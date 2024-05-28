import { defineStore } from 'pinia'
import { useRepo } from 'pinia-orm'
import Project from './models/project'
import Interview from './models/interview'
import Justification from './models/justification'
import Moment from './models/moment'
import Analysis from './models/analysis'
import Descriptem from './models/descriptem'

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
const analysisrepo = useRepo(Analysis)
const justificationrepo = useRepo(Justification)
const descriptemrepo = useRepo(Descriptem)

interface OldJustification {
   descripteme_list: Descriptem[]
}
interface OldMoment {
   name: string
   color: string
   comment: string
   isCollapsed: boolean
   isCommentVisible: boolean
   transitional: boolean
   justification: OldJustification
   moment_list: OldMoment[]
}
interface OldInterview {
   date: string
   color: string
   comment: string
   participantName: string
    /* eslint-disable @typescript-eslint/no-explicit-any */
   interviewText: any
   rootMoment: OldMoment
}

// Map an imported moment to a Moment
function mapMoment (m: OldMoment, interview: Interview): Moment {
  return momentrepo.make({
    name: m.name,
    color: m.color,
    comment: m.comment,
    isCollapsed: m.isCollapsed,
    isCommentVisible: m.isCommentVisible,
    isTransitional: m.transitional,
    justification: justificationrepo.make({
      descriptems: m.justification?.descripteme_list.map(d => descriptemrepo.make({
        startIndex: d.startIndex,
        endIndex: d.endIndex,
        interview
      }))
    }),
    children: m.moment_list.map((c: OldMoment) => mapMoment(c, interview))
  })
}

function mapInterview (i: OldInterview): Interview {
  const interview: Interview = interviewrepo.make({
    date: i.date,
    color: i.color,
    comment: i.comment,
    participantName: i.participantName,
    text: i.interviewText.text,
    annotations: i.interviewText.annotation_list
  })
  interview.analysis = analysisrepo.make({
    rootMoment: mapMoment(i.rootMoment, interview)
  })
  return interview
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
        interviews: data.interview_list.map((i: OldInterview) => mapInterview(i))
      })
      console.log("Imported", out)
      return out
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
