import { defineStore } from '#q-app/wrappers'
import { createPinia } from 'pinia'
import { createORM } from 'pinia-orm'
import { Router } from 'vue-router'

// See https://github.com/quasarframework/quasar/discussions/12539 ?
/*
 * When adding new properties to stores, you should also
 * extend the `PiniaCustomProperties` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */
declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly router: Router
  }
}

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default defineStore((/* { ssrContext } */) => {
  const pinia = createPinia()
  pinia.use(createORM({ model: { withMeta: true } }))
  return pinia
})
