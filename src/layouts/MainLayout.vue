<template>
  <q-layout view="hHr lpr fFr">
    <q-header elevated>
      <q-toolbar>
        <q-btn
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
            <CommentIcon
              :element="currentProject" />
            <span v-if="currentInterview">
              - {{ currentInterview.label }}
            </span>
          </span>
        </q-toolbar-title>

        <div>
          <q-btn
            v-if="currentProject"
            dense
            flat
            round
            @click="doStoreProject()"
            icon="mdi-content-save">
          </q-btn>
          <q-btn
            dense
            flat
            round
            icon="mdi-account">
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
  import CommentIcon from 'components/CommentIcon.vue'

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

  const { currentInterview, currentProjectId, username } = storeToRefs(istore)

  const currentProject = computed(() => {
      if (currentProjectId.value) {
          return store.getProject(currentProjectId.value)
      } else {
          return null
      }
  })

  const menuList = computed<MenuItem[]>(() => {
      let menu: MenuItem[] = [
          {
              label: 'Home',
              icon: 'mdi-home',
              link: '/home'
          }
      ]

      if (currentProjectId.value) {
          menu.push({
              label: "Specific models",
              icon: 'mdi-semantic-web',
              link: `/project/${currentProjectId.value}`
          })
          menu.push({
              label: "Generic Model",
              icon: 'mdi-table',
              link: `/spreadsheet/${currentProjectId.value}`
          })
      }
      menu = menu.concat([
          {
              label: 'Documentation',
              icon: 'mdi-help-circle-outline',
              href: 'https://github.com/upmt/upmt/wiki'
          },
          {
              label: 'Discussions',
              icon: 'mdi-chat-question-outline',
              href: 'https://github.com/upmt/upmt/discussions'
          },
          {
              label: 'Github',
              icon: 'mdi-github',
              href: 'https://github.com/upmt/upmt'
          },
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

  function doStoreProject () {
      if (currentProjectId.value) {
          const basename = storeProject(currentProjectId.value)
          $q.notify({
              type: 'info',
              message: `Stored as ${basename}`
          })
      }
  }

  onMounted(() => {
      leftDrawerOpen.value = false
      rightDrawerOpen.value = false
  })
</script>
