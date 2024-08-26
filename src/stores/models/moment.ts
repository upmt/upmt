import { Model } from 'pinia-orm'
import { Attr, Str, Uid, BelongsTo, Bool, HasOne, HasMany } from 'pinia-orm/dist/decorators'
import Justification from './justification'
import Category from './category'

export default class Moment extends Model {
  static entity = 'moments'
  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string
  @Bool(false) declare isCollapsed: boolean
  @Bool(false) declare isCommentVisible: boolean
  @Bool(false) declare isTransitional: boolean

  @Attr() analysisId!: string
  @Attr() parentId!: string

  @HasOne(() => Justification, 'momentId') declare justification: Justification | null
  @HasMany(() => Category, 'momentId') declare categories: Category[]
  /* eslint-disable no-use-before-define */
  @HasMany(() => Moment, 'parentId') declare children: Moment[]
  @BelongsTo(() => Moment, 'parentId') declare parent: Moment | null

  static updating (model: any) {
    // See https://github.com/CodeDredd/pinia-orm/issues/468
    console.log("Updating moment", model)
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    if (this.categories === null || this.children === null) {
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
      categories: this.categories.map(c => c.toJSON()),
      children: this.children.map(m => m.toJSON())
    }
  }
}
