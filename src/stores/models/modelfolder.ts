import BaseModel from './basemodel'
import { Attr, Str, Uid, Bool, HasMany, OnDelete } from 'pinia-orm/dist/decorators'
import CategoryModel from './categorymodel'
import MomentModel from './momentmodel'

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
  @Str('') declare comment: string
  @Bool(true) declare isExpanded: boolean

  // ownerId is the parent project for toplevel modelfolders
  @Attr() ownerId!: string

  @Attr() parentId!: string
  @HasMany(() => ModelFolder, 'parentId') declare folders: ModelFolder[]

  @HasMany(() => CategoryModel, 'modelfolderId')
  @OnDelete('cascade')
  declare categorymodels: CategoryModel[]

  @HasMany(() => MomentModel, 'modelfolderId')
  @OnDelete('cascade')
  declare momentmodels: MomentModel[]


  toJSON (): any {
    return {
      name: this.name,
      color: this.color,
      isExpanded: this.isExpanded,
      folders: this.folders?.map(f => f.toJSON()),
      categorymodels: this.categorymodels?.map(c => c.toJSON()),
      momentmodels: this.momentmodels?.map(m => m.toJSON())
    }
  }
}
