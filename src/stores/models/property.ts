import { Model } from 'pinia-orm'
import { HasOne, Str, Uid } from 'pinia-orm/dist/decorators'
import Justification from './justification'
import PropertyModel from './propertymodel'

export default class Property extends Model {
  static entity = 'properties'
  @Uid() declare id: string
  @Str('') declare value: string
  @HasOne(() => PropertyModel, 'propertyId') declare model: PropertyModel | undefined
  @HasOne(() => Justification, 'propertyId') declare justification: Justification | undefined

  get label (): string {
    return `${this.model?.name}: ${this.value}`
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
}
