import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Num, Uid } from 'pinia-orm/dist/decorators'
import Interview from './interview'
import Justification from './justification'
import { ellipsize } from 'stores/util'

export default class Descriptem extends Model {
  static entity = 'descriptems'
  @Uid() declare id: string
  @Num(0) declare startIndex: number
  @Num(0) declare endIndex: number

  @Attr() justificationId!: string
  @BelongsTo(() => Justification, 'justificationId') declare justification: Justification | null
  @Attr() interviewId!: string
  @BelongsTo(() => Interview, 'interviewId') declare interview: Interview

  get text (): string {
    if (this.interview) {
      return this.interview.text.slice(this.startIndex, this.endIndex)
    } else {
      return `[${this.startIndex}-${this.endIndex}]`
    }
  }

  get shorttext (): string {
    return ellipsize(this.text)
  }

  get length (): number {
    return this.endIndex - this.startIndex
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
