import { Model } from 'pinia-orm'
import { Str, Uid } from 'pinia-orm/dist/decorators'

export default class ConcreteCategory extends Model {
  static entity = 'concretecategory'
  @Uid() declare id: string
  @Str('') declare name: string
}
