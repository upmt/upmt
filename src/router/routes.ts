import { RouteRecordRaw } from 'vue-router'
import DebugPage from 'pages/DebugPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'home', redirect: '/' },
      { path: 'project/:id', name: 'project', component: () => import('pages/ProjectPage.vue'), props: true },
      { path: 'init', name: 'init', component: () => import('pages/InitPage.vue'), props: { source: './OPEVA-G1.upmt' } },
      { path: 'example', name: 'example', component: () => import('pages/InitPage.vue'), props: { source: './assets/example.upmt' } },
      { path: 'debug', name: 'debug', component: DebugPage }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
