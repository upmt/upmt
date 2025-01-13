import Justifiable from './justifiable'
import Justification from './justification'
import SynchronicSpecificModel from './synchronicspecificmodel'
import { Attr, BelongsTo, Num, Str, Uid, HasMany, HasOne } from 'pinia-orm/dist/decorators'

export default class SynchronicSpecificCategory extends Justifiable {
  static entity = 'synchronicspecificcategories'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string

  // Grouping criterion
  @Str('') declare criterion: string

  @HasOne(() => Justification, 'parentId') declare justification: Justification | null

  /* eslint-disable no-use-before-define */
  @HasMany(() => SynchronicSpecificCategory, 'parentId') declare children: SynchronicSpecificCategory[]
  @Attr() parentId!: string
  @Num(0) declare childIndex: number

  @BelongsTo(() => SynchronicSpecificModel, 'synchronicspecificmodelId') declare model: SynchronicSpecificModel | null
  @Attr() synchronicspecificmodelId!: string

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      name: this.name,
      color: this.color,
      comment: this.comment,
      criterion: this.criterion
    }
  }
}
