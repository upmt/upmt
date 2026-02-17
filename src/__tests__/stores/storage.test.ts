import { describe, it, expect, beforeEach, vi } from 'vitest'
import { fs } from '@zenfs/core'
import {
  listStoredProjects,
  getProjectFiles,
  getStoredProject,
  isStoredProject,
  deleteStoredProject,
  storeProject
} from '../../stores/storage'

// Mock the filesystem and stores
vi.mock('@zenfs/core', () => ({
  fs: {
    existsSync: vi.fn(),
    mkdirSync: vi.fn(),
    readdirSync: vi.fn(),
    readFileSync: vi.fn(),
    writeFileSync: vi.fn(),
    rmSync: vi.fn(),
  }
}))

vi.mock('../../stores/projectStore', () => ({
  useProjectStore: vi.fn(() => ({
    hydrateProject: vi.fn(() => ({
      id: 'test-project',
      name: 'Test Project',
      version: 3,
      creator: 'Test Creator',
      contributor: 'Test Contributor',
      created: '2024-01-01',
      modified: '2024-01-02',
    }))
  }))
}))

describe('Storage Module', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('listStoredProjects', () => {
    it('should return empty array when projects directory does not exist', () => {
      vi.mocked(fs.existsSync).mockReturnValue(false)
      
      const result = listStoredProjects()
      
      expect(result).toEqual([])
      expect(fs.mkdirSync).toHaveBeenCalledWith('/projects')
    })

    it('should return list of project ids when directory exists', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.readdirSync).mockReturnValue(['project1', 'project2', 'project3'] as any)
      
      const result = listStoredProjects()
      
      expect(result).toEqual(['project1', 'project2', 'project3'])
      expect(fs.readdirSync).toHaveBeenCalledWith('/projects')
    })
  })

  describe('isStoredProject', () => {
    it('should return false when project directory does not exist', () => {
      vi.mocked(fs.existsSync).mockReturnValue(false)
      
      const result = isStoredProject('test-project')
      
      expect(result).toBe(false)
    })

    it('should return false when project directory is empty', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.readdirSync).mockReturnValue([] as any)
      
      const result = isStoredProject('test-project')
      
      expect(result).toBe(false)
    })

    it('should return true when project has stored files', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.readdirSync).mockReturnValue(['2024-01-01T120000-test-project.upmt'] as any)
      
      const result = isStoredProject('test-project')
      
      expect(result).toBe(true)
    })
  })

  describe('getProjectFiles', () => {
    it('should return empty array when project does not exist', () => {
      vi.mocked(fs.readdirSync).mockImplementation(() => {
        throw new Error('ENOENT: no such file or directory')
      })
      
      const result = getProjectFiles('test-project')
      
      expect(result).toEqual([])
    })

    it('should return sorted list of project files with metadata', () => {
      vi.mocked(fs.readdirSync).mockReturnValue([
        '2024-01-01T120000-test-project.upmt',
        '2024-01-02T130000-test-project.upmt',
        '2024-01-03T140000-test-project.upmt'
      ] as any)
      
      const result = getProjectFiles('test-project')
      
      expect(result).toHaveLength(3)
      // Should be sorted in reverse order (newest first)
      expect(result[0].basename).toBe('2024-01-03T140000-test-project.upmt')
      expect(result[1].basename).toBe('2024-01-02T130000-test-project.upmt')
      expect(result[2].basename).toBe('2024-01-01T120000-test-project.upmt')
      
      // Check structure
      expect(result[0]).toHaveProperty('id', 'test-project')
      expect(result[0]).toHaveProperty('filename', '/projects/test-project/2024-01-03T140000-test-project.upmt')
      expect(result[0]).toHaveProperty('date')
    })
  })

  describe('getStoredProject', () => {
    it('should return null when project does not exist', () => {
      vi.mocked(fs.readdirSync).mockImplementation(() => {
        throw new Error('ENOENT: no such file or directory')
      })
      
      const result = getStoredProject('test-project')
      
      expect(result).toBeNull()
    })

    it('should return null when project has no versions', () => {
      vi.mocked(fs.readdirSync).mockReturnValue([] as any)
      
      const result = getStoredProject('test-project')
      
      expect(result).toBeNull()
    })

    it('should return latest version of project', () => {
      const mockProjectData = {
        id: 'test-project',
        name: 'Test Project',
        version: 3
      }
      
      vi.mocked(fs.readdirSync).mockReturnValue([
        '2024-01-01T120000-test-project.upmt',
        '2024-01-02T130000-test-project.upmt'
      ] as any)
      vi.mocked(fs.readFileSync).mockReturnValue(JSON.stringify(mockProjectData) as any)
      
      const result = getStoredProject('test-project')
      
      expect(result).toEqual({
        ...mockProjectData,
        filename: '2024-01-02T130000-test-project.upmt'
      })
      expect(fs.readFileSync).toHaveBeenCalledWith('/projects/test-project/2024-01-02T130000-test-project.upmt')
    })
  })

  describe('deleteStoredProject', () => {
    it('should delete project directory', () => {
      deleteStoredProject('test-project')
      
      expect(fs.rmSync).toHaveBeenCalledWith('/projects/test-project')
    })

    it('should handle errors gracefully', () => {
      vi.mocked(fs.rmSync).mockImplementation(() => {
        throw new Error('Permission denied')
      })
      
      const result = deleteStoredProject('test-project')
      
      expect(result).toBeNull()
    })
  })

  describe('storeProject', () => {
    it('should create project directory if it does not exist', () => {
      vi.mocked(fs.existsSync).mockReturnValue(false)
      
      storeProject('test-project')
      
      expect(fs.mkdirSync).toHaveBeenCalledWith('/projects/test-project')
    })

    it('should write project data to file with timestamp', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true)
      
      const basename = storeProject('test-project')
      
      expect(fs.writeFileSync).toHaveBeenCalled()
      // Verify the basename contains a timestamp pattern
      expect(basename).toMatch(/^\d{4}-\d{2}-\d{2}T\d{6}-test-project$/)
    })

    it('should save JSON with correct structure', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true)
      
      storeProject('test-project')
      
      const writeCall = vi.mocked(fs.writeFileSync).mock.calls[0]
      const savedData = JSON.parse(writeCall[1] as string)
      
      expect(savedData).toHaveProperty('id', 'test-project')
      expect(savedData).toHaveProperty('name', 'Test Project')
      expect(savedData).toHaveProperty('version', 3)
    })
  })
})
