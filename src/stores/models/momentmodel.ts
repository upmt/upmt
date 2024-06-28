import { Model } from 'pinia-orm'
import { Attr, Str, Uid, Bool } from 'pinia-orm/dist/decorators'
import CategoryModel from './categorymodel'

export default class MomentModel extends Model {
  static entity = 'momentmodels'
  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare color: string
  @Bool(false) declare isTransitional: boolean

  @Attr() categorymodels!: CategoryModel[]
  @Attr() modelfolderId!: string

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      name: this.name,
      color: this.color,
      isTransitional: this.isTransitional,
      categorymodels: this.categorymodels.map(cm => cm.toJSON())
    }
  }
}
