import { Model } from 'pinia-orm'
import { Str, Uid, Bool, HasOne, HasMany } from 'pinia-orm/decorators'
import { Descriptem } from 'models/descriptem'

export default class Justification extends Model {
  static entity = 'justification'
  @Uid() declare id: string
  @Str('') declare name: string

  @HasMany(() => Descriptem, 'descriptemId') declare descriptems: Descriptem[]
}
