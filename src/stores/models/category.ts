import { Model } from 'pinia-orm'
import { Attr, Uid, HasOne, HasMany } from 'pinia-orm/dist/decorators'
import Justification from './justification'
import Property from './property'
import CategoryModel from './categorymodel'

export default class Category extends Model {
  static entity = 'categories'
  @Uid() declare id: string
  @HasOne(() => CategoryModel, 'categoryId') declare model: CategoryModel
  @HasOne(() => Justification, 'categoryId') declare justification: Justification | undefined
  @HasMany(() => Property, 'categoryId') declare properties: Property[]

  @Attr() momentId!: string

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
      return 'black'
    }
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      modelId: this.model.id,
      justification: this.justification?.toJSON(),
      properties: this.properties.map(p => p.toJSON())
    }
  }
}
