import { defineStore } from 'pinia'
import { useRepo } from 'pinia-orm'
import Analysis from './models/analysis'
import Annotation from './models/annotation'
import Category from './models/category'
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
  CategoryModel:    useRepo(CategoryModel),
  Category:         useRepo(Category),
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

function mapConcreteProperty (p: OldProperty): Property {
  const key = getReferenceId(p.schemaProperty)
  const model = idCache.PropertyModel[key] as PropertyModel
  if (!model) {
    console.error(`Missing ${key}`)
  }
  return repo.Property.make({
    _model: model,
    propertymodelId: model.id,
    value: p.value,
    justification: p.justification
  })
}

function mapConcreteCategory (c: OldCategory): Category {
  const model = mapSchemaCategoryReference(c.schemaCategory)
  return repo.Category.make({
    _model: model,
    categorymodelId: model.id,
    justification: c.justification,
    properties: c.concreteProperty_list.map(mapConcreteProperty)
  })
}

// Map an imported moment to a Moment
function mapMoment (m: OldMoment, interview: Interview): Moment {
  return repo.Moment.make({
    name: m.name,
    color: fixColorName(m.color),
    comment: m.comment,
    isCollapsed: m.isCollapsed,
    isCommentVisible: m.isCommentVisible,
    isTransitional: m.transitional,
    categories: m.concreteCategory_list?.map(mapConcreteCategory),
    justification: repo.Justification.make({
      descriptems: m.justification?.descripteme_list.map(d => repo.Descriptem.make({
        startIndex: d.startIndex,
        endIndex: d.endIndex,
        interview
      }))
    }),
    children: m.moment_list.map((c: OldMoment) => mapMoment(c, interview))
  })
}

function mapInterview (i: OldInterview): Interview {
  const interview: Interview = repo.Interview.make({
    date: i.date,
    color: fixColorName(i.color),
    comment: i.comment,
    participantName: i.participantName,
    text: i.interviewText.text,
    annotations: i.interviewText.annotation_list.map((a: Annotation) => ({
      ...a,
      color: fixColorName(a.color)
    }))
  })
  interview.analysis = repo.Analysis.make({
    rootMoment: mapMoment(i.rootMoment, interview)
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
      properties: sc.schemaProperty_list?.map(mapSchemaProperty)
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

function mapFolder (f: OldSchemaFolder): ModelFolder {
  return repo.ModelFolder.make({
    name: f.name,
    color: 'transparent',
    isExpanded: f.expanded,
    folders: f.schemaFolder_list.map(mapFolder),
    categorymodels: f.schemaCategory_list.map(mapSchemaCategory),
    momentmodels: f.schemaMomentType_list.map(mapMomentType)
    })
}

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
  }),
  actions: {
    createProject (projectData: Subset<Project>) {
      repo.Project.save(projectData)
    },
    /* eslint-disable @typescript-eslint/no-explicit-any */
    importProject (data: any, filename: string) {
      // Load schema first so that idCache is properly initialized
      const schema = mapFolder(data.schemaTreeRoot)
      const out = repo.Project.save({
        filename,
        name: data.name,
        interviews: data.interview_list.map((i: OldInterview) => mapInterview(i)),
        modelfolder: schema
      })
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
        const stored = this.getFolder(folder.id)
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
      console.log("Checking refs", this)
      checkMissingRef(schema)
      console.log("Comparing loaded vs stored")
      compareFolder(schema)

      return out
    },
    getAllProjects (): Project[] {
      // Beware
      // https://pinia-orm.codedredd.de/guide/repository/retrieving-data#retrieving-models
      // this does not process relations (i.e. withAll will not work)
      return repo.Project.all()
    },
    getProject (id: string): Project {
      return repo.Project.find(id)
    },
    getFolder (id: string): ModelFolder | null {
      return repo.ModelFolder
        .with('categorymodels', (query) => { query.with('properties') })
        .with('momentmodels')
        .with('folders', (query) => { query.withAll() })
        .find(id)
    },
    getRepo () {
      return repo
    },
    getAnalysis (id: string) {
      return repo.Analysis.with('rootMoment', (query) => query.with('children')).find(id)
    },
    getCategory (id: string) {
      return repo.Category.with('justification').with('properties').find(id)
    },
    getDescriptem (id: string) {
      return repo.Descriptem.with('interviews').find(id)
    },
    getInterview (id: string) {
      return repo.Interview.with('annotations').with('analysis').find(id)
    },
    getJustification (id: string) {
      return repo.Justification.find(id)
    },
    getMoment (id: string) {
      return repo.Moment.with('children').with('justification').with('categories').find(id)
    },
    getProperty (id: string) {
      const prop = repo.Property.with('justification').find(id)
      if (prop) {
        prop.model = repo.PropertyModel.find(prop.propertymodelId)
      }
      return prop
    },
    updatePropertyValue (p: Property | null, value: string) {
      if (p) {
        p.value = value
        repo.Property.save(p)
      }
      return p
    },
    updateMomentName (m: Moment | null, name: string) {
      if (m) {
        m.name = name
        repo.Moment.save(m)
      }
      return m
    }
  }
})
