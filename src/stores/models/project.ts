import BaseModel from './basemodel'
import { HasMany, HasOne, Num, Str, Uid } from 'pinia-orm/dist/decorators'
import GenericSynchronicModel from './genericsynchronicmodel'
import Interview from './interview'
import ModelFolder from './modelfolder'

export default class Project extends BaseModel {
  static override entity = 'projects'

  @Uid() declare id: string

  // Version number, used to discriminate between various versions of
  // the format and adapt accordingly
  @Num(2) declare version: number

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare filename: string
  @Str('') declare name: string
  @Str('') declare note: string
  @HasOne(() => ModelFolder, 'ownerId') declare modelfolder: ModelFolder
  @HasMany(() => Interview, 'parentId') declare interviews: Interview[]
  @HasMany(() => GenericSynchronicModel, 'projectId') declare genericmodels: GenericSynchronicModel[]

  get label (): string {
    if (this.name) {
      return this.name
    } else {
      return "Unnamed project"
    }
  }


  toJSON (): any {
    return {
      creator: this.creator,
      contributor: this.contributor,
      created: this.created,
      modified: this.modified,
      note: this.note,
      filename: this.filename,
      name: this.name,
      modelfolder: this.modelfolder?.toJSON(),
      interviews: this.interviews?.map(i => i.toJSON()),
      genericmodels: this.genericmodels?.map(m => m.toJSON())
    }
  }
}
