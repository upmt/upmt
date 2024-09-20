import { defineStore } from 'pinia'
import { useRepo } from 'pinia-orm'
import axios from 'axios'
import Analysis from './models/analysis'
import Annotation from './models/annotation'
import CategoryInstance from './models/categoryinstance'
import CategoryModel from './models/categorymodel'
import Descriptem from './models/descriptem'
import Interview from './models/interview'
import Justification from './models/justification'
import ModelFolder from './models/modelfolder'
import Moment from './models/moment'
import MomentModel from './models/momentmodel'
import Project from './models/project'
import Property from './models/property'
import PropertyModel from './models/propertymodel'

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

/* Should find how to dynamically inject typescript definitions here:
const repo = Object.fromEntries([
  Analysis,
  Annotation,
  CategoryModel,
  Descriptem,
  Interview,
  Justification,
  ModelFolder,
  Moment,
  MomentModel,
  Project,
  PropertyModel
].map(c => [c.entity, useRepo(c)]))
 */
const repo = {
  Analysis:         useRepo(Analysis),
  Annotation:       useRepo(Annotation),
  CategoryModel:    useRepo(CategoryModel),
  CategoryInstance: useRepo(CategoryInstance),
  Descriptem:       useRepo(Descriptem),
  Interview:        useRepo(Interview),
  Justification:    useRepo(Justification),
  ModelFolder:      useRepo(ModelFolder),
  Moment:           useRepo(Moment),
  MomentModel:      useRepo(MomentModel),
  Project:          useRepo(Project),
  Property:         useRepo(Property),
  PropertyModel:    useRepo(PropertyModel)
}

type TextSelection = {
  startIndex: number,
  endIndex: number,
  interviewId: string
}

type ReffableModel = CategoryModel | PropertyModel | MomentModel

const idCache: Record<string, Record<string, ReffableModel>> = {
  CategoryModel: {} as Record<number, CategoryModel>,
  PropertyModel: {} as Record<number, PropertyModel>,
  MomentModel: {} as Record<number, MomentModel>
}
interface OldReference {
   "@id": number,
   "@model": string
}
// .interview_list[0].rootMoment.moment_list[0].moment_list[0].moment_list[0].concreteCategory_list[0].concreteProperty_list[0]
interface OldSchemaProperty {
   "@id": number
   "@model": string
   expanded: boolean
   name: string
}
interface OldSchemaCategory {
   "@id": number
   "@model": string
   color: string
   expanded: boolean
   name: string
   schemaProperty_list: OldSchemaProperty[]
}
interface OldMomentType {
   "@id": number
   "@model": string
   color: string
   expanded: boolean
   name: string
   schemaCategory_list: OldReference[]
}
interface OldSchemaFolder {
   "@id": string
   "@model": string
   expanded: boolean
   name: string
   schemaCategory_list: OldSchemaCategory[]
   schemaFolder_list: OldSchemaFolder[]
   schemaMomentType_list: OldMomentType[]
}
interface OldJustification {
   descripteme_list: Descriptem[]
}
interface OldProperty {
   justification: OldJustification
   schemaProperty: OldReference
   value: string
}
interface OldCategory {
   concreteProperty_list: OldProperty[]
   justification: OldJustification
   schemaCategory: OldReference
}
interface OldMoment {
   name: string
   color: string
   comment: string
   isCollapsed: boolean
   isCommentVisible: boolean
   transitional: boolean
   justification: OldJustification
   moment_list: OldMoment[]
   concreteCategory_list: OldCategory[]
}
interface OldInterview {
   date: string
   color: string
   comment: string
   participantName: string
    /* eslint-disable @typescript-eslint/no-explicit-any */
   interviewText: any
   rootMoment: OldMoment
}

// Fix the color name
// It is sometimes written as 0x7084b0ff, sometimes as 7092be
function fixColorName (c: string): string {
  if (typeof c !== 'string') {
    return c
  }
  if (c.length === 6) {
    return `#${c}`
  } else if (c.startsWith('0x')) {
    return `#${c.slice(2, 8)}`
  } else {
    return c
  }
}

/*
 * Return a reference id, built from the entity model and the numerical id
 * to avoid clashes (same numerical ids for different entities e.g. Category and Folder)
 */
function getReferenceId (e: OldReference): string {
  return `${e['@model']}-${e['@id']}`
}

function mapSchemaCategoryReference (sc: OldReference): CategoryModel {
  const key = getReferenceId(sc)
  const model = idCache.CategoryModel[key] as CategoryModel
  if (!model) {
    console.error(`Missing ${key}`)
  }
  return model
}

function mapConcreteProperty (p: OldProperty, interview: Interview): Property {
  const key = getReferenceId(p.schemaProperty)
  const model = idCache.PropertyModel[key] as PropertyModel
  if (!model) {
    console.error(`Missing ${key}`)
  }
  return repo.Property.make({
    propertymodelId: model.id,
    value: p.value,
    justification: repo.Justification.make({
      descriptems: p.justification?.descripteme_list.map(d => repo.Descriptem.make({
        startIndex: d.startIndex,
        endIndex: d.endIndex,
        interviewId: interview.id
      }))
    })
  })
}

function mapConcreteCategory (c: OldCategory, interview: Interview): CategoryInstance {
  const model = mapSchemaCategoryReference(c.schemaCategory)
  return repo.CategoryInstance.make({
    categorymodelId: model.id,
    justification: repo.Justification.make({
      descriptems: c.justification?.descripteme_list.map(d => repo.Descriptem.make({
        startIndex: d.startIndex,
        endIndex: d.endIndex,
        interviewId: interview.id
      }))
    }),
    properties: c.concreteProperty_list.map(p => mapConcreteProperty(p, interview))
  })
}

// Map an imported moment to a Moment
function mapMoment (m: OldMoment, index: number, interview: Interview): Moment {
  return repo.Moment.make({
    name: m.name,
    childIndex: index,
    color: fixColorName(m.color),
    comment: m.comment,
    isCollapsed: m.isCollapsed,
    isCommentVisible: m.isCommentVisible,
    isTransitional: m.transitional,
    categoryinstances: m.concreteCategory_list?.map(cc => mapConcreteCategory(cc, interview)),
    justification: repo.Justification.make({
      descriptems: m.justification?.descripteme_list.map(d => repo.Descriptem.make({
        startIndex: d.startIndex,
        endIndex: d.endIndex,
        interviewId: interview.id
      }))
    }),
    children: m.moment_list.map((c: OldMoment, index: number) => mapMoment(c, index, interview))
  })
}

function mapInterview (i: OldInterview): Interview {
  const interview: Interview = repo.Interview.make({
    date: i.date,
    color: fixColorName(i.color),
    comment: i.comment,
    participantName: i.participantName,
    text: i.interviewText.text
  })
  interview.annotations = repo.Annotation.make(i.interviewText.annotation_list.map((a: Annotation) => ({
    ...a,
    color: fixColorName(a.color),
    interview
  })))

  interview.analysis = repo.Analysis.make({
    rootMoment: mapMoment(i.rootMoment, 0, interview)
  })
  return interview
}

function mapSchemaProperty (sp: OldSchemaProperty): PropertyModel {
  const key = getReferenceId(sp)
  let model = idCache.PropertyModel[key] as PropertyModel
  if (!model) {
    model = repo.PropertyModel.make({
      name: sp.name
    })
    idCache.PropertyModel[key] = model
  }
  return model
}

function mapSchemaCategory (sc: OldSchemaCategory): CategoryModel {
  const key = getReferenceId(sc)
  let model = idCache.CategoryModel[key] as CategoryModel
  if (!model) {
    model = repo.CategoryModel.make({
      name: sc.name,
      color: fixColorName(sc.color),
      isExpanded: sc.expanded,
      properties: sc.schemaProperty_list?.map(p => mapSchemaProperty(p))
    })
    idCache.CategoryModel[key] = model
  }
  return model
}

function mapMomentType (mt: OldMomentType): MomentModel {
  const key = getReferenceId(mt)
  let model = idCache.MomentModel[key] as MomentModel
  if (!model) {
    model = repo.MomentModel.make({
      name: mt.name,
      color: fixColorName(mt.color),
      isExpanded: mt.expanded,
      // It should be mapped to existing defined refs
      categorymodels: mt.schemaCategory_list.map(mapSchemaCategoryReference)
    })
    idCache.MomentModel[key] = model
  }
  return model
}

function mapOldFolder (folder: OldSchemaFolder): ModelFolder {
    return repo.ModelFolder.make({
      name: folder.name,
      color: 'transparent',
      isExpanded: folder.expanded,
      folders: folder.schemaFolder_list.map(mapOldFolder),
      categorymodels: folder.schemaCategory_list.map(mapSchemaCategory),
      momentmodels: folder.schemaMomentType_list.map(mapMomentType)
    })
}

export const useProjectStore = defineStore('projectStore', () => {
  function getAllProjects (): Project[] {
    // Beware
    // https://pinia-orm.codedredd.de/guide/repository/retrieving-data#retrieving-models
      // this does not process relations (i.e. withAll will not work)
    return repo.Project.all()
  }

  function getProject (id: string): Project | null {
    return repo.Project
      .with('modelfolder')
      .with('interviews',
        query => query.with('annotations').with('analysis'))
      .find(id)
  }

  function getProjectByName (name: string): Project | null {
    return repo.Project.where('name', name).first()
  }

  function getFolder (id: string): ModelFolder | null {
      return repo.ModelFolder
        .with('categorymodels', (query) => { query.with('properties') })
        .with('momentmodels')
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

  function getCategoryInstance (id: string) {
    return repo.CategoryInstance
      .with('model')
      .with('justification', query => query.with('descriptems'))
      .with('properties', query => query.with('model'))
      .find(id)
  }

  function getCategoryModel (id: string) {
      return repo.CategoryModel.with('properties').find(id)
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
      .with('categoryinstances', (query) => query
        .with('justification', (q) => q.with('descriptems'))
        .with('properties', (q) => q.with('model')))
      .find(id)
  }

  function getMomentModel (id: string) {
      return repo.MomentModel.with('categorymodels').find(id) as MomentModel
    }

  function getProperty (id: string) {
    return repo.Property
      .with('model')
      .with('justification', (query) => query.with('descriptems'))
      .find(id)
  }

  function getInterviewDescriptems (id: string) {
    // Return the descriptems defined on a specific interview
    return repo.Descriptem.where('interviewId', id).with('interview').all()
  }

  function getJustificationParent (id: string) {
    // Parent can be either Category/Moment/Property
    let parent: Moment | CategoryInstance | Property | null = repo.Moment.find(id)
    if (!parent) {
      parent = repo.CategoryInstance.with('model').with('moment').find(id)
    }
    if (!parent) {
      parent = repo.Property
        .with('model')
        .with('categoryinstance', query =>
          query.with('model').with('moment'))
        .find(id)
    }
    return parent
  }

  function createProject (projectData: Subset<Project>) {
    repo.Project.save(projectData)
  }

  function importProject (data: any, filename: string) {
    // Load schema first so that idCache is properly initialized
    const id = filename.replace('.upmt', '').replace(/[^A-Za-z0-9_-]/g, '_')
    let out
    let schema
    if ('modelfolder' in data) {
      // New style
      out = repo.Project.save(data as Project)
      schema = out.modelfolder
      // We must remap models
    } else {
      // Old upmt files
      schema = mapOldFolder(data.schemaTreeRoot)
      out = repo.Project.save({
        id,
        filename,
        name: data.name,
        interviews: data.interview_list.map((i: OldInterview) => mapInterview(i)),
        modelfolder: schema
      })
    }
    console.log("Imported", { project: out, idcache: idCache })
    // Check missing ids in the loaded data: normally, all children
    // elements should have a link to the parent id
    const checkMissingRef = (folder: ModelFolder | null) => {
      if (!folder) {
        console.log("Null folder")
        return
      }
      for (const f of (folder.folders ?? [])) {
        if (f.parentId !== folder.id) {
            console.log("Error for f", folder, f)
        }
        checkMissingRef(f)
      }
      for (const cm of (folder.categorymodels ?? [])) {
        if (cm.modelfolderId !== folder.id) {
          console.log("Error for cm", folder, cm)
        }
        if (!cm.modelfolderId) {
          console.log("Empty modelfolderId for cm", folder, cm)
        }
      }
      for (const mm of (folder.momentmodels ?? [])) {
        if (mm.modelfolderId !== folder.id) {
          console.log("Error for mm", folder, mm)
        }
      }
    }
    // Compare the loaded folder structure with the structure returned through getFolder
      // by comparing the number of children (categorymodels, momentmodels)
    const compareFolder = (folder: ModelFolder | null) => {
      if (!folder) {
        console.log("NULL folder???")
        return
      }
      const stored = getFolder(folder.id)
      if (!stored) {
        console.log("NULL folder", folder.id)
        return
      }
      if (folder.categorymodels.length !== stored.categorymodels.length) {
        const missing = (new Set(folder.categorymodels.map(cm => cm.name)) as any).difference(new Set(stored.categorymodels.map(cm => cm.name)))
        console.log("Differing cm for folder", folder.name, folder.id, folder.categorymodels.length, stored.categorymodels.length, missing)
      }
      if (folder.momentmodels.length !== stored.momentmodels.length) {
        console.log("Differing mm for folder", folder.name, folder.id, folder.momentmodels.length, stored.momentmodels.length)
      }
      if (folder.folders.length !== stored.folders.length) {
        console.log("Differing folder count for folder", folder.name, folder.id, folder.folders.length, stored.folders.length)
      }
      for (const f of folder.folders) {
        compareFolder(f)
      }
    }
    /* FIXME: to remove once loading is solid */
    console.log("Checking refs")
    checkMissingRef(schema)
    console.log("Comparing loaded vs stored")
    compareFolder(schema)
    return out
  }

  function loadProject (url: string) {
    return axios.get(url).then((response) => {
      const p = importProject(response.data, url)
      return p
    })
  }

  /* Return a project structure with all relationships hydrated */
  function hydrateProject (id: string): any {
    const project = { ...getProject(id) }
    /* Go through all related elements and fetch them */
    console.log("Export project", project)
    const hydrateFolder = (id: string) => {
      const folder = getFolder(id)
      if (folder) {
        folder.categorymodels = folder.categorymodels.map(cm => getCategoryModel(cm.id) as CategoryModel)
        folder.momentmodels = folder.momentmodels.map(mm => getMomentModel(mm.id))
        folder.folders = folder.folders.map(f => hydrateFolder(f.id) as ModelFolder)
      }
        return folder
    }
    if (project.modelfolder) {
      project.modelfolder = hydrateFolder(project.modelfolder.id) as ModelFolder
    }
    return project
  }

  function updateProperty (identifier: string, values: object) {
    repo.Property.where('id', identifier).update(values)
  }

  function updateMoment (identifier: string, values: object) {
    repo.Moment.where('id', identifier).update(values)
  }

  function updateModelFolder (identifier: string, values: object) {
    repo.ModelFolder.where('id', identifier).update(values)
  }

  function updateCategoryModel (identifier: string, values: object) {
    repo.CategoryModel.where('id', identifier).update(values)
  }

  function updatePropertyModel (identifier: string, values: object) {
    repo.PropertyModel.where('id', identifier).update(values)
  }

  function momentAddCategoryModel (cmId: string, destinationMomentId: string) {
    const categoryModel = getCategoryModel(cmId)
    const moment = getMoment(destinationMomentId)

    console.log("addCategoryModel", moment, categoryModel)
    if (moment && categoryModel) {
      console.log("Creating new categoryinstance ", categoryModel.name)
      // We create a new Category and attach it to the destinationMomentId
      repo.CategoryInstance.save({
        categoryModelId: cmId,
        justification: {
          name: ''
        },
        properties: categoryModel.properties.map(pm => ({
          value: '',
          propertymodelId: pm.id,
          justification: {
            name: ''
          },
          model: pm
        })),
        momentId: destinationMomentId,
        model: categoryModel
      })
    }
  }

  function addMoment (name: string,
    referenceMomentId: string,
    where = "", // before, after, or anything else for inside
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
        const descriptems = textselection ? [ { ...textselection } ] : []
        const data = {
          name,
          parentId: destination.id,
          childIndex,
          analysisId: referenceMoment.analysisId,
          justification: {
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
    console.log("Trying to move", sourceMomentId, where || "to", referenceMomentId)
    // Empty sourceId. Can be from New Moment button to create a new moment.
    if (!sourceMomentId) {
      addMoment("New moment",
        referenceMomentId,
        where)
    } else {
      const source = getMoment(sourceMomentId)
      const reference = getMoment(referenceMomentId)
      let parent = reference

      if (source && reference) {
        let childIndex = 0

        if (where.startsWith('in:')) {
          parent = getMoment(where.slice(3))
        } else if (where === 'before' && reference.parent) {
          parent = getMoment(reference.parentId)
          childIndex = reference.childIndex
        } else if (where === 'after' && reference.parent) {
          parent = getMoment(reference.parentId)
          childIndex = reference.childIndex + 1
        }
        if (parent) {
          const children = [ ...parent.children ]
          repo.Moment.save({
            ...source.toJSON(),
            parentId: parent.id,
            childIndex
          })
          // Items before childIndex are the same. Renumber following ones.
          children.slice(childIndex).forEach(moment => {
            updateMoment(moment.id, { childIndex: moment.childIndex + 1 })
          })
        } else {
          console.error("Strange error - parent", parent, " is null")
        }
      }
    }
  }

  function addCategoryModel (parentId: string, name: string) {
    return repo.CategoryModel.save({ parentId, name })
  }

  function addModelFolder (parentId: string, name: string) {
    return repo.ModelFolder.save({ parentId, name })
  }

  function addPropertyModel (parentId: string, name: string) {
    return repo.PropertyModel.save({ categorymodelId: parentId, name })
  }

  function deleteAnnotation (annotationId: string) {
    repo.Annotation.where('id', annotationId).delete()
  }

  function deleteCategoryInstance (categoryinstanceId: string) {
    repo.CategoryInstance.where('id', categoryinstanceId).delete()
  }

  function deleteDescriptem (descriptemId: string) {
    repo.Descriptem.where('id', descriptemId).delete()
  }

  function deleteModelFolder (folderId: string) {
    // FIXME: should check that all descendants (categorymodel, propertymodel) do not have any instance
    repo.ModelFolder.where('id', folderId).delete()
  }

  function deleteCategoryModel (cmId: string) {
    // FIXME: should check that all descendants (propertymodel) do not have any instance
    repo.CategoryModel.where('id', cmId).delete()
  }

  function deletePropertyModel (pmId: string) {
    // FIXME: should check that it has no instance
    repo.PropertyModel.where('id', pmId).delete()
  }

  function duplicateCategoryInstance (categoryinstanceId: string) {
    // Duplicate a CategoryInstance with the same parent
    const ci = getCategoryInstance(categoryinstanceId)
    if (ci) {
      console.log("Duplicating", ci.toJSON())
      repo.CategoryInstance.save({
        ...ci.toJSON()
      })
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

  function addTextSelectionToCategoryInstance (selectionData: TextSelection, categoryinstanceId: string) {
    // Add JSON representation of text selection (Annotation or Descriptem) to CategoryInstance
    const ci = getCategoryInstance(categoryinstanceId)
    if (ci) {
      if (!ci.justification) {
        // Create justification + descriptem
        repo.Justification.save({
          parentId: ci.id,
          descriptems: [
            selectionData
          ]
        })
      } else {
        repo.Descriptem.save({
          ...selectionData,
          justificationId: ci.justification.id
        })
      }
    }
  }

  function addTextSelectionToProperty (selectionData: TextSelection, propertyId: string) {
    // Add JSON representation of text selection (Annotation or Descriptem) to property
    const property = getProperty(propertyId)
    console.log("Add textselection", selectionData, "to", property)
    if (property) {
      if (!property.justification) {
        // Create justification + descriptem
        repo.Justification.save({
          parentId: property.id,
          descriptems: [
            selectionData
          ]
        })
      } else {
        repo.Descriptem.save({
          ...selectionData,
          justificationId: property.justification.id
        })
      }
    }
  }

  return {
    addCategoryModel,
    addModelFolder,
    addMoment,
    addPropertyModel,
    addTextSelectionToMoment,
    addTextSelectionToCategoryInstance,
    addTextSelectionToProperty,
    createProject,
    deleteAnnotation,
    deleteCategoryModel,
    deleteCategoryInstance,
    deleteDescriptem,
    deletePropertyModel,
    deleteModelFolder,
    duplicateCategoryInstance,
    duplicateDescriptem,
    importProject,
    hydrateProject,
    getAllProjects,
    getProject,
    getProjectByName,
    getFolder,
    getRepo,
    getAnalysis,
    getAnnotation,
    getCategoryInstance,
    getCategoryModel,
    getDescriptem,
    getInterview,
    getInterviewDescriptems,
    getJustification,
    getJustificationParent,
    getMoment,
    getMomentModel,
    getProperty,
    loadProject,
    momentAddCategoryModel,
    moveMoment,
    updateProperty,
    updateMoment,
    updateModelFolder,
    updateCategoryModel,
    updatePropertyModel
  }
})
