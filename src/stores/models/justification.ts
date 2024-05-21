import { Model } from 'pinia-orm'
import { Str, Uid, HasMany } from 'pinia-orm/dist/decorators'
import Descriptem from './descriptem'

export default class Justification extends Model {
  static entity = 'justifications'
  @Uid() declare id: string
  @Str('') declare name: string

  @HasMany(() => Descriptem, 'descriptemId') declare descriptems: Descriptem[]
}
