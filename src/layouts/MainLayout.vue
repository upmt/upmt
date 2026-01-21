<template>
  <q-layout view="hHr lpr fFr">
    <q-header elevated>
      <q-toolbar>
        <router-link
          to="/">
          <q-btn
            flat
            class="text-white print-hidden"
            dense
            round
            icon="mdi-home-outline"
            aria-label="Home"
            />
        </router-link>
        <q-btn
          class="print-hidden"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          />

        <q-toolbar-title
          class="app-title">
          μPMT

          |

          <span
            v-if="currentProject"
            class="context">
            {{ currentProject.name }}
            <NoteIcon
              :element="currentProject" />
            <span v-if="currentInterview">
              - Interview {{ currentInterview.label }}
              <NoteIcon
                :element="currentInterview" />
            </span>
            <q-btn v-if="isModified"
                   class="q-ml-xl"
                   outline
                   @click="doStoreProject()"
                   color="warning"
                   no-caps>
              Modified - Click here to save
            </q-btn>
          </span>
        </q-toolbar-title>

        <div
          class="print-hidden"
          >
          <q-btn
            v-if="currentProject"
            dense
            flat
            round
            :class="{ 'needs-save': isModified }"
            @click="doStoreProject()"
            icon="mdi-content-save">
            <q-tooltip
              v-if="isModified">
              Data has been modified. Click to save it in the browser storage.
            </q-tooltip>
          </q-btn>
          <q-btn
            dense
            flat
            round
            :class="{ 'anonymous': isAnonymous }"
            icon="mdi-account">
            <q-tooltip
              v-if="isAnonymous">
              Click and enter a username
            </q-tooltip>
            <q-popup-edit
              v-model="username"
              auto-save
              v-slot="scope">
              <q-input v-model="scope.value"
                     @focus="($event.target as HTMLInputElement).select()"
                       dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-btn>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      overlay
      bordered
      >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(item, index) in menuList" :key="index">

            <q-item
              clickable
              v-ripple
              :to="item.link"
              :href="item.href"
              :target="item.href ? 'web' : undefined"
              >
              <q-item-section avatar v-if="item.icon">
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>
                {{ item.label }}
              </q-item-section>
            </q-item>

            <q-separator :key="'sep' + index" v-if="item.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      bordered
      side="right"
      >
      <q-scroll-area class="fit">
        <q-form>
          <q-input v-model="username"
                   autofocus />
        </q-form>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">

  import { ref, computed, onMounted } from 'vue'
  import { useQuasar } from 'quasar'
  import { storeToRefs } from 'pinia'
  import { RouteLocationRaw } from 'vue-router'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import { storeProject } from 'stores/storage'
  import NoteIcon from 'components/NoteIcon.vue'

  defineOptions({
      name: 'MainLayout'
  })

  interface MenuItem {
      label: string
      icon?: string
      link?: RouteLocationRaw
      action?: object
      separator?: boolean
      href?: string
  }

  const $q = useQuasar()

  const store = useProjectStore()

  const istore = useInterfaceStore()

  const {
      currentInterview,
      currentProjectId,
      isModified,
      username
  } = storeToRefs(istore)

  const currentProject = computed(() => {
      if (currentProjectId.value) {
          return store.getProject(currentProjectId.value)
      } else {
          return null
      }
  })

  const menuList = computed<MenuItem[]>(() => {
      let menu: MenuItem[] = [
      ]

      if (currentProjectId.value) {
          menu.push({
              label: "Project editor",
              icon: 'mdi-semantic-web',
              link: `/project/${currentProjectId.value}`
          })
          menu.push({
              label: "Global diachronic",
              icon: 'mdi-table',
              link: `/spreadsheet/${currentProjectId.value}`
          })
          menu.push({
              label: "Synchronic Models",
              icon: 'mdi-graph',
              link: `/models/${currentProjectId.value}`
          })
          menu.push({
              label: "Specific Synchronic Categories",
              icon: 'mdi-table',
              link: `/specificsynchroniccategories/${currentProjectId.value}`
          })
          menu.push({
              label: "Descriptems",
              icon: 'mdi-format-quote-close-outline',
              link: `/descriptems/${currentProjectId.value}`
          })

      }
      menu = menu.concat([
          {
              label: 'Debug',
              icon: 'mdi-eye',
              link: '/debug'
          }
      ])
      return menu
  })

  const leftDrawerOpen = ref(false)
  const rightDrawerOpen = ref(false)

  function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
  }

  const isAnonymous = computed(() => (username.value == '' || username.value == 'anonymous'))

  function doStoreProject () {
      if (currentProjectId.value) {
          const basename = storeProject(currentProjectId.value)
          istore.setModified(false)
          $q.notify({
              type: 'info',
              message: `Stored as ${basename}`
          })
      }
  }

  function onGlobalKeydown (e: KeyboardEvent) {
      if (e.ctrlKey && e.keyCode === 83 /* S */) {
          e.preventDefault()
          if (isModified.value) {
              doStoreProject()
          }
      }
  }

  onMounted(() => {
      leftDrawerOpen.value = false
      rightDrawerOpen.value = false
      // From https://github.com/quasarframework/quasar/blob/dev/docs/src/layouts/doc-layout/DocSearch.vue#L296
      window.addEventListener('keydown', onGlobalKeydown)
  })
</script>
<style scoped>
.anonymous {
    color: red;
}
.needs-save {
}
</style>
