import BaseModel from './basemodel'
import { Attr, Str, Uid, BelongsTo, HasMany } from 'pinia-orm/dist/decorators'
import Descriptem from './descriptem'
import Justifiable from './justifiable'

export default class Justification extends BaseModel {
  static override entity = 'justifications'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string

  @HasMany(() => Descriptem, 'justificationId') declare descriptems: Descriptem[]

  // parent is a Justifiable: either a Moment/Property/CategoryInstance/SynchronicSpecificCategory
  @Attr() parentId!: string
  @BelongsTo(() => Justifiable, 'parentId') declare parent: Justifiable | null


  toJSON (): any {
    return {
      name: this.name,
      descriptems: this.descriptems.map(d => d.toJSON())
    }
  }
}
