import Justifiable from './justifiable'
import Justification from './justification'
import SpecificSynchronicModel from './specificsynchronicmodel'
import { Attr, BelongsTo, Num, Str, Uid, HasMany, HasOne } from 'pinia-orm/dist/decorators'

export default class SpecificSynchronicCategory extends Justifiable {
  static override entity = 'specificsynchroniccategories'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string

  // Grouping criterion
  @Str('') declare criterion: string

  @HasOne(() => Justification, 'parentId') declare justification: Justification | null

  @HasMany(() => SpecificSynchronicCategory, 'parentId') declare children: SpecificSynchronicCategory[]
  @Attr() parentId!: string
  @Num(0) declare childIndex: number

  @BelongsTo(() => SpecificSynchronicModel, 'specificsynchronicmodelId') declare model: SpecificSynchronicModel | null
  @Attr() specificsynchronicmodelId!: string


  toJSON (): any {
    return {
      name: this.name,
      created: this._meta?.createdAt,
      modified: this._meta?.updatedAt,
      creator: this.creator,
      contributor: this.contributor,
      color: this.color,
      comment: this.comment,
      criterion: this.criterion,
      justification: this.justification?.toJSON(),
      children: this.children.map(c => c.toJSON())
    }
  }
}
