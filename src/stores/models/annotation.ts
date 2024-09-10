import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Str, Num, Uid } from 'pinia-orm/dist/decorators'
import Interview from './interview'
import { ellipsize } from 'stores/util'

export default class Annotation extends Model {
  static entity = 'annotations'
  @Uid() declare id: string
  @Str('') declare color: string
  @Num(0) declare startIndex: number
  @Num(0) declare endIndex: number

  @Attr() interviewId!: string
  @BelongsTo(() => Interview, 'interviewId') declare interview: Interview

  get text (): string {
    if (this.interview) {
      return this.interview.text.slice(this.startIndex, this.endIndex)
    } else {
      return `(${this.startIndex}-${this.endIndex})`
    }
  }

  get shorttext (): string {
    return ellipsize(this.text)
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      color: this.color,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      interviewId: this.interviewId
    }
  }
}
