import { Model, Str, Uid, Attr } from 'pinia-orm'
import { Moment } from 'models/moment'

export default class Interview extends Model {
  static entity = 'interview'
  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string
  @Str('') declare date: string
  @Str('') declare interviewText: string
  @Str('') declare participantName: string

  @Attr(null) declare rootMoment: Moment | null
}
