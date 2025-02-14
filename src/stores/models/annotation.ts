import BaseModel from './basemodel'
import { Attr, BelongsTo, Str, Num, Uid } from 'pinia-orm/dist/decorators'
import Interview from './interview'
import { ellipsize } from 'stores/util'

export default class Annotation extends BaseModel {
  static override entity = 'annotations'
  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare color: string
  @Num(0) declare startIndex: number
  @Num(0) declare endIndex: number
  @Str('') declare comment: string

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


  toJSON (): any {
    return {
      color: this.color,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      interviewId: this.interviewId,
      text: this.text
    }
  }
}
