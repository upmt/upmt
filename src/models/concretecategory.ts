import { Model } from 'pinia-orm'
import { Str, Uid, Bool, HasOne, HasMany } from 'pinia-orm/decorators'

export default class ConcreteCategory extends Model {
  static entity = 'concretecategory'
  @Uid() declare id: string
  @Str('') declare name: string
}
