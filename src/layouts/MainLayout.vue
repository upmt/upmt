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

        <q-toolbar-title>
          UPMT
        </q-toolbar-title>

        <div>Anonymous</div>
        <q-btn
          dense
          flat
          round
          icon="menu"
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
              <q-item clickable v-ripple>
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
import { ref, onMounted } from 'vue'

defineOptions({
  name: 'MainLayout'
})

interface MenuItem {
    label: string
    icon?: string
    link?: string
    action?: object
    separator?: boolean
}
const menuList: MenuItem[] = [
    {
        label: 'Open',
        icon: 'mdi-open',
        link: 'open'
    }
]

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
