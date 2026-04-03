<template>
  <q-layout view="hHr lpr fFr"
            :class="{ 'isExpertMode': isExpertMode }">
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
                   class="q-ml-xl print-hidden"
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
            v-if="isDevelopment"
            class="q-ml-xl"
            outline
            color="info"
            no-caps>
            Development version
          </q-btn>
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
            @click.ctrl.capture.stop="isExpertMode = !isExpertMode"
            aria-label="Login"
            :class="{ 'anonymous': isAnonymous }"
            :icon="isExpertMode ? 'mdi-account-cowboy-hat' : 'mdi-account'">
            <q-menu fit>
              <q-list style="min-width: 240px;">
                <q-item>
                  <q-item-section no-wrap class="row"><span>Identified as <em>{{username}}</em></span></q-item-section>
                </q-item>
                <q-separator />
                <q-item
                  clickable>
                  <q-item-section>Modify username</q-item-section>
                  <q-popup-edit
                    v-model="username"
                    auto-save
                    v-slot="scope">
                    <q-input v-model="scope.value"
                     @focus="($event.target as HTMLInputElement).select()"
                             dense autofocus @keyup.enter="scope.set" />
                  </q-popup-edit>
                </q-item>
                <q-item
                  clickable
                  v-close-popup
                  @click="leftDrawerOpen = false ; vueTour.startTour()"
                  >
                  <q-item-section>Take a tour of the interface</q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-close-popup
                  href="https://github.com/upmt/upmt/wiki/%CE%BCPMT-documentation"
                  target="web"
                  >
                  <q-item-section>Documentation</q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-close-popup
                  @click="about()"
                  >
                  <q-item-section>About μPMT</q-item-section>
                </q-item>

              </q-list>
            </q-menu>
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
              @click="leftDrawerOpen = false"
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

    <VTour :steps="tourSteps" highlight ref="vueTour" />

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
  import { VTour } from '@globalhive/vuejs-tour'
  import './vjt-style.css'
  import axios from 'axios'

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
      username,
      isExpertMode
  } = storeToRefs(istore)

  const vueTour = ref()

  const currentProject = computed(() => {
      if (currentProjectId.value) {
          return store.getProject(currentProjectId.value)
      } else {
          return null
      }
  })

  const isDevelopment = computed(() => document.location.hostname == 'localhost'
      || document.location.pathname.includes('/upmt/dev'))

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
              label: "Episode analysis",
              icon: 'mdi-table',
              link: `/episodes/${currentProjectId.value}`
          })
          menu.push({
              label: "Synchronic graph",
              icon: 'mdi-graph',
              link: `/synchronic-graph/${currentProjectId.value}`
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
      if (isExpertMode.value) {
          menu = menu.concat([
              {
                  label: 'Debug',
                  icon: 'mdi-eye',
                  link: '/debug'
              }
              ])
       }
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

  function about() {
      let message = 'Development version'
      void axios.get('./version.txt').then((response) => {
          if (response.data.startsWith('VERSION')) {
              // We are reasonably sure we have a VERSION file.
              const [_, version, date] = response.data.replace(/[^a-z0-9_: .+-]/gim, "").split()
              message = `Version <strong>${version}</strong>\nDate <strong>${date}</strong>`
          }
      }).finally(() => {
          $q.dialog({
              title: 'About μPMT...',
              message: `<p><strong>μPMT</strong> - micro Phenomenology Modelling Tool</p>\n<p>${message}</p>`,
              html: true
          })
              .onDismiss(() => {
                  // console.log('I am triggered on both OK and Cancel')
              })
      })
  }

  onMounted(() => {
      leftDrawerOpen.value = false
      rightDrawerOpen.value = false
      // From https://github.com/quasarframework/quasar/blob/dev/docs/src/layouts/doc-layout/DocSearch.vue#L296
      window.addEventListener('keydown', onGlobalKeydown)
  })

  const tourSteps = [
      {
          target: 'button[aria-label="Menu"]',
          content: 'The hamburger menu gives access to multiple views'
      },
      {
          target: '.app-title',
          content: 'The toolbar shows the loaded package title, and the current interview title if an interview is active'
      },
      {
          target: 'button[aria-label="Login"]',
          content: 'This icon allows you to set your name so that authorship information is correctly recorded.'
      },
      {
          target: '.upmt-interviews',
          content: 'This place lists the defined interviews',
      },
      {
          target: '.detachedmodels-container',
          content: 'Detached models allow to define synchronic model element that are not linked to a given interview.',
      },
      {
          target: '.genericcategories-container',
          content: 'The generic model is dynamically generated by adding all defined synchronic models (linked to interviews or detached models).',
      },
  ]
</script>
<style scoped>
.anonymous {
    color: red;
}
.needs-save {
}
</style>
