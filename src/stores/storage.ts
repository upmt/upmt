import { fs } from '@zenfs/core'
import { timestampAdd, timestampGet } from 'stores/util'
import { useProjectStore } from 'stores/projectStore'

const BASEDIR = '/projects'

function id2path (id: string) {
  if (!fs.existsSync(BASEDIR)) {
    fs.mkdirSync(BASEDIR)
  }
  return `${BASEDIR}/${id}`
}

/**
 * List current stored projects
 * @returns {Array} List of stored project ids
 */
function listStoredProjects () {
  if (!fs.existsSync(BASEDIR)) {
    fs.mkdirSync(BASEDIR)
    return []
  }
  return fs.readdirSync(BASEDIR)
}

/**
 * Get the stored files of project id as JSON objects
 */
function getProjectFiles(id: string)  {
  const projectPath = id2path(id)
  let versions: string[] = []
  try {
    versions = fs.readdirSync(projectPath).sort().reverse()
  } catch (error) {
    console.log("No such stored project", id, error)
  }
  return versions.map(basename => {
    return {
      id,
      basename,
      filename: `${projectPath}/${basename}`,
      date: timestampGet(basename)
    }
  })
}

function isStoredProject (id: string) {
  const projectPath = id2path(id)
  return fs.existsSync(projectPath) && fs.readdirSync(projectPath).length > 0
}

/**
 * Get the latest version of project id as JSON object
 */
function getStoredProject(id: string)  {
  const projectPath = id2path(id)
  try {
    const versions = fs.readdirSync(projectPath).sort().reverse()
    if (versions.length) {
      const projectFilename = versions[0]
      const filename = `${projectPath}/${projectFilename}`
      const data = JSON.parse(fs.readFileSync(filename).toString())
      data.filename = projectFilename
      return data
    }
    console.log("No version for project", id)
    return null
  } catch (error) {
    console.log("No such stored project", id, error)
    return null
  }
}

/**
 * Get the latest info of project id as JSON object
 */
function getProjectInfo(id: string)  {
  const files = getProjectFiles(id)
  if (files.length) {
    return files[0]
  } else {
    return null
  }
}

/**
 * Store the project in browser storage
 * @returns string: the filename
 */
function storeProject (projectId: string) {
  const projectDir = id2path(projectId)
  const data = useProjectStore().hydrateProject(projectId)
  const basename = timestampAdd(projectId)

  // Structure: /projects/{project.id}/{timestamp}-{projectId}.upmt
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir)
  }

  fs.writeFileSync(`${projectDir}/${basename}.upmt`, JSON.stringify(data, null, 2))

  return basename
}

export {
   getProjectFiles,
   getProjectInfo,
   getStoredProject,
   isStoredProject,
   listStoredProjects,
   storeProject
}
