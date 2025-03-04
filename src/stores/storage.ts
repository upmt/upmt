import { fs } from '@zenfs/core'

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
      const data = JSON.parse(fs.readFileSync(`${projectPath}/${projectFilename}`).toString())
      return data
    }
    console.log("No version for project", id)
    return null
  } catch (error) {
    console.log("No such stored project", id, error)
    return null
  }
}

export {
   getStoredProject,
   isStoredProject,
   listStoredProjects,
}
