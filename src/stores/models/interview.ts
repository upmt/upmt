import BaseModel from './basemodel'
import { Attr, BelongsTo, HasMany, HasOne, Str, Uid } from 'pinia-orm/dist/decorators'
import Analysis from './analysis'
import Annotation from './annotation'
import Project from './project'

export default class Interview extends BaseModel {
  static entity = 'interviews'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string
  @Str('') declare date: string
  @Str('') declare text: string
  @Str('') declare participantName: string

  @HasMany(() => Annotation, 'interviewId') declare annotations: Annotation[]
  @HasOne(() => Analysis, 'interviewId') declare analysis: Analysis | undefined

  @Attr() projectId!: string
  @BelongsTo(() => Project, 'projectId') declare project: Project | null

  fragment (startIndex: number, endIndex: number): string {
    return this.text.slice(startIndex, endIndex)
  }

  get label (): string {
    if (this.name) {
      return this.name
    } else if (this.date) {
      return `${this.participantName} (${this.date})`
    } else {
      return this.participantName
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
