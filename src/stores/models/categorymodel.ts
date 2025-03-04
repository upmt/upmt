import BaseModel from './basemodel'
import { Attr, Bool, Str, Uid, HasMany } from 'pinia-orm/dist/decorators'
import PropertyModel from './propertymodel'

export default class CategoryModel extends BaseModel {
  static override entity = 'categorymodels'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Bool(true) declare isExpanded: boolean
  @Str('') declare comment: string
  @HasMany(() => PropertyModel, 'categorymodelId') declare properties: PropertyModel[]

  @Attr() modelfolderId!: string


  toJSON (): any {
    return {
      id: this.id,
      creator: this.creator,
      created: this.created,
      modified: this.modified,
      name: this.name,
      comment: this.comment,
      color: this.color,
      isExpanded: this.isExpanded,
      properties: this.properties.map(p => p.toJSON())
    }
  }
}
