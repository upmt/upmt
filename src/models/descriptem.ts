import { Model } from 'pinia-orm'
import { Uid } from 'pinia-orm/dist/decorators'

export default class Descriptem extends Model {
  static entity = 'descriptem'
  @Uid() declare id: string
}
