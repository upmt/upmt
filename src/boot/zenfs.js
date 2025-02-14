import { defineBoot } from '#q-app/wrappers'
import { configureSingle, fs } from '@zenfs/core'
// import { exists, writeFile } from '@zenfs/core/promises'
import { IndexedDB } from '@zenfs/dom'

await configureSingle({ backend: IndexedDB })

export default defineBoot(async ({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

    console.log("zenfs boot")
    window.fs = fs
    app.config.globalProperties.$fs = fs
    // ^ ^ ^ this will allow you to use this.$fs (for Vue Options API form)
    //       so you won't necessarily have to import axios in each vue file

    // Make storage persistant.
    // See https://web.dev/articles/persistent-storage
    if (navigator.storage && navigator.storage.persist) {
        const isPersisted = await navigator.storage.persisted()
        if (!isPersisted) {
            navigator.storage.persist()
        }
    }
})

export { fs }
