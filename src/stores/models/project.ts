import { Model } from 'pinia-orm'
import { HasMany, Str, Uid } from 'pinia-orm/dist/decorators'
import Interview from './interview'

export default class Project extends Model {
  static entity = 'projects'

  @Uid() declare id: string
  @Str('') declare name: string
  @HasMany(() => Interview, 'interviewId') declare interviews: Interview[]
}
