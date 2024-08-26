import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Num, Uid } from 'pinia-orm/dist/decorators'
import Interview from './interview'
import Justification from './justification'

export default class Descriptem extends Model {
  static entity = 'descriptems'
  @Uid() declare id: string
  @Num(0) declare startIndex: number
  @Num(0) declare endIndex: number

  @Attr() justificationId!: string
  @BelongsTo(() => Justification, 'justificationId') declare justification: Justification | null

  @Attr() interviewId!: string
  @Attr() _interview!: Interview

  get interview (): Interview {
    return this._interview
  }

  set interview (i: Interview) {
    this._interview = i
    this.interviewId = i?.id
  }

  get text (): string {
    if (this.interview) {
      return this.interview.text.slice(this.startIndex, this.endIndex)
    } else {
      return `[${this.startIndex}-${this.endIndex}]`
    }
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      interviewId: this.interviewId,
      startIndex: this.startIndex,
      endIndex: this.endIndex
    }
  }
}
