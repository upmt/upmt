# Testing Guide for μPMT

This document describes the testing infrastructure and practices for the μPMT project.

## Test Framework

The project uses [Vitest](https://vitest.dev/) as the testing framework, which is specifically designed for Vite-based projects and provides:

- Fast test execution with Vite's transform pipeline
- Vue component testing support via `@vue/test-utils`
- Built-in code coverage with v8
- Jest-compatible API for easy migration
- ESM and TypeScript support out of the box

## Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes during development)
npm run test:watch

# Run tests with interactive UI (great for debugging)
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

Tests are organized in the `src/__tests__` directory, mirroring the source code structure:

```
src/
├── __tests__/
│   ├── stores/
│   │   ├── storage.test.ts    # Storage module tests
│   │   └── util.test.ts       # Utility functions tests
│   └── components/
│       └── StorageList.test.ts # Component tests
├── stores/
│   ├── storage.ts
│   └── util.ts
└── components/
    └── StorageList.vue
```

## Test Coverage

### Storage Module Tests (`src/__tests__/stores/storage.test.ts`)

Tests for browser-based file system operations:

- **`listStoredProjects()`**: List all stored project IDs
- **`getProjectFiles()`**: Get all versions of a project with metadata
- **`getStoredProject()`**: Retrieve the latest version of a project
- **`isStoredProject()`**: Check if a project has stored data
- **`storeProject()`**: Save a project to storage
- **`deleteStoredProject()`**: Remove a project from storage

These tests use mocked filesystem operations to ensure predictable behavior without actual file I/O.

### Utility Module Tests (`src/__tests__/stores/util.test.ts`)

Tests for helper functions used throughout the application:

#### Timestamp Functions
- **`timestampAdd()`**: Add timestamp prefix to filenames
- **`timestampGet()`**: Extract Date from timestamped filename
- **`timestampStrip()`**: Remove timestamp prefix

#### Data Transformation
- **`stringToId()`**: Convert strings to valid identifiers
- **`stripIds()`**: Recursively remove 'id' properties from objects
- **`stripFields()`**: Recursively remove specified fields from objects
- **`buildIdCache()`**: Create ID-to-object lookup maps

#### Data Processing
- **`groupBy()`**: Group array elements by key or function
- **`ellipsize()`**: Shorten long strings with ellipsis
- **`basename()`**: Extract filename from path
- **`wrapCsvValue()`**: Prepare values for CSV export
- **`exportDataAsCsv()`**: Convert data to CSV format

### Component Tests (`src/__tests__/components/`)

Tests for Vue components focusing on:

- Component structure validation
- Business logic verification
- Data layer functionality

**Note**: Full component rendering tests with Quasar UI framework require additional setup. Current tests focus on component contracts and the underlying business logic to ensure non-regression.

## Writing New Tests

### Basic Test Structure

```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('MyModule', () => {
  beforeEach(() => {
    // Setup runs before each test
    vi.clearAllMocks()
  })

  it('should do something', () => {
    // Arrange
    const input = 'test'
    
    // Act
    const result = myFunction(input)
    
    // Assert
    expect(result).toBe('expected')
  })
})
```

### Mocking Dependencies

Use Vitest's built-in mocking capabilities:

```typescript
// Mock an entire module
vi.mock('@zenfs/core', () => ({
  fs: {
    existsSync: vi.fn(),
    readFileSync: vi.fn(),
    writeFileSync: vi.fn(),
  }
}))

// Mock specific implementations
vi.mocked(fs.existsSync).mockReturnValue(true)
vi.mocked(fs.readFileSync).mockReturnValue('file content')
```

### Testing Async Functions

```typescript
it('should handle async operations', async () => {
  const result = await myAsyncFunction()
  expect(result).toBeDefined()
})
```

## Test Best Practices

1. **Write Descriptive Test Names**: Use clear, descriptive names that explain what is being tested
   ```typescript
   ✅ it('should return null when project does not exist')
   ❌ it('test1')
   ```

2. **Follow AAA Pattern**: Arrange, Act, Assert
   ```typescript
   it('should format timestamp correctly', () => {
     // Arrange
     const name = 'project'
     
     // Act
     const result = timestampAdd(name)
     
     // Assert
     expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{6}-project$/)
   })
   ```

3. **Test Edge Cases**: Include tests for empty inputs, null values, errors, etc.
   ```typescript
   it('should handle empty string', () => {
     expect(stringToId('')).toBe('_')
   })
   ```

4. **Keep Tests Independent**: Each test should be able to run in isolation
   - Use `beforeEach` to set up fresh state
   - Don't depend on test execution order

5. **Mock External Dependencies**: Isolate the code being tested
   - Mock file system operations
   - Mock network requests
   - Mock complex dependencies

## Coverage Goals

Aim for:
- **80%+ code coverage** for critical modules (storage, utilities)
- **100% coverage** for core business logic functions
- **Regression tests** for all bug fixes

View coverage reports:
```bash
npm run test:coverage
# Open coverage/index.html in your browser
```

## Continuous Integration

Tests are run automatically on:
- Pull requests
- Main branch commits
- Before production builds

## Troubleshooting

### Tests fail with "Cannot find module"
Run `npx quasar prepare` to generate required Quasar TypeScript configuration files.

### Mock not working as expected
Ensure you're calling `vi.clearAllMocks()` in `beforeEach` to reset mock state between tests.

### Component tests failing
For complex Quasar component testing, consider:
1. Simplifying tests to focus on business logic
2. Using E2E tests for full component interactions
3. Testing component contracts rather than full rendering

## Future Improvements

Potential enhancements to the test suite:

1. **E2E Tests**: Add Cypress or Playwright for full application testing
2. **Visual Regression Tests**: Screenshot comparison for UI components
3. **Performance Tests**: Benchmark critical operations
4. **Integration Tests**: Test interactions between multiple modules
5. **Component Rendering Tests**: Full Quasar component rendering with proper setup

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Vue Test Utils](https://test-utils.vuejs.org/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
