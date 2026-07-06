import BaseModel from './basemodel'
import ModelFolder from './modelfolder'
import Moment from './moment'
import DiachronicAssociation from './diachronicassociation'
import { Attr, BelongsTo, BelongsToMany, Str, Uid, HasMany, OnDelete } from 'pinia-orm/dist/decorators'

export default class GenericDiachronicCategory extends BaseModel {
  static override entity = 'genericdiachroniccategories'

  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare note: string

  @Attr() parentId!: string
  @BelongsTo(() => GenericDiachronicCategory, 'parentId') declare parent: GenericDiachronicCategory | null
  @HasMany(() => GenericDiachronicCategory, 'parentId') @OnDelete('cascade') declare children: GenericDiachronicCategory[]

  @BelongsTo(() => ModelFolder, 'modelfolderId') declare folder: ModelFolder | null
  @Attr() modelfolderId!: string

  @BelongsToMany(() => Moment, () => DiachronicAssociation, 'genericDiachronicCategoryId', 'momentId') declare moments: Moment[]

  get asContext () {
    return { genericdiachroniccategory: this }
  }

  toJSON (shallow=false): any {
    const base = {
      name: this.name,
      created: this.created,
      modified: this.modified,
      creator: this.creator,
      contributor: this.contributor,
      color: this.color,
      note: this.note
    }
    if (shallow) {
      return base
    } else {
      return {
        ...base,
        children: this.children.map(c => c.toJSON(shallow))
      }
    }
  }
}
