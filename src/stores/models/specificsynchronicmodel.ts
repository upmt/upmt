import BaseModel from './basemodel'
import GenericSynchronicModel from './genericsynchronicmodel'
import Moment from './moment'
import SpecificSynchronicCategory from './specificsynchroniccategory'
import { Attr, BelongsTo, Str, Uid, HasMany } from 'pinia-orm/dist/decorators'

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
  @Str('') declare note: string
  @HasMany(() => SpecificSynchronicCategory, 'specificsynchronicmodelId') declare categories: SpecificSynchronicCategory[]

  /* A SpecificSynchronicmodel belongs either to a Moment (true SSM)
     or to a genericModel (Generic Synchronic Category disguised as
     SSC) */
  @BelongsTo(() => Moment, 'momentId') declare moment: Moment | null
  @Attr() momentId!: string

  @BelongsTo(() => GenericSynchronicModel, 'genericModelId') declare genericModel: GenericSynchronicModel | null
  @Attr() genericModelId!: string

  toJSON (shallow=false): any {
    const base = {
      name: this.name,
      creator: this.creator,
      contributor: this.contributor,
      created: this.created,
      modified: this.modified,
      color: this.color,
      note: this.note
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
