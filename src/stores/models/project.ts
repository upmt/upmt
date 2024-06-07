import { Model } from 'pinia-orm'
import { HasMany, HasOne, Str, Uid } from 'pinia-orm/dist/decorators'
import Interview from './interview'
import ModelFolder from './modelfolder'

export default class Project extends Model {
  static entity = 'projects'

  @Uid() declare id: string
  @Str('') declare name: string
  @HasOne(() => ModelFolder, 'projectId') declare modelfolder: ModelFolder
  @HasMany(() => Interview, 'projectId') declare interviews: Interview[]

  get label (): string {
    if (this.name) {
      return `${this.name} - ${this.interviews.length} interviews`
    } else {
      return "Unnamed project"
    }
  }
}
