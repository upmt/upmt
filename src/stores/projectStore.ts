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

const idCache: Record<string, Record<number, ReffableModel>> = {
  CategoryModel: {} as Record<number, CategoryModel>,
  PropertyModel: {} as Record<number, PropertyModel>,
  MomentModel: {} as Record<number, MomentModel>
}
interface OldReference {
   "@id": number
}
// .interview_list[0].rootMoment.moment_list[0].moment_list[0].moment_list[0].concreteCategory_list[0].concreteProperty_list[0]
interface OldSchemaProperty {
   "@id": number
   expanded: boolean
   name: string
}
interface OldSchemaCategory {
   "@id": number
   color: string
   expanded: boolean
   name: string
   schemaProperty_list: OldSchemaProperty[]
}
interface OldMomentType {
   "@id": number
   color: string
   expanded: boolean
   name: string
   schemaCategory_list: OldSchemaCategory[]
}
interface OldSchemaFolder {
   "@id": string
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
function mapConcreteProperty (p: OldProperty): Property {
  const model = idCache.PropertyModel[p.schemaProperty['@id']] as PropertyModel
  return repo.Property.make({
    propertymodelId: model.id,
    value: p.value,
    justification: p.justification
  })
}

function mapConcreteCategory (c: OldCategory): Category {
  const model = idCache.CategoryModel[c.schemaCategory['@id']] as CategoryModel
  if (!model) {
    console.error(`Missing ${c.schemaCategory['@id']} schemaCategory`)
  }
  return repo.Category.make({
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
  let model = idCache.PropertyModel[sp['@id']] as PropertyModel
  if (!model) {
    model = repo.PropertyModel.make({
      name: sp.name
    })
    idCache.PropertyModel[sp['@id']] = model
  }
  return model
}

function mapSchemaCategory (sc: OldSchemaCategory): CategoryModel {
  let model = idCache.CategoryModel[sc['@id']] as CategoryModel
  if (!model) {
    model = repo.CategoryModel.make({
      name: sc.name,
      color: fixColorName(sc.color),
      isExpanded: sc.expanded,
      /* FIXME: check ?. */
      properties: sc.schemaProperty_list?.map(mapSchemaProperty)
    })
    idCache.CategoryModel[sc['@id']] = model
  }
  return model
}

function mapMomentType (mt: OldMomentType): MomentModel {
  let model = idCache.MomentModel[mt['@id']] as MomentModel
  if (!model) {
    model = repo.MomentModel.make({
      id: mt['@id'],
      name: mt.name,
      color: fixColorName(mt.color),
      isExpanded: mt.expanded,
      // It should be mapped to existing defined refs
      categorymodels: mt.schemaCategory_list.map(mapSchemaCategory)
    })
    idCache.MomentModel[mt['@id']] = model
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
          console.log("Differing cm for folder", folder.name, folder.id, folder.categorymodels.length, stored.categorymodels.length)
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
      console.log("Checking refs", this)
      checkMissingRef(schema)
      // Loaded folder
      // console.log("Re-Checking refs")
      // const loaded = this.getFolder(schema.id)
      // checkMissingRef(loaded)
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
    getInterview (id: string): Interview {
      return repo.Interview.find(id)
    },
    getFolder (id: string): ModelFolder | null {
      return repo.ModelFolder
        .with('categorymodels', (query) => { query.with('properties') })
        .with('momentmodels', (query) => { query.with('categorymodels', (query) => { query.with('properties') }) })
        .with('folders', (query) => { query.withAll() })
        .find(id)
    },
    getRepo () {
      return repo
    }
  }
})
