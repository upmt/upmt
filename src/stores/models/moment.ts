import { Model } from 'pinia-orm'
import { Str, Uid, Bool, HasOne, HasMany } from 'pinia-orm/dist/decorators'
import Justification from './justification'
import ConcreteCategory from './concretecategory'

export default class Moment extends Model {
  static entity = 'moments'
  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string
  @Bool(false) declare isCollapsed: boolean
  @Bool(false) declare isCommentVisible: boolean
  @Bool(false) declare isTransitional: boolean

  @HasOne(() => Justification, 'justificationId') declare justification: Justification | null
  @HasMany(() => ConcreteCategory, 'categoryId') declare concreteCategories: ConcreteCategory[]
}
