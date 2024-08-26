import { Model } from 'pinia-orm'
import { Attr, Str, Uid, BelongsTo, HasMany } from 'pinia-orm/dist/decorators'
import Descriptem from './descriptem'
import Moment from './moment'

export default class Justification extends Model {
  static entity = 'justifications'
  @Uid() declare id: string
  @Str('') declare name: string

  @HasMany(() => Descriptem, 'justificationId') declare descriptems: Descriptem[]

  @Attr() momentId!: string
  @BelongsTo(() => Moment, 'momentId') declare moment: Moment | null

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      name: this.name,
      descriptems: (this.descriptems || []).map(d => d.toJSON())
    }
  }
}
