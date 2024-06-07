import { Model } from 'pinia-orm'
import { Str, Uid, Bool, HasMany } from 'pinia-orm/dist/decorators'
import CategoryModel from './categorymodel'

export default class MomentModel extends Model {
  static entity = 'momentmodels'
  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare color: string
  @Bool(false) declare isTransitional: boolean

  @HasMany(() => CategoryModel, 'momenttypeId') declare categories: CategoryModel[]
}