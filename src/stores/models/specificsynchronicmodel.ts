import BaseModel from './basemodel'
import DetachedSynchronicModel from './detachedsynchronicmodel'
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
     or to a detachedModel (containing Generic Synchronic Category disguised as
     SSC) */
  @BelongsTo(() => Moment, 'momentId') declare moment: Moment | null
  @Attr() momentId!: string

  @BelongsTo(() => DetachedSynchronicModel, 'detachedModelId') declare detachedModel: DetachedSynchronicModel | null
  @Attr() detachedModelId!: string

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
        categories: this.categories.map(c => c.toJSON(shallow))
      }
    }
  }
}
