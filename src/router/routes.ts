import { RouteRecordRaw } from 'vue-router'
import DebugPage from 'pages/DebugPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: '', name: 'init', component: () => import('pages/IndexPage.vue'), props: { filename: './OPEVA-G1.upmt' } },
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
