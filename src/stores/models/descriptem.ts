import { Model } from 'pinia-orm'
import { Num, Uid, HasOne } from 'pinia-orm/dist/decorators'
import Interview from './interview'

export default class Descriptem extends Model {
  static entity = 'descriptems'
  @Uid() declare id: string
  @HasOne(() => Interview, 'descriptemId') declare interview: Interview
  @Num(0) declare startIndex: number
  @Num(0) declare endIndex: number

  get text (): string {
    return this.interview.text.slice(this.startIndex, this.endIndex)
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      interviewId: this.interview.id,
      startIndex: this.startIndex,
      endIndex: this.endIndex
    }
  }
}
