import { Model } from 'pinia-orm'
import { Str, Uid } from 'pinia-orm/dist/decorators'
// import Property from './property'

export default class ConcreteCategory extends Model {
  static entity = 'concretecategories'
  @Uid() declare id: string
  @Str('') declare name: string
}
