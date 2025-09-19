import BaseModel from './basemodel'
import { Attr, Str, Uid, Bool, HasMany } from 'pinia-orm/dist/decorators'

export default class ModelFolder extends BaseModel {
  static override entity = 'modelfolders'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare note: string
  @Bool(true) declare isExpanded: boolean

  // ownerId is the parent project for toplevel modelfolders
  @Attr() ownerId!: string

  @Attr() parentId!: string
  @HasMany(() => ModelFolder, 'parentId') declare folders: ModelFolder[]

  toJSON (): any {
    return {
      id: this.id,
      creator: this.creator,
      contributor: this.contributor,
      created: this.created,
      modified: this.modified,
      note: this.note,
      name: this.name,
      color: this.color,
      isExpanded: this.isExpanded,
      folders: this.folders?.map(f => f.toJSON())
    }
  }
}
