import { Model } from 'pinia-orm'
import { Str, Uid, Attr } from 'pinia-orm/dist/decorators'
import Moment from 'src/models/moment'

export default class Interview extends Model {
  static entity = 'interviews'
  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string
  @Str('') declare date: string
  @Str('') declare interviewText: string
  @Str('') declare participantName: string

  @Attr(null) declare rootMoment: Moment | null
}
