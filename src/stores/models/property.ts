import { Model } from 'pinia-orm'
import { Attr, HasOne, Str, Uid } from 'pinia-orm/dist/decorators'
import Justification from './justification'
import PropertyModel from './propertymodel'

export default class Property extends Model {
  static entity = 'properties'
  @Uid() declare id: string
  @Str('') declare value: string
  @HasOne(() => Justification, 'propertyId') declare justification: Justification | undefined

  @Attr() declare propertymodelId: string
  @Attr() _model!: PropertyModel

  get model (): PropertyModel {
    return this._model
  }

  set model (pm: PropertyModel) {
    this._model = pm
    this.propertymodelId = pm.id
  }

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

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      value: this.value,
      modelId: this.model.id,
      justification: this.justification?.toJSON()
    }
  }
}
