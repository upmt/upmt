import { Model } from 'pinia-orm'
import { Bool, Str, Uid, HasMany } from 'pinia-orm/dist/decorators'
import PropertyModel from './propertymodel'

export default class CategoryModel extends Model {
  static entity = 'categorymodels'
  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare color: string
  @Bool(true) declare isExpanded: boolean
  @HasMany(() => PropertyModel, 'categorymodelId') declare properties: PropertyModel[]
}
