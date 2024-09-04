import { Attr, BelongsTo, Uid, HasOne, HasMany } from 'pinia-orm/dist/decorators'
import Justification from './justification'
import Moment from './moment'
import Property from './property'
import CategoryModel from './categorymodel'
import Justifiable from './justifiable'

export default class Category extends Justifiable {
  static entity = 'categories'
  @Uid() declare id: string
  @Attr() categorymodelId!: string
  @HasOne(() => Justification, 'parentId') declare justification: Justification
  @HasMany(() => Property, 'categoryId') declare properties: Property[]

  @BelongsTo(() => Moment, 'momentId') declare moment: Moment

  @Attr() momentId!: string
  @Attr() _model!: CategoryModel

  get model (): CategoryModel {
    return this._model
  }

  set model (cm: CategoryModel) {
    this._model = cm
    this.categorymodelId = cm.id
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
      modelId: this.model.id,
      justification: this.justification?.toJSON(),
      properties: this.properties.map(p => p.toJSON())
    }
  }
}
