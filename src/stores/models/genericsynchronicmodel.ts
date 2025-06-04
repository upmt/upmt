import BaseModel from './basemodel'
import SpecificSynchronicModel from './specificsynchronicmodel'
import { Str, Uid, HasOne } from 'pinia-orm/dist/decorators'

export default class GenericSynchronicModel extends BaseModel {
  static override entity = 'genericsynchronicmodel'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare note: string
  @HasOne(() => SpecificSynchronicModel, 'genericModelId') declare proxy: SpecificSynchronicModel

  toJSON (shallow=false): any {
    const base = {
      name: this.name,
      creator: this.creator,
      contributor: this.contributor,
      created: this._meta?.createdAt,
      modified: this._meta?.updatedAt,
      color: this.color,
      note: this.note
    }
    if (shallow) {
      return base
    } else {
      return {
        ...base
      }
    }
  }
}
