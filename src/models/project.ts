import { Model } from 'pinia-orm'
import { Str, Uid, HasMany } from 'pinia-orm/dist/decorators'
import { Interview } from 'models/interview'

export default class Project extends Model {
  static entity = 'project'
  @Uid() declare id: string
  @Str('') declare name: string
  @HasMany(() => Interview, 'interviewId') declare interviews: Interview[]
}
