import { Model } from 'pinia-orm'
import { HasMany, Str, Uid } from 'pinia-orm/dist/decorators'
import Interview from './interview'

export default class Project extends Model {
  static entity = 'project'

  @Uid() declare id: string
  @Str('') declare name: string
  @HasMany(() => Interview, 'interviewId') declare interviews: Interview[]
    /*
  static fields () {
     return {
       id: this.uid(),
       name: this.string(''),
       interviews: this.hasMany(Interview, 'interviewId')
     }
  }
     */
}
