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
}
