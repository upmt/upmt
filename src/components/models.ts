import { useRepo } from 'pinia-orm'
import Project from 'src/models/project'
import Interview from 'src/models/interview'

export interface Meta {
  totalCount: number;
}

export const projects = useRepo(Project)
export const interviews = useRepo(Interview)
