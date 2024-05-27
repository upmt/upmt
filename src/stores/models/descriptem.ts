import { Model } from 'pinia-orm'
import { Num, Uid, HasOne } from 'pinia-orm/dist/decorators'
import Interview from './interview'

export default class Descriptem extends Model {
  static entity = 'descriptems'
  @Uid() declare id: string
  @HasOne(() => Interview, 'interviewId') declare interview: Interview
  @Num(0) declare startIndex: number
  @Num(0) declare endIndex: number
}
