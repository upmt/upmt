import BaseModel from './basemodel'
import { HasMany, HasOne, Str, Uid } from 'pinia-orm/dist/decorators'
import Interview from './interview'
import ModelFolder from './modelfolder'

export default class Project extends BaseModel {
  static entity = 'projects'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string

  @Str('') declare filename: string
  @Str('') declare name: string
  @Str('') declare comment: string
  @HasOne(() => ModelFolder, 'projectId') declare modelfolder: ModelFolder
  @HasMany(() => Interview, 'projectId') declare interviews: Interview[]

  get label (): string {
    if (this.name) {
      return this.name
    } else {
      return "Unnamed project"
    }
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      name: this.name,
      modelfolder: this.modelfolder.toJSON(),
      interviews: this.interviews.map(i => i.toJSON())
    }
  }
}
