import { Model } from 'pinia-orm'
import { Str, Uid, Attr } from 'pinia-orm/dist/decorators'
import Analysis from './analysis'

export default class Interview extends Model {
  static entity = 'interviews'
  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string
  @Str('') declare date: string
  @Str('') declare interviewText: string
  @Str('') declare participantName: string

  @Attr(null) declare analysis: Analysis | undefined

  get label (): string {
    if (this.name) {
      return `Interview ${this.name}`
    } else {
      return `Interview ${this.participantName} (${this.date})`
    }
  }
}
