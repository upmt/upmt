import { Model } from 'pinia-orm'

export default class DiachronicAssociation extends Model {
  static override entity = 'diachronicAssociation'
  static override primaryKey = ['genericDiachronicCategoryId', 'momentId']
  static override fields () {
    return {
      genericDiachronicCategoryId: this.attr(null),
      momentId: this.attr(null)
    }
  }
}
