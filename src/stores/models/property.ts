import { Attr, BelongsTo, HasOne, Str, Uid } from 'pinia-orm/dist/decorators'
import CategoryInstance from './categoryinstance'
import Justifiable from './justifiable'
import Justification from './justification'
import PropertyModel from './propertymodel'

export default class Property extends Justifiable {
  static override entity = 'properties'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare value: string
  @Str('') declare note: string
  @HasOne(() => Justification, 'parentId') declare justification: Justification

  @Attr() declare propertymodelId: string
  @BelongsTo(() => PropertyModel, 'propertymodelId') declare model: PropertyModel

  @Attr() categoryinstanceId!: string
  @BelongsTo(() => CategoryInstance, 'categoryinstanceId') declare categoryinstance: CategoryInstance

  get asContext () {
    return {
      moment: this.categoryinstance?.moment,
      categoryinstance: this.categoryinstance,
      property: this
    }
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

  toJSON (): any {
    const base = {
      creator: this.creator,
      contributor: this.contributor,
      created: this.created,
      modified: this.modified,
      note: this.note,
      value: this.value,
      propertymodelId: this.propertymodelId,
      justification: undefined
    }
    if (this.justification) {
      base.justification = this.justification.toJSON()
    }
    return base
  }
}
