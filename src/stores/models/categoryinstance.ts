import { Attr, BelongsTo, Uid, HasOne, HasMany } from 'pinia-orm/dist/decorators'
import Justification from './justification'
import Moment from './moment'
import Property from './property'
import CategoryModel from './categorymodel'
import Justifiable from './justifiable'

export default class CategoryInstance extends Justifiable {
  static entity = 'categoryinstances'
  @Uid() declare id: string
  @HasOne(() => Justification, 'parentId') declare justification: Justification
  @HasMany(() => Property, 'categoryinstanceId') declare properties: Property[]

  @Attr() momentId!: string
  @BelongsTo(() => Moment, 'momentId') declare moment: Moment

  @Attr() categorymodelId!: string
  @BelongsTo(() => CategoryModel, 'categorymodelId') declare model: CategoryModel

  get asContext () {
    return {
      moment: this.moment,
      categoryinstance: this
    }
  }

  get name (): string {
    if (this.model) {
      return this.model.name
    } else {
      return `<${this.id}>`
    }
  }

  get color (): string {
    if (this.model) {
      return this.model.color
    } else {
      return 'transparent'
    }
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    // FIXME: it this.properties is null, then denormalization has not occurred - should refetch from repo with dependencies
    return {
      id: this.id,
      categorymodelId: this.categorymodelId,
      momentId: this.momentId,
      justification: this.justification?.toJSON(),
      properties: this.properties.map(p => p.toJSON())
    }
  }
}
