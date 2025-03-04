import { fs } from '@zenfs/core'
import { timestampAdd } from 'stores/util'
import { useProjectStore } from 'stores/projectStore'

const BASEDIR = '/projects'

function id2path (id: string) {
  return `${BASEDIR}/${id}`
}

/**
 * List current stored projects
 * @returns {Array} List of stored project ids
 */
function listStoredProjects () {
  return fs.readdirSync(BASEDIR)
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
 * Store the project in browser storage
 * @returns string: the filename
 */
function storeProject (projectId: string) {
  const baseDir = '/projects'
  const projectDir = `${baseDir}/${projectId}`
  const data = useProjectStore().hydrateProject(projectId)
  const basename = timestampAdd(projectId)

  // Structure: /projects/{project.id}/{timestamp}-{projectId}.upmt
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir)
  }
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir)
  }

  fs.writeFileSync(`${projectDir}/${basename}.upmt`, JSON.stringify(data, null, 2))

  return basename
}

export {
   getStoredProject,
   isStoredProject,
   listStoredProjects,
   storeProject
}
