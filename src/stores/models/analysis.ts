import BaseModel from './basemodel'
import { Attr, HasOne, Str, Uid } from 'pinia-orm/dist/decorators'
import Moment from './moment'

// Indirection for rootMoment in umpt1
export default class Analysis extends BaseModel {
  static entity = 'analyses'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string

  @Str('') declare name: string
  @HasOne(() => Moment, 'analysisId') declare rootMoment: Moment

  @Attr() interviewId!: string

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      name: this.name,
      rootMoment: this.rootMoment?.toJSON()
    }
  }
}
