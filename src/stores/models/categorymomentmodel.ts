import { Model } from 'pinia-orm'
import { Attr } from 'pinia-orm/dist/decorators'

export default class CategoryMomentModel extends Model {
  static entity = 'categorymomentmodels'
  static primaryKey = ['categorymodelId', 'momentmodelId']

  @Attr(null) declare categorymodelId: string
  @Attr(null) declare momentmodelId: string
}
