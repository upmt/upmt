import { Model } from 'pinia-orm'
import { Str, Uid, Bool, HasOne, HasMany } from 'pinia-orm/decorators'

export default class Descriptem extends Model {
  static entity = 'descriptem'
  @Uid() declare id: string
}
