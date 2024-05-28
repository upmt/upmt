import { Model } from 'pinia-orm'
import { HasMany, HasOne, Str, Uid } from 'pinia-orm/dist/decorators'
import Analysis from './analysis'
import Annotation from './annotation'

export default class Interview extends Model {
  static entity = 'interviews'
  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string
  @Str('') declare date: string
  @Str('') declare text: string
  @Str('') declare participantName: string

  @HasMany(() => Annotation, 'interviewId') declare annotations: Annotation[]
  @HasOne(() => Analysis, 'interviewId') declare analysis: Analysis | undefined

  get label (): string {
    if (this.name) {
      return this.name
    } else {
      return `${this.participantName} (${this.date})`
    }
  }
}
