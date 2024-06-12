import { Model } from 'pinia-orm'
import { Attr, Str, Uid, HasMany } from 'pinia-orm/dist/decorators'
import Descriptem from './descriptem'

export default class Justification extends Model {
  static entity = 'justifications'
  @Uid() declare id: string
  @Str('') declare name: string

  @HasMany(() => Descriptem, 'justificationId') declare descriptems: Descriptem[]

  @Attr() momentId!: string

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      name: this.name,
      descriptems: this.descriptems.map(d => d.toJSON())
    }
  }
}
