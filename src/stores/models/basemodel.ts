import { Model } from 'pinia-orm'
import { Str } from 'pinia-orm/dist/decorators'

type ContextProvider = {
  getUsername?: () => string,
  getProjectId?: () => string
}

export default class BaseModel extends Model {
  static entity = 'basemodel'
  static context: ContextProvider | null = null

  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare projectId: string

  static config = {
    withMeta: true
  }

  static creating (model: BaseModel) {
    console.log("creating")

    if (!this.context) {
      return true
    }

    if (this.context?.getUsername) {
      model.creator = this.context.getUsername();
      model.contributor = model.creator;
    }
    if (this.context?.getProjectId) {
      model.projectId = this.context.getProjectId();
    }
    // return false to prevent from saving
    return true
    }

  static updating (model: BaseModel) {
    console.log("updating")

    if (this.context?.getUsername) {
      model.contributor = this.context.getUsername()
    }
  }
}
