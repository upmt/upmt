import { Attr, Num, Str, Uid, BelongsTo, Bool, HasOne, HasMany } from 'pinia-orm/dist/decorators'
import Justification from './justification'
import CategoryInstance from './categoryinstance'
import Justifiable from './justifiable'

export default class Moment extends Justifiable {
  static entity = 'moments'
  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string
  @Bool(false) declare isCollapsed: boolean
  @Bool(false) declare isCommentVisible: boolean
  @Bool(false) declare isTransitional: boolean

  @Attr() analysisId!: string

  @HasOne(() => Justification, 'parentId') declare justification: Justification | null

  @HasMany(() => CategoryInstance, 'momentId') declare categoryinstances: CategoryInstance[]

  /* eslint-disable no-use-before-define */
  @HasMany(() => Moment, 'parentId') declare children: Moment[]

  @Attr() parentId!: string
  @BelongsTo(() => Moment, 'parentId') declare parent: Moment | null
  @Num(0) declare childIndex: number

  static updating (model: any) {
    // See https://github.com/CodeDredd/pinia-orm/issues/468
    console.log("Updating moment", model)
  }

  get descriptionLabel () {
    return this.name
  }

  get asContext () {
    return { moment: this }
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    if (this.categoryinstances === null || this.children === null) {
      console.error("Query error for ", this, " - should fetch its relations")
    }
    return {
      name: this.name,
      color: this.color,
      comment: this.comment,
      isCollapsed: this.isCollapsed,
      isCommentVisible: this.isCommentVisible,
      isTransitional: this.isTransitional,
      justification: this.justification?.toJSON(),
      categoryinstances: this.categoryinstances.map(c => c.toJSON()),
      parentId: this.parentId,
      children: this.children.map(m => ({ id: m.id }))
    }
  }
}
