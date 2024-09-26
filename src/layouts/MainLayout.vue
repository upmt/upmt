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
            <span v-if="currentInterview">
              - {{ currentInterview.label }}
            </span>
          </span>
        </q-toolbar-title>

        <q-btn
          dense
          flat
          round
          icon="mdi-account"
          @click="toggleRightDrawer" />
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
        Right drawer content
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { RouteLocationRaw } from 'vue-router'
import { useProjectStore } from 'stores/projectStore'
import { useInterfaceStore } from 'stores/interface'

const istore = useInterfaceStore()

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

const store = useProjectStore()

const { currentInterview, currentProject } = storeToRefs(istore)

const menuList = computed<MenuItem[]>(() => [
    {
        label: 'Home',
        icon: 'mdi-home',
        link: '/home',
        separator: true
    },
    ...store.getAllProjects().map(p => {
        return {
            label: p.name,
            icon: 'mdi-semantic-web',
            link: `/project/${p.id}`
        }
    }),
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

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
function toggleRightDrawer () {
    rightDrawerOpen.value = !rightDrawerOpen.value
}
onMounted(() => {
    leftDrawerOpen.value = false
    rightDrawerOpen.value = false
})
</script>
