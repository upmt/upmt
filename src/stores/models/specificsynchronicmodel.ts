import BaseModel from './basemodel'
import Moment from './moment'
import SpecificSynchronicCategory from './specificsynchroniccategory'
import { Attr, BelongsTo, Bool, Str, Uid, HasMany } from 'pinia-orm/dist/decorators'

export default class SpecificSynchronicModel extends BaseModel {
  static override entity = 'specificsynchronicmodel'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Bool(true) declare isExpanded: boolean
  @Str('') declare note: string
  @HasMany(() => SpecificSynchronicCategory, 'specificsynchronicmodelId') declare categories: SpecificSynchronicCategory[]

  @BelongsTo(() => Moment, 'momentId') declare moment: Moment | null
  @Attr() momentId!: string


  toJSON (shallow=false): any {
    const base = {
      name: this.name,
      created: this._meta?.createdAt,
      modified: this._meta?.updatedAt,
      creator: this.creator,
      contributor: this.contributor,
      note: this.note,
      color: this.color,
      isExpanded: this.isExpanded
    }
    if (shallow) {
      return base
    } else {
      return {
        ...base,
        categories: this.categories.map(c => c.toJSON())
      }
    }
  }
}
