import { Model } from 'pinia-orm'

export default class Descriptem extends Model {
  static entity = 'descriptems'

  static fields () {
    return {
      id: this.uid()
      // FIXME: to complete
    }
  }
}
