import { Model } from 'pinia-orm'
import { Str, Uid } from 'pinia-orm/dist/decorators'

type ContextProvider = {
  getUsername?: () => string,
  getProjectId?: () => string
}

export default class BaseModel extends Model {
  static override entity = 'basemodel'
  static context: ContextProvider | null = null

  @Uid() declare id: string
  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare created: string
  @Str('') declare modified: string
  @Str('') declare projectId: string
  @Str('') declare comment: string

  static override creating (model: BaseModel) {
    if (!this.context) {
      return true
    }

    if (this.context?.getUsername) {
      if (!model.creator) {
        model.creator = this.context.getUsername()
      }
      if (!model.created) {
        model.created = (new Date()).toISOString()
      }
      if (!model.contributor) {
        model.contributor = model.creator
      }
      if (!model.modified) {
        model.modified = (new Date()).toISOString()
      }
    }
    if (!model.projectId && this.context?.getProjectId) {
      model.projectId = this.context.getProjectId()
    }
    // return false to prevent from saving
    return true
  }

  static override updating (model: BaseModel) {
    model.modified = (new Date()).toISOString()
    if (this.context?.getUsername) {
      model.contributor = this.context.getUsername()
    }
    return true
  }
}
