import axios from 'axios'
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
  } catch (_error) {
    console.log("No such stored project", id)
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

/**
 * Get the info of the latest version fo project id as JSON object
 */
function getProjectFileInfo(id: string)  {
  const files = getProjectFiles(id)
  if (files.length) {
    return files[0]
  } else {
    return null
  }
}

function isStoredProject (id: string) {
  const projectPath = id2path(id)
  return fs.existsSync(projectPath) && fs.readdirSync(projectPath).length > 0
}

/**
 * Get the latest version of project id as JSON object
 *
 * If filename is provided, then use this (stored) path to load the
 *  data instead of the last saved version.
 */
function getStoredProjectData(id: string, filename: string = "")  {
  if (! filename) {
    // Use latest version
    const info = getProjectFileInfo(id)
    if (! info)
      return null
    filename = info.filename
  }
  try {
    const data = JSON.parse(fs.readFileSync(filename).toString())
    data.filename = filename
    return data
  } catch (error) {
    console.log("No such stored project", id, error)
    return null
  }
}

/**
 * Delete project (moving to trash)
 */
function deleteStoredProject(id: string)  {
  const projectPath = id2path(id)
  try {
    fs.rmSync(projectPath)
    console.log(`Project ${projectPath} deleted`)
    return null
  } catch (error) {
    console.log("Error when deleting project", id, error)
    return null
  }
}

/**
 * Get information about a stored projects
 * @returns ProjectInfo object
 */
function getStoredProjectInfo (projectId: string) {
  const data = getStoredProjectData(projectId)
  if (! data)
    return null
  const files = getProjectFiles(projectId)
  const info = files.length ? files[0] : null
  return {
    id: projectId,
    basename: info?.basename ?? "",
    filename: info?.filename ?? "",
    date: info?.date ?? null,
    modified: data.modified,
    creator: data.creator,
    contributor: data.contributor,
    name: data.name,
    note: data.note,
    interview_count: data.interviews.length,
    version_count: files.length
  }
}


/**
 * Get information about all stored projects
 * @returns {Array} List of information
 */
function listStoredProjectsInfo () {
  return  listStoredProjects().map(id => getStoredProjectInfo(id))
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

/**
 * Import project from URL directly into storage
 * @returns Promise<string>: the projectId
 */
function importProjectFromUrl (url: string, projectId: string = "") {
  return axios.get(url).then((response) => {
    if (response.headers['content-type'] == 'text/html') {
      console.log(`Invalid data (text/html) from ${url}`)
      return null
    } else {
      response.data.id = projectId
      const projectDir = id2path(projectId)
      const basename = timestampAdd(projectId)
      // Structure: /projects/{project.id}/{timestamp}-{projectId}.upmt
      if (!fs.existsSync(projectDir)) {
        fs.mkdirSync(projectDir)
      }
      fs.writeFileSync(`${projectDir}/${basename}.upmt`, response.data)
      return projectId
    }
  })
}

export {
   getProjectFiles,
   getProjectFileInfo,
   getStoredProjectData,
   getStoredProjectInfo,
   isStoredProject,
   listStoredProjects,
   listStoredProjectsInfo,
   deleteStoredProject,
   storeProject,
   importProjectFromUrl
}
