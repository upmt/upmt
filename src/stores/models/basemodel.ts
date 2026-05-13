import { Model } from 'pinia-orm'
import { Str, Uid } from 'pinia-orm/dist/decorators'
import { useHistory } from 'stores/plugins/piniaHistory'

// When changing API, also update App.vue
type ContextProvider = {
  getUsername?: () => string,
  getProjectId?: () => string,
  setModified?: (value: boolean) => boolean
}

export default class BaseModel extends Model {
  static override entity = 'basemodel'
  static context: ContextProvider | null = null

  @Uid() declare id: string
  @Str('') declare name: string
  @Str('') declare creator: string
  @Str('') declare contributor: string
  @Str('') declare created: string
  @Str('') declare modified: string
  @Str('') declare projectId: string
  @Str('') declare note: string

  static override creating (model: BaseModel) {
    if (!this.context) {
      return true
    }

    if (this.context.setModified) {
      this.context.setModified(true)
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
    const history = useHistory()

    // updating is called after the actual data history mutation code.
    // Thus it generates 2 history records (1 for the data, 1 because of the updating)
    // (because updating returns true, which triggers model save)
    // We ignore the 'modified' update by setting it as a transient change.

    // It is not a correct solution (since the 'modified' data is not consistent)
    // but should make undo usable at least.
    history.setTransientChange()

    model.modified = (new Date()).toISOString()
    if (this.context?.setModified) {
      this.context.setModified(true)
    }
    if (this.context?.getUsername) {
      model.contributor = this.context.getUsername()
    }
    return true
  }
}
