import { Model } from 'pinia-orm'
import { Str, Uid, Bool, HasOne, HasMany } from 'pinia-orm/dist/decorators'
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

  @HasOne(() => Justification, 'momentId') declare justification: Justification | undefined
  @HasMany(() => Category, 'momentId') declare categories: Category[]
  /* eslint-disable no-use-before-define */
  @HasMany(() => Moment, 'parentId') declare children: Moment[]

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
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
