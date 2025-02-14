import BaseModel from './basemodel'
import { Attr, BelongsTo, Num, Str, Uid } from 'pinia-orm/dist/decorators'
import Interview from './interview'
import Justification from './justification'
import { ellipsize } from 'stores/util'

export default class Descriptem extends BaseModel {
  static override entity = 'descriptems'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Num(0) declare startIndex: number
  @Num(0) declare endIndex: number
  @Str('') declare comment: string

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


  toJSON (): any {
    return {
      interviewId: this.interviewId,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      text: this.text
    }
  }
}
