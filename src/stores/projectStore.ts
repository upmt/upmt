import { defineStore } from 'pinia'
import { useRepo } from 'pinia-orm'
import axios from 'axios'
import Analysis from './models/analysis'
import Annotation from './models/annotation'
import BaseModel from './models/basemodel'
import Descriptem from './models/descriptem'
import GenericSynchronicModel from './models/genericsynchronicmodel'
import Interview from './models/interview'
import Justification from './models/justification'
import ModelFolder from './models/modelfolder'
import Moment from './models/moment'
import Project from './models/project'
import SpecificSynchronicCategory from './models/specificsynchroniccategory'
import SpecificSynchronicModel from './models/specificsynchronicmodel'
import { stringToId, groupBy } from './util'
import { isStoredProject, getStoredProject } from './storage'
import { useInterfaceStore } from 'stores/interface'

/* From https://grrr.tech/posts/2021/typescript-partial/
 * This should be put in some common module.
 */
type Subset<K> = {
    [attr in keyof K]?: K[attr] extends object
        ? Subset<K[attr]>
        : K[attr] extends object | null
        ? Subset<K[attr]> | null
        : K[attr] extends object | null | undefined
        ? Subset<K[attr]> | null | undefined
        : K[attr]
}

export type GenericCategory = {
  name: string,
  isRoot: boolean,
  errors?: string[],
  children?: GenericCategory[],
  color: string,
  instances: SpecificSynchronicCategory[],
  childrenNames: Set<string>,
  abstractionType: string
}
export type ContainerInfo = {
  momentId: string,
  genericModelId: string
}
export type GraphInfo = {
  categories: GenericCategory[],
  byName: Record<string, GenericCategory>,
  instanceIdToContainerInfo: Record<string, ContainerInfo>
}

/* Should find how to dynamically inject typescript definitions here:
const repo = Object.fromEntries([
  Analysis,
  Annotation,
  Descriptem,
  Interview,
  Justification,
  ModelFolder,
  Moment,
  Project,
].map(c => [c.entity, useRepo(c)]))
 */
const repo = {
  Analysis:         useRepo(Analysis),
  Annotation:       useRepo(Annotation),
  Descriptem:       useRepo(Descriptem),
  GenericSynchronicModel: useRepo(GenericSynchronicModel),
  Interview:        useRepo(Interview),
  Justification:    useRepo(Justification),
  ModelFolder:      useRepo(ModelFolder),
  Moment:           useRepo(Moment),
  Project:          useRepo(Project),
  SpecificSynchronicCategory: useRepo(SpecificSynchronicCategory),
  SpecificSynchronicModel: useRepo(SpecificSynchronicModel),
}

// For updateElement, only the entity name seems to be easily available.
// Augment the repo object with entity name for every entity
const repoValues = Object.values(repo).map(r => {
        const model = r.getModel && r.getModel()
        if (model) {
             const entity: string = model.$entity()
             return [entity, r] as [ string, any ]
        }
        return null
    }).filter(v => v !== null)
const repoByEntity = Object.fromEntries(repoValues)

type TextSelection = {
  startIndex: number,
  endIndex: number,
  interviewId: string
}

export const useProjectStore = defineStore('projectStore', () => {
  function getAllProjects (): Project[] {
    // Beware
    // https://pinia-orm.codedredd.de/guide/repository/retrieving-data#retrieving-models
      // this does not process relations (i.e. withAll will not work)
    return repo.Project.all()
  }

  // Return the project and just the first level of child information
  function getProject (id: string): Project | null {
    return repo.Project
      .with('modelfolder')
      .with('genericmodels')
      .with('interviews')
      .find(id)
  }

  // Return the project and its children with their information
  function getFullProject (id: string): Project | null {
    return repo.Project
      .with('modelfolder')
      .with('genericmodels',
        query => query.with('proxy', qp => qp.with('categories'))
      )
      .with('interviews',
        query => query
          .with('annotations')
          .with('analysis',
            qa => qa.with('rootMoment',
              qrm => qrm.with('children',
                qm => qm.orderBy('childIndex')
              )
            )
          )
      )
      .find(id)
  }

  function getProjectByName (name: string): Project | null {
    return repo.Project.where('name', name).first()
  }

  function getFolder (id: string): ModelFolder | null {
    return repo.ModelFolder
      // .with('categorymodels', (query) => { query.with('properties') })
      // .with('momentmodels')
        .with('folders', (query) => { query.withAll() })
        .find(id)
  }

  function getRepo () {
      return repo
  }

  /* Getter methods for elements.
    Since we are  using the Pinia store through the PiniaORM, each element type has its own repository/store.

    To preserve reactivity of attributes, we need to get a reference
    to the element directly from the store, from its id.
    This also allows us to control the items that must be fetched along ("with").
     */
  function getAnalysis (id: string) {
    return repo.Analysis.with('rootMoment', (query) => query.with('children', (q) => q.orderBy('childIndex'))).find(id)
  }

  function getDescriptem (id: string) {
    return repo.Descriptem
      .with('justification',
        query => query.with('parent'))
      .with('interview')
      .find(id)
  }

  function getAnnotation (id: string) {
    return repo.Annotation.with('interview').find(id)
  }

  function getInterview (id: string) {
      return repo.Interview.with('annotations').with('analysis').find(id)
  }

  function getJustification (id: string) {
    return repo.Justification
      .with('descriptems')
      .find(id)
  }

  function getMoment (id: string) {
    return repo.Moment
      .with('children', (q) => q.orderBy('childIndex'))
      .with('justification', (query) => query.with('descriptems'))
      .with('specificsynchronicmodel', (query) => query.with('categories',
        (qc) => qc.with('justification',
          (qj) => qj.with('descriptems')
        )))
      .find(id)
  }

  function getMoments (ids: string[]) {
    /* Warning: for efficiency, there is no dereferencing of linked entities */
    return repo.Moment.whereId(ids).get()
  }

  function getMomentsByProject (projectId: string) {
    return repo.Moment
      .where('projectId', projectId)
      .get()
  }

  function getSpecificSynchronicCategory (id: string) {
    return repo.SpecificSynchronicCategory
      .with('parent')
      .with('children')
      .with('justification', (query) => query.with('descriptems'))
      .find(id)
  }

  function getSpecificSynchronicCategoriesByName (projectId: string, name: string) {
    return repo.SpecificSynchronicCategory
      .with('children')
      .with('parent')
      .with('justification', (query) => query.with('descriptems'))
      .where('projectId', projectId)
      .where('name', name)
      .get()
  }

  function getSpecificSynchronicCategoriesByProject (projectId: string) {
    return repo.SpecificSynchronicCategory
      .with('children')
      .with('parent')
      .with('model', (query) => query.with('moment'))
      .with('justification', (query) => query.with('descriptems', (q) => q.with('interview')))
      .where('projectId', projectId)
      .get()
  }

  function getSpecificSynchronicCategoryNamesByPrefix (projectId: string, prefix: string) {
    const lower = prefix.toLowerCase()
    const categories = repo.SpecificSynchronicCategory
      .where('projectId', projectId)
      .where('name', (name) => name.toLowerCase().startsWith(lower))
      .get()
    const names = [ ...new Set(categories.map(c => c.name)) ]
    return names
  }

  function getSpecificSynchronicModel (id: string | null) {
    if (id) {
      return repo.SpecificSynchronicModel
        .with('categories', (qc) => qc.with('children')
          .with('justification',
            (qj) => qj.with('descriptems')))
        .with('moment')
        .find(id)
    } else {
      return null
    }
  }

  function getInterviewDescriptems (interviewId: string) {
    // Return the descriptems defined on a specific interview
    return repo.Descriptem.where('interviewId', interviewId).with('interview').get()
  }

  function getInterviewAnnotations (interviewId: string) {
    // Return the annotations defined on a specific interview
    return repo.Annotation.where('interviewId', interviewId).with('interview').get()
  }

  function getJustificationParent (id: string) {
    // Parent can be either SpecificSynchronicCategory or Moment
    const parent: Moment | SpecificSynchronicCategory | null = (getMoment(id)
      ??  getSpecificSynchronicCategory(id)
    )
    return parent
  }

  function createProject (projectData: Subset<Project>) {
    if (! projectData.id) {
      // Generate an id from the name
      let id = stringToId(projectData.name || "project")
      // If an existing project with the same id exists, add a suffix
      while (isStoredProject(id)) {
        id = id + "_new"
      }
      projectData.id = id
    }
    if (! projectData.filename) {
      projectData.filename = `${projectData.id}.upmt`
    }
    repo.Project.save(projectData)
  }

  function fixChildIndex (moment: any) {
    if (Array.isArray(moment.children)) {
      moment.children
        // Sort along possible existing childIndex info
        .sort((m1: any, m2: any) => (m1.childIndex ?? 0) - (m2.childIndex ?? 0))
        .forEach((child: any, index: number) => {
          child.childIndex = index
          // Recursively handle structure
          fixChildIndex(child)
        })
    }
  }
  function importProject (data: any, url: string) {
    let out
    // FIXME: use data.version info
    if ('modelfolder' in data) {
      // New style
      // Configure pinia-orm context so that projectId is correctly set.
      const istore = useInterfaceStore()
      istore.setCurrentProjectId(data.id)
      // Fix wrongly initialized childIndex for Moments
      for (const interview of data.interviews) {
        fixChildIndex(interview.analysis.rootMoment)
      }
      console.log("Loaded", data, " from ", url)
      out = repo.Project.save(data as Project)
      // We must remap models
    } else {
      // Old upmt files
      console.log("Unhandled old data")
      return null
    }
    console.log("Imported", { project: out, url })
    return out
  }

  /**
   * Load a projet file from a URL
   */
  function loadProject (url: string) {
    return axios.get(url).then((response) => {
      const p = importProject(response.data, url)
      return p
    })
  }

  /**
   * Clear Pinia store from all elements related to project
   */
  function clearProjectData (projectId: string) {
    Object.values(repo).forEach(r => (r as any).where('projectId', projectId).delete())
  }

  /**
   * Load a projet file from the ZenFS managed storage space
   * In this case, we only specify the id
   */
  function loadStoredProject (id: string) {
    const data = getStoredProject(id)
    if (data) {
      clearProjectData(id)
      const p = importProject(data, data.filename)
      return p
    }
  }

  /**
   * Return a project structure with all relationships hydrated
   */
  function hydrateProject (id: string): any {
    const project = { ...getFullProject(id) }
    /* Go through all related elements and fetch them */
    console.log("Export project", project)
    const hydrateFolder = (id: string) => {
      const folder = getFolder(id)
      if (folder) {
        // folder.categorymodels = folder.categorymodels.map(cm => getCategoryModel(cm.id) as CategoryModel)
        // folder.momentmodels = folder.momentmodels.map(mm => getMomentModel(mm.id))
        folder.folders = folder.folders.map(f => hydrateFolder(f.id) as ModelFolder)
      }
      return folder
    }
    const hydrateSpecificSynchronicCategory = (id: string) => {
      const ssc = getSpecificSynchronicCategory(id)
      // justification is already hydrate by the getSpecificSynchronicCategory method
      if (ssc) {
        ssc.children = ssc.children.map(c => hydrateSpecificSynchronicCategory(c.id) as SpecificSynchronicCategory)
      }
      return ssc
    }
    const hydrateSpecificSynchronicModel = (model: SpecificSynchronicModel | null) => {
        if (model) {
          model.categories = model.categories.map(c => hydrateSpecificSynchronicCategory(c.id) as SpecificSynchronicCategory)
        }
    }

    const hydrateMoment = (id: string) => {
      const moment = getMoment(id)
      if (moment) {
        moment.children = moment.children.map(m => hydrateMoment(m.id) as Moment)
        hydrateSpecificSynchronicModel(moment.specificsynchronicmodel)
      }
      return moment
    }

    for (const genericmodel of (project.genericmodels ?? [])) {
      hydrateSpecificSynchronicModel(genericmodel.proxy)
    }

    if (project.modelfolder) {
      project.modelfolder = hydrateFolder(project.modelfolder.id) as ModelFolder
    }
    project.interviews?.forEach((interview: Interview) => {
      const analysis = interview.analysis
      if (analysis) {
        analysis.rootMoment = hydrateMoment(interview.analysis.rootMoment.id) as Moment
      }
    })
    return project
  }

  function updateElement (element: BaseModel, values: object) {
    repoByEntity[element.$entity()].where('id', (element.id as any)).update(values)
  }

  function updateMoment (identifier: string, values: object) {
    repo.Moment.where('id', identifier).update(values)
  }

  function updateSpecificSynchronicCategory (identifier: string, values: object) {
    repo.SpecificSynchronicCategory.where('id', identifier).update(values)
  }

  function recursiveUpdateMoment (identifier: string, values: object) {
    updateMoment(identifier, values)
    // Recursively call method on children
    repo.Moment.where('parentId', identifier).get().forEach(moment => recursiveUpdateMoment(moment.id, values))
  }

  function updateModelFolder (identifier: string, values: object) {
    repo.ModelFolder.where('id', identifier).update(values)
  }

  function updateDescriptem (identifier: string, values: object) {
    repo.Descriptem.where('id', identifier).update(values)
  }

  function addAnnotation (textselection: TextSelection, color = '') {
    console.log("addAnnotation", color, textselection)
    repo.Annotation.save({ ...textselection, color })
  }

  function addMoment (name: string,
    referenceMomentId: string,
    where = "", // before, after, or in:<moment-id> for inside
    textselection: TextSelection | null = null) {
      console.log("addMoment", name, where, referenceMomentId, "with", textselection)
      const referenceMoment = getMoment(referenceMomentId)
      let destination = referenceMoment
      let childIndex = 0

      if (where.startsWith('in:')) {
        destination = getMoment(where.slice(3))
      } else if (referenceMoment && (where === 'before' || where === 'after')) {
        // If we insert before or after the reference, then destination is really the parent
        // We re-fetch it so that we get children with indexes too
        if (where === 'before') {
          destination = getMoment(referenceMoment.parentId)
          childIndex = referenceMoment.childIndex
        } else if (where === 'after') {
          // after
          destination = getMoment(referenceMoment.parentId)
          childIndex = referenceMoment.childIndex + 1
        }
      }
      if (referenceMoment && destination) {
        // textselection can have the "text" attribute, which is not
        // part of the Descriptem fields. Explicitly select
        // adequate fields.
        const descriptems = textselection?.interviewId ? [ {
          startIndex: textselection.startIndex,
          endIndex: textselection.endIndex,
          interviewId: textselection.interviewId
        } ] : []
        const data = {
          name,
          parentId: destination.id,
          childIndex,
          interviewId: referenceMoment.interviewId,
          isExpanded: true,
          specificsynchronicmodel: repo.SpecificSynchronicModel.make({
            name: "Initial",
            categories: []
          }),
          justification: {
            name: "",
            descriptems
          }
        }
        // In all cases, update child moment indexes
        // Make a copy of children array
        const children = [ ...destination.children ]
        repo.Moment.save(data)
        // Items before childIndex are the same. Renumber next ones.
        children.slice(childIndex).forEach(moment => {
          updateMoment(moment.id, { childIndex: moment.childIndex + 1 })
        })
    }
  }

  function moveMoment (sourceMomentId: string, referenceMomentId: string, where = "") {
    // Empty sourceId. Can be from New Moment button to create a new moment.
    const source = getMoment(sourceMomentId)
    const reference = getMoment(referenceMomentId)
    let parent = reference

    if (source && reference) {
      console.log(`Trying to move ${source.name} [${sourceMomentId}] ${where || 'to'} ${reference.name} [${referenceMomentId}]`)
      let childIndex = 0

      if (where.startsWith('in:')) {
        parent = getMoment(where.slice(3))
      } else if (where === 'before') {
        parent = getMoment(reference.parentId)
        childIndex = reference.childIndex
      } else if (where === 'after') {
        parent = getMoment(reference.parentId)
        childIndex = reference.childIndex + 1
      }
      if (parent) {
        const children = [ ...parent.children ]
        // originalIndex of the element
        const originalIndex = children.findIndex(moment => moment.id == sourceMomentId)
        const sourceData = source.toJSON(true)
        const data = {
          ...sourceData,
          id: sourceMomentId,
          parentId: parent.id,
          childIndex
        }
        // The "as any as Moment" is necessary because save may return (not here) an array.
        const newMoment = repo.Moment.save(data) as any as Moment
        // Insert the newMoment in the appropriate place
        children.splice(childIndex, 0, newMoment)
        // Remove its previous version if it was there
        if (originalIndex > -1) {
          children.splice(originalIndex, 1)
        }
        // console.log("New children")
        // console.table(children, [ 'name', 'childIndex' ])
        // We now have a fixed children array. Update the stored childIndex information
        children.forEach( (moment, index) => {
          if (moment.childIndex != index) {
            updateMoment(moment.id, { childIndex: index })
          }
        })
      } else {
          console.error("Strange error - parent", parent, " is null")
      }
    } else {
      console.error(`Trying to move ${source?.name || 'null'} [${sourceMomentId}] ${where || 'to'} ${reference?.name || 'null'} [${referenceMomentId}] but one of them is null`)
    }
  }

  function addSpecificSynchronicCategory (name: string,
    specificsynchronicmodelId: string,
    where = "", // before, after, or in:<ssc-id> for inside
    textselection: TextSelection | null = null) {
      console.log("addSSC", name, where, specificsynchronicmodelId, "with", textselection)
      let destination = null // if it remains null, then it will be added to the model itself.
      let childIndex = 0

      // textselection can have the "text" attribute, which is not
      // part of the Descriptem fields. Explicitly select
      // adequate fields.
      const descriptems = textselection ? [ {
        startIndex: textselection.startIndex,
        endIndex: textselection.endIndex,
        interviewId: textselection.interviewId
      } ] : []
      // Create a new SSCategory
      const data = {
        name,
        children: [],
        specificsynchronicmodelId,
        childIndex,
        parentId: null as string | null,
        justification: {
          name: "",
          descriptems
        }
      }
      let children = []
      if (where.startsWith('inmodel:')) {
        data.specificsynchronicmodelId = where.slice(8)
        const model = getSpecificSynchronicModel(data.specificsynchronicmodelId)
        // Make a copy of previous children info
        if (model) {
          children = [ ...model.categories ]
          data.childIndex = children.length
          // parentId remains null, since we are at the top.
          repo.SpecificSynchronicCategory.save(data)
        } else {
          console.error("Invalid id for destination SSModel: ", data.specificsynchronicmodelId)
        }
      } else if (where.startsWith('in:')) {
        // Create a new Category in an existing Category
        destination = getSpecificSynchronicCategory(where.slice(3))
        if (destination) {
          // Make a copy of previous children info
          children = [ ...destination.children ]
          childIndex = children.length
          data.parentId = destination.id
          // It is not at the root of the model since it has a parent
          data.specificsynchronicmodelId = ""
          repo.SpecificSynchronicCategory.save(data)
        }
      } else if (where.startsWith('before:')) {
        // Create a new Category as parent of an existing Category
        const child = getSpecificSynchronicCategory(where.slice(7))
        if (child) {
          // Make a copy of previous children info
          // FIXME: check if child.parentId is null?
          if (child.parentId) {
            // There is already a parent - cannot update
            console.error(`Cannot create a new SSC - ${child.id} already has a parent`)
            return
          }
          (data.children as any) = [ { id: child.id } ]
          data.specificsynchronicmodelId = child.specificsynchronicmodelId
          // Remove the child from the list of children of the model
          updateSpecificSynchronicCategory(child.id, { specificsynchronicmodelId: null })
          const ssc = repo.SpecificSynchronicCategory.save(data)
          console.log("New ssc", ssc)
          // updateSpecificSynchronicCategory(child.id, { parentId: ssc.id })
        } else {
          console.error("Invalid id for destination SSCategory: ", where.slice(3))
        }
      } // FIXME: other cases (before/after) - to implement

      /*
      if (false) {
        // In all cases, update child moment indexes
        // Items before childIndex are the same. Renumber next ones.
        children.slice(childIndex).forEach(category => {
          updateSpecificSynchronicCategory(category.id, { childIndex: category.childIndex + 1 })
        })
      }
       */
    }

  function addModelFolder (parentId: string, name: string) {
    return repo.ModelFolder.save({ parentId, name })
  }

  function deleteAnnotation (annotationId: string) {
    repo.Annotation.where('id', annotationId).delete()
  }

  function deleteDescriptem (descriptemId: string) {
    repo.Descriptem.where('id', descriptemId).delete()
  }

  function deleteModelFolder (folderId: string) {
    repo.ModelFolder.where('parentId', folderId).get().forEach(mf => deleteModelFolder(mf.id))
    //repo.CategoryModel.where('modelfolderId', folderId).get().forEach(cm => deleteCategoryModel(cm.id))
    //repo.MomentModel.where('modelfolderId', folderId).get().forEach(mm => deleteMomentModel(mm.id))
    repo.ModelFolder.where('id', folderId).delete()
  }

  function deleteMoment (momentId: string) {
    // FIXME: check cascade deletion of justification/specificsynchronicmodel
    repo.Moment.where('id', momentId).delete()
  }

  function deleteSpecificSynchronicCategory (categoryId: string) {
    const category = getSpecificSynchronicCategory(categoryId)
    if (category) {
      category.children.forEach(child => {
        updateSpecificSynchronicCategory(child.id, {
          parentId: category.parentId,
          specificsynchronicmodelId: category.specificsynchronicmodelId
        })
      })
      repo.SpecificSynchronicCategory.where('id', categoryId).delete()
    }
  }

  function duplicateDescriptem (descriptemId: string) {
    // Duplicate a Descriptem with the same parent
    const descriptem = getDescriptem(descriptemId)
    if (descriptem) {
      repo.Descriptem.save({
        ...descriptem.toJSON(),
        justificationId: descriptem.justificationId
      })
    }
  }

  function addTextSelectionToMoment (selectionData: TextSelection, momentId: string) {
    // Add JSON representation of text selection (Annotation or Descriptem) to moment
    const moment = getMoment(momentId)
    console.log("Add textselection", selectionData, "to", moment)
    if (moment) {
      if (!moment.justification) {
        // Create justification + descriptem
        repo.Justification.save({
          parentId: moment.id,
          descriptems: [
            selectionData
          ]
        })
      } else {
        repo.Descriptem.save({
          ...selectionData,
          justificationId: moment.justification.id
        })
      }
    }
  }

  function addTextSelectionToSpecificSynchronicCategory (selectionData: TextSelection, categoryId: string) {
    // Add JSON representation of text selection (Annotation or Descriptem) to SpecificSynchronicCategory
    const ssc = getSpecificSynchronicCategory(categoryId)
    if (ssc) {
      if (!ssc.justification) {
        // Create justification + descriptem
        repo.Justification.save({
          parentId: ssc.id,
          descriptems: [
            selectionData
          ]
        })
      } else {
        repo.Descriptem.save({
          ...selectionData,
          justificationId: ssc.justification.id
        })
      }
    }
  }

  function getGenericSynchronicGraphs (projectId: string): GraphInfo {
    // Return the generic synchronic graphs for the given projectId
    // It gets all defined specificsynchroniccategories (either from specific model or from template model)

    // Get all specificsynchroniccategories
    const categories = repo.SpecificSynchronicCategory
      .with('model')
      .where('projectId', projectId)
      .get()

    // Reconstitute structure
    //const mapping = Object.fromEntries(categories.map(ssc => [ ssc.id, ssc ]))
    const children: Record<string, SpecificSynchronicCategory[]> = groupBy(categories, 'parentId')
    // console.log({ children, names })

    const names = groupBy(categories, 'name')

    // These will be updated during the categories traversal
    const rootCategoryNames: Set<string> = new Set()
    // List of root SSC instances
    const rootInstances: SpecificSynchronicCategory[] = []

    const genericCategories: Record<string, GenericCategory> = Object.fromEntries(
      Object.entries(names).map( ([name, instances]) => {
        const childrenNames = new Set(instances.map(ssc => (children[ssc.id] || []).map(c => c.name)).flat())
        const errors = []
        const roots = instances.filter(ssc => !!ssc.specificsynchronicmodelId)
        // It is a root in all instances
        const isRoot = (roots.length == instances.length)
        // else we would use: roots.length > 0 (it is root in at least 1 instance)

        if (isRoot) {
          rootCategoryNames.add(name)
          rootInstances.push(...roots)
        }
        const colors = instances
          .map((ssc: SpecificSynchronicCategory) => ssc.color)
          .filter((color: string | undefined) => !!color)
        const color = colors[0] ?? ""

        const types = new Set(instances
          // ignore abstraction type for ssc without child
          .filter(ssc => children[ssc.id])
          .map(ssc => ssc.abstractionType || 'generic'))
        let abstractionType = ''
        if (types.size > 1) {
          // More than 1 abstractionType: error, and keep ''
          errors.push(`There are ${types.size} differents abstraction types for ${name}: ${[...types]}`)
        } else {
          abstractionType = [ ...types ][0] ?? ''
        }

        return [ name, {
          name,
          isRoot,
          errors,
          color,
          instances,
          childrenNames,
          abstractionType
        }]
      }))

    // console.log({ children, names, genericCategories })

    // Memoizing moment/model info - structure of
    // { momentId, genericModelId } (exclusive) indexed by ssc id (instance)

    const instanceIdToContainerInfo: Record<string, ContainerInfo> = {}

    // We have to make 1 tree traversal to build the instance to container (moment or generic model) relationship
    // It may be factorizable with the nameToGeneric traversal, but
    // they are against different trees with potentially different
    // roots, so it is not that simple
    function propagateContainerInfo (ssc: SpecificSynchronicCategory, containerInfo: ContainerInfo | null = null) {
      if (! containerInfo) {
        if (ssc.model) {
          containerInfo = {
            momentId: ssc.model.momentId,
            genericModelId: ssc.model.genericModelId
          }
        } else {
          console.log(`Error: could not get containerInfo for ${ssc.id}`)
          containerInfo = {
            momentId: "",
            genericModelId: ""
          }
        }
      }
      instanceIdToContainerInfo[ssc.id] = containerInfo;
      (children[ssc.id] || []).forEach((child: SpecificSynchronicCategory) => propagateContainerInfo(child, containerInfo))
    }
    rootInstances.forEach(ssc => propagateContainerInfo(ssc))

    // We know have a fully-initialized instanceIdToContainerInfo structure

    // Re-build the children graph + add momentIds/genericModelIds info to every category
    const nameToGeneric = (name: string,
      ancestors: Set<string> | null = null): GenericCategory => {
        const generic: GenericCategory | undefined = genericCategories[name]

        if (ancestors === null) {
          ancestors = new Set()
        } else if (ancestors.has(name)) {
          // Prevent recursive structures
          const error = `Error in generic structure: ${name} is present as its own ancestor`
          console.log(error)
          if (generic) {
            // Document the error in the byName mapping
            generic.errors = [ ...(generic.errors ?? []), error ]
          }
          return {
            name: `${name}`,
            errors: [ error ],
            isRoot: true,
            color: '',
            instances: generic?.instances || [],
            childrenNames: new Set(),
            abstractionType: ''
          }
        }

        if (! generic) {
          const error = `Inconsistency in GenericCategory building for ${name}`
          console.log(error)
          return {
            name,
            errors: [ error ],
            isRoot: true,
            color: '',
            instances: [],
            childrenNames: new Set(),
            abstractionType: ''
          }
        }
        // We know we will follow the trees from their roots, so the
        // container information will correctly propagate

        const newAncestors = ancestors.union(new Set([ name ]))
        return Object.assign({},
          generic,
          { children: [...generic.childrenNames.values()].map(cname => nameToGeneric(cname, newAncestors)) })
      }

    // Return the list of trees starting at rootCategoryNames,
    // which correspond to the GenericSynchronicCategories
    // and also the mapping by name
    return {
      categories: [ ...rootCategoryNames.values() ].map(name => nameToGeneric(name, null)),
      byName: genericCategories,
      instanceIdToContainerInfo
    }
  }

  function getGenericSynchronicModel(projectId: string): GenericSynchronicModel {
    // get or create generic model
    // FIXME: pass model as parameter?
    // FIXME: handle updating existing model (at least adds)
    let genericModel = repo.GenericSynchronicModel
      .where('projectId', projectId)
      .first()

    if (! genericModel) {
      const name = 'Template Generic Model'
      genericModel = repo.GenericSynchronicModel.save({ name, projectId, proxy: { name }})
    }
    return genericModel
  }

  // Build a GenericSynchronicModel from the given graphs.
  // It builds it from the graph.categories, which can be filtered if needed
  function buildGenericSynchronicModelFromGraphs (projectId: string, graphs: GraphInfo): GenericSynchronicModel | null {
    const genericModel = getGenericSynchronicModel(projectId)
    if (! genericModel) {
      return null
    }
    const specificModel = genericModel.proxy

    type SpecificSynchronicCategoryBasicType = {
      name: string,
      abstractionType: string,
      children: SpecificSynchronicCategoryBasicType[],
      model?: SpecificSynchronicModel
    }
    function jsonifyGenericCategory (gc: GenericCategory, model: SpecificSynchronicModel | null): SpecificSynchronicCategoryBasicType {
      const data: SpecificSynchronicCategoryBasicType = {
        name: gc.name,
        abstractionType: gc.abstractionType,
        // Do not transmit model info to children: only the root category should have it.
        children: gc.children?.map(child => jsonifyGenericCategory(child, null)) ?? []
      }
      if (model) {
        data.model = model
      }
      return data
    }

    graphs.categories.forEach((category: GenericCategory) => {
      repo.SpecificSynchronicCategory.save(jsonifyGenericCategory(category, specificModel))
    })
    return genericModel
  }

  return {
    addAnnotation,
    addModelFolder,
    addMoment,
    addSpecificSynchronicCategory,
    addTextSelectionToMoment,
    addTextSelectionToSpecificSynchronicCategory,
    buildGenericSynchronicModelFromGraphs,
    createProject,
    deleteAnnotation,
    deleteDescriptem,
    deleteModelFolder,
    deleteMoment,
    deleteSpecificSynchronicCategory,
    duplicateDescriptem,
    importProject,
    hydrateProject,
    getAllProjects,
    getProject,
    getFullProject,
    getProjectByName,
    getFolder,
    getRepo,
    getAnalysis,
    getAnnotation,
    getDescriptem,
    getGenericSynchronicGraphs,
    getGenericSynchronicModel,
    getInterview,
    getInterviewAnnotations,
    getInterviewDescriptems,
    getJustification,
    getJustificationParent,
    getMoment,
    getMoments,
    getMomentsByProject,
    getSpecificSynchronicCategory,
    getSpecificSynchronicCategoriesByName,
    getSpecificSynchronicCategoriesByProject,
    getSpecificSynchronicCategoryNamesByPrefix,
    getSpecificSynchronicModel,
    loadProject,
    loadStoredProject,
    moveMoment,
    updateDescriptem,
    updateElement,
    updateMoment,
    recursiveUpdateMoment,
    updateModelFolder,
    updateSpecificSynchronicCategory
  }
})
