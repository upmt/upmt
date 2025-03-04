import BaseModel from './basemodel'
import { Attr, Str, Uid } from 'pinia-orm/dist/decorators'

export default class PropertyModel extends BaseModel {
  static override entity = 'propertymodels'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare comment: string

  @Attr() categorymodelId!: string


  toJSON (): any {
    return {
      id: this.id,
      creator: this.creator,
      contributor: this.contributor,
      created: this.created,
      modified: this.modified,
      comment: this.comment,
      name: this.name,
      color: this.color
    }
  }
}
