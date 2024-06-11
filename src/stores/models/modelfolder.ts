import { Model } from 'pinia-orm'
import { Str, Uid, Bool, HasMany } from 'pinia-orm/dist/decorators'
import CategoryModel from './categorymodel'
import MomentModel from './momentmodel'

export default class ModelFolder extends Model {
  static entity = 'modelfolders'
  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare color: string
  @Bool(true) declare isExpanded: boolean

  /* eslint-disable no-use-before-define */
  @HasMany(() => ModelFolder, 'parentId') declare folders: ModelFolder[]
  @HasMany(() => CategoryModel, 'modelfolderId') declare categories: CategoryModel[]
  @HasMany(() => MomentModel, 'modelfolderId') declare moments: MomentModel[]

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      name: this.name,
      color: this.color,
      isExpanded: this.isExpanded,
      folders: this.folders.map(f => f.toJSON()),
      categories: this.categories.map(c => c.toJSON()),
      moments: this.moments.map(m => m.toJSON())
    }
  }
}
