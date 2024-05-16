import { Model } from 'pinia-orm'
import { Str, Uid, HasMany } from 'pinia-orm/dist/decorators'
import Interview from 'src/models/interview'

export default class Project extends Model {
  static entity = 'projects'
  @Uid() declare id: string
  @Str('') declare name: string
  @HasMany(() => Interview, 'interviewId') declare interviews: Interview[]
}
