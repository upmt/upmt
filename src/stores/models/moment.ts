import { Attr, Num, Str, Uid, BelongsTo, Bool, HasOne, HasMany } from 'pinia-orm/dist/decorators'
import CategoryInstance from './categoryinstance'
import Justifiable from './justifiable'
import Justification from './justification'
import SpecificSynchronicModel from './specificsynchronicmodel'

// Moment is synonym for DiachronicSpecificCategory
export default class Moment extends Justifiable {
  static override entity = 'moments'
  @Uid() declare id: string

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string
  @Str('') declare created: string
  @Str('') declare modified: string

  @Str('') declare name: string
  @Str('') declare color: string
  @Str('') declare note: string
  @Bool(false) declare isExpanded: boolean
  @Bool(false) declare isTransitional: boolean

  @Attr() analysisId!: string
  @Attr() interviewId!: string

  @HasOne(() => Justification, 'parentId') declare justification: Justification | null

  @HasOne(() => SpecificSynchronicModel, 'momentId') declare specificsynchronicmodel: SpecificSynchronicModel | null

  @HasMany(() => CategoryInstance, 'momentId') declare categoryinstances: CategoryInstance[]

  @Attr() parentId!: string
  @BelongsTo(() => Moment, 'parentId') declare parent: Moment | null
  @HasMany(() => Moment, 'parentId') declare children: Moment[]

  @Num(0) declare childIndex: number

  get descriptionLabel () {
    return this.name
  }

  get asContext () {
    return { moment: this }
  }


  toJSON (shallow = false): any {
    const base = {
      creator: this.creator,
      contributor: this.contributor,
      created: this.created,
      modified: this.modified,
      note: this.note,
      name: this.name,
      color: this.color,
      isExpanded: this.isExpanded,
      isTransitional: this.isTransitional,
      parentId: this.parentId,
      analysisId: this.analysisId,
      interviewId: this.interviewId
    }
    if (shallow) {
      return base
    } else {
      if (this.categoryinstances === null || this.children === null) {
        console.error("Query error for ", this, " - should fetch its relations")
      }
      return {
        ...base,
        justification: this.justification?.toJSON(),
        categoryinstances: this.categoryinstances?.map(c => c.toJSON()),
        specificsynchronicmodel: this.specificsynchronicmodel?.toJSON(),
        children: this.children?.map(m => m.toJSON())
      }
    }
  }
}
