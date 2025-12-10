import BaseModel from './basemodel'
import SpecificSynchronicModel from './specificsynchronicmodel'
import { Str, Uid, HasOne } from 'pinia-orm/dist/decorators'

export default class DetachedSynchronicModel extends BaseModel {
  static override entity = 'detachedsynchronicmodel'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare note: string
  @HasOne(() => SpecificSynchronicModel, 'detachedModelId') declare proxy: SpecificSynchronicModel

  toJSON (shallow=false): any {
    const base = {
      name: this.name,
      creator: this.creator,
      contributor: this.contributor,
      created: this.created,
      modified: this.modified,
      color: this.color,
      note: this.note,
      proxy: this.proxy.toJSON(shallow)
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
