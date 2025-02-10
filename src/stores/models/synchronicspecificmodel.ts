import BaseModel from './basemodel'
import Moment from './moment'
import SynchronicSpecificCategory from './synchronicspecificcategory'
import { Attr, BelongsTo, Bool, Str, Uid, HasMany } from 'pinia-orm/dist/decorators'

export default class SynchronicSpecificModel extends BaseModel {
  static entity = 'synchronicspecificmodel'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Bool(true) declare isExpanded: boolean
  @Str('') declare comment: string
  @HasMany(() => SynchronicSpecificCategory, 'synchronicspecificmodelId') declare categories: SynchronicSpecificCategory[]

  @BelongsTo(() => Moment, 'momentId') declare moment: Moment | null
  @Attr() momentId!: string

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      name: this.name,
      created: this._meta?.createdAt,
      modified: this._meta?.updatedAt,
      creator: this.creator,
      contributor: this.contributor,
      comment: this.comment,
      color: this.color,
      isExpanded: this.isExpanded,
      categories: this.categories.map(c => c.toJSON())
    }
  }
}
