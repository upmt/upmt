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
  @Str('') declare note: string

  // Abstraction types: classification / aggregation / generalization
  @Str('') declare abstractionType: string

  // Grouping criterion
  @Str('') declare criterion: string

  @HasOne(() => Justification, 'parentId') declare justification: Justification | null

  @Attr() parentId!: string
  @BelongsTo(() => SpecificSynchronicCategory, 'parentId') declare parent: SpecificSynchronicCategory | null
  @HasMany(() => SpecificSynchronicCategory, 'parentId') declare children: SpecificSynchronicCategory[]

  @Num(0) declare childIndex: number

  @BelongsTo(() => SpecificSynchronicModel, 'specificsynchronicmodelId') declare model: SpecificSynchronicModel | null
  @Attr() specificsynchronicmodelId!: string


  get asContext () {
    return { specificsynchroniccategory: this }
  }

  toJSON (shallow=false): any {
    const base = {
      name: this.name,
      created: this.created,
      modified: this.modified,
      creator: this.creator,
      contributor: this.contributor,
      color: this.color,
      note: this.note,
      criterion: this.criterion,
      abstractionType: this.abstractionType
    }
    if (shallow) {
      return base
    } else {
      return {
        ...base,
        justification: this.justification?.toJSON(),
        children: this.children.map(c => c.toJSON(shallow))
      }
    }
  }
}
