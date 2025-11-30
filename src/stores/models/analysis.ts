import BaseModel from './basemodel'
import { Attr, HasOne, Str, Uid } from 'pinia-orm/dist/decorators'
import Moment from './moment'

// Indirection for rootMoment in umpt1
export default class Analysis extends BaseModel {
  static override entity = 'analyses'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string
  @HasOne(() => Moment, 'analysisId') declare rootMoment: Moment

  @Attr() interviewId!: string

  toJSON (shallow = false): any {
    return {
      id: this.id,
      creator: this.creator,
      contributor: this.contributor,
      created: this.created,
      modified: this.modified,
      note: this.note,
      name: this.name,
      rootMoment: this.rootMoment?.toJSON(shallow)
    }
  }
}
