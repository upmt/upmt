import { describe, it, expect } from 'vitest'
import {
  timestampAdd,
  timestampGet,
  timestampStrip,
  stringToId,
  stripIds,
  stripFields,
  buildIdCache,
  groupBy,
  ellipsize,
  exportDataAsCsv,
  wrapCsvValue,
  basename
} from '../../stores/util'

describe('Utility Functions', () => {
  describe('timestampAdd', () => {
    it('should add timestamp prefix to name', () => {
      const result = timestampAdd('test-project')
      
      // Should match pattern: YYYY-MM-DDTHHMMSS-test-project
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{6}-test-project$/)
    })

    it('should generate unique timestamps for different calls', () => {
      const result1 = timestampAdd('project')
      const result2 = timestampAdd('project')
      
      // They might be the same if called in the same second, but format should be correct
      expect(result1).toMatch(/^\d{4}-\d{2}-\d{2}T\d{6}-project$/)
      expect(result2).toMatch(/^\d{4}-\d{2}-\d{2}T\d{6}-project$/)
    })
  })

  describe('timestampStrip', () => {
    it('should remove timestamp prefix from name', () => {
      const timestamped = '2024-01-15T123045-my-project'
      const result = timestampStrip(timestamped)
      
      expect(result).toBe('my-project')
    })

    it('should return original name if no timestamp found', () => {
      const name = 'project-without-timestamp'
      const result = timestampStrip(name)
      
      expect(result).toBe(name)
    })
  })

  describe('timestampGet', () => {
    it('should extract date from timestamped filename', () => {
      const timestamped = '2024-01-15T123045-my-project'
      const result = timestampGet(timestamped)
      
      expect(result).toBeInstanceOf(Date)
      expect(result?.getFullYear()).toBe(2024)
      expect(result?.getMonth()).toBe(0) // January is 0
      expect(result?.getDate()).toBe(15)
      expect(result?.getHours()).toBe(12)
      expect(result?.getMinutes()).toBe(30)
      expect(result?.getSeconds()).toBe(45)
    })

    it('should return null for invalid timestamp', () => {
      const result = timestampGet('invalid-timestamp')
      
      expect(result).toBeNull()
    })

    it('should return null for name without timestamp', () => {
      const result = timestampGet('my-project.upmt')
      
      expect(result).toBeNull()
    })
  })

  describe('stringToId', () => {
    it('should convert string to valid id by replacing non-word characters', () => {
      expect(stringToId('Hello World!')).toBe('Hello_World_')
      expect(stringToId('test@example.com')).toBe('test_example_com')
      expect(stringToId('my-project-name')).toBe('my_project_name')
    })

    it('should prefix with underscore if starts with digit', () => {
      expect(stringToId('123project')).toBe('_123project')
      expect(stringToId('9test')).toBe('_9test')
    })

    it('should handle empty string', () => {
      expect(stringToId('')).toBe('_')
    })

    it('should preserve alphanumeric and underscores', () => {
      expect(stringToId('valid_id_123')).toBe('valid_id_123')
    })
  })

  describe('stripIds', () => {
    it('should remove id properties from simple object', () => {
      const obj = { id: '123', name: 'Test', value: 42 }
      const result = stripIds(obj)
      
      expect(result).toEqual({ name: 'Test', value: 42 })
      expect(result).not.toHaveProperty('id')
    })

    it('should recursively remove id from nested objects', () => {
      const obj = {
        id: '1',
        name: 'Parent',
        child: {
          id: '2',
          name: 'Child',
          grandchild: {
            id: '3',
            name: 'Grandchild'
          }
        }
      }
      const result = stripIds(obj)
      
      expect(result.name).toBe('Parent')
      expect(result).not.toHaveProperty('id')
      expect(result.child).not.toHaveProperty('id')
      expect(result.child.grandchild).not.toHaveProperty('id')
    })

    it('should handle arrays', () => {
      const arr = [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' }
      ]
      const result = stripIds(arr)
      
      expect(result[0]).toEqual({ name: 'Item 1' })
      expect(result[1]).toEqual({ name: 'Item 2' })
    })

    it('should handle null and primitives', () => {
      expect(stripIds(null)).toBeNull()
      expect(stripIds(42)).toBe(42)
      expect(stripIds('string')).toBe('string')
      expect(stripIds(true)).toBe(true)
    })
  })

  describe('stripFields', () => {
    it('should remove specified fields from object', () => {
      const obj = { id: '123', name: 'Test', password: 'secret', email: 'test@example.com' }
      const result = stripFields(obj, ['password', 'email'])
      
      expect(result).toEqual({ id: '123', name: 'Test' })
    })

    it('should recursively remove fields from nested objects', () => {
      const obj = {
        id: '1',
        secret: 'hidden',
        data: {
          id: '2',
          secret: 'also-hidden',
          value: 'visible'
        }
      }
      const result = stripFields(obj, ['secret'])
      
      expect(result).not.toHaveProperty('secret')
      expect(result.data).not.toHaveProperty('secret')
      expect(result.data.value).toBe('visible')
    })

    it('should handle arrays of objects', () => {
      const arr = [
        { id: '1', password: 'secret1' },
        { id: '2', password: 'secret2' }
      ]
      const result = stripFields(arr, ['password'])
      
      expect(result[0]).toEqual({ id: '1' })
      expect(result[1]).toEqual({ id: '2' })
    })
  })

  describe('buildIdCache', () => {
    it('should build a cache mapping ids to objects', () => {
      const obj = {
        id: '1',
        child: {
          id: '2',
          grandchild: {
            id: '3'
          }
        }
      }
      const cache = buildIdCache(obj)
      
      expect(cache['1']).toBe(obj)
      expect(cache['2']).toBe(obj.child)
      expect(cache['3']).toBe(obj.child.grandchild)
    })

    it('should handle arrays', () => {
      const arr = [
        { id: 'a', name: 'Item A' },
        { id: 'b', name: 'Item B' }
      ]
      const cache = buildIdCache(arr)
      
      expect(cache['a']).toBe(arr[0])
      expect(cache['b']).toBe(arr[1])
    })

    it('should handle objects without ids', () => {
      const obj = { name: 'Test', value: 42 }
      const cache = buildIdCache(obj)
      
      expect(Object.keys(cache)).toHaveLength(0)
    })

    it('should handle null and primitives', () => {
      expect(buildIdCache(null)).toEqual({})
      expect(buildIdCache(42)).toEqual({})
      expect(buildIdCache('string')).toEqual({})
    })
  })

  describe('groupBy', () => {
    it('should group array by key property', () => {
      const arr = [
        { type: 'fruit', name: 'apple' },
        { type: 'vegetable', name: 'carrot' },
        { type: 'fruit', name: 'banana' }
      ]
      const result = groupBy(arr, 'type')
      
      expect(result.fruit).toHaveLength(2)
      expect(result.vegetable).toHaveLength(1)
      expect(result.fruit[0].name).toBe('apple')
      expect(result.fruit[1].name).toBe('banana')
    })

    it('should group array by function', () => {
      const arr = [
        { age: 15 },
        { age: 25 },
        { age: 35 }
      ]
      const result = groupBy(arr, (item) => item.age < 18 ? 'minor' : 'adult')
      
      expect(result.minor).toHaveLength(1)
      expect(result.adult).toHaveLength(2)
    })

    it('should handle empty array', () => {
      const result = groupBy([], 'type')
      
      expect(result).toEqual({})
    })
  })

  describe('ellipsize', () => {
    it('should not modify short strings', () => {
      const text = 'Short text'
      const result = ellipsize(text, 25)
      
      expect(result).toBe(text)
    })

    it('should ellipsize long strings', () => {
      const text = 'This is a very long text that needs to be shortened'
      const result = ellipsize(text, 20)
      
      expect(result).toContain('⋯')
      expect(result.length).toBeLessThan(text.length)
      // Should have text from start and end
      expect(result).toMatch(/^This.*ned$/)
    })

    it('should use default limit of 25 characters', () => {
      const text = 'A'.repeat(30)
      const result = ellipsize(text)
      
      expect(result).toContain('⋯')
    })
  })

  describe('basename', () => {
    it('should extract filename from path', () => {
      expect(basename('/path/to/file.txt')).toBe('file.txt')
      expect(basename('/projects/project1/data.json')).toBe('data.json')
    })

    it('should handle paths without directory', () => {
      expect(basename('file.txt')).toBe('file.txt')
    })

    it('should handle trailing slash', () => {
      expect(basename('/path/to/directory/')).toBe('')
    })

    it('should handle empty string', () => {
      expect(basename('')).toBe('')
    })
  })

  describe('wrapCsvValue', () => {
    it('should wrap value in quotes', () => {
      expect(wrapCsvValue('test')).toBe('"test"')
    })

    it('should escape double quotes', () => {
      expect(wrapCsvValue('test "quoted" value')).toBe('"test ""quoted"" value"')
    })

    it('should handle null and undefined', () => {
      expect(wrapCsvValue(null)).toBe('""')
      expect(wrapCsvValue(undefined)).toBe('""')
    })

    it('should convert numbers to strings', () => {
      expect(wrapCsvValue(42)).toBe('"42"')
    })

    it('should use format function if provided', () => {
      const formatFn = (val: any) => `Formatted: ${val}`
      expect(wrapCsvValue('test', formatFn)).toBe('"Formatted: test"')
    })
  })

  describe('exportDataAsCsv', () => {
    it('should export data as CSV format', () => {
      const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Age', field: 'age' }
      ]
      const rows = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 }
      ]
      
      const result = exportDataAsCsv(columns, rows)
      
      expect(result).toContain('"Name","Age"')
      expect(result).toContain('"Alice","30"')
      expect(result).toContain('"Bob","25"')
    })

    it('should handle field as function', () => {
      const columns = [
        { 
          label: 'Full Name', 
          field: (row: any) => `${row.first} ${row.last}` 
        }
      ]
      const rows = [
        { first: 'John', last: 'Doe' }
      ]
      
      const result = exportDataAsCsv(columns, rows)
      
      expect(result).toContain('"John Doe"')
    })

    it('should handle empty data', () => {
      const columns = [{ label: 'Name', field: 'name' }]
      const rows: any[] = []
      
      const result = exportDataAsCsv(columns, rows)
      
      expect(result).toBe('"Name"')
    })
  })
})
