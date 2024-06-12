import { Model } from 'pinia-orm'
import { Attr, Str, Num, Uid } from 'pinia-orm/dist/decorators'

export default class Annotation extends Model {
  static entity = 'annotations'
  @Uid() declare id: string
  @Str('') declare color: string
  @Num(0) declare startIndex: number
  @Num(0) declare endIndex: number

  @Attr() interviewId!: string

  get text (): string {
      return `${this.startIndex}-${this.endIndex}`
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      color: this.color,
      startIndex: this.startIndex,
      endIndex: this.endIndex
    }
  }
}
