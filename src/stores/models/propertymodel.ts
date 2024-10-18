import BaseModel from './basemodel'
import { Attr, Str, Uid } from 'pinia-orm/dist/decorators'

export default class PropertyModel extends BaseModel {
  static entity = 'propertymodels'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string

  @Attr() categorymodelId!: string

  /* eslint-disable @typescript-eslint/no-explicit-any */
  toJSON (): any {
    return {
      name: this.name,
      color: this.color
    }
  }
}
