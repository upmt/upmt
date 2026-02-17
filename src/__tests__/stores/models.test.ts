import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import Project from '../../stores/models/project'

/**
 * Data Models Tests
 * 
 * Tests for ORM models used in storage and state management.
 * These models define the structure of data stored in the application.
 */

describe('Project Model', () => {
  beforeEach(() => {
    // Create a fresh Pinia instance for each test
    setActivePinia(createPinia())
  })

  it('should have correct entity name', () => {
    expect(Project.entity).toBe('projects')
  })

  it('should return label as name when name is set', () => {
    const project = new Project()
    project.name = 'Test Project'
    
    expect(project.label).toBe('Test Project')
  })

  it('should return "Unnamed project" when name is empty', () => {
    const project = new Project()
    project.name = ''
    
    expect(project.label).toBe('Unnamed project')
  })

  it('should serialize to JSON with all properties', () => {
    const project = new Project()
    project.name = 'Test Project'
    project.creator = 'Test Creator'
    project.contributor = 'Test Contributor'
    project.created = '2024-01-01'
    project.modified = '2024-01-02'
    project.note = 'Test note'
    project.filename = 'test.upmt'
    
    const json = project.toJSON(true)
    
    expect(json).toHaveProperty('name', 'Test Project')
    expect(json).toHaveProperty('creator', 'Test Creator')
    expect(json).toHaveProperty('contributor', 'Test Contributor')
    expect(json).toHaveProperty('created', '2024-01-01')
    expect(json).toHaveProperty('modified', '2024-01-02')
    expect(json).toHaveProperty('note', 'Test note')
    expect(json).toHaveProperty('filename', 'test.upmt')
  })

  it('should have version 3 by default', () => {
    const project = new Project()
    expect(project.version).toBe(3)
  })

  it('should have empty default values', () => {
    const project = new Project()
    
    expect(project.creator).toBe('')
    expect(project.contributor).toBe('')
    expect(project.created).toBe('')
    expect(project.modified).toBe('')
    expect(project.filename).toBe('')
    expect(project.name).toBe('')
    expect(project.note).toBe('')
  })
})

/**
 * Model Import Tests
 * 
 * Verify all models can be imported without errors
 */
describe('Model Imports', () => {
  it('should import Project model', async () => {
    const { default: Project } = await import('../../stores/models/project')
    expect(Project).toBeDefined()
    expect(Project.entity).toBe('projects')
  })

  it('should import BaseModel', async () => {
    const { default: BaseModel } = await import('../../stores/models/basemodel')
    expect(BaseModel).toBeDefined()
  })

  it('should import Interview model', async () => {
    const { default: Interview } = await import('../../stores/models/interview')
    expect(Interview).toBeDefined()
    expect(Interview.entity).toBe('interviews')
  })

  it('should import Moment model', async () => {
    const { default: Moment } = await import('../../stores/models/moment')
    expect(Moment).toBeDefined()
    expect(Moment.entity).toBe('moments')
  })

  it('should import Descriptem model', async () => {
    const { default: Descriptem } = await import('../../stores/models/descriptem')
    expect(Descriptem).toBeDefined()
    expect(Descriptem.entity).toBe('descriptems')
  })

  it('should import Annotation model', async () => {
    const { default: Annotation } = await import('../../stores/models/annotation')
    expect(Annotation).toBeDefined()
    expect(Annotation.entity).toBe('annotations')
  })

  it('should import Analysis model', async () => {
    const { default: Analysis } = await import('../../stores/models/analysis')
    expect(Analysis).toBeDefined()
    expect(Analysis.entity).toBe('analyses')
  })

  it('should import ModelFolder model', async () => {
    const { default: ModelFolder } = await import('../../stores/models/modelfolder')
    expect(ModelFolder).toBeDefined()
    expect(ModelFolder.entity).toBe('modelfolders')
  })

  it('should import Justification model', async () => {
    const { default: Justification } = await import('../../stores/models/justification')
    expect(Justification).toBeDefined()
    expect(Justification.entity).toBe('justifications')
  })

  it('should import SpecificSynchronicModel model', async () => {
    const { default: SpecificSynchronicModel } = await import('../../stores/models/specificsynchronicmodel')
    expect(SpecificSynchronicModel).toBeDefined()
    expect(SpecificSynchronicModel.entity).toBe('specificsynchronicmodel')
  })

  it('should import SpecificSynchronicCategory model', async () => {
    const { default: SpecificSynchronicCategory } = await import('../../stores/models/specificsynchroniccategory')
    expect(SpecificSynchronicCategory).toBeDefined()
    expect(SpecificSynchronicCategory.entity).toBe('specificsynchroniccategories')
  })

  it('should import DetachedSynchronicModel model', async () => {
    const { default: DetachedSynchronicModel } = await import('../../stores/models/detachedsynchronicmodel')
    expect(DetachedSynchronicModel).toBeDefined()
    expect(DetachedSynchronicModel.entity).toBe('detachedsynchronicmodel')
  })
})
