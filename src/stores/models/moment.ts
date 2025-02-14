import { Attr, Num, Str, Uid, BelongsTo, Bool, HasOne, HasMany } from 'pinia-orm/dist/decorators'
import CategoryInstance from './categoryinstance'
import Justifiable from './justifiable'
import Justification from './justification'
import SynchronicSpecificModel from './synchronicspecificmodel'

// Moment is synonym for DiachronicSpecificCategory
export default class Moment extends Justifiable {
  static override entity = 'moments'
  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string
  @Bool(false) declare isExpanded: boolean
  @Bool(false) declare isCommentVisible: boolean
  @Bool(false) declare isTransitional: boolean

  @Attr() analysisId!: string
  @Attr() interviewId!: string

  @HasOne(() => Justification, 'parentId') declare justification: Justification | null

  @HasOne(() => SynchronicSpecificModel, 'momentId') declare synchronicspecificmodel: SynchronicSpecificModel | null

  @HasMany(() => CategoryInstance, 'momentId') declare categoryinstances: CategoryInstance[]

  @HasMany(() => Moment, 'parentId') declare children: Moment[]

  @Attr() parentId!: string
  @BelongsTo(() => Moment, 'parentId') declare parent: Moment | null
  @Num(0) declare childIndex: number

  get descriptionLabel () {
    return this.name
  }

  get asContext () {
    return { moment: this }
  }


  toJSON (): any {
    if (this.categoryinstances === null || this.children === null) {
      console.error("Query error for ", this, " - should fetch its relations")
    }
    return {
      name: this.name,
      color: this.color,
      comment: this.comment,
      isExpanded: this.isExpanded,
      isCommentVisible: this.isCommentVisible,
      isTransitional: this.isTransitional,
      justification: this.justification?.toJSON(),
      categoryinstances: this.categoryinstances?.map(c => c.toJSON()),
      synchronicspecificmodel: this.synchronicspecificmodel?.toJSON(),
      parentId: this.parentId,
      analysisId: this.analysisId,
      interviewId: this.interviewId,
      children: this.children?.map(m => m.toJSON())
    }
  }
}
