import { defineBoot } from '#q-app/wrappers'
import { configure, fs } from '@zenfs/core'
// import { exists, writeFile } from '@zenfs/core/promises'
import { IndexedDB } from '@zenfs/dom'

export default defineBoot(async () => {
    /* In zenfs >= 2.0 Will be:
    await configureSingle({ backend: IndexedDB });
     */
    await configure({
        mounts: {
		    '/': IndexedDB,
	    }
    })
    console.log("zenfs boot configured", fs.mounts)
    window.fs = fs

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
