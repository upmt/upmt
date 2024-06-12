import { Model } from 'pinia-orm'
import { Attr, HasMany, HasOne, Str, Uid } from 'pinia-orm/dist/decorators'
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

  @Attr() projectId!: string

  get label (): string {
    if (this.name) {
      return this.name
    } else {
      return `${this.participantName} (${this.date})`
    }
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      id: this.id,
      name: this.name,
      participantName: this.participantName,
      color: this.color,
      comment: this.comment,
      date: this.date,
      annotations: this.annotations.map(a => a.toJSON()),
      analysis: this.analysis?.toJSON(),
      text: this.text
    }
  }
}
