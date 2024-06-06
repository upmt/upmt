import { Model } from 'pinia-orm'
import { Str, Uid } from 'pinia-orm/dist/decorators'

export default class PropertyModel extends Model {
  static entity = 'propertymodels'
  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare color: string
}
