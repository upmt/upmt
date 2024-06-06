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
}
